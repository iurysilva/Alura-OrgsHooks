import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native'
import Home from './src/screens/Home';

function App(){
  return <SafeAreaView style={styles.screem}>
    <Home/>
  </SafeAreaView>
}

export default App;

const styles = StyleSheet.create({
  screem: {
    flex: 1,

  }
})