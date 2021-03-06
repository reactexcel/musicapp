import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default createAppContainer(createStackNavigator({
  Welcome: WelcomeScreen,
  Profile:ProfileScreen,
}));