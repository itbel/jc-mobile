import React from "react"
import { Container, Card, CardItem, ListItem, List } from "native-base"

import { Text, Image, Dimensions } from "react-native"
import { ResourceActions, ResourceContext, ResourceState } from "./ResourceContext"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import JCButton, { ButtonTypes } from "../../components/Forms/JCButton"
import EditableText from "../Forms/EditableText"
import JCComponent, { JCState } from "../JCComponent/JCComponent"
import JCModal from "../../components/Forms/JCModal"

interface Props {
  currentResource: number
}

interface State extends JCState {
  showEditorModal: boolean
}

export default class EpisodeCard extends JCComponent<Props, State> {
  static Consumer = ResourceContext.Consumer
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            flexGrow: 0,
            marginBottom: 40,
            marginTop: 30,
            paddingLeft: 10,
            paddingRight: 20,
            height: 30,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              lineHeight: 25,
              fontFamily: "Graphik-Bold-App",
              color: "#333333",
            }}
          >
            More Series
          </Text>
        </Container>
        <Container
          style={{
            width: "100%",
          }}
        >
          {/*state.resourceData.resources.items[state.currentResource].series.items.map(
          (series, index: number) => {
            return (
              <Container style={{ overflow: "scroll" }}>
                <Container style={this.styles.style.resourceContentMoreSeriesRowContainer}>
                  {series.map((series2, index2) => {
                    return this.renderSeriesCard(state, actions, series2, index)
                  })}
                  {this.renderAddSeriesCard(state, actions)}
                </Container>
              </Container>
            )
          }
        )*/}
        </Container>
      </Container>
    )
  }
}