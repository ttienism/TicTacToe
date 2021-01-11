import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Square from './square';

class Board extends React.Component {
  // state for squares, state for turn "X" or "O"
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(''),
      xIsNext: true,
    };
  }

  // calculate winner
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  // handle square click - event
  handlePress(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  // play again - event
  resetGame() {
    this.setState({
      squares: Array(9).fill(''),
      xIsNext: true,
    });
  }

  // render board
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onPress={() => this.handlePress(i)}/>;
  }
  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <View style={styles.boardRow}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </View>
          <View style={styles.boardRow}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </View>
          <View style={styles.boardRow}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </View>
        </View>
        <Text>{status}</Text>
        <Button onPress={() => this.resetGame()} title='Play Again' />
      </View> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    borderWidth: 2,
    margin: 20,
  },
  boardRow: {
    flexDirection: 'row'
  }
});
export default Board