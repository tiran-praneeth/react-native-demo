import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const inputView = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      placeholder="Text input"
      value={props.placeName}
      onChangeText={props.placeNameChangeHandler}
    />
    <Button title="Add Me" style={styles.placeButton} onPress={props.placeSubmitHandler} />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default inputView;