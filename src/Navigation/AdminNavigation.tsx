import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AdminDashboard, SalesTeams} from '../screens';
import Icon from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
const Tab = createBottomTabNavigator();

const AdminNavigation = () => {
  const iconsSwitch = (tab, isFocused) => {
    switch (tab) {
      case 'Home':
        return (
          <Icon color={isFocused ? '#5796fa' : 'black'} size={25} name="home" />
        );
      case 'Team':
        return (
          <Icon color={isFocused ? '#5796fa' : 'black'} size={25} name="home" />
        );
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarLabel: '',
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Icon
                color={focused ? '#5796fa' : 'black'}
                size={25}
                name="home"
              />
            );
          },
        }}
        name="DASH_BOARD"
        component={AdminDashboard}
      />
      <Tab.Screen
        options={{
          title: 'Team',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Octicons
                color={focused ? '#5796fa' : 'black'}
                size={25}
                name="people"
              />
            );
          },
        }}
        name="SALES_TEAMS"
        component={SalesTeams}
      />
    </Tab.Navigator>
  );
};
export default AdminNavigation;
