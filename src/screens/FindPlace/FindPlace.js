import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { connect } from 'react-redux';

import ListView from '../../components/ListView';

class FindPlaceScreen extends Component {

  itemSelectHandler = (key) => {
    const selectPlace = this.props.places.find( (places) =>{
      return places.key === key
    });

    this.props.navigator.push({
      screen: 'demo.PlaceDetailScreen',
      title: selectPlace.name,
      passProps: {
        selectedPlace: selectPlace
      }
    });
  }

  render() {
    return (
      <View>
        <ListView places={this.props.places} onItemSelected={this.itemSelectHandler}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.places.places
})

export default connect(mapStateToProps) (FindPlaceScreen);
