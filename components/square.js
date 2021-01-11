import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

class Square extends React.Component {
  // state for letter "", "X" or "O"
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  // render square
  render() {
    return (  
      <Text style={styles.square} onPress={() => this.props.onPress()}>
          {this.props.value}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    width: 50,
    height: 50,
    color: 'black',
    textAlign: 'center',
    fontSize: 40
  } 
});
export default Square