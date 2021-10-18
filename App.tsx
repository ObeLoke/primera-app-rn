import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';

const App = () => {
  return (
    // <HolaMundoScreen />
    // <ContadorScreen />

    <SafeAreaView>
      <BoxObjectModelScreen />
    </SafeAreaView>
  )
}

export default App;