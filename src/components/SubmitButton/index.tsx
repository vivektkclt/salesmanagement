import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
interface SubmitBtnInterface {
  label: string;
  onPress: any;
}
const SubmitButton: FC<SubmitBtnInterface> = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
