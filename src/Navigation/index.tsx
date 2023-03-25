import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from './OnBoarding';
import AdminNavigation from './AdminNavigation';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ON_BOARDING" component={OnBoarding} />
        <Stack.Screen name="ADMIN" component={AdminNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
