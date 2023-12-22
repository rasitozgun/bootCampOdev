import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.icon}>
        <Icon name="home" size={30} />
        <Text>Home</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="book" size={30} />
        <Text>Learn</Text>
      </View>
      <View style={styles.logo}>
        <Text style={styles.logoText}>M</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="bar-chart" size={30} />
        <Text>Progress</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="person" size={30} />
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
    width: '100%',
    right: 0,
    left: 0,
    borderTopWidth: 0.4,
    borderColor: '#c0c0c0c3',
    zIndex: 999,
    paddingHorizontal: 20,
  },
  icon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  logo: {
    backgroundColor: '#fb8e21',
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    bottom: 0,
    left: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 50,
  },
  logoText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
