import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Card from '../components/Card';


const { width, height } = Dimensions.get('window');

export const Mainpage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Anglická slovíčka</Text>
      <View style={styles.cardsContainer}>
        <Card />
        <Card />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    color: '#ebecee',
    fontSize: height * 0.05,
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: width * 0.05,
    marginTop: height * 0.02,
  },
  cardsContainer: {
    width: width * 0.8,
    height: height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mainpage;
