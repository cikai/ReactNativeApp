import { DrawerNavigator } from 'react-navigation';

import ScrollView from './ScrollView';
import ListView from './ListView';

const MyApp = DrawerNavigator({
  ScrollView: {
    screen: ScrollView,
    navigationOptions: {
      drawerLabel: 'ScrollView',
    }
  },
  ListView: {
    screen: ListView,
    navigationOptions: {
      drawerLabel: 'ListView',
    }
  },
});

export default MyApp;
