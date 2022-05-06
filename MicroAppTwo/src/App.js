import React from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: 'white',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: 'white',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={backgroundStyle}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'purple',
            borderStyle: 'dashed',
            borderWidth: 5,
            borderColor: 'red',
          }}>
          <Section title="App 2">
            This screen comes from{' '}
            <Text style={styles.highlight}>MicroAppTwo</Text> container.
          </Section>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
