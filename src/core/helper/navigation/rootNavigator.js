import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConsoleScreen from '../../screen/ConsoleScreen/ConsoleScreen';
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="FCM Testing" component={ConsoleScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
