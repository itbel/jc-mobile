﻿import React from 'react';
import { Icon, Picker, StyleProvider, Container, Content } from 'native-base';
import { Text } from 'react-native'
import JCButton, { ButtonTypes } from '../Forms/JCButton'

import getTheme from '../../native-base-theme/components';

import Validate from '../Validate/Validate'
import { Image } from 'react-native'
import { API } from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import GRAPHQL_AUTH_MODE from 'aws-amplify-react-native'
import CourseHeader from '../CourseHeader/CourseHeader';
import JCComponent from '../JCComponent/JCComponent';
import data from '../../screens/CourseOverviewScreen/course.json';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CourseContext } from './CourseContext';

interface Props {
  navigation?: any
  route?: any
}


class CourseCoachingImpl extends JCComponent<Props>{
  constructor(props: Props) {
    super(props);


  }
  static Consumer = CourseContext.Consumer;

  render(): React.ReactNode {
    console.log("CourseCoaching")
    return (

      <CourseCoachingImpl.Consumer>
        {({ state, actions }) => {
          return (
            state.data && state.currentScreen == "Coaching" ?
              <StyleProvider style={getTheme()}>

                <Container style={{ flex: 85 }}>
                  <CourseHeader groupData={state.data}></CourseHeader>

                  <Container style={{ flex: 80 }}>
                    <Content style={{ flex: 80 }}>
                      <Container style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start' }}>
                        <Container style={{ flex: 70, flexDirection: "column", justifyContent: 'flex-start' }}>
                          <Image style={{ margin: 0, padding: 0, width: 40, height: 45 }} source={require("../../assets/profile-placeholder.png")} />
                          <JCButton buttonType={ButtonTypes.Outline} onPress={() => { null }}>Book a Call</JCButton>
                          <JCButton buttonType={ButtonTypes.Outline} onPress={() => { null }}>Send Message</JCButton>
                          <Text>Hi </Text>
                          <Text>For your journey in leadership formation, I’d like to invite you to our bi-weekly coaching sessions where we can connect and discuss issues in more details. Let’s schedule our Coaching Calls - talk soon!

                          Thanks!
- Jon</Text>
                          <Container>
                            <Text>Schedule your</Text>
                            <Text>30 Minute Coaching Call</Text>

                            <Container style={{ flexDirection: "row" }}>
                              <Container style={{ flex: 50 }}>
                                <Picker
                                  mode="dropdown"
                                  iosIcon={<Icon name="arrow-down" />}
                                  style={{ width: undefined }}
                                  placeholder="Select your Coach"
                                  placeholderStyle={{ color: "#bfc6ea" }}
                                  placeholderIconColor="#007aff"

                                >
                                  {//   selectedValue={this.state.selected2}
                                    // onValueChange={this.onValueChange2.bind(this)}
                                  }
                                  <Picker.Item label="Jon Hand" value="key0" />

                                </Picker>

                              </Container>
                              <Container style={{ flex: 50 }}>
                                <Text>Please confirm</Text>
                                <Text>you’re going to schedule coaching call with Jon Hand.</Text>
                                <Text>30 minutes</Text>
                                <Text>Monday, August 23  -  1:30 PM – 2:00 PM</Text>
                                <JCButton buttonType={ButtonTypes.Outline} onPress={() => { null }}>Yes, schedule call</JCButton>
                              </Container>
                            </Container>
                          </Container>
                        </Container>
                        <Container style={{ flex: 30, flexDirection: "column", alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start' }}>


                        </Container>
                      </Container>
                    </Content>
                  </Container>
                </Container>

              </StyleProvider>
              :
              null
          )
        }}
      </CourseCoachingImpl.Consumer>


    );
  }
}
export default function CourseCoaching(props: Props): JSX.Element {
  const route = useRoute();
  const navigation = useNavigation()
  return <CourseCoachingImpl {...props} navigation={navigation} route={route} />;
}