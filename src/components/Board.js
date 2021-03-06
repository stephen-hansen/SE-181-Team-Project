import React from 'react';
import Square from './Square';
import './App.css';
import getIconUrl from './imageUrls';

class Board extends React.Component {
  renderSquare(i, squareShade, r, c) {
    const piece = this.props.squares[r][c];
    return <Square
    key = {i}
    piece = {(piece) ? piece.string : ''}
    style = {(piece) ? { backgroundImage: `url('${getIconUrl(piece.string, piece.color)}')` } : null}
    shade = {squareShade}
    highlighted = {this.props.highlighted[i] ? 'highlighted' : 'nun'}
    onClick={() => this.props.onClick(r, c)}
      />;
  }

  render() {
    const board = [];
    let count = 0;
    for (let i = 0; i < 4; i += 1) {
      const rows = [];
      for (let j = 0; j < 4; j += 1) {
        rows.push(this.renderSquare((i * 16) + j * 2, 'light-square', 2 * i, 2 * j));
        rows.push(this.renderSquare((i * 16) + (j * 2) + 1, 'dark-square', 2 * i, 2 * j + 1));
      }
      let rank = 8 - 2 * i;
      board.push(<div key={count}><button className='textsquare'>{rank}</button>{rows}</div>);
      count += 1;

      const rows2 = [];
      for (let k = 0; k < 4; k += 1) {
        rows2.push(this.renderSquare((i * 16) + 8 + k * 2, 'dark-square', 2 * i + 1, 2 * k));
        rows2.push(this.renderSquare((i * 16) + 8 + (k * 2) + 1, 'light-square', 2 * i + 1, 2 * k + 1));
      }
      rank = 8 - (2 * i + 1);
      board.push(<div key={count}><button className='textsquare'>{rank}</button>{rows2}</div>);
      count += 1;
    }
    return (
      <div>
      {board}
      <div>
      <button className='textsquare'></button>
      <button className='textsquare'>a</button>
      <button className='textsquare'>b</button>
      <button className='textsquare'>c</button>
      <button className='textsquare'>d</button>
      <button className='textsquare'>e</button>
      <button className='textsquare'>f</button>
      <button className='textsquare'>g</button>
      <button className='textsquare'>h</button>
      </div>
      </div>
    );
  }
}

export default Board;
