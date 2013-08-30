exports.generateJSON = generateJSON;

var rand = Math.random;
var floor = Math.floor;

var projectsList = ["World of Tanks", "Umbrella", "Red Alert", "Gnom", "Placer", "UI", "Java"];
var compainiesList = ["new arms", "new boobs", "new butt", "new backbone", "new lazer", "patch 100500"];
var activitiesList = ["link on bla.ru", "banner on tut.by", "banner on google.com", "icon on efinancialcareers.com", "", ""];

var areasList = ["header on main form", "footer on main form", "left side", "right side"];
var partnersList = ["hubabuba.org", "orbit.by", "google.com", "nodejs.org"];

var refs = [""];


//should return correct json
function generateJSON (size) {
	var json = [];

	json.push({"projects": getRandomArray(size, getRandomProject)});

	json.push({"compaigns": getRandomArray((size-3), getRandomCompaign)});

	json = JSON.stringify(json);

	return json;
}
/**
* creates array with randomly created objects
* @size int - number of generated objects
* @func function - returns random object
**/
function getRandomArray (size, func) {
	var array = [];
	for(var i = 0; i <= size; i++) {
		array.push(func());
	}
	return array;
}

function getRandomCompaign () {
	var compaign = {};

	compaign["id"] = floor((rand()*1000000) + 1);
	compaign['name'] = getRandomValueFromArray(compainiesList);

	return compaign;
}
//implemented
function getRandomProject () {
	var project = {};

	project["id"] = floor((rand()*1000000) + 1);
	project["name"] = getRandomValueFromArray(projectsList);
	project["compaigns"] = getCompaignsIds();

	return project;
}

function getCompaignsIds () {
	return ['1'];
}

/**
* finds in array random value
* @array []
*/
function getRandomValueFromArray (array) {
	return array[floor(rand() * array.length)];
}