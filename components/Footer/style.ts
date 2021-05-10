import { Dimensions, Platform } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.create({
  footerContainer: {
    backgroundColor: "#333333",
    padding: 20,
    flex: 0,
    minHeight: 200,
    width: "100%",
    height: 200,
  },
  footerBodyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  footerInnerBodyContainer: {
    minWidth: 400,
    display: "flex",
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  icon: {
    color: "#aaaaaa",
  },
  leftButtons: {
    display: Platform.OS === "web" && Dimensions.get("window").width > 720 ? "none" : "flex",
  },
  footerCenterMenuButtonsWhite: {
    alignItems: "flex-start",
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
    height: 45,
    width: null,
  },
  footerCenterMenuButtons: {
    alignItems: "flex-start",
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
    height: 25,
    width: null,
  },
  footerCenterMenuButtonsTextWhite: {
    fontFamily: "Graphik-Bold-App",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 30,
    marginBottom: 34,
    marginTop: 7,
  },
  footerCenterMenuButtonsText: {
    fontFamily: "Graphik-Bold-App",
    color: "#aaaaaa",
    fontSize: 13,
    fontWeight: "bold",
    marginRight: 15,
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
    width: 110,
  },
  logo: {
    resizeMode: "stretch",
    width: 126,
    height: 33,
    marginRight: 70,
    marginTop: 5,
    marginBottom: 10,
  },
  copyRightText: {
    fontFamily: "Graphik-Regular-App",
    color: "#ffffff",
    fontSize: 13,
  },

  // Media Query Desktop Tablet
  "@media (min-width: 350) and (max-width: 768)": {
    footerBodyContainer: {
      width: "100%",
    },
    footerInnerBodyContainer: {
      minWidth: 250,
    },
    footerCenterMenuButtonsTextWhite: {
      marginTop: 15,
      marginBottom: 15,
      width: 100,
    },
  },

  // Media Query Desktop Large Tablet
  "@media (min-width: 769) and (max-width: 1024)": {
    footerBodyContainer: {
      width: "100%",
    },
    footerInnerBodyContainer: {
      minWidth: 250,
    },
    footerCenterMenuButtonsTextWhite: {
      marginTop: 15,
      marginBottom: 15,
    },
  },
})
