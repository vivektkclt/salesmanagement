import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Common from '../../../../../theme/Common';
import Header from '../../../../../components/Header';

const SalesTeams = () => {
  return (
    <SafeAreaView style={Common.wrapper}>
      <Header />
      <View>
        <Text>SalesTeams</Text>
      </View>
    </SafeAreaView>
  );
};

export default SalesTeams;
