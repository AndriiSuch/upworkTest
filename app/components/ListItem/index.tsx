import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {IOption} from '../List';
import {styles} from './styles';

interface IListItem {
  item: IOption;
}
export const ListItem: FC<IListItem> = ({item}) => {
  return (
    <View style={[styles.itemContainer, {backgroundColor: item.color}]}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};
