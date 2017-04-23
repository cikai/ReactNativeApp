import React, { Component } from 'react';
import {
    Text,
    Alert,
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

import Button from '../components/Button';

export default class TouchableDemo extends Component {
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
          <View>
            <Text style={{
            fontSize: 25,
            color: 'blue',
            paddingTop: 20
          }}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <Button />
      </View>
    );
  }
}
