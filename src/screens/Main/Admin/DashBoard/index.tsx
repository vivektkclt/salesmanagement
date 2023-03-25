import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Common from '../../../../theme/Common';
import {Filter, Header} from '../../../../components';

const DashBoard = () => {
  return (
    <SafeAreaView style={Common.wrapper}>
      <Header />
      <View style={Common.container}>
        <Filter />
        <View style={{flex: 1}}>
          <Text>DashBoard</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;
