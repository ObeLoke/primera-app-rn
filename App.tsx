import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import FlexScreen from './src/screens/FlexScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
import TareaScreen from './src/screens/TareaScreen';

const App = () => {
  return (
    // <HolaMundoScreen />
    // <ContadorScreen />

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#28425B'
    }}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App;