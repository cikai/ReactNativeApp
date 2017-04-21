import React, { Component } from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  TextInput, 
  ToastAndroid, 
  Image, 
  Button, 
  Alert, 
  View 
} from 'react-native';

const onButtonAlert = () => {
  Alert.alert("Alert !");
};

const onButtonToast = () => {
  ToastAndroid.show('Toast !', ToastAndroid.SHORT);
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', num: ''};
  }

  render() {
    let pic = {
      uri: 'http://jsutils.b0.upaiyun.com/upload/image/koala.jpg'
    };
    return (
      <View style={{
        flex: 1, 
        flexDirection: 'column'
      }}>
        <Image source={require('../images/koala.jpg')} style={{flex: 1, height: 360}} />
        <View style={{
          flex: 1, 
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}>
          <Text style={style.red}>red 30</Text>
          <Text style={style.green}>green 40</Text>
          <Text style={style.blue}>blue 50</Text>
        </View>
        <View style={{padding: 10}} >
          <Text>Text: </Text>
          <TextInput
            style={{height: 40}}
            placeholder="Text Here ..."
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 50}}>
            {this.state.text}
          </Text>
        </View>
        <View style={{padding: 10}} >
          <Text>Num: </Text>
          <TextInput
            style={{height: 40}}
            placeholder="Number Here ..."
            keyboardType='numeric'
            onSubmitEditing={(num) => this.setState({num})}
          />
        </View>
        <View style={{
          padding: 10, 
          height:60, 
          flexDirection: 'row', 
          justifyContent: 'space-around'
        }} >
          <Button
            onPress={onButtonAlert}
            title="Alert"
            style={{flex: 1}}
          />
          <Button
            onPress={onButtonToast}
            title="Toast"
            style={{flex: 1}}
          />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  red: {
    color: "red",
    fontSize: 30
  },
  green: {
    color: "green",
    fontSize: 40
  },
  blue: {
    color: "blue",
    fontSize: 50
  }
});
