import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Basic Screen',
  };

  render() {
    return (
      <View>
          <Text>Initial Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
