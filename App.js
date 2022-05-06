import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Text>Open up App.js to start your app!</Text>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

