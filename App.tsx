import React from 'react';
import {
  Appearance,
  Platform,
  PlatformColor,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.borderTest}>
          <Text>Border Color Test</Text>
        </View>
        <View style={styles.information}>
          <Text>Current Color Scheme: {Appearance.getColorScheme()}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  borderTest: {
    borderWidth: 5,
    ...Platform.select({
      ios: {borderColor: PlatformColor('systemBlue')},
      android: {
        borderColor: PlatformColor('@android:color/holo_blue_bright'),
      },
      default: {borderColor: 'blue'},
    }),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  information: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
