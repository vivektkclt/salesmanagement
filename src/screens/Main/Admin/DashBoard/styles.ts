import {StyleSheet} from 'react-native';
import Colors from '../../../../theme/Colors';

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
export default styles;
