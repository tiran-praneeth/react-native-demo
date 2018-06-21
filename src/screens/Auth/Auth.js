import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import startMainTab from '../MainTabs/startMainTab';

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTab();
  }

  render() {
    return (
      <View>
          <Text>Auth Screen</Text>
          <Button title="Login" onPress={this.loginHandler}/>
      </View>
    )
  }
};

export default AuthScreen;