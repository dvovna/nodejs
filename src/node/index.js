var server = require("./server");
var router = require("./router");

var aboutPageController = require('./controllers/about-page-controller.js');
var mainPageController = require('./controllers/main-page-controller.js');

var handle = [];
handle["/"] = mainPageController.main;
handle["/index"] = mainPageController.main;
handle["/about"] = aboutPageController.about;

server.start(router.route, handle);