import React, {FC, useCallback, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from '../ListItem';

export interface IOption {
  title: number;
  color: string;
}
interface IList {
  options: IOption[];
}
export const List: FC<IList> = ({options}) => {
  const [_, setCurrentSectionIndex] = useState(0);

  const onScroll = useCallback(({viewableItems}: any) => {
    if (viewableItems?.length === 1) {
      setCurrentSectionIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {viewAreaCoveragePercentThreshold: 100, onViewableItemsChanged: onScroll},
  ]);

  return (
    <FlatList
      data={options}
      renderItem={({item}) => <ListItem item={item} />}
      horizontal={true}
      pagingEnabled
      viewabilityConfig={viewabilityConfigCallbackPairs}
      showsHorizontalScrollIndicator={false}
    />
  );
};
