/**
 * Created by cikai on 17-4-25.
 */
import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

import parser from 'xml2json';
// var parser = require('xml2json');

const fetchApi = () => {
  let url = `http://wthrcdn.etouch.cn/WeatherApi?citykey=101010100`;
  let resp = fetch(url).then((res)=>res);
  let xml = "<foo attr=\"value\">bar</foo>";
  let result = parser.toJson(xml);
  console.log(result);
};

class ParseXML extends Component {
  render() {
    return (
      <View>
        <Button title={'fetch'} onPress={fetchApi}></Button>
      </View>
    );
  }
}

export default ParseXML;
