import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet
} from 'react-native';

class Button extends Component {
  _onPressButton() {
    Alert.alert("You press the button !");
  }

  _onLongPress() {
    Alert.alert("You long press the button !");
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={style.button} onPress={this._onPressButton} onLongPress={this._onLongPress}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center'
          }}>OK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'cornflowerblue',
    overflow: 'hidden'
  }
});

export default Button;
