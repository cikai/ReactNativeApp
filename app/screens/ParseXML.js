/**
 * Created by cikai on 17-4-25.
 */
import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

import XMLParser from 'react-xml-parser';

const fetchApi = () => {
  let url = `http://192.168.1.254/?custom=1&cmd=2001&par=1`;
  fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/xml"
    }
  }).then(function(response) {
    if(response.status === 200){
      return response.text();
    }else{
      return {}
    }
  }).then(function(data){
    console.log(data);
    var xml = new XMLParser().parseFromString(xmltext.replace(/[\r\n]/g,""));
    console.log(xml);
  }).catch(function(err){
    console.log(err);
  })
};

class ParseXML extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 150}}>
        <Button title={'录制'} onPress={fetchApi}></Button>
      </View>
    );
  }
}

export default ParseXML;
