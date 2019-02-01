import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';

export default createAppContainer(createStackNavigator({
  Welcome: WelcomeScreen,
}));