exports.generate = generate;

var projects = ["World of Tanks", "Umbrella", "Red Alert", "Gnom", "Placer", "UI", "Java"];
var compainies = ["new arms", "new boobs", "new butt", "new backbone", "new lazer", "patch 100500"];
var activities = ["link on bla.ru", "banner on tut.by", "banner on google.com", "icon on efinancialcareers.com", "", ""];

var areas = ["header on main form", "footer on main form", "left side", "right side"];
var partners = ["hubabuba.org", "orbit.by", "google.com", "nodejs.org"];

var refs = [""];


//should return correct json
function generate(size) {
	var json = [];

	json.push({"projects": getProjects(size)});

	json = JSON.stringify(json);

	return json;
}

function getProjects(size) {
	var projects = [];

	for(var i = 0; i <= size; i++) {
		projects.push(getRandomProject());
	}

	return projects;
}

function getRandomProject() {
	var project = {};

	project["id"] = floor((rand()*1000000) + 1);
	project["name"] = getRandomProjectName();
	project["compaigns"] = getCompaignsList();

	return project;
}

//implementation...
function getCompaignsList() {
	var compaigns = [];

	compaigns.push({"id": "1"});

	return compaigns;
}
//implemented
function getRandomProjectName() {
	return projects[Math.floor(rand() * projects.length)];
}



function rand(length) {
	var len = length || '';
	return Math.random(len);
}

function floor(arg) {
	return Math.floor(arg);
}