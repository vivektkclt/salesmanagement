import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Common from '../../../theme/Common';
import images from '../../../assets/images';
const Welcome = ({navigation}: any) => {
  return (
    <SafeAreaView style={Common.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Make Your{'\n'} Bussiness Easy{'\n'} And Professional
        </Text>
        <Text style={styles.subTitle}>
          The Best Application POS that you can use to help all your bussiness
          needs
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Image style={styles.welcomeImg} source={images.welcome_img} />
        <TouchableOpacity
          onPress={() => navigation.navigate('LOGIN')}
          style={styles.nextButton}>
          <Text style={styles.btnText}>Get Started</Text>
          <Image style={styles.btnImg} source={images.arrow_right} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    flex: 1,
    padding: 30,
    paddingTop: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 45,
    marginBottom: 30,
  },
  subTitle: {
    color: 'gray',
    lineHeight: 25,
    fontSize: 18,
  },
  bottomContainer: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    width: '60%',
    height: '12%',
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  btnImg: {width: 25, height: 25, left: 35},
  welcomeImg: {
    height: 250,
    width: 310,
    resizeMode: 'contain',
    marginBottom: 25,
  },
});
