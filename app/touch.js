import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Alert,
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

export default class TouchDemo extends Component {
  _onPressButton() {
    Alert.alert("You press the button !");
  }

  _onLongPress() {
    Alert.alert("You long press the button !");
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPress}>
          <Text style={{
            fontSize: 25,
            color: 'blue'
          }}>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableNativeFeedback onPress={this._onPressButton} onLongPress={this._onLongPress}>
          <Text style={{
            fontSize: 25,
            color: 'blue',
            paddingTop: 20
          }}>TouchableNativeFeedback</Text>
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPress}>
          <Text style={{
            fontSize: 25,
            color: 'blue',
            paddingTop: 20
          }}>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={this._onPressButton} onLongPress={this._onLongPress}>
          <Text style={{
            fontSize: 25,
            color: 'blue',
            paddingTop: 20
          }}>TouchableWithoutFeedback</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
