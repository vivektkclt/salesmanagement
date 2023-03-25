import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import Colors from '../../theme/Colors';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          source={images.pro_pic}
          style={styles.proPic}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imgContainer: {
    height: '100%',
    width: 54,
    resizeMode: 'contain',
    backgroundColor: Colors.white,
    borderRadius: 100,
  },
  proPic: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
});
export default Header;
