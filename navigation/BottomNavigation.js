import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/UI/colors/colors';

// Screens
import Trending from '../screens/Trending';
import Search from '../screens/Search';
import Movies from '../screens/Movies';
import TVSeries from '../screens/TVSeries';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => (
  <Tab.Navigator
    initialRouteName="Trending"
    barStyle={{backgroundColor: colors.accent}}>
    <Tab.Screen
      name="Trending"
      component={Trending}
      options={{
        tabBarLabel: 'Trending',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: 'Trending',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="Trending" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Movies"
      component={Movies}
      options={{
        tabBarLabel: 'Movies',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="Movies" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="TVSeries"
      component={TVSeries}
      options={{
        tabBarLabel: 'TVSeries',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="TVSeries" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigation;
