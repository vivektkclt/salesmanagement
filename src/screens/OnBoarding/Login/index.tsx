import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Common from '../../../theme/Common';
import images from '../../../assets/images';
import styles from './styles';
import {LoginInput, SubmitButton} from '../../../components';
const Login = ({navigation}: any) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.mainContainer}
      source={images.login_bg}>
      <SafeAreaView style={Common.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={styles.backImg}
              source={images.back_circle}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Welcome !</Text>
          <Text style={styles.subTitle}>Enter Your Username & Password</Text>
        </View>
        <View style={styles.bottomContainer}>
          <LoginInput
            value={userName}
            onChangeText={setUsername}
            placeholder="Enter user name"
            label="User Name"
          />
          <LoginInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            label="Password"
            isSecured={true}
          />
          <View style={styles.bottomBtnsContainer}>
            <SubmitButton
              onPress={() => navigation.navigate('ADMIN')}
              label="LOGIN"
            />
            <Text style={Common.hyperLinkText}>Forgotten password?</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
