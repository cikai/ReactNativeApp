import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';

import api from '../config/api';

class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  componentWillMount() {
    api.getGithubApi().then((res) => {
     this.setState({
       user: res
     });
    });
  }

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.state.user.avatar_url}}
          featured
          title={this.state.user.name}
          caption={this.state.user.email}
        />
        <List>
          <ListItem
            title="Name"
            rightTitle={this.state.user.name}
            hideChevron
          />
          <ListItem
            title="Company"
            rightTitle={this.state.user.company}
            hideChevron
          />
          <ListItem
            title="Blog"
            rightTitle={this.state.user.blog}
            hideChevron
          />
          <ListItem
            title="Email"
            rightTitle={this.state.user.email}
            hideChevron
          />
          <ListItem
            title="Bio"
            rightTitle={this.state.user.bio}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

const MyApp = DrawerNavigator({
  FetchApi: {
    screen: FetchApi,
    navigationOptions: {
      drawerLabel: 'Github',
    }
  },
});

export default MyApp;
