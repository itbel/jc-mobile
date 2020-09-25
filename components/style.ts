import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native'
const mainColor = '#ffffff';

export default class MainStyles {

    constructor() {
        this.update()
    }
    static instance: MainStyles = null
    public static getInstance(): MainStyles {
        if (MainStyles.instance == null) {
            MainStyles.instance = new MainStyles();
        }

        return this.instance;
    }
    style = null
    updateStyles = (obj: any): void => {
        obj.styles.update()
        obj.forceUpdate();
    };
    update(): void {
        this.style = EStyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: mainColor,
            },
            groupMoreCard: { minHeight: 43, alignSelf: "flex-start", alignItems: "center", borderRadius: 4, backgroundColor: "#F0493E", marginTop: 100, padding: '0%' },
            nativeMessageBoardContainer: { display: "inline", overflow: "visible", width: "100%", paddingTop: 30, paddingLeft: 30, paddingRight: 30, marginBottom: 60 },
            mapSelectorView: { position: "fixed", left: 0, top: 0, width: "100%", height: "100%", zIndex: 100, backgroundColor: "#33333366" },
            peopleContainer: { width: "100%", flexDirection: 'column', alignItems: 'flex-start', minHeight: 675, marginTop: 30, borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)" },
            dashboardPrimaryContainer: { display: "block" },
            episodeTitle: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 20, lineHeight: 25, color: "#333333" },
            episodeDescription: { wordBreak: "break-word", fontSize: 14, lineHeight: 22, fontFamily: "Graphik-Regular-App", color: '#333333' },
            seriesTitle: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 22, lineHeight: 30, color: "#333333", paddingBottom: 0 },
            moreSeriesTitle: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 18, lineHeight: 24, color: "#333333", paddingBottom: 0 },
            seriesDescription: { wordBreak: "break-word", fontFamily: "Graphik-Regular-App", fontSize: 14, lineHeight: 22, color: "#333333", opacity: 0.6, paddingBottom: 0 },
            headerSeriesTitle: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 20, lineHeight: 25, color: "#333333", paddingBottom: 0 },
            headerSeriesDescription: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 20, lineHeight: 25, color: "#333333", paddingBottom: 0 },
            headerEpisodeTitle: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 20, lineHeight: 25, color: "#333333", paddingBottom: 0 },
            headerEpisodeDescription: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 20, lineHeight: 25, color: "#333333", paddingBottom: 0 },
            resourceContentEpisodesDescription: { wordBreak: "break-word", fontFamily: "Graphik-Regular-App", fontSize: 20, lineHeight: 25, color: "#333333", paddingBottom: 0 },
            resourceContentEpisodesText: { wordBreak: "break-word", fontFamily: "Graphik-Regular-App", fontSize: 18, lineHeight: 28, color: "#333333", paddingBottom: 0 },
            resourceContentEpisodesDownloadInfo: { wordBreak: "break-word", fontFamily: "Graphik-Regular-App", fontSize: 18, lineHeight: 28, color: "#333333", paddingBottom: 25 },
            whoIsThisForText: { alignSelf: 'flex-start', wordBreak: "break-word", fontFamily: "Graphik-Regular-App", fontSize: 26, lineHeight: 33, color: "#333333", paddingBottom: 20 },
            resourceContentEpisodesEpisodeTitle: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 28, lineHeight: 33, color: "#333333", paddingBottom: 0 },
            resourceContentEpisodesVideoText: { wordBreak: "break-word", fontFamily: "Graphik-Bold-App", fontSize: 20, lineHeight: 25, color: "#333333", paddingBottom: 0 },
            courseHomeFileCard: { width: '90%', borderColor: '#FFFFFF', paddingLeft: 30, paddingRight: 30, boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginTop: 30, paddingTop: 30, paddingBottom: 30 },
            courseHomeUserEditCard: { width: '90%', borderColor: '#FFFFFF', paddingLeft: 30, paddingRight: 30, boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginTop: 30, paddingTop: 30, paddingBottom: 30 },
            courseHomeCoachingCard: { width: '90%', borderColor: '#FFFFFF', paddingLeft: 30, paddingRight: 30, boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginTop: 15, paddingTop: 20, paddingBottom: 20 },
            courseHomeDeleteTriad: { backgroundColor: '#F0493E', width: '20px', marginTop: 10, borderRadius: 5, height: 30, justifyContent: 'center', alignItems: 'center', boxShadow: '0px' },
            courseCoachingCard: { width: '100%', borderColor: '#FFFFFF', paddingLeft: 30, paddingRight: 30, boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginTop: 100, paddingTop: 30, paddingBottom: 30, height: 400 },
            courseDetailLessonCardEdit: { minHeight: "40px", width: "50.5vw", borderColor: '#FFFFFF', paddingTop: 30, paddingRight: 30, paddingBottom: 60, paddingLeft: 30, boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginBottom: 10, marginTop: 10 },
            courseDetailLessonCardNoEdit: { minHeight: "40px", width: "50.5vw", borderColor: '#FFFFFF', paddingTop: 10, paddingRight: 30, paddingBottom: 10, paddingLeft: 30, boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginBottom: 10, marginTop: 10 },
            courseDetailLessonCardCreate: { minHeight: "40px", maxHeight: "80px", width: "50.5vw", borderColor: '#FFFFFF', paddingTop: 30, paddingRight: 30, paddingBottom: 50, paddingLeft: 30, boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginBottom: 30 },
            courseCard:
            {
                minHeight: 330,
                alignSelf: "flex-start",
                padding: '0%',
                paddingLeft: '0.25rem',
                paddingRight: '0.25rem',
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                borderColor: "#ffffff"
            },
            orgCard: {
                minHeight: 330,
                alignSelf: "flex-start",
                padding: '0%',
                paddingLeft: '0.25rem',
                paddingRight: '0.25rem',
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)"
            },
            resourceCard: {
                minHeight: 330,
                alignSelf: "flex-start",
                padding: '0%',
                paddingLeft: '0.25rem',
                paddingRight: '0.25rem',
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                borderStyle: "solid",
                borderColor: "#FFFFFF",
            },
            profileCard: {
                padding: '0%',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                borderStyle: "solid",
                borderColor: "#FFFFFF"
            },
            eventCard: {
                minHeight: 300,
                alignSelf: "flex-start",
                padding: '0%',
                paddingLeft: '0.25rem',
                paddingRight: '0.25rem',
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                borderStyle: "solid",
                borderColor: "#FFFFFF"
            },
            groupCard: {
                height: 365,
                alignSelf: "flex-start",
                padding: '0%',
                paddingLeft: '0.25rem',
                paddingRight: '0.25rem',
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                borderStyle: "solid",
                borderColor: "#FFFFFF"
            },
            conversationCard: {
                minHeight: 50,
                width: "92.5%",
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)"
            },
            messageBoardContainer: {
                display: "inline",
                overflow: "visible",
                width: "100%",
                paddingTop: 0,
                paddingLeft: 0,
                paddingRight: 0,
                marginBottom: 60
            },
            messageBoardContainerFullSize: {
                display: "inline",
                overflow: "visible",
                width: "100%",
                paddingTop: 0,
                paddingLeft: 30,
                paddingRight: 30,
                marginBottom: 60
            },
            groupNameInput: {
                borderColor: 'white',
                borderWidth: 1,
                marginTop: 8,
                borderRadius: 5,
                padding: 3,
                paddingLeft: 0,
                flex: 0,
                fontSize: 30,
                lineHeight: 36,
                fontWeight: "bold",
                fontFamily: "Graphik-Bold-App",
                width: "100%"
            },
            eventNameInput: {
                borderColor: 'white',
                borderWidth: 1,
                marginTop: 8,
                borderRadius: 5,
                padding: 3,
                paddingLeft: 0,
                flex: 0,
                fontSize: 30,
                lineHeight: 36,
                fontWeight: "bold",
                fontFamily: "Graphik-Bold-App",
                width: "100%"
            },
            groupDescriptionInput: {
                borderColor: 'white',
                borderWidth: 1,
                marginTop: 8,
                borderRadius: 5,
                padding: 3,
                paddingLeft: 0,
                flex: 0,
                minHeight: 100,
                fontSize: 16,
                lineHeight: 23,
                fontWeight: "normal",
                fontFamily: "Graphik-Regular-App",
                width: "100%"
            },
            eventDescriptionInput: {
                borderColor: 'white',
                borderWidth: 1,
                marginTop: 8,
                borderRadius: 5,
                padding: 3,
                paddingLeft: 0,
                flex: 0,
                minHeight: 50,
                fontSize: 16,
                lineHeight: 23,
                fontWeight: "normal",
                fontFamily: "Graphik-Regular-App",
                width: "100%",
                marginBottom: 10
            },
            eventDateInput: {
                padding: 3,
                paddingLeft: 0,
                flex: 0,
                fontSize: 14,
                lineHeight: 16,
                fontFamily: "Graphik-bold-App",
                width: "100%",
                marginBottom: 20
            },
            eventEditableURL: {
                borderColor: 'rgba(155, 166, 175, 0.23)',
                borderWidth: 1,
                marginTop: 8,
                borderRadius: 5,
                padding: 6,
                paddingLeft: 10,
                flex: 0,
                fontSize: 16,
                lineHeight: 23,
                fontWeight: "bold",
                fontFamily: "Graphik-Bold-App",
                width: "100%"
            },
            courseEditableURL: {
                borderColor: 'rgba(155, 166, 175, 0.23)',
                borderWidth: 1,
                marginTop: 8,
                borderRadius: 5,
                padding: 6,
                paddingLeft: 10,
                flex: 0,
                fontSize: 16,
                lineHeight: 23,
                fontWeight: "bold",
                fontFamily: "Graphik-Bold-App",
                width: "30%"
            },
            courseDateInput: {
                padding: 3,
                paddingLeft: 0,
                flex: 0,
                fontSize: 14,
                lineHeight: 16,
                fontFamily: "Graphik-bold-App",
                width: "100%",
                marginBottom: 20
            },
            courseDescriptionInput: {
                borderColor: 'white',
                borderWidth: 1,
                marginTop: 8,
                borderRadius: 5,
                padding: 3,
                paddingLeft: 0,
                flex: 0,
                minHeight: 100,
                fontSize: 16,
                lineHeight: 23,
                fontWeight: "normal",
                fontFamily: "Graphik-Regular-App",
                width: "100%"
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
            editableURLText: {
                fontFamily: "Graphik-Bold-App",
                fontSize: 16,
                color: "#ffffff"
            },
            font: {
                fontFamily: 'Graphik-Regular-App',
                fontSize: 16
            },
            fontMyMapOptions: {
                //font family is Helvetica Neue on Figma
                fontSize: 14,
                paddingRight: 10
            },
            fontMyMapLegend: {
                //font family is Helvetica Neue on Figma
                fontSize: 14,
                paddingLeft: 5
            },
            fontMyProfileLeftTop: {
                fontFamily: 'Graphik-Regular-App',
                fontSize: 30,
                lineHeight: 36,
                marginBottom: 18,
                marginTop: 18,
            },
            fontGroupNameDetailPage: {
                fontSize: 30,
                lineHeight: 36,
                color: "#333333",
                fontFamily: "Graphik-Regular-App"
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
                fontFamily: 'Graphik-Bold-App', fontSize: 30, lineHeight: 36, textAlign: "center", color: "#333333", fontWeight: "bold"
            },
            fontFormText: {
                fontFamily: 'Graphik-Regular-App', fontSize: 18, lineHeight: 25, letterSpacing: -0.3, color: "#333333", opacity: 0.7, marginTop: 40
            },
            fontFormText2: {
                fontFamily: 'Graphik-Regular-App', fontSize: 18, lineHeight: 25, letterSpacing: -0.3, color: "#333333", opacity: 0.7, marginTop: 20
            },
            fontFormRole: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 21, textAlign: "center", color: "#333333", opacity: 0.6
            },
            fontFormUserType: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 16, textAlign: "center", textTransform: "uppercase", color: "#333333", marginTop: 18, marginBottom: 18
            },
            fontFormAboutMe: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 28, color: "#333333", borderColor: "#dddddd", borderWidth: 1, height: 40, width: "100%", paddingBottom: 60, paddingLeft: 10
            },
            fontFormSmallDarkGrey: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 26, color: "#333333", paddingTop: 12, width: "100%"
            },
            courseDetailHeading: {
                fontFamily: 'Graphik-Bold-App', fontSize: 20, lineHeight: 26, color: "#333333", paddingTop: 12
            },
            fontFormSmallDarkGreyCourseTopEditable: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 26, color: "#333333", paddingTop: 30, width: "100%"
            },
            fontFormSmallDarkGreyCoordinates: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 22, color: "#333333", paddingTop: 5, width: "100%"
            },
            fontFormSmallInput: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 25, letterSpacing: -0.3, color: "#333333", maxWidth: 250, height: 18, borderWidth: 0, borderColor: "#dddddd"
            },
            fontFormMediumInput: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 28, letterSpacing: -0.3, color: "#333333", maxWidth: 350, height: 18, borderWidth: 0, borderColor: "#dddddd", overflow: "hidden"
            },
            fontFormLargeInput: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 28, letterSpacing: -0.3, color: "#333333", width: '100%', height: 30, borderWidth: 0, borderColor: "#dddddd", overflow: "hidden", marginTop: 7
            },
            courseFormLargeInput: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 28, letterSpacing: -0.3, color: "#333333", width: '90%', height: 30, borderWidth: 0, borderColor: "#dddddd", overflow: "hidden", marginTop: 7
            },
            fontFormSmallGrey: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 16, color: "#333333", opacity: 0.5, marginBottom: 19
            },
            fontFormSmallHeader: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 26, letterSpacing: -0.3, textTransform: "uppercase", color: "#333333"
            },
            profilePrivateInformation: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 26, letterSpacing: -0.3, textTransform: "uppercase", color: "#333333"
            },
            fontFormSmall: {
                fontFamily: 'Graphik-Regular-App', fontSize: 12, lineHeight: 21, textTransform: "uppercase", color: "#333333", opacity: 0.5, marginTop: 10
            },
            fontBold: {
                fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 24
            },
            myprofileAboutMe: {
                fontFamily: 'Graphik-Bold-App',
                fontWeight: 'bold',
                fontSize: 24,
                marginTop: 60,
            },
            courseDetails: {
                fontFamily: 'Graphik-Bold-App',
                fontWeight: 'bold',
                fontSize: 24,
                marginTop: 60,
            },
            fontTitle: {
                fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 22, lineHeight: 30, height: 60, color: '#333333'
            },
            noCardFontTitle: {
                fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 26, lineHeight: 30, height: 60, color: '#333333', opacity: 0.6, marginLeft: 20
            },
            loadingFontTitle: {
                fontFamily: 'Graphik-Regular-App', fontWeight: 'regular', fontSize: 16, lineHeight: 30, height: 60, color: '#333333', marginLeft: 20
            },
            myMapFontTitle: {
                fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 24, lineHeight: 30, height: 60, color: '#333333'
            },
            groupsLoadMoreFont: {
                fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 16, lineHeight: 24, height: '100%', color: '#333333'

            },
            conversationsLoadMoreFont: {
                fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 16, lineHeight: 24, height: '100%', color: '#ffffff'
            },
            fontTitleGroup: {
                fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 22, lineHeight: 30, height: 90, color: '#333333', paddingTop: 29,
            },
            profileFontTitle: {
                fontFamily: 'Graphik-Bold-App', fontWeight: 'bold', fontSize: 20, height: 75, lineHeight: 32, flex: 3
            },
            fontDetailTop: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 16, color: '#333333', opacity: 0.4, paddingTop: 23, textTransform: "uppercase"
            },
            sponsoredTag: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 16, color: '#333333', opacity: 0.4, textTransform: "uppercase", marginRight: 8, fontWeight: 600
            },
            myMapFontDetailTop: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 16, color: '#333333', opacity: 0.4, paddingTop: 23
            },
            fontDetailMiddle: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 22, color: '#333333', opacity: 0.7
            },
            myMapFontDetailMiddle: {
                fontFamily: 'Graphik-Regular-App', fontSize: 16, lineHeight: 22, color: '#333333', opacity: 0.7
            },
            fontDetailBottom: {
                fontFamily: 'Graphik-Regular-App', fontSize: 14, lineHeight: 16, color: '#333333', opacity: 0.5
            },
            myMapFontDetailBottom: {
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
            courseFontStartConversation: {
                color: "#ffffff", fontFamily: 'Graphik-Regular-App', fontSize: 16, padding: 10, fontWeight: "600"
            },
            fontOrangeButton: {
                fontFamily: 'Graphik-Regular-App', fontSize: 12, color: '#ffffFF', padding: 10
            },
            fontCourseHeaderBold: {
                fontFamily: 'Graphik-Bold-App',
                fontWeight: 400,
                fontSize: 45,
                lineHeight: 45,
                textAlign: "left",
                color: "#FFFFFF",
                marginBottom: 15,
                marginLeft: "5%",
            },
            fontResourceHeaderBold: {
                fontFamily: 'Graphik-Regular-App',
                fontWeight: 400,
                fontSize: 45,
                lineHeight: 45,
                alignSelf: "center",
                textAlign: "center",
                color: "#FFFFFF",
                width: "100%",
                height: 85,
                paddingTop: 25
            },
            resourceHeaderAgeGroupBox: {
                height: "58px",
                backgroundColor: '#ffffff',
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                paddingRight: 21,
                paddingLeft: 21,
                width: "40%",
                borderRadius: 4,
                alignSelf: "center",
                marginTop: 30,
                marginBottom: 30
            },
            resourceHeaderAgeGroupBoxText: {
                textAlign: "center",
                alignSelf: "center",
                color: '#000000',
                fontSize: 30,
                lineHeight: 35,
                fontWeight: 'bold',
                fontFamily: 'Graphik-Regular-App'
            },
            fontCourseHeader: {
                fontFamily: 'Graphik-Regular-App',
                fontWeight: "normal",
                fontSize: 30,
                lineHeight: 25,
                textAlign: "left",
                color: "#FFFFFF",
                marginLeft: '5%',
            },
            fontCourseHeaderTime: {
                fontFamily: 'Graphik-Regular-App',
                fontWeight: "normal",
                fontSize: 14,
                lineHeight: 20,
                textAlign: "left",
                color: "#FFFFFF",
                marginLeft: '5%',
                textTransform: 'uppercase',
                marginTop: 30,
            },
            fontCourseHeaderDescription: {
                fontFamily: 'Graphik-Regular-App',
                fontWeight: "normal",
                fontSize: 20,
                lineHeight: 30,
                textAlign: "left",
                color: "#FFFFFF",
                marginLeft: '5%',
            },
            fontResourceHeaderDescription: {
                fontFamily: 'Graphik-Regular-App',
                fontWeight: "normal",
                fontSize: 20,
                lineHeight: 30,
                textAlign: "center",
                color: "#FFFFFF",
                width: "100%",
                alignSelf: "center",
                height: 85
            },
            fontConnectWith: {
                fontFamily: 'Graphik-Bold-App',
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: 25,
                color: "#000000",
                letterSpacing: -0.3,
                paddingLeft: 20,
                marginTop: 15,
            },
            fontConnectWithName: {
                fontFamily: 'Graphik-Bold-App',
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: 25,
                color: "#000000",
                letterSpacing: -0.3,
                alignSelf: 'flex-start',
            },
            courseFontConnectWithName: {
                fontFamily: 'Graphik-Bold-App',
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: 25,
                color: "#000000",
                letterSpacing: -0.3,
                alignSelf: 'center',
                marginBottom: 10,
            },
            fontConnectWithRole: {
                fontFamily: 'Graphik-Regular-App',
                fontSize: 14,
                lineHeight: 22,
                letterSpacing: -0.3,
                color: "#333333",
                paddingBottom: 9,
            },
            fontConnectConversation: {
                fontFamily: 'Graphik-Regular-App',
                fontSize: 14,
                lineHeight: 22,
                letterSpacing: -0.3,
                color: "#333333",
                paddingBottom: 9,
            },
            courseFontConnectConversation: {
                fontFamily: 'Graphik-Regular-App',
                fontSize: 14,
                lineHeight: 22,
                letterSpacing: -0.3,
                color: "#333333",
                paddingBottom: 9,
                alignSelf: 'center'
            },
            groupFormName: {
                fontFamily: "Graphik-Bold-App",
                fontWeight: "bold",
                fontSize: 16,
                lineHeight: 21,
                color: "#333333"
            },
            courseFormName: {
                fontFamily: "Graphik-Bold-App",
                fontWeight: "bold",
                fontSize: 16,
                lineHeight: 21,
                color: "#333333"
            },
            groupFormRole: {
                fontFamily: "Graphik-Regular-App",
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
            myMapConversationCardRole: {
                fontFamily: "Graphik-Regular-App",
                textTransform: "uppercase",
                fontWeight: "650",
                fontSize: 12,
                lineHeight: 16,
                color: "#333333",
                opacity: 0.6,
                marginTop: 5
            },
            myMapConversationCardAboutMe: {
                fontFamily: "Graphik-Regular-App",
                fontWeight: "650",
                fontSize: 16,
                lineHeight: 23,
                color: "#333333",
                marginTop: 10,
                flexWrap: 'wrap',
                width: 330
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
                height: 36,
                borderColor: "#F0493E",
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
            },
            courseHomeConversationButton: {
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 0,
                paddingRight: 0,
                marginBottom: 20,
                marginLeft: 0,
                marginRight: 0,
                //   color:"#F0493E",
                backgroundColor: "#F0493E",
                borderWidth: 1,
                borderColor: "#F0493E",
                boxShadow: "unset",
                borderRadius: 4,
                justifyContent: 'center',
            },
            myMapConnectWithSliderButton: {
                padding: 0,
                height: 25,
                borderColor: "#F0493E",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 10,
                paddingRight: 10,
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
            groupMiddleText: {
                fontFamily: "Graphik-Bold-App",
                fontSize: 20,
                lineHeight: 25,
                letterSpacing: -0.3,
                color: "#333333",
                paddingTop: 48,
                paddingBottom: 12
            },
            groupMiddleTextNoPaddingTop: {
                fontFamily: "Graphik-Bold-App",
                fontSize: 20,
                lineHeight: 25,
                letterSpacing: -0.3,
                color: "#333333",
                paddingTop: 0,
                paddingBottom: 12
            },
            rightCardWidth: {
                minWidth: "100%"
            },
            conversationScreenLeftCard: { 
                flex: 30, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, paddingTop: 40, marginLeft: 32, marginRight: 32, marginTop: 30, borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)", height: "80vh", width: 446, paddingBottom: 40, overflowY: 'scroll' 
            },
            courseAssignmentScreenLeftCard: { 
                flex: 30, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, paddingTop: 40, marginLeft: 30, marginRight: 32, marginTop: 30, borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)", height: "80vh", width: 446, paddingBottom: 40, overflowY: 'scroll' 
            },
            detailScreenLeftCard: Platform.OS === 'web' ?
                { flex: 30, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, paddingTop: 40, marginLeft: 32, marginRight: 32, marginTop: 30, borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)", width: 446, paddingBottom: 40, minHeight: "calc(100vw * 1.05)" } :
                { flex: 30, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, paddingTop: 40, marginLeft: 32, marginRight: 32, marginTop: 30, borderRadius: 4, width: 446, paddingBottom: 40, minHeight: "calc(100vw * 1.05)" }
            ,
            detailScreenRightCard: Platform.OS === 'web' ?
                { flex: 70, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 32, marginRight: 32, marginTop: 30, borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)", minHeight: "calc(100vw * 2)", width: 446, } :
                { flex: 70, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 32, marginRight: 32, marginTop: 30, borderRadius: 4, minHeight: "calc(100vw * 2)", width: 446, }
            ,
            profileScreenLeftCard: Platform.OS === 'web' ?
                { flex: 30, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, paddingTop: 40, marginLeft: 32, marginRight: 32, marginTop: 0, borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)", minHeight: 700, width: 446 } :
                { flex: 30, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, paddingTop: 40, marginLeft: 32, marginRight: 32, marginTop: 0, borderRadius: 4, minHeight: 700, width: 446 }
            ,
            profileScreenRightCard: Platform.OS === 'web' ?
                { flex: 70, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 32, marginRight: 32, marginTop: 0, borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)", minHeight: 1500, width: 446, paddingTop: 30, paddingRight: 30, paddingBottom: 30, paddingLeft: 30 } :
                { flex: 70, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 32, marginRight: 32, marginTop: 0, borderRadius: 4, minHeight: 1500, width: 446, paddingTop: 30, paddingRight: 30, paddingBottom: 30, paddingLeft: 30 }
            ,
            myProfileTopButtons: {
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                flexGrow: 0,
                marginTop: 30,
                paddingLeft: 32,
                paddingRight: 32,
                minHeight: 45
            },
            myProfileImageWrapper: {
                alignSelf: "center",
                marginBottom: 90
            },
            myProfileImage: {
                width: "250px",
                height: "290px",
                borderRadius: 120
            },
            fileInputWrapper: {
                left: 0,
                width: 250,
                top: 310,
                overflow: "hidden",
                position: "absolute"
            },
            myProfilePersonalInfoWrapper: {
                marginBottom: 35,
                alignSelf: "center",
                width: "100%"
            },
            eventAttendeesPictures: {
                flexDirection: "row",
                marginBottom: 20,
                flexGrow: 0,
                flexWrap: "wrap",
            },
            groupAttendeesPictures: {
                flexDirection: "row",
                marginBottom: 20,
                flexGrow: 0,
                flexWrap: "wrap",
            },
            myProfileCoordinates: {
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 80,
                width: "100%",
                flexGrow: 0,
                marginTop: 30,
                alignSelf: "flex-start",
                height: "2.75rem"
            },
            // dashboardMainContainer: {
            //     height: 2300, 
            //     flex: 1, 
            //     display: "flex", 
            //     flexDirection: "row"
            // },
            dashboardLeftCard: {
                flex: 70,
                flexDirection: "column",
                backgroundColor: "#F9FAFC"
            },
            dashboardRightCard: {
                flex: 25,
                flexDirection: "column"
            },
            myProfileMainContainer: {
                marginBottom: 20,
                display: "flex",
                flexDirection: "row"
            },
            myProfileTopButtonsInternalContainer: {
                flex: 1,
                flexDirection: "row",
                alignSelf: "flex-end",
                justifyContent: "flex-end"
            },
            myProfileTopButtonsExternalContainer: {
                flexDirection: "column"
            },
            myProfileMapSelectorContainer: {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: 1955,
                zIndex: 100,
                backgroundColor: "#33333366"
            },
            myProfileMapSelectorInnerContainer: {
                backgroundColor: "#ffffff",
                borderRadius: 10,
                padding: 10,
                margin: 10,
                left: "10%",
                top: "10%",
                width: "80%",
                height: "40%"
            },
            myProfileMapSelectorInnerCopyContainer: {
                flexDirection: "row",
                alignContent: "space-between",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "1000",
                backgroundColor: "#FFFFFF",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                paddingBottom: 20,
                width: "100%",
                borderBottomRightRadius: 4
            },
            map: {
                height: "94.5%",
                width: "98%"
            },
            mapSelectorText: {
                fontFamily: 'Graphik-Regular-App',
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 0,
                marginRight: 20,
                textAlign: "center"
            },
            eventScreenMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                backgroundColor: "#F9FAFC",
                height: "100%"
            },
            conversationScreenMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                backgroundColor: "#F9FAFC",
                height: "100%"
            },
            courseAssignmentMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                backgroundColor: "#F9FAFC",
                width: '95%', 
                flex: 'none',
                height: '200vw'
            },
            groupScreenMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                backgroundColor: "#F9FAFC",
                height: "100%"
            },
            eventPageMessageBoard: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "#F9FAFC",
            },
            coursePageMessageBoard: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "#F9FAFC",
            },
            eventPageMessageBoardInnerCard: {
                wordBreak: "break-word",
                marginTop: 0,
                paddingTop: 0,
                paddingBottom: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: "#ffffff",
                fontFamily: "Graphik-Regular-App",
                fontSize: 16,
                lineHeight: 22,
            },
            eventPageMessageBoardLeft: {
                alignSelf: "center"
            },
            coursePageMessageBoardLeftMini: {
                alignSelf: "center",
                flex: 3
            },
            eventsScreenLeftContainer: {
                flex: 70,
                flexDirection: "column",
                justifyContent: 'flex-start'
            },
            eventsScreenRightContainer: {
                flex: 30,
                flexDirection: "column",
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            },
            eventsScreenMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start'
            },
            groupsScreenMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start'
            },
            groupsScreenLeftContainer: {
                flex: 70,
                flexDirection: "column",
                justifyContent: 'flex-start',
            },
            groupsScreenRightContainer: {
                flex: 30,
                flexDirection: "column",
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
            },
            resourcesScreenMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start'
            },
            resourcesScreenLeftContainer: {
                flex: 70,
                flexDirection: "column",
                justifyContent: 'flex-start',
            },
            resourcesScreenRightContainer: {
                flex: 30,
                flexDirection: "column",
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
            },
            ResourcesMyGroupsNoWrap: {
                overflow: "scroll",
                overflowY: "hidden",
                minHeight: 375,
                flexWrap: "nowrap",
                // flexWrap: this.props.wrap ? "wrap" : "nowrap", 
                flexGrow: 1,
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start"
            },
            ResourcesMyGroupsWrap: {
                overflow: "scroll",
                overflowY: "hidden",
                minHeight: "calc(100vw + 100vh + 10rem)",
                flexWrap: "wrap",
                // flexWrap: this.props.wrap ? "wrap" : "nowrap", 
                flexGrow: 1,
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                alignContent: "flex-start"
            },
            profileMyGroupsWrap: {
                // overflowX: "scroll",
                // overflowY: "hidden",
                //minHeight: "100vw",
                flexWrap: "wrap",
                flexGrow: 1,
                width: "100%",
                //  height: "100%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start"
            },
            profilesScreenMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start'
            },
            profilesScreenLeftContainer: {
                flex: 70,
                flexDirection: "column",
                justifyContent: 'flex-start'
            },
            profilesScreensRightContainer: {
                flex: 30,
                flexDirection: "column",
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            },
            resourcesOverviewScreenMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                height: "100%",
                backgroundColor: "#F9FAFC"
            },
            resourceContentMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                backgroundColor: "#F9FAFC"
            },
            resourceContentLeftContainer: {
                flex: 70,
                flexDirection: "column",
                justifyContent: 'flex-start',
                paddingLeft: 30,
                paddingRight: 0,
                marginLeft: 30,
                marginTop: 30,
                backgroundColor: "#ffffff",
                borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                height: '100%',
            },
            resourceContentRightContainer: {
                flex: 30,
                flexDirection: "column",
                justifyContent: 'flex-start',
                paddingLeft: 30,
                paddingRight: 30,
                marginRight: 30,
                marginTop: 30,
                backgroundColor: "#ffffff",
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                height: 900
            },
            resourceContentCurrentSeriesContainer: {
                minHeight: 500,
                flexWrap: "nowrap",
                // flexWrap: this.props.wrap ? "wrap" : "nowrap", 
                flexGrow: 0,
                width: "100%",
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: "flex-start",
            },
            resourceContentCurrentSeriesCard: {
                padding: "0px",
                marginLeft: "10px",
                marginRight: "10px",
                flex: 1,
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                borderColor: "#F9FAFC"
            },
            resourceContentCurrentSeriesIframeContainer: {
                width: '100%',
                height: Dimensions.get('window').width * 0.12,
                paddingLeft: "0px",
                paddingRight: "0px",
                margin: "0px",
                paddingTop: 0,
                backgroundColor: '#F9FAFC'
            },
            resourceContentMoreSeriesContainer: {
                minHeight: 375,
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            },
            resourceContentLoadMoreButtonContainer: {
                flexGrow: 0.2,
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            },
            resourceContentMoreSeriesRowContainer: {
                flexDirection: 'row',
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: '100%'
            },
            resourceContentMoreSeriesCard: {
                padding: "0px",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: 53,
                flex: 1,
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                borderColor: "#F9FAFC",
                backgroundColor: "#F9FAFC",
                minHeight: 250
            },
            resourceContentMoreSeriesCardDummy: {
                padding: "0px",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: 53,
                flex: 1,
                borderColor: "#ffffff00",
                backgroundColor: "#ffffff00",
                shadowColor: "#ffffff00",
                minHeight: 250
            },
            resourceContentMoreSeriesIframeContainer: {
                width: '100%',
                height: Dimensions.get('window').width * 0.09,
                paddingLeft: "0px",
                paddingRight: "0px",
                margin: "0px",
                paddingTop: 0,
                backgroundColor: '#F9FAFC'
            },
            resourceContentEpisodeMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start'
            },
            resourceContentEpisodeLeftContainer: {
                flex: 70,
                flexDirection: "column",
                justifyContent: 'flex-start',
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 50,
                marginLeft: 30,
                marginTop: 30,
                backgroundColor: "#ffffff",
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
            },
            resourceContentEpisodeRightContainer: {
                flex: 30,
                flexDirection: "column",
                justifyContent: 'flex-start',
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 20,
                marginRight: 30,
                marginTop: 30,
                backgroundColor: "#ffffff",
                borderRadius: 4,
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                height: 900
            },
            resourceContentEpisodesContainer: {
                minHeight: 375,
                flexGrow: 0,
                width: "100%",
                marginTop: 30
            },
            resourceContentEpisodeCard: {
                padding: "0px",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "25px",
                borderRadius: 4,
                width: '100%',
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                borderColor: "#ffffff",
                height: Dimensions.get('window').width * 0.18
            },
            resourceContentEpisodesIframe: {
                width: Dimensions.get('window').width * 0.26,
                height: Dimensions.get('window').width * 0.26 * (9 / 16),
                paddingLeft: "0px",
                paddingRight: "0px",
                margin: "0px",
                paddingTop: 0,
                backgroundColor: '#F9FAFC'
            },
            resourceContentEpisodesCardInnerContainer: {
                display: 'flex',
                flexDirection: 'row',
            },
            resourceContentEpisodesButtonsContainer: {
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 0,
                borderBottomColor: 'rgba(0, 0, 0, 0.2)',
                borderBottomWidth: 1,
                borderTopColor: 'rgba(0, 0, 0, 0.2)',
                borderTopWidth: 1,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
            },
            resourceContentEpisodesButtonsContainer2: {
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 0,
                borderBottomColor: 'rgba(0, 0, 0, 0.2)',
                borderBottomWidth: 1,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
            },

            resourcefileInputWrapper: {
                width: "100%",
                overflow: "hidden",
                position: "absolute"
            },
            resourcefileFieldWrapper: {
                alignSelf: "center",
                top: "5vw",
                width: "50%",
                overflow: "none",
                position: "absolute"
            },
            resourceImageIcon: {
                color: "#aaaaaa"
            },
            dashboardConversationCard: {
                paddingTop: 28,
                paddingBottom: 28,
                borderStyle: "solid",
                borderColor: "#FFFFFF",
                width: "100%",
                paddingRight: 30,
                paddingLeft: 30,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                marginTop: 30
            },
            courseConversationCard: {
                paddingTop: 10,
                paddingBottom: 0,
                borderStyle: "solid",
                borderColor: "#FFFFFF",
                width: 200,
                paddingRight: 0,
                paddingLeft: 0,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                marginTop: 30,
                marginRight: 20,
            },
            dashboardConversationCardLeft: {
                flexDirection: "row"
            },
            courseHomeConversationCard: {
                flexDirection: "column",
            },
            dashboardConversationBody: {
                width: "100%",
                marginLeft: 0
            },
            myMapDashboardConversationCard: {
                height: 233,
                paddingTop: 20,
                paddingBottom: 20,
                width: 500,
                backgroundColor: '#FFFFFF',
                opacity: 0.9
            },
            profilesCard: {
                width: "100%",
                minHeight: "50px",
                borderColor: "#ffffff"
            },
            sectionHeadingDashboard: {
                minHeight: 45,
                flexGrow: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
                paddingRight: 12
            },
            resourcesOverviewRightCard: {
                display: "inline",
                marginTop: 30,
                overflow: "visible",
                width: "100%",
                paddingTop: 40,
                paddingLeft: 30,
                paddingRight: 30,

            },
            myProfileErrorValidation: {
                color: "red",
                fontWeight: "bold",
                flex: .75,
                paddingLeft: 20,
                paddingTop: 14,
                textAlign: "right"
            },
            myMapCalloutEventContainer: {
                height: 233,
                paddingTop: 20,
                paddingBottom: 20,
                width: 500,
                backgroundColor: '#FFFFFF',
                opacity: 0.9
            },
            myMapCalloutEventName: {
                height: 50
            },
            myMapCalloutEventDescription: {
                height: 50
            },
            resourceHeaderImgContainer: {
                //    backgroundColor: "#000000", 
                maxHeight: "450px"
            },
            resourceHeaderImg: {
                position: "relative",
                width: "100%",
                height: "100%",
                opacity: 0.5,
                filter: "grayscale(1)",
            },
            resourceHeaderImgView: {
                backgroundColor: "#000000",
                position: "relative",
                width: "100%",
                height: "100%",
            },
            conversationsCard: {
                alignSelf: "flex-start",
            },
            myprofilePickerContainer: {
                flexGrow: 0,
                flexDirection: 'column',
                alignItems: 'center',
            },
            myprofilePickerContainerView: {
                flexDirection: 'row',
            },
            myprofileBadgeContainer: {
                flex: 0,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'flex-start',
                top: 20,
                marginBottom: 120,
            },
            myprofileMyRoleContainer: {
                marginBottom: 15,
                width: "100%",
                // marginTop: 80
            },
            myprofilePickerMainContainer: {
                width: "100%",
                alignItems: "flex-start",
                marginTop: 5,
                flexGrow: 0.5
            },
            myprofilePicker: {
                height: 45,
                width: 308,
                marginRight: 10,
                borderWidth: 1,
                borderColor: '#dddddd'
            },
            myProfileOrgView: {
                flex: 1,
                flexDirection: 'row'
            },
            myProfileOrgTypeInput: {
                borderWidth: 1,
                borderColor: "#dddddd",
                width: 308,
                paddingTop: 8,
                paddingRight: 10,
                paddingBottom: 8,
                paddingLeft: 10,
                fontFamily: 'Graphik-Regular-App',
                fontSize: 16,
                lineHeight: 24
            },
            courseSidebarNavTextActive: {
                fontFamily: 'Graphik-Regular-App',
                fontSize: 20,
                lineHeight: 28,
                color: '#ffffff',
            },
            courseSidebarNavTextInactive: {
                fontFamily: 'Graphik-Regular-App',
                fontSize: 20,
                lineHeight: 28,
                color: '#ffffff',
                opacity: 0.5
            },
            courseSidebarNavIconActive: {
                marginRight: 12,
                width: "30px",
                height: "30px",
                top: 6,
            },
            courseSidebarNavIconInactive: {
                marginRight: 12,
                width: "30px",
                height: "30px",
                top: 6,
                opacity: 0.5
            },
            headerLeft: {
                flex: 0
            },
            headerMiddleBody: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginLeft: 25
            },
            jcDirectoryButton: {
                marginLeft: 20,
                marginVertical: 10,
                paddingHorizontal: 10,
                height: 36,
                borderColor: "#F0493E",
                alignItems: "center",
                justifyContent: "center"
            },
            coursesRightCard: {
                flex: 70,
                flexDirection: "column",
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingTop: 30,
                paddingRight: 30,
                paddingBottom: 30,
                paddingLeft: 30
            },
            courseSideBar: {
                flex: 15,
                backgroundColor: "#000000",
                height: '100vh'
            },
            courseDetailJCButtonRegular: {
                flexDirection: 'row',
                justifyContent: 'flex-end'
            },
            courseDetailJCButtonMini: {
                flexDirection: 'column',
                justifyContent: 'flex-end'
            },
            courseDetailJCButtonAssignments: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 30,
            },
            courseHeaderContainer: {
                backgroundColor: "#F0493E",
                flex: 32,
            },
            animatedCircleContainerSideBar: {
                backgroundColor: "#00000000",
                alignSelf: 'center',
                marginTop: 75
            },
            courseHomeMainTextContainer: {
                flex: 80,
                height: 200,
                marginRight: 50
            },
            courseHomeSyllabusContainer: {
                flexDirection: 'row',
            },
            CourseHomeActivityContainer: {
                flex: 5,
                flexDirection: "row",
                marginTop: 30,
                width: '90%',
                paddingBottom: 50,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "#333333",
            },
            courseHomeCalendar: {
                width: '90%',
                borderColor: '#FFFFFF',
                paddingLeft: 60,
                paddingRight: 60,
                boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                marginTop: 15,
                paddingTop: 20,
                paddingBottom: 20
            },
            courseHomeMainContainer: {
                flex: 85,
            },
            courseProfileImageButtonsContainer: {
                flexDirection: 'column',
                marginTop: 30,
                flex: 20
            },
            courseHomeLeftContainer: {
                flex: 70,
                flexDirection: "column",
                justifyContent: 'flex-start',
            },
            courseHomeRightContainer: {
                flex: 30,
                flexDirection: "column",
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            },
            courseDetailLeftContainer: {
                flex: 70,
                flexDirection: "column",
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            },
            courseDetailRightContainer: {
                flex: 30,
                flexDirection: "column",
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            },
            courseHomeDescriptionText: {
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30,
                fontFamily: 'Graphik-Regular-App',
                fontSize: 20,
                lineHeight: 30
            },
            courseDetailButtonTrio: {
                flex: 5,
                flexDirection: "row",
                marginTop: 30,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "#333333",
                width: '95%',
                paddingBottom: 20
            },
            courseMessageBoardButtonsView: {
                marginRight: 10
            },
            courseDetailActivityCard: {
                flexDirection: "row",
                minHeight: "40px",
                height: "unset"
            },
            courseDetailActivityInnerCard: {
                flexDirection: "column",
                height: "unset",
                width: "unset",
                alignSelf: "center",
                flex: 2
            },
            courseCheckmark: {
                width: "30px",
                height: "30px"
            },
            courseActivityDetails: {
                flexDirection: "row",
                height: "unset",
                marginBottom: 12
            },
            courseCompletedCallOut: {
                fontSize: 12,
                lineHeight: 21,
                fontFamily: 'Graphik-Bold-App',
                color: '#FFF',
                marginLeft: 30,
                marginRight: 15,
                paddingLeft: 10,
                paddingRight: 10,
                textTransform: 'uppercase',
                backgroundColor: '#71C209',
                borderRadius: 50,
                height: 20,
                alignSelf: 'center'
            },
            courseActivityButtonEditable: {
                flexDirection: "column",
                marginTop: 10,
                height: "unset"
            },
            courseActivityButtonNonEditable: {
                flexDirection: "column",
                height: "unset",
                marginTop: 15,
                alignSelf: 'flex-start'
            },
            courseDetailLessonText: {
                fontSize: 16,
                lineHeight: 21,
                fontFamily: 'Graphik-Bold-App',
                color: '#333333',
                marginBottom: 20
            },
            courseDetailLongDescriptionText: {
                fontFamily: 'Graphik-Regular-App',
                fontSize: '16px',
                lineHeight: '26px',
                color: "#333333",
                marginTop: 0,
                paddingTop: 0,
                minHeight: 50,
                maxHeight: 275,
                overflow: 'scroll'
            },
            courseHomeScreenMainContainer: {
                flexDirection: "row"
            },
            courseHomeScreenSubMainContainer: {
                flex: 80,
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                paddingLeft: '5%'
            },
            courseMyCohortContainer: {
                flexDirection: 'row',
                flexWrap: 'wrap'
            },
            courseMyFacilitatorContainer: {
                flexDirection: 'row',
                flexWrap: 'wrap'
            },
            courseMyLearningGroupContainer: {
                flexDirection: 'row',
                flexWrap: 'wrap'
            },
            courseProfileImageContainer: {
                paddingTop: 40,
            },
            courseDetailActivityInnerCardCenter: {
                flexDirection: "column",
                flex: 7,
                alignSelf: 'center',
                height: "unset"
            },
            courseDetailMainContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                paddingLeft: '5%',
                paddingRight: '2%'
            },
            courseDetailMessageBoardContainer: {
                flex: 95,
                flexDirection: "row",
                marginTop: 10,
                width: '100%'
            },
            courseDetailCoureInfoContainer: {
                width: "100%"
            },
            courseHomeCourseActivityText: {
                fontSize: 16,
                lineHeight: 25,
                fontFamily: 'Graphik-Regular-App',
                marginTop: 15
            },
            resourcesSubMenu: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginRight: 65
            },
            courseWordCountSmall: {
                textAlign: 'right', 
                marginBottom: 30
            },
            courseWordCount: {
                textAlign: 'right', 
                marginBottom: 30, 
                marginRight: 30,
            },

            // Media Query Desktop Tablet
            '@media (min-width: 350) and (max-width: 768)': {
                confirmationCodeWrapper: { display: 'flex', flexDirection: 'column' },
                signUpBackButtonWrapper: { position: 'absolute', top: '10%', left: '30%' },
                authView2: { left: "37.5%", width: 300, top: "20%", height: "auto" },
                connectWithSliderButton: {
                    height: 45,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 10,
                    paddingRight: 10,
                    width: "100%"
                },

                connectWithTopSectionButton: {
                    paddingTop: 50,
                    paddingBottom: 35,
                    paddingRight: 15
                },
                fontConnectWithName: {
                    fontSize: 18,
                    lineHeight: 23,
                },
                rightCardWidth: {
                    minWidth: "100%"
                },
                detailScreenLeftCard: {
                    marginRight: 10,
                    flex: 35,
                    minHeight: "50%",
                },
                detailScreenRightCard: {
                    marginLeft: 10,
                    flex: 65,
                },
                groupNameInput: {
                    fontSize: 24,
                    lineHeight: 30,
                    width: '50%'
                },
                eventNameInput: {
                    fontSize: 24,
                    lineHeight: 30,
                },
                myProfileTopButtons: {
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "flex-start"
                },
                profileScreenLeftCard: {
                    marginRight: 10,
                    flex: 35,
                    minHeight: "50%",
                },
                profileScreenRightCard: {
                    marginLeft: 10,
                    flex: 65
                },
                myProfileImageWrapper: {
                    marginBottom: 0
                },
                myProfileImage: {
                    width: "160px",
                    height: "200px",
                    borderRadius: 120
                },
                fileInputWrapper: {
                    width: "100%",
                    top: 265,
                    left: 0
                },
                myProfileCoordinates: {
                    flexDirection: "column",
                    marginBottom: 130,
                },
                myProfilePersonalInfoWrapper: {
                    marginBottom: 35,
                    alignSelf: "center",
                    width: "100%",
                    top: 100
                },
                fontFormSmallHeader: {
                    marginTop: 100
                },
                profilePrivateInformation: {
                    marginTop: 25
                },
                resourcefileFieldWrapper: {
                    top: "10vw",
                    width: "100%"
                },
                dashboardConversationCard: {
                    width: "100%"
                },
                dashboardConversationCardLeft: {
                    flexDirection: "column",
                    justifyContent: "center"
                },
                myProfileTopButtonsInternalContainer: {
                    flex: 3,
                },
                myProfileErrorValidation: {
                    flex: 1,
                    paddingLeft: 0,
                    paddingBottom: 15,
                    paddingTop: 0,
                    textAlign: 'left'
                },
                myMapFontTitle: {
                    fontSize: 22,
                    lineHeight: 28,
                },
                myMapFontDetailMiddle: {
                    fontSize: 14,
                    lineHeight: 20,
                },
                fontFormMediumInput: {
                    maxWidth: 175
                },
                fontFormSmallDarkGreyCoordinates: {
                    width: "100%",
                    marginBottom: 15
                },
                myProfileTopButtonsExternalContainer: {
                    flexDirection: "column"
                },
                resourceContentLeftContainer: {
                    flexDirection: "column",
                    justifyContent: 'flex-start',
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginLeft: 0,
                    marginTop: 0,
                    width: '100%',
                    backgroundColor: "#ffffff",
                    borderRadius: 4, boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                },
                resourceContentRightContainer: {
                    flexDirection: "column",
                    justifyContent: 'flex-start',
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginRight: 0,
                    marginTop: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 4,
                    width: '100%',
                    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                },
                resourceContentMoreSeriesIframeContainer: {
                    width: '100%',
                    height: Dimensions.get('window').width * 0.55,
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    margin: "0px",
                    paddingTop: 0,
                    backgroundColor: '#F9FAFC'
                },
                resourceContentCurrentSeriesIframeContainer: {
                    width: '100%',
                    height: Dimensions.get('window').width * 0.55,
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    margin: "0px",
                    paddingTop: 0,
                    backgroundColor: '#F9FAFC'
                },
                resourceContentCurrentSeriesContainer: {
                    width: "100%",
                    minHeight: 3 * (200 + Dimensions.get('window').width * 0.55),
                    flexGrow: 0,
                    flexDirection: 'column',
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                },
                resourceContentCurrentSeriesCard: {
                    padding: "0px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    marginBottom: 20,
                    flex: 1,
                    borderRadius: 4,
                    boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.05)",
                    borderColor: "#F9FAFC",
                    backgroundColor: "#F9FAFC"
                },
                resourceContentEpisodesCardInnerContainer: {
                    display: 'flex',
                    flexDirection: 'column',
                },
                resourceContentEpisodesIframe: {
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').width * (9 / 16),
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    margin: "0px",
                    paddingTop: 0,
                    backgroundColor: '#F9FAFC'
                },
                resourceContentEpisodesEpisodeTitle: {
                    wordBreak: "break-word",
                    fontFamily: "Graphik-Bold-App",
                    fontSize: 18,
                    lineHeight: 25,
                    color: "#333333",
                    paddingBottom: 0
                },
                resourceContentEpisodeMainContainer: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'flex-start'
                },
                resourceContentEpisodesButtonsContainer: {
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: 0,
                    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
                    borderBottomWidth: 1,
                    borderTopColor: 'rgba(0, 0, 0, 0.2)',
                    borderTopWidth: 1,
                    marginLeft: 15,
                    marginRight: 15
                },
                resourceContentEpisodesButtonsContainer2: {
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: 0,
                    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
                    borderBottomWidth: 1,
                    marginLeft: 15,
                    marginRight: 15
                },
                myprofilePickerContainerView: {
                    flexDirection: 'column',
                },
                myprofilePicker: {
                    marginBottom: 10,
                    width: '75%'
                },
                dashboardConversationBody: {
                    alignItems: "center"
                },
                fontConnectConversation: {
                    textAlign: "center"
                },
                fontCourseHeaderBold: {
                    fontSize: 34,
                    lineHeight: 40,
                },
                fontResourceHeaderBold: {
                    fontSize: 70,
                    width: 650,
                    height: 80,
                    paddingTop: 20,
                },
                myProfileOrgView: {
                    flexDirection: 'column'
                },
                myprofilePickerMainContainer: {
                    flexGrow: 0.2
                },
                profileFontTitle: {
                    marginBottom: 15
                },
                fontFormName: {
                    marginTop: 30,
                },
                myProfileOrgTypeInput: {
                    width: '100%'
                },
                jcDirectoryButton: {
                    height: 50,
                    paddingTop: 10,
                    paddingBottom: 10,
                    width: '75%'
                },
                fontResourceHeaderDescription: {
                    width: "75%",
                },
                resourceHeaderAgeGroupBox: {
                    width: "35%"
                },
                courseSideBar: {
                    flex: 20,
                },
                courseHomeMainContainer: {
                    flex: 80,
                },
                animatedCircleContainerSideBar: {
                    marginTop: 40,
                    flex: 0.375,
                },
                courseHeaderContainer: {
                    flex: 24,
                },
                courseHomeSyllabusContainer: {
                    flexDirection: 'column',
                },
                courseProfileImageButtonsContainer: {
                    flex: 100,
                    marginRight: 30,
                },
                courseHomeLeftContainer: {
                    flex: 60,
                },
                courseHomeRightContainer: {
                    flex: 40,
                },
                courseHomeMainTextContainer: {
                    marginRight: 0,
                },
                courseHomeDescriptionText: {
                    marginLeft: 0,
                },
                courseConversationCard: {
                    width: "93%",
                },
                courseHomeCalendar: {
                    width: '85%',
                    paddingLeft: 10,
                    paddingRight: 10,
                },
                CourseHomeActivityContainer: {
                    flexDirection: "column",
                    marginTop: 15,
                    paddingBottom: 25,
                    flex: 0.75,
                },
                fontCourseHeader: {
                    fontSize: 24,
                    lineHeight: 30,
                },
                courseDetailLeftContainer: {
                    flex: 60,
                },
                courseDetailRightContainer: {
                    flex: 40,
                },
                courseDetailButtonTrio: {
                    flexDirection: "column",
                    paddingBottom: 90,
                },
                courseDetailJCButtonMini: {
                    marginTop: 50,
                },
                coursePageMessageBoard: {
                    flexDirection: 'column',
                },
                courseFormName: {
                    marginTop: 10,
                },
                courseDetailLessonCardNoEdit: {
                    width: "40vw"
                },
                courseDetailActivityCard: {
                    flexDirection: "column",
                },
                courseDetailActivityInnerCard: {
                    flexDirection: "row",
                    marginTop: 15,
                    alignSelf: 'flex-start',
                    marginBottom: 8,
                },
                courseCheckmark: {
                    marginBottom: 15,
                    marginTop: 10,
                },
                courseDetailHeading: {
                    textAlign: 'left',
                },
                courseActivityDetails: {
                    alignSelf: 'flex-start',
                },
                courseCompletedCallOut: {
                    marginLeft: 0,
                    marginRight: 0,
                },
                courseActivityButtonNonEditable: {
                    alignSelf: 'flex-start'
                },
                courseSidebarNavIconActive: {
                    marginRight: 6,
                },
                courseSidebarNavIconInactive: {
                    marginRight: 6,
                },
                courseDetailLessonText: {
                    width: '95%',
                },
                courseDetailCoureInfoContainer: {
                    maxHeight: 225,
                },
                courseDetailActivityInnerCardCenter: {
                    width: '100%'
                },
                courseMyCohortContainer: {
                    flexWrap: 'nowrap',
                    overflow: 'scroll'
                },
                courseMyFacilitatorContainer: {
                    flexWrap: 'nowrap',
                    overflow: 'scroll'
                },
            },

            // Media Query Desktop Large Tablet
            '@media (min-width: 769) and (max-width: 1024)': {
                connectWithSliderButton: {
                    height: 45,
                    width: "100%",
                },

                connectWithTopSectionButton: {
                    paddingTop: 50,
                    paddingBottom: 35,
                    paddingRight: 15
                },
                rightCardWidth: {
                    minWidth: "100%"
                },
                detailScreenLeftCard: {
                    marginRight: 10,
                    flex: 40,
                },
                detailScreenRightCard: {
                    marginLeft: 10,
                },
                profileScreenLeftCard: {
                    marginRight: 10,
                    flex: 35,
                    minHeight: "50%",
                },
                profileScreenRightCard: {
                    marginLeft: 10,
                    flex: 65
                },
                myProfileTopButtons: {
                    width: "100%",
                },
                resourcefileFieldWrapper: {
                    top: "7vw"
                },
                dashboardConversationCard: {
                    width: "100%",
                    paddingRight: 32
                },
                dashboardConversationCardLeft: {
                    flexDirection: "row"
                },
                myProfileTopButtonsInternalContainer: {
                    flex: 1
                },
                myMapFontTitle: {
                    fontSize: 22,
                    lineHeight: 28,
                },
                myMapFontDetailMiddle: {
                    fontSize: 14,
                    lineHeight: 20,
                },
                fontFormMediumInput: {
                    maxWidth: 287
                },
                myprofilePickerMainContainer: {
                    maxHeight: 300
                },
                myProfileTopButtonsExternalContainer: {
                    flexDirection: "column"
                },
                myProfileOrgView: {
                    flexDirection: 'column'
                },
                myProfileOrgTypeInput: {
                    marginTop: 10,
                },
                myProfileCoordinates: {
                    flexDirection: "column",
                    marginBottom: 80,
                },
                fontFormSmallDarkGreyCoordinates: {
                    width: "100%",
                    marginBottom: 15
                },
                fontResourceHeaderBold: {
                    fontSize: 75,
                    width: 700,
                    height: 80,
                    paddingTop: 20
                },
                courseSidebarNavIconActive: {
                    marginRight: 8,
                },
                courseSidebarNavIconInactive: {
                    marginRight: 8,
                },
                courseHeaderContainer: {
                    flex: 18
                },
                animatedCircleContainerSideBar: {
                    marginTop: 40,
                    flex: 0.2,
                },
                courseHomeMainTextContainer: {
                    marginRight: 0
                },
                courseHomeSyllabusContainer: {
                    flex: 0.4,
                },
                courseConversationCard: {
                    width: "93%",
                },
                CourseHomeActivityContainer: {
                    flex: 0,
                },
                courseHomeCalendar: {
                    width: '85%',
                    paddingLeft: 20,
                    paddingRight: 20,
                },
                courseDetailButtonTrio: {
                    flex: 2,
                    marginBottom: 100,
                    flexDirection: 'column'
                },
                coursePageMessageBoard: {
                    flexDirection: "column"
                },
                courseFormName: {
                    marginTop: 10,
                },
                courseMessageBoardButtonsView: {
                    marginTop: 40,
                },
                courseDetailActivityInnerCard: {
                    flex: 3,
                },
                courseDetailActivityInnerCardCenter: {
                    flex: 6,
                },
                courseDetailLessonCardNoEdit: {
                    paddingLeft: 20,
                    paddingRight: 20,
                },
                courseDetailCoureInfoContainer: {
                    maxHeight: 225,
                },
            },

            '@media (min-width: 769px) and (max-width: 1279px)': {
                resourceContentMoreSeriesIframeContainer: {
                    width: '100%',
                    height: Dimensions.get('window').width * 0.12,
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    margin: "0px",
                    paddingTop: 0,
                    backgroundColor: '#F9FAFC'
                },
                resourceHeaderAgeGroupBox: {
                    width: "40%"
                },
                courseDetailButtonTrio: {
                    flex: 2
                },
            },

            '@media (min-width: 320px) and (max-width: 720px)': {
                authView2: { left: "2%", width: "96%", top: "12%", height: "100%" },
                createAccountButtonWrapper: { position: 'absolute', top: '0%', right: '5%' },
                confirmationCodeWrapper: { display: 'flex', flexDirection: 'column' },
                signUpBackButtonWrapper: { position: 'absolute', top: '0%', left: '5%' },
                // rightCardWidth: {
                //     width: "100%"
                // },
                dashboardLeftCard: {
                    flexBasis: "auto",
                },
                dashboardRightCard: {
                    flexBasis: "auto",
                    top: 2250
                },
                myProfileMainContainer: {
                    flexDirection: "column"
                },
                myProfileTopButtons: {
                    flexDirection: "column",
                    width: "100%",
                    paddingRight: 32,
                    alignItems: 'center'
                },
                myProfileTopButtonsInternalContainer: {
                    flex: 0,
                    flexDirection: "column",
                    alignSelf: "auto",
                    width: 200
                },
                profileFontTitle: {
                    minWidth: 300,
                    flex: 0,
                    textAlign: 'center',
                    marginBottom: 20
                },
                profileScreenLeftCard: {
                    marginRight: 32,
                    flex: 0,
                    paddingBottom: 100,
                    width: "auto"
                },
                profileScreenRightCard: {
                    width: "auto",
                    flex: 0,
                    top: 50,
                    marginLeft: 32
                },
                myProfileCoordinates: {
                    flexDirection: "row",
                },
                myProfileMapSelectorContainer: {
                    height: 3210,
                },
                myProfileMapSelectorInnerContainer: {
                    top: "5%",
                    margin: 0,
                    height: "20%"
                },
                myProfileMapSelectorInnerCopyContainer: {
                    width: "107%",
                    right: "3.5%",
                    borderRadius: 0,
                    flexDirection: "column",
                },
                myprofilePicker: {
                    width: 250
                },
                mapSelectorText: {
                    marginBottom: 15,
                    marginRight: 0,
                },
                eventScreenMainContainer: {
                    flexDirection: "column",
                },
                groupScreenMainContainer: {
                    flexDirection: "column",
                },
                detailScreenLeftCard: {
                    width: "auto",
                    marginRight: 0,
                    minHeight: 800,
                    marginLeft: 0,
                    marginTop: 0,
                    flex: 10,
                },
                detailScreenRightCard: {
                    width: "auto",
                    marginLeft: 0,
                    marginRight: 0
                },
                groupNameInput: {
                    width: "100%"
                },
                eventNameInput: {
                    width: "100%"
                },
                eventPageMessageBoardInnerCard: {
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontSize: 15,
                    lineHeight: 20
                },
                eventPageMessageBoard: {
                    flexDirection: "column"
                },
                coursePageMessageBoard: {
                    flexDirection: "row"
                },
                eventPageMessageBoardLeft: {
                    alignSelf: "flex-start"
                },
                eventsScreenMainContainer: {
                    flexDirection: "column",
                },
                groupsScreenMainContainer: {
                    flexDirection: "column",
                },
                resourcesScreenMainContainer: {
                    flexDirection: "column",
                },
                ResourcesMyGroups: {
                    flexDirection: "column",
                    flexWrap: "wrap",
                },
                profilesScreenMainContainer: {
                    flexDirection: "column",
                },
                resourcefileFieldWrapper: {
                    top: "17vw"
                },
                resourcesOverviewScreenMainContainer: {
                    flexDirection: "column"
                },
                resourceContentMainContainer: {
                    flexDirection: "column",
                    minHeight: 900,
                },
                resourceContentLeftContainer: {
                    marginLeft: 0,
                    marginTop: 0,
                },
                resourceContentRightContainer: {
                    marginRight: 0,
                    marginTop: 0,
                    top: 300
                },
                resourceContentEpisodeMainContainer: {
                    flexDirection: "column",
                    minHeight: 400,
                },
                resourceContentEpisodeLeftContainer: {
                    marginLeft: 0,
                    marginTop: 0,
                    flexGrow: 1
                },
                resourceContentEpisodeRightContainer: {
                    marginRight: 0,
                    marginTop: 0,
                    top: 200
                },
                dashboardConversationCard: {
                    marginLeft: 0,
                    width: "100vw",
                    paddingRight: 10
                },
                dashboardConversationBody: {
                    alignItems: "center"
                },
                profilesCard: {
                    minWidth: 340
                },
                profilesScreenLeftContainer: {
                    minHeight: 2000
                },
                fontFormName: {
                    textAlign: "left",
                },
                fontFormRole: {
                    textAlign: "left",
                },
                fontFormUserType: {
                    textAlign: "left",
                },
                myProfileErrorValidation: {
                    textAlign: "center",
                    paddingLeft: 0,
                    paddingBottom: 20
                },
                myMapCalloutEventContainer: {
                    width: 250
                },
                fontFormMediumInput: {
                    maxWidth: 250
                },
                conversationsCard: {
                    maxWidth: 300
                },
                myprofilePickerMainContainer: {
                    maxHeight: 200
                },
                myprofileBadgeContainer: {
                    top: 30
                },
                fontConnectConversation: {
                    textAlign: "center"
                },
                fontCourseHeaderBold: {
                    fontSize: 40,
                    lineHeight: 42,
                    marginRight: '5%',
                },
                fontResourceHeaderBold: {
                    fontSize: 50,
                    width: 300,
                    height: 140,
                    lineHeight: 60,
                },
                myProfileOrgView: {
                    flexDirection: 'column'
                },
                myProfileOrgTypeInput: {
                    width: '100%'
                },
                headerLeft: {
                    flex: 0.3
                },
                headerMiddleBody: {
                    marginLeft: 0
                },
                jcDirectoryButton: {
                    width: '90%'
                },
                fontResourceHeaderDescription: {
                    height: 155,
                },
                resourceHeaderAgeGroupBox: {
                    width: "70%"
                },
                resourceHeaderImgContainer: {
                    maxHeight: "550px"
                },
                courseHeaderContainer: {
                    flex: 95,
                },
                fontCourseHeaderDescription: {
                    marginRight: '5%',
                    lineHeight: 30,
                },
                courseHomeScreenMainContainer: {
                    flexDirection: "column"
                },
                fontCourseHeaderTime: {
                    marginBottom: 5,
                },
                courseSideBar: {
                    flex: 8,
                },
                courseHomeScreenSubMainContainer: {
                    flexDirection: "column",
                    paddingRight: '5%'
                },
                courseMyCohortContainer: {
                    flexWrap: 'nowrap',
                    overflow: 'scroll'
                },
                courseMyFacilitatorContainer: {
                    flexWrap: 'nowrap',
                    overflow: 'scroll'
                },
                courseMyLearningGroupContainer: {
                    flexWrap: 'nowrap',
                    overflow: 'scroll'
                },
                courseProfileImageContainer: {
                    marginTop: 400,
                },
                courseHomeDescriptionText: {
                    marginTop: 300,
                },
                courseHomeRightContainer: {
                    top: 1450,
                },
                courseProfileImageButtonsContainer: {
                    marginRight: 0,
                },
                courseDetailMainContainer: {
                    flexDirection: 'column',
                    paddingRight: '5%'
                },
                courseDetailLessonCardNoEdit: {
                    width: '100%'
                },
                courseDetailRightContainer: {
                    top: 650,
                },
                courseDetailMessageBoardContainer: {
                    marginTop: 100,
                },
                courseDetailActivityInnerCard: {
                    alignSelf: 'flex-start',
                },
                courseDetailHeading: {
                    textAlign: 'flex-start',
                },
                courseActivityDetails: {
                    alignSelf: 'flex-start'
                },
                courseActivityButtonNonEditable: {
                    alignSelf: 'flex-start'
                },
                courseDetailActivityInnerCardCenter: {
                    alignSelf: 'flex-start',
                },
                courseDetailLeftContainer: {
                    flex: 10,
                },
                courseDetailCoureInfoContainer: {
                    marginBottom: 200,
                },
                courseHomeCourseActivityText: {
                    marginTop: 75
                },
                courseHomeFileCard: { 
                    width: '100%'
                 },
                 courseHomeCoachingCard: { 
                    width: '100%'
                 },
                 courseHomeCalendar: {
                     width: '138%'
                 },
            },

            dashboardMainContainer: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
                { height: 2800, flex: 1, display: "flex", flexDirection: "row" } :
                { flexDirection: "column", },

            authView2: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
                { left: "37.5%", width: 500, top: "20%", height: "auto" } :
                { left: "2%", width: "96%", top: "0%", height: "100%" },

            authView3: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
                { left: "32.5%", width: 600, top: "15%", height: "auto" } :
                { left: "2%", width: "96%", top: "0%", height: "100%" },

            createAccountButtonWrapper: {
                position: 'absolute', top: '6%', right: '3.5%'
            },

            signUpBackButtonWrapper: {
                position: 'absolute', top: '6%', left: '20%'
            },

            confirmationCodeWrapper: { display: 'flex', flexDirection: 'row' },


            authView: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
                { left: "35%", width: "40%", top: 100, height: "auto" } :
                { left: "2%", width: "96%", top: "0%", height: "100%" },

            signUpSidebarPanel: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
                { zIndex: 1, position: "fixed", left: 0, minWidth: 196, width: "15%", height: "100%", top: 0 } :
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
                { position: "fixed", width: "15%", height: "100%", left: "0%", top: "0%" } :
                { position: "relative", width: "100%", height: "20%", left: "0%", top: 0 },

            signUpSidebarText: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
                { zIndex: 3, position: "absolute", width: "80%", height: "10%", left: "10%", top: "40%", fontFamily: "Graphik-Bold-App", fontSize: 20, lineHeight: 30, color: "#FFFFFF" } :
                { display: "none", zIndex: 3, position: "absolute", width: "80%", height: "10%", left: "10%", top: "40%", fontFamily: "Graphik-Bold-App", fontSize: 24, lineHeight: 48, color: "#FFFFFF" },

            signUpProfile: Platform.OS === 'web' && Dimensions.get('window').width > 1024 ?
                { position: "absolute", left: "15%", width: "85%", top: 10 } : Platform.OS === 'web' && Dimensions.get('window').width > 768 ?
                    { position: "absolute", left: "18%", width: "82.5%", top: 10 } : Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
                        { position: "absolute", left: "24%", width: "78%", top: 10 } :
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



            fileInputWrapperBtn: Platform.OS === 'web' && Dimensions.get('window').width > 720 ?
                { display: "inline-block", width: 200, height: 40 } :
                {},



        })
    }
}