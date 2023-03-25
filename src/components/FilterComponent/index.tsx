import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../theme/Colors';

const FilterComponent = () => {
  const filterList = ['1D', '1W', '1M', '1Y', 'ALL'];
  const [selectedIndex, setIndex] = useState<number>(0);
  return (
    <View>
      <FlatList
        horizontal
        scrollEnabled={false}
        contentContainerStyle={styles.filterContainer}
        data={filterList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setIndex(index)}
              style={
                index === selectedIndex ? styles.selectedFilter : styles.filter
              }>
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  filter: {
    width: 60,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedFilter: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 5,
    width: 60,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    backgroundColor: '#f7f7f7',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 100,
  },
});
export default FilterComponent;
