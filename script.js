//////////////////////////////////////////////////
/// CONSTANTS
//////////////////////////////////////////////////

var numCategories = 6; //The number of categories in the navigation bar sidebar, not including "home".

//////////////////////////////////////////////////
/// QUESTIONS
//////////////////////////////////////////////////

var questions = {
	countBy3s: [
		//
		[]
	],
	multiply: [
		[2, 3], [3, 5], [5, 4],
		[5, 10], [3, 3], [3, 4],
		[6, 3], [7, 2], [5, 11],
		[5, 5], [5, 8], [8, 2],
		[4, 4], [3, 7], [9, 9],
		[7, 6], [8, 8], [8, 10],
		[9, 7], [2, 15], [15, 4],
		[11, 3], [2, 9], [5, 7],
		[11, 6], [9, 3], [4, 9],
		[6, 15], [10, 9], [8, 15],
		[25, 6], [2, 75], [11, 10],
		[11, 11], [15, 5], [25, 3],
		[8, 7], [6, 9], [12, 9],
		[4, 25], [15, 9], [7, 7],
		[20, 6], [11, 12], [25, 9],
		[33, 3], [9, 16], [5, 41],
		[6, 17], [3, 27], [19, 4]
	],
	divide: [
		[6, 2], [11, 1], [0, 7],
		[10, 5], [4, 2], [12, 3],
		[16, 4], [25, 5], [49, 7],
		[15, 3], [27, 9], [36, 6],
		[24, 4], [22, 2], [81, 9],
		[42, 6], [56, 8], [72, 12],
		[35, 7], [90, 9], [360, 6],
		[55, 11], [27, 9], [36, 6],
		[15, 3], [33, 11], [75, 15],
		[19, 19], [120, 10], [63, 7],
		[125, 25], [72, 8], [60, 15],
		[120, 6], [36, 4], [33, 3],
		[40, 4], [84, 7], [45, 9],
		[144, 16], [210, 70], [132, 11],
		[225, 25], [150, 3], [0, 15],
		[72, 18], [51, 3], [108, 9],
		[121, 11], [68, 17], [91, 7]
	],
	divisibility: [
		[476],
		[102],
		[555],
		[3024],
		[6705],
		[476],
		[1110],
		[551],
		[3555],
		[303030]
	],
	factoring: [
		[3, 9],
		[2, 19],
		[6, 12],
		[6, 75],
		[4, 51],
		[6, 45],
		[9, 36],
		[10, 80],
		[10, 48],
		[5, 81]
	],
	primeFactorization: [
		[24],
		[45],
		[100],
		[48],
		[75],
		[210],
		[120],
		[51],
		[144],
		[225]
	],
	lcm: [
		[4, 3],
		[6, 8],
		[10, 6],
		[8, 7],
		[15, 25],
		[9, 6],
		[20, 12],
		[18, 24],
		[18, 12],
		[14, 16]
	],
	gcf: [
		[6, 8],
		[8, 14],
		[20, 30],
		[16, 40],
		[18, 24],
		[40, 56],
		[150, 225],
		[8, 25],
		[24, 144],
		[34, 51]
	],
	intAddSubtract: [
		
	],
	intMultiplyDivide: [

	],
	theNumberGame: [

	],
	equivalentFractions: [

	],
	reducingFractions: [

	],
	improperAndMixedFractions: [

	],
	fracAddSubtract: [

	],
	fracMultiplyDivide: [

	],
	exponents: [

	],
	toScientificNotation: [

	],
	fromScientificNotation: 

	[]
};

//////////////////////////////////////////////////
/// GLOBAL VARIABLES
//////////////////////////////////////////////////

var categories = []; //A list of the navigation sidebar's categories.
var sections = []; //A list of the different sections.
var currentLoadedSection = "home"; //The sections are home, countBy3s, multiply, divide, divisibility, factoring,
                                   //primeFactorization, lcm, gcf, intAddSubtract, intMultiplyDivide, theNumberGame,
                                   //equivalentFractions, reducingFractions, improperAndMixedFractions, fracAddSubtract,
                                   //fracMultiplyDivide, exponents, toScientificNotation, fromScientificNotation

//////////////////////////////////////////////////
/// CLASSES
//////////////////////////////////////////////////

function category(id) {
	this.element = document.getElementById(id);

	var tempSectionsNodeList = this.element.childNodes;
	this.sections = [];
	for(var i=0; i<tempSectionsNodeList.length; ++i) {
		if(tempSectionsNodeList[i].nodeType == 1) {
			this.sections.push(tempSectionsNodeList[i]);
		}
	}
	this.header = document.getElementById(this.sections[0].getAttribute("id"));
	for(var i=1; i<this.sections.length; ++i) {
		this.sections[i] = new section(this.sections[i].getAttribute("id"),
			document.getElementById(this.sections[i].getAttribute("id")));
	}

	this.hide = function() {
		this.visible = false;
		for(var i=1; i<this.sections.length; ++i) {
			this.sections[i].element.style.visibility = "hidden";
			this.sections[i].element.style.height = "0px";
			this.sections[i].element.style.padding = "0px 10px";
		}
	}
	this.unhide = function() {
		this.visible = true;
		for(var i=1; i<this.sections.length; ++i) {
			this.sections[i].element.style.visibility = "visible";
			this.sections[i].element.style.height = "auto";
			this.sections[i].element.style.padding = "10px 10px";
		}
	}
	this.toggle = function() {
		var i = Number(this.getAttribute("id").slice(4, 5)) - 1;
		if(categories[i].visible) {
			categories[i].hide();
		}
		else {
			categories[i].unhide();
		}
	}

	this.visible = false;
	this.header.addEventListener("click", this.toggle);
}
function section(id, element) {
	this.id = id;
	this.element = element;
	this.contents = document.getElementById(id + "CONT")

	this.load = function() {
		var allSections = document.getElementById("mainCont").childNodes;
		for(var i=0; i<allSections.length; ++i) {
			if(allSections[i].nodeType == 3) {
				continue;
			}
			document.getElementById(allSections[i].getAttribute("id")).style.display = "none";
		}
		var id = this.getAttribute("id");
		document.getElementById(id + "CONT").style.display = "inline-block";
		currentLoadedSection = id;
	}

	this.element.addEventListener("click", this.load);

	sections.push(this);
}

//////////////////////////////////////////////////
/// FUNCTIONS
//////////////////////////////////////////////////

function setup() {
	for(var i=0; i<numCategories; ++i) {
		categories.push(new category("part" + String(i+1)));
	}
}

//////////////////////////////////////////////////
/// EXECUTED CODE
//////////////////////////////////////////////////

setup();