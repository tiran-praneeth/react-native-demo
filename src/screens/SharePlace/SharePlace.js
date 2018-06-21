import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceView from '../../components/PlaceView';
import { addPlace } from '../../store/action/index';

class SharePlaceScreen extends Component {

  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  };
  
  onNavigatorEvent = (event) => {
    console.log('====================================');
    console.log(event);
    console.log('====================================');
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  }

  onPlaceAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  render() {
    return (
      <View>
        <PlaceView onPlaceAdded={this.onPlaceAddedHandler}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (placeName) => { dispatch(addPlace(placeName)) }
  }
};


export default connect(null, mapDispatchToProps)(SharePlaceScreen);
