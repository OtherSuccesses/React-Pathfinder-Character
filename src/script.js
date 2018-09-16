import * as attGen from './scripts/attGen.js';
import * as raceGen from './scripts/raceGen.js';

export function roll(max){
	return Math.ceil(Math.random()*max)
}

export function newCharacter() {
	let player ={}
	let tempScores = attGen.rollScores();
	let tempRace = raceGen.chooseRace();
	let alignment="Lawful Good";
	// let attScores ={
	// 	strength: {base:tempScores[0],
	// 		mods:{
	// 			fromRace:''
	// 		}},
 //    	dexterity: {base:tempScores[1],
	// 		mods:{
	// 			fromRace:''
	// 		}},
 //    	constitution: {base:tempScores[2],
	// 		mods:{
	// 			fromRace:''
	// 		}},
 //    	intelligence: {base:tempScores[3],
	// 		mods:{
	// 			fromRace:''
	// 		}},
 //    	wisdom: {base:tempScores[4],
	// 		mods:{
	// 			fromRace:''
	// 		}},
 //    	charisma: {base:tempScores[5],
	// 		mods:{
	// 			fromRace:''
	// 		}}
	// };
	player.scores.strength.base = tempScores[0];
	player.scores.dexterity.base = tempScores[1];
	player.scores.constitution.base = tempScores[2];
	player.scores.intelligence.base = tempScores[3];
	player.scores.wisdom.base = tempScores[4];
	player.scores.charisma.base = tempScores[5];
	player.race = tempRace;
	player.scores = raceGen.scoreAdjust(player.race, player.scores);

	console.log("This is an object of adjustments!", player.scores);

	console.log("This should be an object" , attScores);
	return player;
}

