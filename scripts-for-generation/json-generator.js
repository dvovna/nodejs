exports.generateJSON = generateJSON;

var rand = Math.random;
var floor = Math.floor;

var projectsList = ["World of Tanks", "Umbrella", "Red Alert", "Gnom", "Placer", "UI", "Java"];
var compaignsList = ["new arms", "new boobs", "new butt", "new backbone", "new lazer", "patch 100500"];
var activitiesList = ["link on bla.ru", "banner on tut.by", "banner on google.com", "icon on efinancialcareers.com", "", ""];

var areasList = ["header on main form", "footer on main form", "left side", "right side"];
var partnersList = ["hubabuba.org", "orbit.by", "google.com", "nodejs.org"];

var refs = [""];

var json = [];


//main function
function generateJSON (size) {
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

	return compaign;
}
//implemented
function getRandomProject () {
	var project = {};

	project["id"] = floor((rand()*1000000) + 1);
	project["name"] = getRandomValueFromArray(projectsList);
	project["compaignsIds"] = getCompaignsIds();

	return project;
}
// should return array with actual ids of compaigns
function getCompaignsIds () {
	var mass = [],
		compaignsMass = find(json, 'compaigns');
		count = (Math.floor(Math.random() * (7 - 3 + 1)) + 3); //from 3 to 7 random value

	for (var i = 0; i <= count; i++) {
		mass.push(getRandomValueFromArray(compaignsMass, "id"));
	}

	return mass;
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




// generateJSON(5);