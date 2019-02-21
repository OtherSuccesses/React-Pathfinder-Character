import React from 'react';
import './battlegame.css';
import * as combat from './combat.js';
import { roll } from '../../script.js';


	let boxColor = (health)=>{
		if (health>7){
			return {background: "blue"}
		}
		else if (health>3){
			return {background: "yellow"}
		}
		else if (health>0){
			return {background: "red"}
		}
		else{
			return {background: "black"}
		}
	}

let Combatant = (props)=>{
			return(
				<div className={props.className}>
					<p>{props.dude.name}</p>
					<div className="box" style={boxColor(props.dude.health)}id={(props.className+"box")}>
					</div>
				</div>
			);	
		}

const MessageLog = (props)=>{
	const fullLog = props.logs.map((message)=>
		<p key={message.id}>{message}</p>
	);
	return(
		<div className="message-display">
			{fullLog}
		</div>
		)
}


class BattleGame extends React.Component{
	constructor(props) {
		super(props)
		this.state= {
			combatants: {
				guy1: {
					name: 'Guy 1',
					health:10,
					attack:1,
					defense:10
				},
				guy2: {
					name: 'Guy 2',
					health:10,
					attack:1,
					defense:10
				}
			},
			round:0,
			messageLog: []			
		}
		this.coreGame = this.coreGame.bind(this)
	}
	


	coreGame(event){
		console.log(this.state.round==0);	
	    event.preventDefault();
	    let guys = this.state.combatants;
	    Object.keys(guys).forEach((key)=>{
			guys[key].init ? null : guys[key].init = roll(20);
		});
	    combat.start(this.state);
	    this.setState({round:this.state.round+1});
	    console.log(this.state);
	}

	render() {
		return(
			<div>
				<div className="battleGame">
					<Combatant className = "Guy1" dude ={this.state.combatants.guy1}/>
					<p>VS</p> 
					<Combatant className = "Guy2" dude ={this.state.combatants.guy2}/>
					<p>{this.state.round == 0 ? "Get Ready" : "Round: "+this.state.round }</p>
				</div>
				<MessageLog logs={this.state.messageLog}/>
				<button id="core-game-start" onClick={this.coreGame}>Sim Combat</button>
			</div>
		)
	}
}

export default BattleGame;