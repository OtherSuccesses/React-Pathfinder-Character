import * as baseFunction from "../script.js";
import classList from "./classInfo.js";

export function selectClass(attScores){
			let attObj = [];
			attObj[0] = attScores.strength.base + attScores.strength.mods.fromRace;
			attObj[1] = attScores.dexterity.base + attScores.dexterity.mods.fromRace;
			attObj[2] = attScores.constitution.base + attScores.constitution.mods.fromRace;
			attObj[3] = attScores.intelligence.base + attScores.intelligence.mods.fromRace;
			attObj[4] = attScores.wisdom.base + attScores.wisdom.mods.fromRace;
			attObj[5] = attScores.charisma.base + attScores.charisma.mods.fromRace;
			let attObjSquare = Array.from(attObj);
			for (let i=0; i < attObj.length; i++){
				attObjSquare[i] = attRangeForClassSelect(attObjSquare[i]);
			}
			let classSelected = getCharacterClass(attObjSquare, attObj)
			return classSelected;
			
		}

function attRangeForClassSelect(att){
	att = att-10;
	(att < 0)? att = 0 : att = att*att;
	return att; 
}


//===================================================
//Check class Info for where much of this info is drawn from
//Starts at select favored class(generally)
//Also calls functions from general and ability
//===================================================

		function getCharacterClass(squaresArray, attArray){
			console.log("the squares array: " + squaresArray);
			let barbarian = 0;
			if(attArray[0] > 11 && attArray[2] > 9){
				barbarian = squaresArray[0]+squaresArray[1]+squaresArray[2];
			}
			let bard = 0 + barbarian;
			if (attArray[5] > 12 && attArray[1] > 9){
				bard += squaresArray[1]+squaresArray[3]+squaresArray[5]
			}
			let cleric = 0 + bard;
			if (attArray[4] > 11){
				cleric += squaresArray[4]+squaresArray[5]+squaresArray[0] + 10;
			}
			let druid = 0 + cleric; 
			if (attArray[4] > 11){
				druid += squaresArray[4]+squaresArray[1]+squaresArray[2];
			}
			let fighter = 0 + druid;
			if (attArray[0] > 11){
				fighter += squaresArray[0]+squaresArray[1]+squaresArray[2];
			}
			let monk = 0 + fighter;
			if (attArray[0] > 11 && attArray[4] > 9 && attArray[1] > 11){
				monk += squaresArray[0]+squaresArray[1]+squaresArray[4];
			}
			let paladin = 0+monk;
			if (attArray[0] > 12 && attArray[5] > 12){
				paladin += squaresArray[5]+squaresArray[0]+squaresArray[2];
			}
			let ranger = 0 + paladin;
			if ((attArray[0] > 11 || attArray[1] > 10) && attArray[4] > 12){
				ranger += squaresArray[0]+squaresArray[1]+squaresArray[4];
			}
			let rogue = 0 + ranger;
			if (attArray[1] > 11){
				rogue += squaresArray[4]+squaresArray[1]+squaresArray[2];	
			}
			let sorceror = rogue + 0;
			if (attArray[5] > 12){
				sorceror += squaresArray[5] + squaresArray[1] + squaresArray[2];
			}
			let wizard = sorceror + 0;
			if (attArray[3] > 12){
				wizard += squaresArray[3] + squaresArray[2] + squaresArray [1];	
			}
			let tempClass = "";
			let selector = baseFunction.roll(wizard);
			console.log("The number for class gen: " + selector);
			console.log(barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorceror, wizard);

			switch(true){
				case (selector < barbarian):
					tempClass="Barbarian";
					//skillPointsGen(4);
					break;
				case (selector < bard):
					tempClass="Bard";
					//skillPointsGen(6);
					break;
				case (selector < cleric):
					tempClass="Cleric";
					//skillPointsGen(2);
					break;
				case (selector < druid):
					tempClass="Druid";
					//skillPointsGen(4);
					//player.languages.push("Druidic");
					break;
				case (selector < fighter):
					tempClass="Fighter";
					//skillPointsGen(2);
					break;
				case (selector < monk):
					tempClass="Monk";
					//skillPointsGen(4);
					break;
				case (selector < paladin):
					tempClass="Paladin";
					//skillPointsGen(2);
					break;
				case (selector < ranger):
					tempClass="Ranger";
					//skillPointsGen(6);
					break;
				case (selector < rogue):
					tempClass="Rogue";
					//skillPointsGen(8);
					break;
				case (selector < sorceror):
					tempClass="Sorceror";
					//skillPointsGen(2);
					break;
				case (selector < wizard):
					tempClass="Wizard";
					//skillPointsGen(2);
					break;
				default:
					tempClass = "Dumpster Fire";
					break;
			}
			return tempClass;
		}


		// function selectFavoredClass(){
		// 	let tempFavoredClass = randomClass();
		// 	console.log(tempFavoredClass);
		// 	//Check half-elf repetition of second preferred class
		// 	if (tempFavoredClass == player.favoredClasses[0]){
		// 		selectFavoredClass();
		// 	}
		// 	else{
		// 		player.favoredClasses.push(tempFavoredClass);
		// 		if(player.race == "Half-Elf" && player.favoredClasses.length < 2){
		// 			console.log("Half-Elf Route hit.");
		// 			selectFavoredClass();
		// 		}
		// 	}
		// }

		// function findClass(pcClass){
		// 	let chosenClass = classList.filter(classObj=>{
		// 		return classObj.name == pcClass;
		// 	});
		// 	let returnClass= Object.assign({}, chosenClass[0]);
		// 	return returnClass;
		// }	