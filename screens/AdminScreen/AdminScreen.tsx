﻿import { StackNavigationProp } from "@react-navigation/stack"
import { MapData } from "components/MyGroups/MyGroups"
import { Container, Content, Text } from "native-base"
import React from "react"
import Header from "../../components/Header/Header"
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin"
import JCComponent, { JCState } from "../../components/JCComponent/JCComponent"
import { UserContext } from "../../screens/HomeScreen/UserContext"

interface Props {
  navigation: StackNavigationProp<any, any>
  route: any
}
interface State extends JCState {
  showMap: boolean
  mapData: MapData[]
  showMy: boolean
}

export default class AdminScreen extends JCComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      ...super.getInitialState(),
      mapData: [],
      showMap: false,
      showMy: this.props.route.params ? this.props.route.params.mine : false,
    }
  }
  static UserConsumer = UserContext.Consumer

  render(): React.ReactNode {
    console.log("AdminScreen")
    return (
      <AdminScreen.UserConsumer>
        {({ userState, userActions }) => {
          if (!userState) return null
          return (
            <Container testID="events">
              <Header title="Jesus Collective" navigation={this.props.navigation} />

              <HeaderAdmin title="Jesus Collective" navigation={this.props.navigation} />
              {userActions.isMemberOf("admin") ? (
                <Content>
                  <Container style={this.styles.style.eventsScreenMainContainer}>
                    <Container style={this.styles.style.eventsScreenLeftContainer}>
                      <Text>Admin</Text>
                    </Container>
                    {/*

            <Container style={style.eventsScreenRightContainer}>
              <MyPeople wrap={false} navigation={this.props.navigation} onDataload={(mapData) => { this.mergeMapData(mapData) }}></MyPeople>
              <MyConversations navigation={this.props.navigation}> </MyConversations>
              <Container ></Container>
            </Container>*/}
                  </Container>
                </Content>
              ) : (
                <Content>
                  <Container style={this.styles.style.eventsScreenMainContainer}>
                    <Container style={this.styles.style.eventsScreenLeftContainer}>
                      <Text>You must be an admin to see this screen</Text>
                    </Container>
                  </Container>
                </Content>
              )}
            </Container>
          )
        }}
      </AdminScreen.UserConsumer>
    )
  }
}
