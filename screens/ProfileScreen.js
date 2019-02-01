import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});
