import HomeScreenRouter from "./HomeScreenRouter"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { navigationRef } from "./NavigationRoot"
import AsyncStorage from "@react-native-community/async-storage"
import React, { Suspense } from "react"
import { Platform } from "react-native"
import { Linking } from "expo"
import { AuthStateData } from "src/types"

const prefix = Linking.makeUrl("/")
console.log({ prefix: prefix })
const linking = {
  prefixes: [
    prefix,
    "https://localhost/",
    "exps://beta.jesuscollective.com/",
    "exps://localhost:19006/",
    "https://localhost:19006/",
    "http://localhost:19006/",
    "https://beta.jesuscollective.com/",
  ],
  config: {
    screens: {
      mainApp: {
        path: "app",
        screens: {
          mainDrawer: {
            path: "",
            screens: {
              HomeScreen: "home",
              GroupScreen: "group/:id/:create",
              GroupsScreen: "groups",
              EventScreen: "event",
              EventsScreen: "events",
              ResourceScreen: "resource",
              ResourcesScreen: "resources",
              OrganizationScreen: "organization",
              OrganizationsScreen: "organizations",
              CourseOverviewScreen: "courseoverview",
              CoursesScreen: "courses",
              CourseHomeScreen: "course",
              CourseDetailScreen: "coursedetail",
              CourseCoachingScreen: "coursecoaching",
              ConversationScreen: "conversation",
              SearchScreen: "search",
              ProfileScreen: "profile",
              ProfilesScreen: "profiles",
              AdminScreen: "admin",
              AdminCRMScreen: "admin-crm",
              AdminCreateProductScreen: "admin-products",
              CoursePaymentScreen: "coursepayment",
              PurchaseConfirmationScreen: "success",
            },
          },
        },
      },
      auth: {
        path: "auth",
        screens: {
          MySignIn: "signin/:email/:fromVerified",
          MySignUp: "signup/:joinedAs",
          MyConfirmSignUp: "confirmsignup/:email",
          MyForgotPassword: "forgotpassword",
          MyRequireNewPassword: "requirenewpassword",
          MyLoading: "loading",
          MyConfirmSignIn: "confirmsignin",
          MyVerifyContact: "verifycontact",
          Payment1: "payment1",
          Payment2: "payment2",
          Payment3: "payment3",
        },
      },
    },
  },
}
interface Props {
  authState?: any
  onStateChange(state: string, data: AuthStateData): void
}
export default function Main(props: Props) {
  // console.log(props)
  console.log("Main")
  const PERSISTENCE_KEY = "NAVIGATION_STATE"
  const [isReady, setIsReady] = React.useState(false)
  const [initialState, setInitialState] = React.useState()

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()
        console.log({ initialUrl: initialUrl })
        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
          const state = savedStateString ? JSON.parse(savedStateString) : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  if (!isReady) {
    return null
  }
  console.log({ initialState: initialState })
  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      linking={linking}
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: "rgb(255, 255, 255)" },
      }}
      onStateChange={(state) => {
        console.log({ "Persistence State": state })
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }}
    >
      <HomeScreenRouter
        onStateChange={props.onStateChange}
        authState={props.authState}
      ></HomeScreenRouter>
    </NavigationContainer>
  )
}