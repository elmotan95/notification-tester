import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, What's your name?</Text>
      <TextInput style={styles.inputStyle} />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Main')}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#957DAD',
  },
  textStyle: {
    fontSize: 24,
    color: '#FFF',
  },
  inputStyle: {
    color: '#FFF',
    height: 48,
    minWidth: '60%',
    fontSize: 20,
    textAlign: 'center',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
  },
  buttonStyle: {
    marginTop: 16,
    height: 40,
    width: '30%',
    borderRadius: 4,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
