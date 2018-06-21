import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceView extends Component {
  
  /* constructor(props) {
    super(props);
    this.state = {
      placeName: ""
    };
    this.placeAddHandlers = this.placeAddHandler.bind(this);
  } */

  state = {
    placeName: ""
  };

  placeNameChangeHandler = e => {
    this.setState({
      placeName: e
    });
  };

  placeAddHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  /* placeAddHandlers() {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.placeSubmitHandler(this.state.placeName);
  } */

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Text input"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          title="Add Me"
          style={styles.placeButton}
          onPress={this.placeAddHandler}
        />
        {/* <Button title="Add Me" style={styles.placeButton} onPress={this.placeAddHandlers} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceView;
