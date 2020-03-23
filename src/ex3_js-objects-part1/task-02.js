function showValueObj (obj) {
  for (let key in obj) {
	  if ({}.hasOwnProperty.call(obj, key)) {
        console.log(key, obj[key]);
      }
}
}
module.exports = showValueObj;