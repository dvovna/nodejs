exports.generateJSON = generateJSON;

var rand = Math.random;
var floor = Math.floor;

var projectsList = ["World of Tanks", "Umbrella", "Red Alert", "Gnom", "Placer", "UI", "Java"];
var compaignsList = ["new arms", "new boobs", "new butt", "new backbone", "new lazer", "patch 100500"];
var activitiesList = ["link on bla.ru", "banner on tut.by", "banner on google.com", "icon on efinancialcareers.com", "opaopa", "lolaloa"];

var areasList = ["header on main form", "footer on main form", "left side", "right side"];
var partnersList = ["hubabuba.org", "orbit.by", "google.com", "nodejs.org"];

var refs = [""];

var json = [];


//main function
function generateJSON (size) {
	json.push({"activities": getRandomArray((size+20), getRandomActoivity)})
	json.push({"compaigns": getRandomArray((size+10), getRandomCompaign)});
	json.push({"projects": getRandomArray(size, getRandomProject)});

	json = JSON.stringify(json);

	return json;
}
/**
* creates array with randomly created objects
* @size int - number of generated objects
* @func function - returns random object
**/
function getRandomArray (size, func) {
	var arr = [];
	for(var i = 0; i <= size; i++) {
		arr.push(func());
	}
	return arr;
}

function getRandomCompaign () {
	var compaign = {};

	compaign["id"] = floor((rand()*1000000) + 1);
	compaign["name"] = getRandomValueFromArray(compaignsList);
	compaign["activitiesIds"] = getIdsMass('activities', 12, 1);

	return compaign;
}
//implemented
function getRandomProject () {
	var project = {};

	project["id"] = floor((rand()*1000000) + 1);
	project["name"] = getRandomValueFromArray(projectsList);
	project["compaignsIds"] = getIdsMass('compaigns', 7, 3);

	return project;
}
function getRandomActoivity () {
	var activity = {},
		date = new Date();

	activity["id"] = floor((rand()*1000000) + 1);
	activity["name"] = getRandomValueFromArray(activitiesList);
	activity["start"] = new Date(date.getTime() - randRange(10000000000, 10000000));
	activity["end"] = new Date(date.getTime() + randRange(1000000, 100000));

	return activity;
}
// should return array with actual ids for json's obj
function getIdsMass (key, max, min) {
	var ids = [],
		mass = find(json, key);
		count = randRange(max, min); //from 3 to 7 random value

	for (var i = 0; i <= count; i++) {
		ids.push(getRandomValueFromArray(mass, "id"));
	}

	return ids;
}
/**
* finds in array random value
* @array []
*/
function getRandomValueFromArray (array, key) {
	var placeNumber = floor(rand() * array.length),
		key = key ? key : false;

	return key ? array[placeNumber][key] : array[placeNumber];
}
















//returns object by field
function find (array, key) {
	for(var i=0; i<=array.length; i++) {
		if (array[i].hasOwnProperty(key)) {
            return array[i][key];
        }
	}
}

function randRange (max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}