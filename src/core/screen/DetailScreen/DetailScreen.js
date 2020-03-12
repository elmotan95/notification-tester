import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppHeader from '../../uikit/AppHeader/AppHeader';

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader title={'Details'} />
      <Text style={styles.textStyle}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  textStyle: {
    fontSize: 24,
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

export default DetailScreen;
