import * as attGen from './scripts/attGen.js';
import * as raceGen from './scripts/raceGen.js';
import * as classGen from './scripts/classGen.js';

export function roll(max){
	if (arguments[1]){
		let sum = Math.ceil(Math.random()*max);
		for (let i = 1; i < arguments[1]; i++){
			sum += Math.ceil(Math.random()*max)
		}
		return sum;
	}
	return Math.ceil(Math.random()*max)
	
}

export function newCharacter() {
	let player ={
		scores:{
          strength: {
            base: '',
            mods:{
              fromRace: ''
            },
            modifier:0
          },
          dexterity: {
            base: '',
            mods:{
              fromRace: ''
            },
            modifier:0
          },
          constitution: {
            base: '',
            mods:{
              fromRace: ''
            },
            modifier:0
          },
          intelligence: {
            base: '',
            mods:{
              fromRace: ''
            },
            modifier:0
          },
          wisdom: {
            base: '',
            mods:{
              fromRace: ''
            },
            modifier:0
          },
          charisma: {
            base: '',
            mods:{
              fromRace: ''
            },
            modifier:0
          }
        }
	}
	let tempScores = attGen.rollScores();
	let tempRace = raceGen.chooseRace();
	player.alignment=chooseAlign();
	player.gender= chooseGender();
	player.scores.strength.base = tempScores[0];
	player.scores.dexterity.base = tempScores[1];
	player.scores.constitution.base = tempScores[2];
	player.scores.intelligence.base = tempScores[3];
	player.scores.wisdom.base = tempScores[4];
	player.scores.charisma.base = tempScores[5];
	player.race = tempRace;
	player.scores = raceGen.scoreAdjust(player.race, player.scores);
	player.size = raceGen.size(player.race);
	player.physical = raceGen.heightAndWeight(player.race, player.gender);
	let attribute;
	for (attribute in player.scores){
		player.scores[attribute].modifier=calculateMod(player.scores[attribute].base+player.scores[attribute].mods.fromRace);
	}
	player.pcClass = classGen.selectClass(player.scores);
	player.age = raceGen.age(player.race, player.pcClass);
	return player;
}

function calculateMod(score){
	let mod = Math.floor((score-10)/2);
	return mod;
}

function chooseGender(){
	let number = roll(2);
	if (number == 1){
		return "Male"
	}
	else{
		return "Female"
	}
}

function chooseAlign(){
	let tempAlign = "";
	let order = roll(3);
	let morality = roll(6);
	if (order == 1){
		order = "Lawful";
	} 
	else if (order == 2){
		order = "Neutral";
	}
	else{
		order = "Chaotic";
	}
	if (morality <= 3){
		morality = "Good";
	} 
	else if (morality <= 5){
		morality = "Neutral";
	}
	else{
		morality = "Evil";
	}
	if (morality == order){
		tempAlign = "Neutral";
	}
	else{
		tempAlign = order + " " + morality;
	}
	return tempAlign;
}
