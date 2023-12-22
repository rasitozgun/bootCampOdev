import React from 'react';

import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import Item from './components/Item';
import Navbar from './components/Navbar';

const data = [
  {
    id: 1,
    header: 'Head & Face',
    desc: '11 diseases',
    bgColor: '#eb7662',
  },
  {
    id: 2,
    header: 'Back & Neck',
    desc: '9 diseases',
    bgColor: '#8dc4bb',
  },
  {
    id: 3,
    header: 'Elbow & Shoulders',
    bgColor: '#f2982f',
    desc: '12 diseases',
  },
  {
    id: 4,
    header: 'Hand & Arm',
    bgColor: '#327389',
    desc: '2 diseases',
  },
];
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.date}>Friday, 15 Dec</Text>
          <Icon style={styles.icon} name="search" size={20} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Learn</Text>
          <Text style={styles.desc}>Choose the part of the body</Text>
        </View>
        <View style={styles.floatList}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={item => <Item props={item} />}
          />
        </View>
      </View>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  topContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: '#5d626972',
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  icon: {
    color: '#5d626972',
    fontSize: 35,
  },
  headerContainer: {
    marginTop: 20,
    fontFamily: 'Roboto',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Roboto',
  },
  desc: {
    paddingTop: 10,
    fontSize: 15,
    color: 'black',
    fontFamily: 'Roboto',
  },
  floatList: {
    marginTop: 20,
  },
});

export default App;
