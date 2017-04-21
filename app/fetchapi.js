import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View    
} from 'react-native';

export default class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', description: ''};
  }

  render() {
    let movies = async () => {
      try {
        let response = await fetch('https://facebook.github.io/react-native/movies.json');
        let responseJson = await response.json();
        return responseJson;
      } catch(error) {
        console.error(error);
      }
    };
    movies().then(function(result){
      result.title = this.setState({title});
      result.description = this.setState({description});
    });
    return (
      <View style={{
        flex: 1
      }}>
        <Text style={style.blue}>{this.state.title}</Text>
        <Text style={style.blue}>{this.state.description}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  blue: {
    color: "blue",
    fontSize: 50
  }
});
