import * as baseFunction from '../script.js';


export function chooseRace(){
	let raceObject = {};
	let race = '';
	let selector = baseFunction.roll(100);
	console.log('Race Selector: ', selector)
	switch(true){
		case (selector <= 15):
			race = "Dwarf";
			break;
		case (selector <= 30):
			race = "Elf";
			break;
		case (selector <= 40):
			race = "Gnome";
			break;
		case (selector <= 50):
			race = "Halfling";
			break;
		case (selector <= 60):
			race = "Half-Elf";
			break;
		case (selector <= 70):
			race = "Half-Orc";
			break;
		default:
			race = "Human";
			break;
	}
	raceObject.race = race;
	console.log(race);
	//racePlayerscoress(raceObject);
	return race;
}

export function scoreAdjust(race, scores){
	let ability = '';
	console.log(race);
	switch(race){
		case "Dwarf":
			scores.strength.mods ={fromRace: 2};
			scores.constitution.mods ={fromRace: 2};
			scores.charisma.mods ={fromRace: -2};
			break;
		case "Elf":
			scores.dexterity.mods ={fromRace: 2};
			scores.intelligence.mods ={fromRace: 2};
			scores.constitution.mods ={fromRace: -2};
			break;
		case "Gnome":
			scores.constitution.mods ={fromRace: 2};
			scores.charisma.mods ={fromRace: 2};
			scores.strength.mods ={fromRace: -2};
			break;
		case "Half-Elf":
			ability = randAbility();
			console.log("Half-Elf chose " + ability);
			scores[ability].mods ={fromRace: 2};
			break;
		case "Half-Orc":
			ability = randAbility();
			console.log("Half-Orc chose " + ability);
			scores[ability].mods ={fromRace: 2};
			break;
		case "Halfling":
			scores.dexterity.mods ={fromRace: 2};
			scores.charisma.mods ={fromRace: 2};
			scores.strength.mods ={fromRace: -2};
			break;
		case "Human":
			ability = randAbility();
			console.log("Human chose " + ability);
			scores[ability].mods ={fromRace: 2};
			break;
		default:
			console.log("Something happened with racial scoress");
			break;
	}
	return scores;
}

function randAbility(){
	let die = baseFunction.roll(6);
	switch (die){
		case 1:
			return "strength";
		case 2:
			return "dexterity";
		case 3:
			return "constitution";
		case 4:
			return "intelligence";
		case 5:
			return "wisdom";
		default:
			return "charisma";
	}
}

export function size(race){
	if (race == "Halfling" || race == "Gnome"){
		return "Small"
	}
	else{
		return "Medium"
	}
}

export function heightAndWeight(race, gender){
	let physical ={
		height: 0,
		weight: 0} 
	switch (race){
		case "Dwarf":{
			if (gender == "Female"){
				physical = hAndWCalc(43, 120, 2, 4, 7);
			}
			else{
				physical = hAndWCalc(45, 150, 2, 4, 7);
			}
			return physical;
		}
		case "Human":{
			if (gender == "Female"){
				physical = hAndWCalc(53, 85, 2, 10, 5);
			}
			else{
				physical = hAndWCalc(58, 120, 2, 10, 5);
			}
			return physical;
		}
		case "Elf":{
			if (gender == "Female"){
				physical = hAndWCalc(64, 90, 2, 6, 3);
			}
			else{
				physical = hAndWCalc(64, 100, 2, 8, 3);
			}
			return physical;
		}
		case "Gnome":{
			if (gender == "Female"){
				physical = hAndWCalc(34, 30, 2, 4, 1);
			}
			else{
				physical = hAndWCalc(36, 35, 2, 4, 1);
			}
			return physical;
		}
		case "Half-Elf":{
			if (gender == "Female"){
				physical = hAndWCalc(60, 90, 2, 8, 5);
			}
			else{
				physical = hAndWCalc(62, 110, 2, 8, 5);
			}
			return physical;
		}
		case "Half-Orc":{
			if (gender == "Female"){
				physical = hAndWCalc(53, 110, 2, 12, 7);
			}
			else{
				physical = hAndWCalc(58, 150, 2, 12, 7);
			}
			return physical;
		}
		case "Halfling":{
			if (gender == "Female"){
				physical = hAndWCalc(30, 25, 2, 4, 1);
			}
			else{
				physical = hAndWCalc(32, 30, 2, 4, 1);
			}
			return physical;
		}

	}
}

function hAndWCalc(baseH, baseW, modMult, modType, weightMod){
	let physical = {height:0,
		weight:0};
	let add = 0;
	let height = 0;

	for (let i=0; i < modMult; i++){
		add += baseFunction.roll(modType);
	}
	height = baseH + add;
	let feet = Math.floor(height/12) + "' ";
	let inches = height % 12 + '"';
	if (height % 12==0){
		physical.height = feet;
	}
	else{
		physical.height = feet + inches;
	}
	physical.weight = baseW + (add * weightMod);
	return physical;
}

export function age(race, pcClass){
	let age = 10;
	let intuitive = ["Barbarian", "Rogue", "Sorceror"];
	let taught = ["Bard", "Fighter", "Paladin", "Ranger"];
	let trained = ["Cleric", "Druid", "Monk", "Wizard"];
	switch(race){
		case "Human":{
			age = 15;
			if (intuitive.includes(pcClass)){
				age += baseFunction.roll(4);
			}
			else if (taught.includes(pcClass)){
				age += baseFunction.roll(6);
			}
			else{
				age += baseFunction.roll(6, 2);
			}
			return age;
		}
		case "Dwarf":{
			age = 40;
			if (intuitive.includes(pcClass)){
				age += baseFunction.roll(6, 3);
			}
			else if (taught.includes(pcClass)){
				age += baseFunction.roll(6, 5);
			}
			else{
				age += baseFunction.roll(6, 7);
			}
			return age;
		}
		case "Elf":{
			age = 110;
			if (intuitive.includes(pcClass)){
				age += baseFunction.roll(6, 4);
			}
			else if (taught.includes(pcClass)){
				age += baseFunction.roll(6, 6);
			}
			else{
				age += baseFunction.roll(6, 10);
			}
			return age;
		}
		case "Gnome":{
			age = 40;
			if (intuitive.includes(pcClass)){
				age += baseFunction.roll(6, 4);
			}
			else if (taught.includes(pcClass)){
				age += baseFunction.roll(6, 6);
			}
			else{
				age += baseFunction.roll(6, 9);
			}
			return age;
		}
		case "Half-Elf":{
			age = 20;
			if (intuitive.includes(pcClass)){
				age += baseFunction.roll(6);
			}
			else if (taught.includes(pcClass)){
				age += baseFunction.roll(6, 2);
			}
			else{
				age += baseFunction.roll(6, 3);
			}
			return age;
		}
		case "Half-Orc":{
			age = 14;
			if (intuitive.includes(pcClass)){
				age += baseFunction.roll(4);
			}
			else if (taught.includes(pcClass)){
				age += baseFunction.roll(6);
			}
			else{
				age += baseFunction.roll(6, 2);
			}
			return age;
		}
		case "Halfling":{
			age = 20;
			if (intuitive.includes(pcClass)){
				age += baseFunction.roll(4, 2);
			}
			else if (taught.includes(pcClass)){
				age += baseFunction.roll(6, 3);
			}
			else{
				age += baseFunction.roll(6, 4);
			}
			return age;
		}
		default:{
			return "Problem!!!";
		}
	}
}