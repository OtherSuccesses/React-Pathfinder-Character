let classList = [
	{
		id: 1,
		name: "Barbarian",
		hitDie: 12,
		skillPoints: 4,
		classSkills: ["Acrobatics","Climb","Craft","Handle Animal","Intimidate","Knowledge (Nature)", "Perception", "Ride", "Survival", "Swim"],
		talents: 0,
		level: 1,
		//BAB up every level
		baseAttackBonus: 1,
		//Fort save up every even level. Ref and Will up every 3rd 
		saveFort: 2,
		saveRef: 0,
		saveWill: 0,
		weaponProficiency: {
			simple: ["All"],
			martial: ["All"],
			exotic: ["None"]
		}
	},{
		id: 2,
		name: "Bard",
		hitDie: 8,
		skillPoints: 6,
		classSkills: ["Acrobatics", "Appraise", "Bluff", "Climb", "Craft", "Diplomacy", "Disguise", "Escape Artist", "Intimidate", "Knowledge (Arcana)", "Knowledge (Dungeoneering)", "Knowledge (Engineering)", "Knowledge (Geography)", "Knowledge (History)", "Knowledge (Local)", "Knowledge (Nature)", "Knowledge (Nobility)", "Knowledge (Planes)", "Knowledge (Religion)", "Linguistics", "Perception", "Perform", "Profession", "Sense Motive", "Sleight of Hand", "Spellcraft", "Stealth", "Use Magic Device"],
		talents: 0,
		level: 1,
		//BAB stalls every 4
		baseAttackBonus:0,
		//Fort up every 3rd. Ref and Will up every even level
		saveFort:0,
		saveRef:2,
		saveWill:2,
		weaponProficiency:{
			simple:["All"],
			martial:["Longsword", "Rapier", "Sap", "Short Sword", "Shortbow"],
			exotic:["Whip"]
		}
	},{
		id: 3,
		name: "Cleric",
		hitDie: 8,
		skillPoints: 2,
		classSkills: ["Appraise", "Craft", "Diplomacy", "Heal", "Knowledge (Arcana)", "Knowledge (History)", "Knowledge (Nobility)", "Knowledge (Planes)", "Knowledge (Religion)", "Linguistics", "Profession", "Sense Motive", "Spellcraft"],
		talents: 0,
		level: 1,
		//BAB stalls every 4
		baseAttackBonus:0,
		//Fort AND Will up every even level, Ref up every divisible by 3
		saveFort:2,
		saveRef:0,
		saveWill:2,
		weaponProficiency:{
			simple:["All"],
			martial:["None"],
			exotic:["None"]
		}
	},{
		id: 4,
		name: "Druid",
		hitDie: 8,
		skillPoints: 4,
		classSkills: ["Climb", "Craft", "Fly", "Handle Animal", "Heal", "Knowledge (Geography)", "Knowledge (Nature)", "Perception", "Profession", "Ride", "Spellcraft", "Survival", "Swim"],
		talents: 0,
		level: 1,
		//BAB stalls every 4
		baseAttackBonus:0,
		//Fort AND Will up avery even level, Ref up every divisible by 3
		saveFort:2,
		saveRef:0,
		saveWill:2,
		weaponProficiency:{
			simple:["Club", "Dart", "Quarterstaff", "Sickle", "Sling", "Shortspear", "Spear"],
			martial:["Scimitar", "Scythe"],
			exotic:["None"]
		}
	},{
		id: 5,
		name: "Fighter",
		hitDie: 10,
		skillPoints: 2,
		classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Knowledge (Dungeoneering)", "Knowledge (Engineering)", "Profession", "Ride", "Survival", "Swim"],
		talents: 0,
		level: 1,
		//BAB up every level
		baseAttackBonus:1,
		//Fort every even level, Ref AND Will up every divisible by 3
		saveFort:2,
		saveRef:0,
		saveWill:0,
		weaponProficiency:{
			simple:["All"],
			martial:["All"],
			exotic:["None"]
		}
	},{
		id: 6,
		name: "Monk",
		hitDie: 8,
		skillPoints: 4,
		classSkills: ["Acrobatics", "Climb", "Craft", "Escape Artist", "Intimidate", "Knowledge (History)", "Knowledge (Religion)", "Perception", "Perform", "Profession", "Ride", "Sense Motive", "Stealth", "Swim"],
		talents: 0,
		level: 1,
		//BAB stalls every 4th level
		baseAttackBonus:0,
		//Fort Ref AND Will every even level
		saveFort:2,
		saveRef:2,
		saveWill:2,
		weaponProficiency:{
			simple:["Club", "Heavy Crossbow", "Light Crossbow", "Dagger", "Sling", "Shortspear", "Spear", "Javelin", "Quarterstaff"],
			martial:["Handaxe", "Short Sword"],
			exotic:["Kama", "Nunchaku", "Sai", "Siangham", "Shuriken"]
		}
	},{
		id: 7,
		name: "Paladin",
		hitDie: 10,
		skillPoints: 2,
		classSkills: ["Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (Nobility)", "Knowledge (Religion)", "Profession", "Ride", "Sense Motive", "Spellcraft"],
		talents: 0,
		level: 1,
		//BAB up every level
		baseAttackBonus:1,
		//Fort AND Ref every even level. Will every 3rd
		saveFort:2,
		saveRef:2,
		saveWill:0,
		weaponProficiency:{
			simple:["All"],
			martial:["All"],
			exotic:["None"]
		}
	},{
		id: 8,
		name: "Ranger",
		hitDie: 10,
		skillPoints: 6,
		classSkills: ["Climb", "Craft", "Handle Animal", "Heal", "Intimidate", "Knowledge (Dungeoneering)", "Knowledge (Geography)", "Knowledge (Nature)", "Perception", "Profession", "Ride", "Spellcraft", "Stealth", "Survival", "Swim"],
		talents: 0,
		level: 1,
		//BAB up every level
		baseAttackBonus:1,
		//Fort AND Will every even level. Ref every 3rd
		saveFort:2,
		saveRef:0,
		saveWill:2,
		weaponProficiency:{
			simple:["All"],
			martial:["All"],
			exotic:["None"]
		}
	},{
		id: 9,
		name: "Rogue",
		hitDie: 8,
		skillPoints: 8,
		classSkills: ["Acrobatics", "Appraise", "Bluff", "Climb", "Craft", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Intimidate", "Knowledge (Dungeoneering)", "Knowledge (Local)", "Linguistics", "Perception", "Perform", "Profession", "Sense Motive", "Sleight of Hand", "Stealth", "Swim", "Use Magic Device"],
		talents: 0,
		level: 1,
		//BAB stall every 4th level
		baseAttackBonus:0,
		//Fort AND Will every even level. Ref every 3rd
		saveFort:0,
		saveRef:2,
		saveWill:0,
		weaponProficiency:{
			simple:["All"],
			martial:["Short Sword", "Shortbow", "Sap", "Rapier"],
			exotic:["Hand Crossbow"]
		}
	},{
		id: 10,
		name: "Sorceror",
		hitDie: 6,
		skillPoints: 2,
		classSkills: ["Appraise", "Bluff", "Craft", "Fly", "Intimidate", "Knowledge (Arcana)", "Profession", "Spellcraft", "Use Magic Device"],
		talents: 0,
		level: 1,
		//BAB up every even level
		baseAttackBonus:0,
		//Fort AND Ref every third level. Ref every even
		saveFort:0,
		saveRef:0,
		saveWill:2,
		weaponProficiency:{
			simple:["All"],
			martial:["None"],
			exotic:["None"]
		}
	},{
		id: 11,
		name: "Wizard",
		hitDie: 6,
		skillPoints: 2,
		classSkills: ["Appraise", "Craft", "Fly", "Knowledge (Arcana)", "Knowledge (Dungeoneering)", "Knowledge (Engineering)", "Knowledge (Geography)", "Knowledge (History)", "Knowledge (Local)", "Knowledge (Nature)", "Knowledge (Nobility)", "Knowledge (Planes)", "Knowledge (Religion)", "Linguistics", "Profession", "Spellcraft"],
		talents: 0,
		level: 1,
		//BAB up every even level
		baseAttackBonus:0,
		//Will every even level. Fort and Ref every 3rd
		saveFort:0,
		saveRef:0,
		saveWill:2,
		weaponProficiency:{
			simple:["Club", "Dagger", "Heavy Crossbow", "Light Crossbow", "Quarterstaff"],
			martial:["None"],
			exotic:["None"]
		}
	}];

export {classList};