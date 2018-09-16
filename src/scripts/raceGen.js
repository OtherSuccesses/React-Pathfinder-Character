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