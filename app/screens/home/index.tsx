import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/Header';
import {List} from '../../components/List';

import {styles} from './styles';

const options = [
  {
    title: 1,
    color: 'red',
  },
  {
    title: 2,
    color: 'blue',
  },
  {
    title: 3,
    color: 'yellow',
  },
  {
    title: 4,
    color: 'green',
  },
  {
    title: 5,
    color: 'purple',
  },
];
export const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.body}>
        <List options={options} />
      </View>
    </View>
  );
};
