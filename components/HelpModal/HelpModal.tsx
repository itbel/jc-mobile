import { GraphQLResult } from "@aws-amplify/api"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { API, Auth, graphqlOperation } from "aws-amplify"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import JCButton, { ButtonTypes } from "../../components/Forms/JCButton"
import { sendHelpRequest } from "../../src/graphql/mutations"
import HelpModalStyles from "../HelpModal/HelpModalStyles"
interface Props {
  setShow: () => void
}

export default function HelpModal({ setShow }: Props): JSX.Element {
  const [formData, setformData] = useState({
    body: "",
    email: "",
  })
  const [sent, setSent] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setisLoading] = useState(true)
  const [showEmailField, setShowEmailField] = useState(false)
  const sendMessage = async () => {
    const regex = /\S+@\S+\.\S+/

    if (formData.email && regex.test(formData.email)) {
      const variables = { email: formData.email, body: formData.body }
      try {
        const helpRequest = (await API.graphql(
          graphqlOperation(sendHelpRequest, variables)
        )) as GraphQLResult<any>
        const failure = Boolean(helpRequest?.data?.sendHelpRequest?.err)
        if (!failure) {
          setSent(true)
        } else {
          setErrorMsg("An error occurred.\nPlease try again later.")
          setSent(true)
        }
      } catch (err) {
        setErrorMsg("An error occurred.\nPlease try again later.")
        console.log(err)
        setSent(true)
      }
    } else {
      setErrorMsg("An error occurred.\nPlease enter a valid email address")
      setSent(true)
    }
  }

  useEffect(() => {
    const gettingUser = Auth.currentUserInfo() // optimally should get this from user context
    gettingUser
      .then((user) => {
        setformData({ ...formData, email: user.attributes.email })
        setisLoading(false)
      })
      .catch(() => {
        setShowEmailField(true)
        setisLoading(false)
      })
  }, [showEmailField])
  if (isLoading) {
    return (
      <View style={HelpModalStyles.HelpModalContainer}>
        <ActivityIndicator style={{ flex: 1 }} size="large" color="black"></ActivityIndicator>
      </View>
    )
  }
  if (sent) {
    return (
      <View style={HelpModalStyles.HelpModalContainer}>
        {!errorMsg ? (
          <View style={{ flexDirection: "row" }}>
            <Text style={HelpModalStyles.HelpModalHeader}>Message Sent</Text>
            <TouchableOpacity
              onPress={() => setShow()}
              style={{ flexDirection: "row-reverse", flex: 0, padding: 16, zIndex: 9999 }}
            >
              <MaterialCommunityIcons name="close-thick" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ) : null}

        {!errorMsg ? (
          <View>
            <Text style={HelpModalStyles.HelpModalLabel}>
              We will get back to you as soon as we can
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                style={{
                  marginTop: 30,
                  height: 140,
                  width: 140,
                  alignSelf: "center",
                }}
                source={require("../../assets/svg/checkmark-stroke.svg")}
              ></Image>
            </View>
          </View>
        ) : (
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={HelpModalStyles.HelpModalHeader}>Sorry, an error occurred</Text>
              <TouchableOpacity
                onPress={() => setShow()}
                style={{ flexDirection: "row-reverse", flex: 0, padding: 16, zIndex: 9999 }}
              >
                <MaterialCommunityIcons name="close-thick" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={HelpModalStyles.HelpModalLabel}>{errorMsg}</Text>
          </View>
        )}
      </View>
    )
  }
  return (
    <View style={HelpModalStyles.HelpModalContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={HelpModalStyles.HelpModalHeader}>How can we assist?</Text>
        <TouchableOpacity
          onPress={() => setShow()}
          style={{ flexDirection: "row-reverse", flex: 0, padding: 16, zIndex: 9999 }}
        >
          <MaterialCommunityIcons name="close-thick" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {showEmailField ? (
        <TextInput
          autoFocus
          autoCompleteType="email"
          maxLength={320}
          placeholder="Enter your email..."
          keyboardType="email-address"
          style={HelpModalStyles.HelpModalTextArea}
          onChangeText={(email) => setformData({ ...formData, email: email })}
        ></TextInput>
      ) : null}
      <TextInput
        multiline
        numberOfLines={8}
        placeholder="Describe what problems you are experiencing..."
        style={HelpModalStyles.HelpModalTextArea}
        autoCapitalize="sentences"
        autoFocus={!showEmailField}
        keyboardType="default"
        maxLength={1500}
        onChangeText={(text) => setformData({ ...formData, body: text })}
      ></TextInput>
      <JCButton
        buttonType={ButtonTypes.SolidRightJustified}
        enabled={!!formData.body && !!formData.email}
        onPress={async () => {
          await sendMessage()
        }}
      >
        Send
      </JCButton>
    </View>
  )
}
