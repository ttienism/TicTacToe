import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './components/board';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TicTacToe</Text>
      <Board></Board>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  }
});
