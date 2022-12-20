import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
});
