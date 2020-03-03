function reternMaxValue (arr){
let a = arr[0];
for (let i = 0; i< arr.length; i++){
  if(arr[i] > a){
    a = arr[i]
  }
}
return (a);
}
module.exports = reternMaxValue