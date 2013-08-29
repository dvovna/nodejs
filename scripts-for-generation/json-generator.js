exports.generate = generate;

var projects = ["World of Tanks", "Umbrella", "Red Alert", "Gnom", "Placer", "UI", "Java"];
var compainies = ["new arms", "new boobs", "new butt", "new backbone", "new lazer", "patch 100500"];
var activities = ["link on bla.ru", "banner on tut.by", "banner on google.com", "icon on efinancialcareers.com", "", ""];

var areas = ["header on main form", "footer on main form", "left side", "right side"];
var partners = ["hubabuba.org", "orbit.by", "google.com", "nodejs.org"];

var refs = [""];


//should return correct json
function generate() {
	return getRandomProjectName();
}

function getProjects {
	var projects [],
		massSize= rand(100);

	for(var i = 0, massSize, i++) {
		projects.push(getRandomProject());
	}

	return projects;
}

function getRandomProject() {

}

function getRandomProjectName() {
	return projects[Math.floor(rand() * projects.length)];
}












function rand(length) {
	var len = length || '';
	return Math.random(len);
}