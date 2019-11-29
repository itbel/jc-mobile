﻿import React from 'react';
import { Component } from 'react';
import Amplify from 'aws-amplify';
import awsConfig from '../../src/aws-exports';
import FederatedSignin from '../../components/FederatedSignin/FederatedSignin'
Amplify.configure(awsConfig);
import Header from '../../components/Header/Header'
import { Authenticator } from 'aws-amplify-react-native';
import { Drawer, Container, Left, Icon, Body, Title, Right, Button } from 'native-base';
import { DrawerActions } from 'react-navigation';



const federated = {
  google_client_id: '',
  facebook_app_id: '579712102531269',
  amazon_client_id: ''
};
interface IProps {
  navigation: any
}
interface IState {

}
export default class LoginScreen extends React.PureComponent<IProps, IState> {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header title="Login" navigation={this.props.navigation} />

        <Authenticator federated={federated} >
          <FederatedSignin></FederatedSignin>
        </Authenticator>
      </Container>

    );
  }
}