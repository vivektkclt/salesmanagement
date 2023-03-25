import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Welcome} from '../screens';
const Stack = createNativeStackNavigator();

const OnBoarding = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WELCOME" component={Welcome} />
      <Stack.Screen name="LOGIN" component={Login} />
    </Stack.Navigator>
  );
};
export default OnBoarding;
