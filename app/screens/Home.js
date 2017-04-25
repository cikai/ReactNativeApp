import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { page } from '../config/data';

class Home extends Component {
  goToPage = (page) => {
    this.props.navigation.navigate(page);
  };

  render() {
    return (
      <ScrollView>
        <List>
          {page.map((p) => (
            <ListItem
              key={p.name}
              title={p.name}
              subtitle={p.name}
              onPress={() => this.goToPage(p.name)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Home;
