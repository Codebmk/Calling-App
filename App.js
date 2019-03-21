import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Body from './components/body'

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.main}>
        <Body/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
});
