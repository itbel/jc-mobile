import { Content, Left, Right, Body, StyleProvider, Container, Card, CardItem, Badge, Label } from 'native-base';
import * as React from 'react';
import { Text, View, TextInput } from 'react-native'
import JCButton, { ButtonTypes } from '../../components/Forms/JCButton'
import getTheme from '../../native-base-theme/components';
import { TouchableOpacity } from 'react-native'
import { CreateMessageInput, CreateDirectMessageInput } from '../../src/API'
import * as mutations from '../../src/graphql/mutations';
import * as queries from '../../src/graphql/queries';
import * as subscriptions from '../../src/graphql/subscriptions';
import GRAPHQL_AUTH_MODE from 'aws-amplify-react-native'
import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import ProfileImage from '../../components/ProfileImage/ProfileImage'
import { Editor } from 'react-draft-wysiwyg';
import './react-draft-wysiwyg.css';
//TODO FIGURE OUT WHY THIS DOESN"T WORK
import './MessageBoard.css';
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import JCComponent, { JCState } from '../JCComponent/JCComponent';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CameraRecorder from './CameraRecorder';
const configShowVideo = false
interface Props {
  groupId?: string
  roomId?: string
  route?: any
  navigation?: any
  style: "mini" | "regular" | "course" | "courseResponse"
  recipients?: string[]
  showWordCount?: boolean
  totalWordCount?: number
  inputAt: "top" | "bottom"
}
interface State extends JCState {
  showVideo: boolean
  data: any,
  dataAssignment: any,
  dmAuthors: any,
  created: boolean,
  UserDetails: any,
  textHeight: any,
  editorState: any,
  attachment: string,
  attachmentName: string,
  fileNameWidth: number,
  wordCount: number,
  nextToken: string
}
class MessageBoardImpl extends JCComponent<Props, State> {
  static defaultProps = {
    inputAt: "top"
  }
  constructor(props: Props) {
    super(props);
    this.state = {
      ...super.getInitialState(),
      data: [],
      dataAssignment: [],
      dmAuthors: null,
      created: false,
      UserDetails: null,
      textHeight: 10,
      editorState: EditorState.createEmpty(),
      attachment: null,
      attachmentName: null,
      wordCount: 0,
      showVideo: false
    }
    //    this.bottom = React.createRef();
    this.setInitialData(props)
    const subscription: any = API.graphql({
      query: subscriptions.onCreateMessage,
      variables: { roomId: this.props.groupId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    subscription.subscribe(
      {
        next: async (todoData) => {
          this.getMessages(null)
          /*          console.log({ onCreateMessage: todoData })
                    let temp: any = this.state.data
                    if (temp === null)
                      temp = { items: [] }
                    if (temp.items == null)
                      temp.items = [todoData.value.data.onCreateMessage]
                    else
                      temp.items = [todoData.value.data.onCreateMessage, ...temp.items]
                    this.setState({ data: temp })*/
        }
      });
    const subscription2: any = API.graphql({
      query: subscriptions.onCreateDirectMessage,
      variables: { messageRoomID: this.props.roomId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    subscription2.subscribe(
      {
        next: async (todoData) => {
          this.getDirectMessages(null)
          this.getCourseAssignment()
          /*          console.log({ onCreateDirectMessage2: todoData })
          
                    let temp: any = this.state.data
                    if (temp === null)
                      temp = { items: [] }
                    if (temp.items == null)
                      temp.items = [todoData.value.data.onCreateDirectMessage]
                    else
                      temp.items = [todoData.value.data.onCreateDirectMessage, ...temp.items]
                    this.setState({ data: temp })*/
        }
      });
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props !== prevProps) {
      this.setInitialData(this.props)
    }
  }

  async handleUpload(e: React.ChangeEvent<HTMLInputElement>): Promise<void> {
    const file = e.target.files[0];
    try {
      const user = await Auth.currentCredentials();
      const userId = user.identityId
      const fn = 'messages/uploads/' + 'jc-upload-' + new Date().getTime() + '-' + file.name
      const upload = await Storage.put(fn, file, {
        level: 'protected',
        contentType: file.type,
        identityId: userId
      })
      if (upload)
        this.setState({ attachment: fn })
    } catch (e) {
      console.error(e)
    }
  }
  getMessages(nextToken: string) {
    const messagesByRoom: any = API.graphql({
      query: queries.messagesByRoom,
      variables: { roomId: this.props.groupId, sortDirection: "DESC", limit: 10, nextToken: nextToken },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    const processMessages = (json) => {

      if (json.data.messagesByRoom)
        if (nextToken)
          this.setState({
            created: true,
            data: [...this.state.data, ...json.data.messagesByRoom.items],
            nextToken: json.data.messagesByRoom.nextToken
          })
        else
          this.setState({
            created: true,
            data: json.data.messagesByRoom.items,
            nextToken: json.data.messagesByRoom.nextToken
          })
    }
    messagesByRoom.then(processMessages).catch(processMessages)
  }

  getDirectMessages(nextToken: string) {
    const directMessagesByRoom: any = API.graphql({
      query: queries.directMessagesByRoom,
      variables: { messageRoomID: this.props.roomId, sortDirection: "DESC", limit: 100, nextToken: nextToken },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    const processMessages = (json) => {

      if (json.data.directMessagesByRoom)
        if (nextToken)
          this.setState({
            created: true,
            data: [...this.state.data, ...json.data.directMessagesByRoom.items],
            nextToken: json.data.directMessagesByRoom.nextToken

          })
        else
          this.setState({
            created: true,
            data: json.data.directMessagesByRoom.items,
            nextToken: json.data.directMessagesByRoom.nextToken

          })
    }


    directMessagesByRoom.then(processMessages).catch(processMessages)

  }
  getCourseAssignment() {
    if (this.props.style == "courseResponse") {
      const directMessagesByRoom: any = API.graphql({
        query: queries.directMessagesByRoom,
        variables: { messageRoomID: this.props.roomId, sortDirection: "ASC", limit: 1 },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });
      const processAssignment = (json) => {

        if (json.data.directMessagesByRoom)
          this.setState({
            dataAssignment: json.data.directMessagesByRoom.items,

          })
      }
      directMessagesByRoom.then(processAssignment).catch(processAssignment)
    }
  }
  async setInitialData(props) {
    const user = await Auth.currentAuthenticatedUser();
    try {
      const getUser: any = await API.graphql(graphqlOperation(queries.getUser, { id: user['username'] }));
      this.setState({
        UserDetails: getUser.data.getUser
      })
      // console.log(this.state.UserDetails)
    }
    catch (e) {
      console.log({ Error: e })
    }
    if (props.route.params.create === "true" || props.route.params.create === true) {
      this.setState({ created: false })
    }
    else if (this.props.groupId) {
      this.getMessages(null)
    } else if (this.props.roomId) {
      this.getDirectMessages(null)
      this.getCourseAssignment()
    }
  }

  renderFileDownloadBadge(item): React.ReactNode {
    return <TouchableOpacity onPress={() => this.getAttachment(item.attachment)}>
      <Badge style={{ backgroundColor: '#EFF1F5', marginRight: 10, marginTop: 5, height: 30 }} >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          {this.renderFileIcon(item.attachment)}
          <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>{item.attachmentName ? item.attachmentName : this.processFileName(item.attachment)}</Text>
        </View>
      </Badge>
    </TouchableOpacity>
  }

  renderFileUploadBadge(item): React.ReactNode {
    return <View>
      <Badge style={{ backgroundColor: '#EFF1F5', marginRight: 10, marginTop: 5, height: 30 }} >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          {this.renderFileIcon(item.attachment)}
          <TextInput placeholder='custom filename (optional)' style={{ fontSize: 14, paddingHorizontal: 10, width: 200 }} value={this.state.attachmentName} onChange={e => this.setState({ attachmentName: e.nativeEvent.text })}></TextInput>
          <TouchableOpacity onPress={() => this.setState({ attachment: null, attachmentName: null })}>
            <AntDesign name="close" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </Badge>
      <Label style={{ fontSize: 12, marginLeft: 10 }}>{this.processFileName(item.attachment)}</Label>
    </View>
  }

  renderFileIcon(filePath: string): React.ReactNode {
    const lastDot = filePath.lastIndexOf('.');
    const ext = filePath.substring(lastDot + 1);

    if (ext === 'pdf' || ext === 'PDF') {
      return <FontAwesome5 name="file-pdf" size={22} color="black" />
    }

    if (ext === 'doc' || ext === 'docx') {
      return <FontAwesome5 name="file-word" size={22} color="black" />
    }

    if (ext === 'ppt' || ext === 'pptx') {
      return <FontAwesome5 name="file-powerpoint" size={22} color="black" />
    }

    if (ext === 'xls' || ext === 'xlsx') {
      return <FontAwesome5 name="file-excel" size={22} color="black" />
    }

    return null
  }

  processFileName(filePath: string): string {
    const urlStripped = filePath.split('messages/uploads/')[1]
    const lastDash = urlStripped.lastIndexOf('-');
    const fileName = urlStripped.substring(lastDash + 1);
    return fileName
  }

  async getAttachment(filePath: string): Promise<void> {
    try {

      const user = await Auth.currentCredentials();
      const userId = user.identityId

      const res = await Storage.get(filePath, {
        level: 'protected',
        identityId: userId
      })

      window.open(res as string, '_blank', 'noopener noreferrer')

    } catch (e) {
      console.error(e)
    }
  }

  updateEditorInput(value: any) {
    const str = value.getCurrentContent().getPlainText(' ')
    const wordArray = str.match(/\S+/g);  // matches words according to whitespace
    this.setState({
      editorState: value,
      wordCount: wordArray ? wordArray.length : 0
    })
    //    this.setState({ editorState: value })
  }
  convertCommentFromJSONToHTML = (text) => {
    try {
      return stateToHTML(convertFromRaw(JSON.parse(text)))
    } catch (e) {
      console.log({ Error: e })
      return "<div>" + this.props.style == "course" || this.props.style == "courseResponse" ? "Assignment/Response" : "Message" + " Can't Be Displayed</div>"
    }
  }

  saveMessage() {

    if (!this.state.editorState.getCurrentContent().hasText()) {
      return
    }

    const message = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
    Auth.currentAuthenticatedUser().then((user: any) => {
      if (this.props.groupId) {
        const z: CreateMessageInput = {
          id: Date.now().toString(),
          content: message,
          when: Date.now().toString(),
          attachment: this.state.attachment,
          attachmentName: this.state.attachmentName,
          roomId: this.props.groupId,
          userId: user.username,
          owner: user.username,
          //authorOrgId: "0"
        }
        const createMessage: any = API.graphql({
          query: mutations.createMessage,
          variables: { input: z },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });

        createMessage.then((json: any) => {
          console.log({ "Success mutations.createMessage": json });
          this.setState({

            editorState: EditorState.createEmpty(),
            attachmentName: null,
            attachment: null
          })
        }).catch((err: any) => {
          console.log({ "Error mutations.createMessage": err });
          if (err.data.createMessage) {
            this.setState({
              editorState: EditorState.createEmpty(),
              attachmentName: null,
              attachment: null
            })
          }
        })
      }

      else if (this.props.roomId) {
        const dm: CreateDirectMessageInput = {
          id: Date.now().toString(),
          userId: user.username,
          content: message,
          attachment: this.state.attachment,
          attachmentName: this.state.attachmentName,
          when: Date.now().toString(),
          messageRoomID: this.props.roomId,
          recipients: this.props.recipients ? this.props.recipients : null
        }
        const createDirectMessage: any = API.graphql({
          query: mutations.createDirectMessage,
          variables: { input: dm },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });

        createDirectMessage.then((json: any) => {
          console.log({ "Success mutations.createDirectMessage ": json });
          this.setState({
            editorState: EditorState.createEmpty(),
            attachmentName: null,
            attachment: null
          })
        }).catch((err: any) => {
          console.log({ "Error mutations.createDirectMessage ": err });
          if (err.data.createDirectMessage) {
            this.setState({
              editorState: EditorState.createEmpty(),
              attachmentName: null,
              attachment: null
            })
          }
        })
      }
    })
  }
  showVideo() {
    this.setState({ showVideo: !this.state.showVideo })
  }
  showProfile(id) {
    console.log("Navigate to profileScreen")
    this.props.navigation.push("ProfileScreen", { id: id, create: false });
  }
  renderWordCount() {
    return this.props.showWordCount ?
      <Text style={this.props.style == "course" ?
        this.styles.style.courseWordCount
        : this.styles.style.courseWordCountSmall}>Word count: {this.state.wordCount}/{this.props.totalWordCount}</Text>
      : null

  }
  renderMessageInput() {
    return (
      <Content style={{ marginBottom: 40 }}>
        {
          this.state.UserDetails != null && (this.props.style == "regular" || this.props.style == "course" || this.props.style == "courseResponse") ?
            <ProfileImage size="small" user={this.state.UserDetails}></ProfileImage>
            : null
        }
        {
          this.state.showVideo ?
            <CameraRecorder></CameraRecorder> : <>
              <Editor
                placeholder={this.props.style == "course" ?
                  "Write Assignment..." :
                  this.props.style == "courseResponse" ?
                    "Write a response...." : "Write a message..."}
                editorState={this.state.editorState}
                toolbarClassName="customToolbar"
                wrapperClassName={this.props.style == "regular" || this.props.style == "course" ? "customWrapperSendmessage" : this.props.style == "courseResponse" ? "customWrapperSendmessageCourse" : "customWrapperSendmessageMini"}
                editorClassName="customEditorSendmessage"
                onEditorStateChange={(z) => { this.updateEditorInput(z) }}

                toolbar={{
                  options: ['inline', 'list', 'emoji'],
                  inline: {
                    options: ['bold', 'italic', 'underline']
                  },
                  list: {
                    options: ['unordered', 'ordered']
                  },
                  emoji: {
                    popupClassName: "customEmojiModal"
                  }
                }}
              />
              {this.renderWordCount()}
            </>
        }
        <View
          style={
            this.props.style == "regular" || this.props.style == "courseResponse" ? this.styles.style.courseDetailJCButtonRegular : this.props.style == "course" ? this.styles.style.courseDetailJCButtonAssignments : this.styles.style.courseDetailJCButtonMini
          }>


          {this.state.attachment ? this.renderFileUploadBadge(this.state) : null}
          {configShowVideo ? <JCButton
            buttonType={this.props.style == "regular" || this.props.style == "course" || this.props.style == "courseResponse" ? ButtonTypes.SolidRightJustified : ButtonTypes.SolidRightJustifiedMini}
            onPress={() => { this.showVideo() }} >{this.props.style == "course" || this.state.showVideo ? "Text" : "Video"}</JCButton> : null}
          <View style={this.styles.style.courseMessageBoardButtonsView}>
            <JCButton buttonType={ButtonTypes.SolidRightJustifiedTopMini} onPress={() => { null }}><AntDesign name="clouduploado" size={16} color="white" style={{ marginRight: 5 }} />Share a file</JCButton>
            <input multiple={false} style={{ cursor: 'pointer', width: '100%', height: '100%', position: "absolute", top: "0px", right: "0px", opacity: "0" }} type="file" accept='.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx' onChange={(e) => this.handleUpload(e)} />
          </View>
          <JCButton
            buttonType={this.props.style == "regular" || this.props.style == "course" || this.props.style == "courseResponse" ? ButtonTypes.SolidRightJustified : ButtonTypes.SolidRightJustifiedMini}
            onPress={() => { this.saveMessage() }} >{this.props.style == "course" || this.props.style == "courseResponse" ? "Save" : "Post"}</JCButton>

        </View>

      </Content>
    )
  }
  renderDirectMessage(item: any, index: number) {
    if (!item?.author) {
      return null
    }
    return (
      <Card key={index} style={{ borderRadius: 10, minHeight: 50, marginBottom: 35, borderColor: "#ffffff" }}>
        <CardItem style={this.styles.style.eventPageMessageBoard}>
          <Left style={this.styles.style.eventPageMessageBoardLeft}>
            <TouchableOpacity key={item.id} onPress={() => { this.showProfile(item.author.id) }}>
              <ProfileImage size="small2" user={item.author?.id ?? null}></ProfileImage>
            </TouchableOpacity>
            <Body>
              <Text style={this.styles.style.groupFormName}>
                {item.author != null ? item.author.given_name : null} {item.author != null ? item.author.family_name : null}
              </Text>
              <Text style={this.styles.style.groupFormRole}>
                {item.author != null ? item.author.currentRole : null}
              </Text>
            </Body>
          </Left>
          <Right>
            <Text style={this.styles.style.groupFormDate}>{(new Date(parseInt(item.when, 10))).toLocaleString()}</Text>
          </Right>
        </CardItem>
        <CardItem style={this.styles.style.eventPageMessageBoardInnerCard}>

          <div id="comment-div">
            <div dangerouslySetInnerHTML={{ __html: this.convertCommentFromJSONToHTML(item.content) }}></div>
          </div>

        </CardItem>
        {item.attachment ?
          <CardItem>
            {this.renderFileDownloadBadge(item)}
          </CardItem> : null}

      </Card>
    )

  }
  renderMoreMessageButton() {
    return (
      this.state.nextToken ?
        <TouchableOpacity onPress={() => {
          if (this.props.groupId)
            this.loadMoreMessages()
          if (this.props.roomId)
            this.loadMoreDirectMessages()
        }}>
          <Card style={{ borderRadius: 10, minHeight: 50, marginBottom: 35, borderColor: "#ffffff" }} >
            <CardItem><Text>Load More</Text></CardItem>
          </Card>
        </TouchableOpacity> : null
    )
  }
  renderAssignment() {
    if (this.state.dataAssignment.length > 0) {
      return this.renderDirectMessage(this.state.dataAssignment[0], -1)
    }
  }
  renderMessagesInOrder() {
    const z = this.state.data?.map((item: any, index: any) => {
      if (this.props.style == "courseResponse" && this.state.dataAssignment.length > 0) {
        if (item.id == this.state.dataAssignment[0].id) {
          return null
        }
      }
      if (this.props.groupId)
        return this.renderMessage(item, index)
      else if (this.props.roomId)
        return this.renderDirectMessage(item, index)
    })

    if (this.props.inputAt == "bottom")
      return z.reverse()
    else
      return z
  }
  renderMessages() {
    return (
      <>
        {this.props.style == "courseResponse" && this.renderAssignment()}
        {this.props.inputAt == "bottom" && this.renderMoreMessageButton()}
        {this.renderMessagesInOrder()}
        {this.props.inputAt == "top" && this.renderMoreMessageButton()}
      </>
    )
  }

  loadMoreDirectMessages() {
    console.log({ "LOADING MORE": this.state.nextToken })
    this.getDirectMessages(this.state.nextToken)

  }
  loadMoreMessages() {
    console.log({ "LOADING MORE": this.state.nextToken })
    this.getMessages(this.state.nextToken)

  }
  renderMessage(item, index: number) {
    return (
      <Card key={index} style={{ borderRadius: 10, minHeight: 50, marginBottom: 35, borderColor: "#ffffff" }}>
        {this.props.style == "regular" || this.props.style == "course" || this.props.style == "courseResponse" ?
          <CardItem style={this.styles.style.eventPageMessageBoard}>
            <Left style={this.styles.style.eventPageMessageBoardLeft}>
              <TouchableOpacity key={item.id} onPress={() => { this.showProfile(item.author.id) }}>
                <ProfileImage size="small2" user={item.owner ? item.owner : null}></ProfileImage>
              </TouchableOpacity>
              <Body>
                <Text style={this.styles.style.groupFormName}>
                  {item.author != null ? item.author.given_name : null} {item.author != null ? item.author.family_name : null}
                </Text>
                <Text style={this.styles.style.groupFormRole}>
                  {item.author != null ? item.author.currentRole : null}
                </Text>
              </Body>
            </Left>
            <Right>
              <Text style={this.styles.style.groupFormDate}>{(new Date(parseInt(item.when, 10))).toLocaleString()}</Text>
            </Right>
          </CardItem> :
          <CardItem style={this.styles.style.coursePageMessageBoard}>
            <Left style={this.styles.style.coursePageMessageBoardLeftMini}>
              <TouchableOpacity key={item.id} onPress={() => { this.showProfile(item.author.id) }}>
                <ProfileImage size="small2" user={item.owner ? item.owner : null}></ProfileImage>
              </TouchableOpacity>
            </Left>
            <Right style={{ flexDirection: "column", flex: 7, alignItems: "flex-start" }}>
              <Text style={this.styles.style.courseFormName}>
                {item.author != null ? item.author.given_name : null} {item.author != null ? item.author.family_name : null}
              </Text>
              {/* <Text style={this.styles.style.groupFormRole}>
      {item.author != null ? item.author.currentRole : null}
    </Text> */}
              <Text style={this.styles.style.groupFormDate}>{(new Date(parseInt(item.when, 10))).toLocaleString()}</Text>
            </Right>
          </CardItem>
        }
        <CardItem style={this.styles.style.eventPageMessageBoardInnerCard}>

          <div id="comment-div">
            <div dangerouslySetInnerHTML={{ __html: this.convertCommentFromJSONToHTML(item.content) }}></div>
          </div>
        </CardItem>
        {item.attachment ? <CardItem>
          {this.renderFileDownloadBadge(item)}
        </CardItem> : null}
      </Card>
    )
  }



  render() {

    if (this.props.groupId && this.props.roomId) {
      console.error('groupId and roomId cannot be used together')
      return null
    }

    return (
      (this.state.created) ?
        <StyleProvider style={getTheme()}>
          <Container style={this.props.style == "regular" || this.props.style == "course" || this.props.style == "courseResponse" ? this.styles.style.messageBoardContainerFullSize : this.styles.style.messageBoardContainer} >
            {this.props.inputAt == "top" && this.renderMessageInput()}
            {this.renderMessages()}
            {this.props.inputAt == "bottom" && this.renderMessageInput()}
          </Container>
        </StyleProvider >
        : null
    )
  }
}
export default function MessageBoard(props: Props): JSX.Element {
  const route = useRoute();
  const navigation = useNavigation()
  return <MessageBoardImpl {...props} navigation={navigation} route={route} />;
}