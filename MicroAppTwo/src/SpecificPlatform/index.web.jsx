import React from 'react';
import {Platform, Text} from 'react-native';

const SpecificPlatform = () => (
  <Text
    style={{
      backgroundColor: 'darkblue',
      color: 'white',
      borderRadius: 24,
      padding: 24,
      textAlign: 'center',
    }}>
    Platform: {Platform.OS}
  </Text>
);

export default SpecificPlatform;
