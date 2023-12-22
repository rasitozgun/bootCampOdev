import React from 'react';
import {ListRenderItemInfo, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';

type ItemProps = {
  props: ListRenderItemInfo<{
    header: string;
    desc: string;
    bgColor: string;
  }>;
};

function Item({props}: ItemProps): React.JSX.Element {
  const containerStyle = {
    ...styles.container,
    backgroundColor: props.item.bgColor,
  };
  return (
    <View style={containerStyle}>
      <Text style={styles.header}>{props.item.header}</Text>
      <Text style={styles.desc}>{props.item.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    borderRadius: 20,
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  desc: {
    fontSize: 13,
    color: '#ffffff8c',
  },
});

export default Item;
