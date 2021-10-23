import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import FlexScreen from './src/screens/FlexScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';

const App = () => {
  return (
    // <HolaMundoScreen />
    // <ContadorScreen />

    <SafeAreaView style={{ flex: 1 }}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  )
}

export default App;