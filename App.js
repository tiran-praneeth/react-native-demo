import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";

import configureStore from './src/store/configureStore';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();

// Register Screen
Navigation.registerComponent(
  'demo.AuthScreen', // uniq id
  () => AuthScreen, // function for component to load
  store, // redux store
  Provider // provider
);

Navigation.registerComponent(
  'demo.FindPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'demo.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'demo.PlaceDetailScreen',
  () => PlaceDetail,
  store,
  Provider
);

Navigation.registerComponent(
  'demo.SideDrawerScreen',
  () => SideDrawer,
  store,
  Provider
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'demo.AuthScreen',
    title: 'Login'
  }
});
