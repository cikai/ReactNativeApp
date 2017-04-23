import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Layout from '../screens/BasicLayout';
import ListView from '../screens/ListView';
import ScrollView from '../screens/ScrollView';
import TouchableDemo from '../screens/TouchableDemo';

export const Tabs = TabNavigator({
  ListView: {
    screen: ListView,
    navigationOptions: {
      tabBar: {
        label: 'ListView',
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
  },
  ScrollView: {
    screen: ScrollView,
    navigationOptions: {
      tabBar: {
        label: 'ScrollView',
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },
});

export const Root = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerText: 'ReactNativeApp',
    }
  },
  Layout: {
    screen: Layout,
  },
  Tabs: {
    screen: Tabs,
  },
  TouchableDemo: {
    screen: TouchableDemo,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});
