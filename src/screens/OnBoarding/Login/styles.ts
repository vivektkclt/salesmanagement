import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    resizeMode: 'contain',
    padding: 25,
  },
  topContainer: {
    flex: 1,
  },
  backImg: {
    height: 35,
    width: 35,
  },
  title: {
    fontSize: 32,
    marginTop: 30,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 15,
    marginTop: 10,
  },
  bottomContainer: {
    flex: 1.8,
  },
  bottomBtnsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
