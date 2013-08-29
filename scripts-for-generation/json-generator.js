exports.generate = generate;

var projects = ["World of Tanks", "Umbrella", "Red Alert", "Gnom", "Placer", "UI", "Java"];
var compainies = ["new arms", "new boobs", "new butt", "new backbone", "new lazer", "patch 100500"];
var activities = ["link on bla.ru", "banner on tut.by", "banner on google.com", "icon on efinancialcareers.com", "", ""];

var areas = ["header on main form", "footer on main form", "left side", "right side"];
var partners = ["hubabuba.org", "orbit.by", "google.com", "nodejs.org"];

var refs = [""];


//should return correct json
function generate() {
	return getProjects();
}

function getProjects() {
	var projects = [],
		massSize = rand(10);

	for(var i = 0; massSize; i++) {
		projects.push(getRandomProject());
	}

	return projects;
}

function getRandomProject() {
	var project = {};

	project["id"] = rand(100000);
	project["name"] = getRandomProjectName();
	project["companies"] = getCompaignsList();

	return project;
}

//implementation...
function getCompaignsList() {
	return ["1"];
}

function getRandomProjectName() {
	return projects[Math.floor(rand() * projects.length)];
}












function rand(length) {
	var len = length || '';
	return Math.random(len);
}