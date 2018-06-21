import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItems from "./ListItem";

const listView = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItems
          placeName={info.item.name}
          placeImage={info.item.image}
          onPressItem={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default listView;
