import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('123');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Toggle Text"
        onPress={() => setOutputText(outputText === '123' ? '321' : '123')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
