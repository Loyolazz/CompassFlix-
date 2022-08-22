import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/login/login';
import TabBottomRoutes from '../tab/tabbar';
import {SelectionMovies} from '../../screens/selectionMovies/selectionMovies';
import {Splash} from '../../screens/Splash';
import Profile from '../../screens/Profile/profile';
import MoviesDetail from '../../screens/moviesDetail/moviesDetail';
const {Navigator, Screen} = createNativeStackNavigator();

const Stack = () => {
  return (
    <Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Screen name="Splash" component={Splash} />
      <Screen name="Login" component={Login} />
      <Screen name="TabBottomRoutes" component={TabBottomRoutes} />
      <Screen name="SelectionMovies" component={SelectionMovies} />

      <Screen name="MoviesDetail" component={MoviesDetail} />
    </Navigator>
  );
};

export default Stack;
