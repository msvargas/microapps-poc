import React from 'react';
import {Platform, Text} from 'react-native';

const SpecificPlatform = () => (
  <Text style={{color: 'white', fontWeight: 'bold'}}>
    Platform: {Platform.OS}
  </Text>
);

export default SpecificPlatform;
