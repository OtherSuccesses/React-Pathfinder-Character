import * as baseFunction from '../script.js';



export function rollScores(){
	let scoresArr = [];
	for (let i = 0; i < 6; i++){
		let tempValues=[];
		let tempTotal=0;
		for (let j = 0; j < 4; j++){
			tempValues.push(baseFunction.roll(6));
		}
		tempValues.sort();
		tempValues.splice(0,1);
		console.log('Temp Values spliced ', tempValues)
		tempTotal = tempValues.reduce(sumScores, 0);
		console.log('Temp Total ', tempTotal);
		scoresArr.push(tempTotal);
	}
	return scoresArr;
}

const sumScores = (total, add)=>{
	return (total + add);
}