import React, { Component } from 'react';
import{
    ScrollView, 
    Image, 
    Text,
} from 'react-native'

export default class ScrollViewDemo extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:30}}>Scrolling Down</Text>
          <Image source={require('../images/koala.jpg')} >
            <Text style={{fontSize:50, color: '#FF0000'}}>Text Inside</Text>
          </Image>
          <Image source={require('../images/koala.jpg')} />
          <Image source={require('../images/koala.jpg')} />
          <Image source={require('../images/koala.jpg')} />
          <Image source={require('../images/koala.jpg')} />
          <Image source={require('../images/koala.jpg')} />
          <Image source={require('../images/koala.jpg')} />
          <Image source={require('../images/koala.jpg')} />
          <Image source={require('../images/koala.jpg')} />
          <Image source={require('../images/koala.jpg')} />
        </ScrollView>
    );
  }
}
