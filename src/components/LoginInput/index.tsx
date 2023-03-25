import {View, Text, TextInput} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
interface LoginInputInterFace {
  label: string;
  value: string;
  placeholder: string;
  onChangeText?: any;
  isSecured?: boolean;
}
const LoginInput: FC<LoginInputInterFace> = ({
  label = 'Enter value',
  value = '',
  placeholder = 'enter value',
  onChangeText,
  isSecured = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      {value ? <Text style={styles.inputTitle}>{label}</Text> : null}
      {/* <View style={styles.inputWrapper}> */}
      <TextInput
        secureTextEntry={isSecured}
        onChangeText={onChangeText}
        value={value}
        style={styles.txtInput}
        placeholder={placeholder}
      />
      {/* </View> */}
    </View>
  );
};

export default LoginInput;
