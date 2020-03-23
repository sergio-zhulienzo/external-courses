function checkObj (a, obj) {
  for (let key in obj) {
    if (key === a) {
	  return true;
	}
  }
  return false;
}
module.exports = checkObj;