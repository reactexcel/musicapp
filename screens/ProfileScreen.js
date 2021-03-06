import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView
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
          <View style={styles.ImageContainer}>
            <Image
              style={styles.Image}
              source={require('../assets/images/sergeinovikov.png')}
            />
          </View>
          <Text style={styles.artistName}>
            Sergei Novikov
          </Text>
          <View style={styles.textContainer}>
            <Text style={styles.artistName}>
              Tsongas Center at UMass Lowell
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>
              Enter email for free access to artist’s music:
            </Text>
            <View style={styles.margin}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your email"
              />
            </View>
          </View>
          <View style={styles.donateContainer}>
            <Text style={styles.artistName}>
              Support Artist
            </Text>
            <View style={styles.donateView}>
              <Text style={styles.donateText}>
                $1
              </Text>
              <Text style={styles.donateText}>
                $2
              </Text>
              <Text style={styles.donateText}>
                $5
              </Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:48,
    justifyContent:'space-between'
  },
  ImageContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
  },
  Image:{
    width:width * 0.75,
    height: height * 0.45
  },
  artistName:{
    marginTop:5,
    fontSize:20,
    fontWeight:'800',
    textAlign:'center'
  },
  textContainer:{
    padding:10
  },
  emailContainer:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:10
  },
  emailText:{ 
    fontSize:18,
    textAlign:'center',
  },
  TextInput:{
    alignSelf:'center',
    borderWidth:1, 
    width:width * 0.70, 
    height:45,
    paddingLeft:5
  },
  margin:{
    marginTop:10
  },
  donateView:{
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center'
  },
  donateContainer: {
    marginBottom:10
  },
  donateText:{
    padding:10,
    // paddingRight:15,
    fontSize:20,
    fontWeight:'800'
  }
});
