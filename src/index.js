import React from 'react';
import ReactDOM from 'react-dom';
import BasicInfo from './components/basicInfo'
import './index.css';
import * as newCharacter from './script.js';
import Attributes from './components/attributes'

function Logo(props){
  return(
    <img className="logo" src={props.src} height={props.height} width={props.width} alt="Pathfinder Logo"/>
    );
}

function Square(props){
    return (
      <button className="square" onClick = {props.onClick}>
        {props.value}
      </button>
    ); 
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      squares: Array(9).fill(null),
      XisNext: true 
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({
      squares: squares,
      XisNext: !this.state.XisNext
    });
  }

  renderSquare(i) {
    return (
      <Square value = {this.state.squares[i]}
                onClick = {()=>this.handleClick(i)}
                  />
    )
  }

  render() {
    const status = 'Next player: ' + (this.state.XisNext ? 'X' : 'O');
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      player:{
        name: null,
        alignment: null,
        pcClass: null,
        classLevel: null,
        race: null,
        size: null,
        gender: null,
        age: null,
        deity: null,
        homeland: null,
        height: null,
        weight: null,
        hair: null,
        eyes: null,
        scores:{
          strength: {
            base: '',
            mods:{
              fromRace: ''
            }
          },
          dexterity: {
            base: '',
            mods:{
              fromRace: ''
            }
          },
          constitution: {
            base: '',
            mods:{
              fromRace: ''
            }
          },
          intelligence: {
            base: '',
            mods:{
              fromRace: ''
            }
          },
          wisdom: {
            base: '',
            mods:{
              fromRace: ''
            }
          },
          charisma: {
            base: '',
            mods:{
              fromRace: ''
            }
          }
        }
      }
    }
    this.characterGen = this.characterGen.bind(this)
  }

  characterGen(event){
    event.preventDefault();
    let player = newCharacter.newCharacter();
    this.setState({
      player,
    });

    console.log(this.state.alignment);
    console.log(this.state);
  }

  render() {
    return (
      <div className="game">
        <div className='top-section'>
          <div className='header'>
            <Logo src={require("./assets/img/pathfinder-logo.jpg")}  height={100}/>
            <h1 className='header-label'>Character Sheet</h1>
          </div>
          <BasicInfo player={this.state.player}/>
        </div>
        <div className="left-side">
          <Attributes player={this.state.player}/>
        </div>
        <button id='new-character-button' onClick={this.characterGen}>New Character</button>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
