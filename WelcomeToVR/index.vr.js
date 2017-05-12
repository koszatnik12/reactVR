import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('airport.jpg')}/>
          <Image source={asset('radio1.png')}
            style={{
              width: 0.5, 
              height: 0.5,
              transform: [{translate: [-1.7, 0, -3]}],
            }} 
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
