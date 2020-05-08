import { Platform, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native'
const mainColor = '#ffffff';

export default EStyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColor,
    },
    groupNameInput: {
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 5,
        padding: 3,
        flex: 0, 
        fontSize: 30,
        lineHeight: 36,
        fontWeight: "bold",
        fontFamily: "Helvetica Neue, sans-serif"
    },
    groupDescriptionInput: {
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 5,
        padding: 3,
        flex: 0,
        minHeight: 100,
        fontSize: 16,
        lineHeight: 23,
        fontWeight: "normal",
        fontFamily: "Helvetica Neue, sans-serif"

    },
    textInput: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 5,
        padding: 3,
    },
    tag: {
        backgroundColor: '#fff'
    },
    tagText: {
        color: "#000000"
    },

    fontRegular: {
        fontFamily: "Graphik-Regular-App"
    },
    font: {
        fontFamily: 'Graphik-Regular-App', fontSize: 16
    },
    fontGroupNameDetailPage: {
        fontSize: 30,
        lineHeight: 36,
        color: "#333333",
        fontFamily: "Helvetica Neue, sans-serif"
    },
    saveProfileButton: {
        backgroundColor: "#F0493E", textTransform: "capitalize"
    },
    saveProfileButtonText: {
        fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 16, lineHeight: 24, display: "flex", alignItems: "center", textAlign: "center", letterSpacing: -0.3, color: "#FFFFFF", textTransform: null
    },

    fontFormProfileImageText: {
        position: "absolute", left: 10, top: 200, fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 22, textAlign: "center", letterSpacing: -0.3, color: "#FFFFFF", width: 230
    },
    fontFormMandatory: {
        fontFamily: 'Graphik-Regular-App', fontSize: 26, lineHeight: 33, color: "#F0493E"
    },
    fontFormName: {
        fontFamily: 'Graphik-Regular-App', fontSize: 30, lineHeight: 36, textAlign: "center", color: "#333333"
    },
    fontFormText: {
        fontFamily: 'Graphik-Regular-App', fontSize: 18, lineHeight: 25, letterSpacing: -0.3, color: "#333333", opacity: 0.7
    },
    fontFormRole: {
        fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 21, textAlign: "center", color: "#333333", opacity: 0.6
    },
    fontFormUserType: {
        fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 16, textAlign: "center", textTransform: "uppercase", color: "#333333"
    },
    fontFormAboutMe: {
        fontFamily: 'Graphik-Regular-App', fontSize: 18, lineHeight: 28, color: "#333333", borderColor: "#dddddd", borderWidth: 1, height: 200, width: 250
    },
    fontFormSmallDarkGrey: {
        fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 16, color: "#333333"
    },
    fontFormSmallInput: {
        fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 25, letterSpacing: -0.3, color: "#333333", width: 250, height: 18, borderWidth: 0, borderColor: "#dddddd"
    },
    fontFormSmallGrey: {
        fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 16, color: "#333333", opacity: 0.5
    },
    fontFormSmallHeader: {
        fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 26, letterSpacing: -0.3, textTransform: "uppercase", color: "#333333"
    },
    fontFormSmall: {
        fontFamily: 'Graphik-Regular-App', fontSize: 12, lineHeight: 21, textTransform: "uppercase", color: "#333333", opacity: 0.5
    },
    fontBold: {
        fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 24
    },
    fontTitle: {
        fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 24, lineHeight: 30, height: 90, color: '#333333'
    },
    fontTitleGroup: {
        fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 24, lineHeight: 30, height: 90, color: '#333333', paddingTop: 29,
    },
    profileFontTitle: {
        fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 20, height: 75
    },
    fontDetailTop: {
        fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 16, color: '#333333', opacity: 0.4, paddingTop: 23
    },
    fontDetailMiddle: {
        fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 22, color: '#333333', opacity: 0.7
    },
    fontDetailBottom: {
        fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 16, color: '#333333', opacity: 0.5
    },
    fontSliderHeader: {
        fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 16, color: '#000000'
    },
    fontSliderButtons: {
        fontFamily: 'Graphik-Bold-App', fontSize: 16, color: '#F0493E', fontWeight: "bold", padding: 10
    },
    fontStartConversation: {
        fontFamily: 'Graphik-Regular-App', fontSize: 16, color: '#F0493E', padding: 5
    },
    fontOrangeButton: {
        fontFamily: 'Graphik-Regular-App', fontSize: 12, color: '#ffffFF', padding: 10
    },
    fontCourseHeaderBold: {
        fontFamily: 'Graphik-Bold-App',
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        color: "#FFFFFF"
    },
    fontResourceHeaderBold: {
        fontFamily: 'Graphik-Bold-App',
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 35,
        alignSelf: "center",
        textAlign: "center",
        color: "#FFFFFF",
        width: "100%"
    },
    fontCourseHeader: {
        fontFamily: 'Graphik-Regular-App',
        fontWeight: "normal",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        color: "#FFFFFF"
    },
    fontCourseHeaderTime: {
        fontFamily: 'Graphik-Regular-App',
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 35,
        textAlign: "center",
        color: "#FFFFFF"
    },
    fontCourseHeaderDescription: {
        fontFamily: 'Graphik-Regular-App',
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 35,
        textAlign: "center",
        color: "#FFFFFF"
    },
    fontResourceHeaderDescription: {
        fontFamily: 'Graphik-Regular-App',
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 35,
        textAlign: "center",
        color: "#FFFFFF",
        width: "100%",
        alignSelf: "center"
    },
    fontConnectWith: {
        fontFamily: 'Graphik-Bold-App',
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 25,
        color: "#000000",
        letterSpacing: -0.3,
        paddingLeft: 20,
    },
    fontConnectWithName: {
        fontFamily: 'Graphik-Bold-App',
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 25,
        color: "#000000",
        letterSpacing: -0.3
    },
    fontConnectWithRole: {
        fontFamily: 'Graphik-Regular-App',
        fontSize: 14,
        lineHeight: 22,
        color: "#000000",
        letterSpacing: -0.3,
        color: "#333333",
        paddingBottom: 9, 
    },
    groupFormName: {
        fontFamily: "Helvetica Neue, sans-serif",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 21,
        color: "#333333"
    },
    groupFormRole: {
        fontFamily: "Helvetica Neue, sans-serif",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 16,
        color: "#333333"
    },
    groupFormDate: {
        fontFamily: "Graphik-Regular-App",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: "#333333",
        opacity: 0.5
    },
    homePageContainers: {
        flex: 70, 
        flexDirection: "column", 
        backgroundColor: "#F9FAFC"
    },
    connectWithTopSectionButton: {
        paddingTop: 30, 
        paddingBottom: 25
    },
    connectWithSliderButton: {
        padding: 0,
        height: 25
    },
    postButton:
    {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: "flex-end",
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        color: "#F0493E",
    },
    postButtonText: {
        color: "#F0493E",
        fontFamily: 'Graphik-Regular-App',
        fontSize: 16,
        padding: 5

    },
    sliderButton:
    {
        // color:'#F0493E'
    },
    flexRow: { 
        flexDirection: 'row' 
    },
    navPagesBackground: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: 'flex-start', 
        background: "#F9FAFC"
    },
    navPagesleftCard: {
        flex: 30, 
        flexDirection: "column", 
        alignContent: 'flex-start', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        paddingLeft: 30, 
        paddingRight: 30, 
        paddingTop: 40, 
        marginLeft: 32, 
        marginRight: 32, 
        marginTop: 30, 
        borderRadius: 4, 
        boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)", 
        border: "none", 
        minHeight: "100%", 
        width: 446
    },
    navPagesleftCardSmallTextLeft: {
        fontSize: 12, 
        lineHeight: 16, 
        fontFamily: 'Helvetica-Neue, sans-serif', 
        color: '#333333', 
        textTransform: "uppercase", 
        flex: 0, 
        alignSelf: "flex-start"
    },
    navPagesleftCardSmallTextRight: {
        fontSize: 12, 
        lineHeight: 16, 
        fontFamily: 'Helvetica-Neue, sans-serif', 
        color: '#979797', 
        textTransform: "uppercase", 
        flex: 0, 
        alignSelf: "flex-end"
    },
    navPagesleftCardOrganizerText: {
        fontFamily: "Helvetica Neue, sans-serif", 
        fontSize: 16, 
        lineHeight: 23, 
        color: "#333333", 
        paddingBottom: 12
    },
    navPagesleftCardMembersText: {
        fontFamily: "Graphik-Bold-App", 
        fontSize: 20, 
        lineHeight: 25, 
        letterSpacing: -0.3, 
        color: "#333333", 
        paddingTop: 48, 
        paddingBottom: 12
    },
    navPagesleftCardNoMembersText: {
        fontFamily: "Graphik-Bold-App", 
        fontSize: 20, 
        lineHeight: 25, 
        letterSpacing: -0.3, 
        color: "#333333", 
        marginBottom: 30
    },
    navPagesleftCardValidationErrorText: {
        fontSize: 12, 
        lineHeight: 16, 
        fontFamily: 'Helvetica-Neue, sans-serif', 
        color: '#F0493E', 
        textTransform: "uppercase", 
        flex: 0, 
        alignSelf: "flex-start"
    },

    // Media Query Desktop Tablet
    '@media (min-width: 350) and (max-width: 768)': {
        connectWithSliderButton: {
          height: 45,
        },

        connectWithTopSectionButton: {
            paddingTop: 50,
            paddingBottom: 35,
            paddingRight: 15
        },
    },

    // Media Query Desktop Large Tablet
    '@media (min-width: 769) and (max-width: 1024)': {
        connectWithTopSectionButton: {
          paddingTop: 50,
          paddingBottom: 35,
          paddingRight: 15
        },
    },
        
    authView: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { left: "40%", width: "40%", top: 100, height: "auto" } :
        { left: "2%", width: "96%", top: "0%", height: "100%" },

    signUpSidebarPanel: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { zIndex: 1, position: "fixed", left: 0, minWidth: 196, width: "25%", height: "100%", top: 0 } :
        { zIndex: 1, position: "relative", left: 0, width: "100%", height: 100 + Constants.statusBarHeight, top: 0 },
    signUpSidebarLogo: { zIndex: 2, position: "absolute", left: 20, width: 156, height: 43, top: Platform.OS === 'web' && Dimensions.get('window').width > 720 ? 20 : 20 + Constants.statusBarHeight },

    signUpSidebarProgress: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { zIndex: 3, position: "fixed", left: 20, width: 20, height: 300, top: "40%" } :
        { zIndex: 3, display: "none", position: "relative", left: 20, width: 20, height: 300, top: "40%" },

    signUpSidebarProgressText1: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { zIndex: 3, position: "absolute", width: "95%", height: "10%", left: "50px", top: "calc(40vh - 18px)", fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" } :
        { zIndex: 3, position: "absolute", width: "50%", height: "10%", left: "65%", top: 20 + Constants.statusBarHeight, fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" },
    signUpSidebarProgressText2: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { zIndex: 3, position: "absolute", width: "95%", height: "10%", left: "50px", top: "calc(40vh + 36px)", fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" } :
        { zIndex: 3, position: "absolute", width: "50%", height: "10%", left: "65%", top: 20 + Constants.statusBarHeight, fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" },
    signUpSidebarProgressText3: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { zIndex: 3, position: "absolute", width: "95%", height: "10%", left: "50px", top: "calc(40vh + 90px)", fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" } :
        { zIndex: 3, position: "absolute", width: "50%", height: "10%", left: "65%", top: 20 + Constants.statusBarHeight, fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" },
    signUpSidebarProgressText4: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { zIndex: 3, position: "absolute", width: "95%", height: "10%", left: "50px", top: "calc(40vh + 144px)", fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" } :
        { zIndex: 3, position: "absolute", width: "50%", height: "10%", left: "65%", top: 20 + Constants.statusBarHeight, fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" },
    signUpSidebarProgressText5: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { zIndex: 3, position: "absolute", width: "95%", height: "10%", left: "50px", top: "calc(40vh + 198px)", fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" } :
        { zIndex: 3, position: "absolute", width: "50%", height: "10%", left: "65%", top: 20 + Constants.statusBarHeight, fontFamily: "Graphik-Bold-App", fontSize: 12, lineHeight: 48, color: "#FFFFFF" },
    signUpSidebarProgressTextView: { zIndex: 3, position: "absolute", width: "100%", height: "100%", left: "0%", top: "0%" },

    signUpSidebarView: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { position: "fixed", width: "25%", height: "100%", left: "0%", top: "0%" } :
        { position: "relative", width: "100%", height: "20%", left: "0%", top: 0 },

    signUpSidebarText: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { zIndex: 3, position: "absolute", width: "80%", height: "10%", left: "10%", top: "40%", fontFamily: "Graphik-Bold-App", fontSize: 20, lineHeight: 30, color: "#FFFFFF" } :
        { display: "none", zIndex: 3, position: "absolute", width: "80%", height: "10%", left: "10%", top: "40%", fontFamily: "Graphik-Bold-App", fontSize: 24, lineHeight: 48, color: "#FFFFFF" },

    signUpProfile: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { position: "absolute", left: "30%", width: "65%", top: 10 } :
        { position: "absolute", left: "2%", width: "96%", top: 100 + Constants.statusBarHeight, height: "100%" },

    signUpScreen1Content: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { position: "absolute", width: "100%" } :
        { position: "absolute", width: "100%", height: "100%", left: 0, top: 0 },
    signUpScreen1PaymentColumn1: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { position: "absolute", left: "35%", width: "25%", top: 100, height: "100%" } :
        {},
    signUpScreen1PaymentColumn2: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { position: "absolute", left: "70%", width: "25%", top: 100, height: "100%" } :
        {},
    signUpScreen1PaymentBody: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { width: "100%", left: 0, top: 0, height: "100%" } :
        { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, flex: 1 },

    fontFormProfileImageButton: {
        backgroundColor: "#F0493E", paddingRight: 10, paddingLeft: 30
    },
    fontFormProfileImageButtonText: {
        fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 12, lineHeight: 12, letterSpacing: -0.3, color: "#FFFFFF"
    },

    fileInputWrapper:
        { left: 20, width: 210, top: 150, overflow: "hidden", position: "absolute" },

    fileInputWrapperBtn: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
        { display: "inline-block", width: 200, height: 40 } :
        {},
    resourcefileInputWrapper:
        { width: "100%", overflow: "hidden", position: "absolute" },
    resourcefileFieldWrapper:
        { alignSelf: "center", top: "5vw", width: "50%", overflow: "hidden", position: "absolute" },

    resourceImageIcon: {
        color: "#aaaaaa"
    }



})
