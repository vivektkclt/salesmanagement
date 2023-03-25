import React from 'react';
import {View} from 'react-native';
import Navigation from './src/Navigation';
import Common from './src/theme/Common';
const App = () => {
  return (
    <View style={Common.wrapper}>
      <Navigation />
    </View>
  );
};

export default App;
