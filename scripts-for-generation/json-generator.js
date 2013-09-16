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
	json.push({"refs": getRandomArray((size+30), getRandomRef)});

	json.push({"areas": getRandomArray((size+23), getRandomArea)});
	json.push({"partners": getRandomArray(3, getRandomPartner)});
	json.push({"activities": getRandomArray((size+20), getRandomActivity)});
	json.push({"compaigns": getRandomArray((size+10), getRandomCompaign)});
	json.push({"projects": getRandomArray(size, getRandomProject)});

	addTestData(json);

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
	for(var i = 0; i < size; i++) {
		arr.push(func(i));
	}
	return arr;
}

function getRandomCompaign () {
	var compaign = {};

	compaign["id"] = floor((rand()*1000000) + 1);
	compaign["name"] = getRandomValueFromArray(compaignsList);
	compaign["activityIds"] = getIdsMass('activities', 12, 1);

	return compaign;
}
//implemented
function getRandomProject () {
	var project = {};

	project["id"] = floor((rand()*1000000) + 1);
	project["name"] = getRandomValueFromArray(projectsList);
	project["compaignIds"] = getIdsMass('compaigns', 7, 3);

	return project;
}
function getRandomActivity () {
	var activity = {},
		date = new Date();

	activity["id"] = floor((rand()*1000000) + 1);
	activity["name"] = getRandomValueFromArray(activitiesList);
	activity["start"] = new Date(date.getTime() - randRange(10000000000, 10000000));
	activity["end"] = new Date(date.getTime() + randRange(1000000, 100000));
	activity["refIds"] = getIdsMass('refs', 30, 5);

	return activity;
}

function getRandomRef () {
	var ref = {};

	ref["id"] = floor((rand()*1000000) + 1);

	return ref;
}

function getRandomArea () {
	var area = {};

	area["id"] = floor((rand()*1000000) + 1);
	area["name"] = getRandomValueFromArray(areasList);
	area["refIds"] = getIdsMass("refs", 20, 5);

	return area;
}

function getRandomPartner () {
	var partner = {};

	partner['id'] = floor((rand()*1000000) + 1);
	partner['name'] = getRandomValueFromArray(partnersList);
	partner['areaIds'] = getAreasIds();

	return partner;	
}
//простите за это, итак много времени убил...
var areasCount = 10;
var cycleNumber = 1;
var startPos = 0;
function getAreasIds (i) {
	var areaIds = [],
		areas = find(json, "areas"),
		count = randRange(areasCount, 3);

	areasCount -= count;

	if (cycleNumber<3) {
		areas = areas.splice(startPos, count);
		startPos = count;
	} else {
		areas = areas.splice(startPos, areas.length);
	}


	for(var area in areas) {
		areaIds.push(areas[area]["id"]);
	}

	cycleNumber++;

	return areaIds;
}

// should return array with actual ids for json's obj
function getIdsMass (key, max, min) {
	var ids = [],
		mass = find(json, key);
		count = randRange(max, min); //from 3 to 7 random value

	for (var i = 0; i <= count; i++) {
		var id = getRandomValueFromArray(mass, "id");
		if (ids.indexOf(id) == -1) { 
			ids.push(id);
		} else {
			i+=1;
		}
	}

	return ids;
}
/**
* finds in array random value
* @array []
*/
function getRandomValueFromArray (array, key) {
	var placeNumber = floor(rand() * array.length);

	return key ? array[placeNumber][key] : array[placeNumber];
}

//returns object by field
function find (array, key) {
	for(var i=0; i<=array.length; i++) {
		if (array[i].hasOwnProperty(key)) {
            return array[i][key];
        }
	}
	return false;
}

function randRange (max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
* should append to each ref corect data
*/
function addTestData (data) {
	var activities = find(data, 'activities'),
		oneDay = 24*60*60*1000;

	for (var activity in activities) {
		var startDate = activities[activity].start,
			endDate = activities[activity].end,
			refIds = activities[activity].refIds,
			activityId = activities[activity].id;

		for (var refId in refIds) {
			var days = Math.round(Math.abs((endDate - startDate)/(oneDay)));;
			for(var i=1; i <= days; i++) {
				var date = startDate.getTime() + i*oneDay;
				addDataToRef(refIds[refId], date, activityId);
			}
		}
	}
}
//should find correct ref and add to it correct data
function addDataToRef (refId, date, activityId) {
	var refs = find(json, 'refs'),
		refIndex;

	for (refIndex in refs) {
		if (refs[refIndex].id == refId) { break; }
	}

	refs[refIndex].date = date;
	refs[refIndex].activityId = activityId;
	refs[refIndex].clicked = 123;
	refs[refIndex].registrations = 666;
	refs[refIndex].enters = 100;
	refs[refIndex].againEnters = 20;
	refs[refIndex].paymentsCount = 10;
}

// generateJSON(5);