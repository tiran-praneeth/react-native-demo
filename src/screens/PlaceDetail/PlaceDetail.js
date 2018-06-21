import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { deletePlace } from "../../store/action/index";

import Icon from "react-native-vector-icons/Ionicons";

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={this.props.selectedPlace.image}
            style={styles.placeImage}
          />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <TouchableOpacity onPress={this.placeDeletedHandler}>
          <View style={styles.deleteButton}>
            <Icon size={30} name={"ios-trash"} color="red" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
