function checkTypeOfValue (a) {
if (Number.isNaN(a) === true){
	return undefined;
}
if (typeof a === "number"){
	return "number";
}
if (typeof a === "string"){
	return "string";
}
if (typeof a !== "string" && typeof a !== "number"){
	return undefined;
}
return undefined;
}
module.exports = checkTypeOfValue;
