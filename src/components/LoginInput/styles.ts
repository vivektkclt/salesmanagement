import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    maxHeight: 60,
    justifyContent: 'flex-end',
    padding: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 50,
  },
  inputTitle: {marginLeft: -10, marginBottom: 5},
  txtInput: {height: '100%', fontSize: 18, color: 'black'},
  inputWrapper: {
    flexDirection: 'row',
  },
});
export default styles;
