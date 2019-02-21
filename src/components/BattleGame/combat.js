import { roll, compareObjectValue } from '../../script.js';

const compare = (guys) => {
	let guysArray = [];
	Object.keys(guys).forEach((key)=>{
		guysArray.push(guys[key]);
	});

	guysArray = guysArray.sort(compareObjectValue('init', "desc"))
	return guysArray;
}

const attack = (order, battle, attacker)=>{
	console.log(order);
	let defender = order.slice();
	console.log(order.indexOf(attacker));
	defender = defender.splice((order.indexOf(attacker)-1), 1);
	console.log(defender);
	let attack = roll(20);
	let damage = roll(4);
	console.log("Attack Roll: ", attack);
	if (attack > defender[0].defense) {
		if (attack === 20){
			let critDamage = (damage + roll(4))
			defender[0].health -= (critDamage);
			battle.messageLog.push(attacker.name + " critically strikes " +
				defender[0].name + " for " + critDamage + " damage.");
		}
		else{
			defender[0].health-= damage;
			battle.messageLog.push(attacker.name + " hits " +
				defender[0].name + " for " + damage + " damage.")
		}
	}
	else {
		battle.messageLog.push(attacker.name + " missed " + defender[0].name)
	}
	console.log("BattleObject: ", battle);
}

export function start(battleObject) {
	let initOrder = compare(battleObject.combatants);
	let person;
	for (person in initOrder) {
		if (initOrder[0].health <= 0 || initOrder[1].health <= 0){
			break;
		}
		attack(initOrder, battleObject, initOrder[person]);
	}
	console.log("Battle Object: ", battleObject);
}