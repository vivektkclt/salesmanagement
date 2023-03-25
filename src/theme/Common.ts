import {StyleSheet} from 'react-native';
import Colors from './Colors';

const Common = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 25,
  },
  hyperLinkText: {
    color: 'gray',
    marginTop: 20,
    fontSize: 13,
  },
  shdow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 5,
  },
});

export default Common;
