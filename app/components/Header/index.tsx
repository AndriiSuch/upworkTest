import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

interface IHeader {
  title: string;
}
export const Header: FC<IHeader> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
