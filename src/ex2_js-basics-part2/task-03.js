function checkValue (arr){
 let answer = [0, 0, 0];
 for (let i = 0; i< arr.length; i++){
	if (arr[i] === 0){
		answer[2]++
	}
	if (arr[i]%2 === 0 && arr[i] !== 0 && arr[i] !== null){
		answer[0]++
		
	}
	if (arr[i]%2 === 1){
		answer[1]++
	}
}
return answer;
}
module.exports = checkValue;