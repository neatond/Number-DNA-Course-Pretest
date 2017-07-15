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
		[2, 3],   [3, 5],   [5, 4],
		[5, 10],  [3, 3],   [3, 4],
		[6, 3],   [7, 2],   [5, 11],
		[5, 5],   [5, 8],   [8, 2],
		[4, 4],   [3, 7],   [9, 9],
		[7, 6],   [8, 8],   [8, 10],
		[9, 7],   [2, 15],  [15, 4],
		[11, 3],  [2, 9],   [5, 7],
		[11, 6],  [9, 3],   [4, 9],
		[6, 15],  [10, 9],  [8, 15],
		[25, 6],  [2, 75],  [11, 10],
		[11, 11], [15, 5],  [25, 3],
		[8, 7],   [6, 9],   [12, 9],
		[4, 25],  [15, 9],  [7, 7],
		[20, 6],  [11, 12], [25, 9],
		[33, 3],  [9, 16],  [5, 41],
		[6, 17],  [3, 27],  [19, 4]
	],
	divide: [
		[6, 2],    [11, 1],   [0, 7],
		[10, 5],   [4, 2],    [12, 3],
		[16, 4],   [25, 5],   [49, 7],
		[15, 3],   [27, 9],   [36, 6],
		[24, 4],   [22, 2],   [81, 9],
		[42, 6],   [56, 8],   [72, 12],
		[35, 7],   [90, 9],   [360, 6],
		[55, 11],  [27, 9],   [36, 6],
		[15, 3],   [33, 11],  [75, 15],
		[19, 19],  [120, 10], [63, 7],
		[125, 25], [72, 8],   [60, 15],
		[120, 6],  [36, 4],   [33, 3],
		[40, 4],   [84, 7],   [45, 9],
		[144, 16], [210, 70], [132, 11],
		[225, 25], [150, 3],  [0, 15],
		[72, 18],  [51, 3],   [108, 9],
		[121, 11], [68, 17],  [91, 7]
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
		[-3, "+", -1],      [-4, "-", 0],       [-2, "+", 1],
		[-5, "+", 5],       [3, "+", "(-5)"],   [3, "-", 5],
		[4, "-", "(-4)"],   [-3, "+", 5],       [-2, "-", "(-7)"],
		[-3, "+", 10],      [-11, "-", 11],     [-10, "+", -8],
		[-8, "+", 10],      [12, "-", "(-5)"],  [3, "-", 12],
		[-2, "-", "(-5)"],  [-9, "+", -2],      [10, "+", -11],
		[-5, "-", 3],       [-8, "+", 7],       [2, "-", "(-11)"],
		[0, "-", -10],      [-12, "+", -4],     [-5, "+", ],
		[4, "-", "(-9)"],   [-3, "+", 6],       [7, "-", 10],
		[-10, "+", -9],     [4, "+", -1],       [-8, "+", 8],
		[-30, "+", 10],     [-11, "-", 41],     [-30, "+", 18],
		[12, "+", -30],     [12, "-", "(-15)"], [30, "-", 42],
		[-22, "-", "(-5)"], [-90, "+", -20],    [17, "+", -11],
		[-57, "-", 33],     [-81, "+", 11],     [22, "-", "(-11)"]
	],
	intMultiplyDivide: [
		[-20, "&divide;", 10],     [-1, "&bull;", "(-1)"],    [-16, "&divide;", "(-8)"],
		[-16, "&divide;", 8],      [8, "&bull;", "(-5)"],     [3, "&bull;", "(-1)"],
		[-20, "&divide;", "(-5)"], [-30, "&divide;", -3],     [14, "&divide;", "(-7)"],
		[-8, "&bull;", 8],         [-36, "&divide;", -9],     [10, "&bull;", "(-15)"],
		[-30, "&divide;", 10],     [-11, "&bull;", 11],       [-64, "&divide;", -8],
		[-81, "&divide;", 9],      [12, "&bull;", "(-5)"],    [3, "&bull;", 12],
		[-2, "&bull;", "(-50)"],   [-90, "&divide;", -9],     [121, "&divide;", -11],
		[-5, "&bull;", 8],         [-56, "&divide;", -7],     [-20, "&bull;", "(-20)"],
		[0, "&bull;", -10],        [-144, "&divide;", -16],   [-72, "&divide;", 9],
		[7, "&bull;", "(-9)"],     [-42, "&divide;", 6],      [-17, "&bull;", 10],
		[-8, "&bull;", -9],        [51, "&divide;", -3],      [-88, "&divide;", 22],
		[-13, "&bull;", 4],        [-9, "&bull;", "(-12)"],   [-420, "&divide;", -20],
		[325, "&divide;", -25],    [8, "&bull;", "(-9)"],     [144, "&divide;", -12],
		[-15, "&bull;", "(-8)"],   [132, "&divide;", -12],    [9, "&bull;", 25]
	],
	theNumberGame: [
		[12, 8],
		[10, 11],
		[20, 9],
		[32, 12],
		[48, 19],
		[-6, 1],
		[10, -7],
		[-45, -4],
		[-81, 0],
		[72, -17]
	],
	equivalentFractions: [
		[1, 2],
		[2, 7],
		[4, 11],
		[1, 3],
		[5, 6],
		[4, 7],
		[3, 8],
		[1, 3],
		[11, 7],
		[2, 9]
	],
	reducingFractions: [
		[2, 4],     [3, 9],     [8, 10],
		[10, 12],   [12, 15],   [20, 25],
		[30, 40],   [18, 45],   [16, 56],
		[16, 24],   [12, 18],   [20, 28],
		[30, 45],   [12, 8],    [38, 19],
		[50, 1000], [250, 100], [64, 16],
		[36, 144],  [75, 125],  [4, 2]
	],
	improperAndMixedFractions: [
		["", 14, 3],  [3, 1, 2],    ["", 9, 2],
		[4, 1, 3],    ["", 14, 2],  [-5, 3, 5],
		["-", 12, 7], [7, 3, 8],    ["", 23, 2],
		[9, 1, 7],    ["", 11, 5],  [-9, 2, 7],
		[-6, 3, 7],   ["-", 55, 7], [-7, 2, 7]
	],
	fracAddSubtract: [
		["", 5, 11, "+", "", 2, 11],  ["", 3, 8, "+", "", 1, 2],
		["", 11, 12, "-", "", 7, 12], ["", 16, 25, "+", "", 4, 15],
		["", 5, 6, "-", "", 7, 20],   ["", 11, 18, "+", "", 5, 12],
		["", 6, 11, "-", "", 17, 33], [5, "", "", "-", 2, 1, 5],
		[-1, 4, 5, "-", 2, 1, 2],     [-2, 4, 9, "+", 1, 1, 6]
	],
	fracMultiplyDivide: [
		["", 2, 3, "&bull;", "", 1, 5],     ["", 3, 5, "&divide;", "", 1, 3],
		["", 7, 8, "&bull;", "", 4, 7],     ["", 10, 11, "&divide;", "", 3, 44],
		["", 9, 14, "&divide;", "", 18, 7], ["", 16, 25, "&bull;", "", 5, 8],
		[-10, "", "", "&divide;", 1, 3, 7], [-1, 1, 5, "&bull;", -2, 1, 2],
		[2, 2, 3, "&bull;", 9, "", ""],     [2, 7, 10, "&divide;", -4, 1, 6]
	],
	exponents: [
		[3, 2],       [-3, 2],  [1, 7],
		[2, 3],       [2, -3],  [-1, 4],
		["(-1)", -4], [5, 3],   [-2, 4],
		["(-5)", 3],  [-5, -3], [3, 4],
		["(-1)", 2],  [10, -3], [10, 3]
	],
	toScientificNotation: [
		[0.00003], [0.0047],
		[2000000], [345.2],
		[7423], [0.055]
	],
	fromScientificNotation: [
		[5, -6], [2.5, -6],
		[8.03, 5], [1.4, 1]
	]
};
var correctAnswers = {
	countBy3s: [
		[3],
		[6],
		[9],
		[12],
		[15],
		[18],
		[21],
		[24],
		[27],
		[30],
		[33],
		[36],
		[39],
		[42],
		[45],
		[48],
		[51],
		[54],
		[57],
		[60],
		[63],
		[66],
		[69],
		[72],
		[75],
		[78],
		[81],
		[84],
		[87]
	],
	multiply: [
		[6],   [15],  [20],
		[50],  [9],   [12],
		[18],  [14],  [55],
		[25],  [40],  [16],
		[16],  [21],  [81],
		[42],  [64],  [80],
		[63],  [30],  [60],
		[33],  [18],  [35],
		[66],  [27],  [36],
		[90],  [90],  [120],
		[150], [150], [110],
		[121], [75],  [75],
		[56],  [54],  [108],
		[100], [135], [49],
		[120], [132], [225],
		[99],  [144], [205],
		[102], [81],  [76]
	],
	divide: [
		[3],  [11], [0],
		[2],  [2],  [4],
		[4],  [5],  [7],
		[5],  [3],  [6],
		[6],  [11], [9],
		[7],  [7],  [6],
		[5],  [10], [60],
		[5],  [3],  [6],
		[5],  [3],  [5],
		[1],  [12], [9],
		[5],  [9],  [4],
		[20], [9],  [11],
		[10], [12], [5],
		[9],  [3],  [12],
		[9],  [50], [0],
		[4],  [17], [12],
		[11], [4],  [13]
	],
	divisibility: [
		[2, 4],
		[2, 3, 6],
		[3, 5],
		[2, 3, 4, 6, 9],
		[3, 5, 9],
		[2, 4],
		[2, 3, 5, 10],
		[],
		[3, 5, 9],
		[2, 3, 5, 6, 9, 10],
	],
	factoring: [
		[1, 3, 9],
		[1, 19],
		[1, 2, 3, 4, 6, 12],
		[1, 3, 5, 15, 25, 75],
		[1, 3, 17, 51],
		[1, 3, 5, 9, 15, 45],
		[1, 2, 3, 4, 6, 9, 12, 18, 36],
		[1, 2, 4, 5, 8, 10, 16, 20, 40, 80],
		[1, 2, 3, 4, 6, 8, 12, 16, 24, 48],
		[1, 3, 9, 27, 81]
	],
	primeFactorization: [
		[2, 2, 2, 3],
		[3, 3, 5],
		[2, 2, 5, 5],
		[2, 2, 2, 2, 3],
		[3, 5, 5],
		[2, 3, 5, 7],
		[2, 2, 2, 3, 5],
		[3, 17],
		[2, 2, 2, 2, 3, 3],
		[3, 3, 5, 5]
	],
	lcm: [
		[12], [24],
		[30], [56],
		[75], [18],
		[60], [72],
		[36], [112]
	],
	gcf: [
		[2],  [2],
		[10], [8],
		[6],  [8],
		[75], [1],
		[24], [17]
	],
	intAddSubtract: [
		[-4],  [-4],   [-1],
		[0],   [-2],   [-2],
		[8],   [2],    [5],
		[7],   [-22],  [-18],
		[2],   [17],   [-9],
		[3],   [-11],  [-1],
		[-8],  [-1],   [13],
		[10],  [-16],  [4],
		[13],  [3],    [-3],
		[-19], [3],    [0],
		[-20], [-52],  [-12],
		[-18], [27],   [-12],
		[-17], [-110], [6],
		[-90], [-70],  [33]
	],
	intMultiplyDivide: [
		[-2],  [1],    [2],
		[-2],  [-40],  [-3],
		[4],   [10],   [-2],
		[-64], [4],    [-150],
		[-3],  [-121], [8],
		[-9],  [-60],  [36],
		[100], [10],   [-11],
		[-40], [8],    [400],
		[0],   [9],    [-8],
		[-63], [-7],   [-170],
		[72],  [-17],  [-4],
		[-52], [108],  [21],
		[-13], [-72],  [-12],
		[120], [-11],  [225]
	],
	theNumberGame: [
		[2, 6],
		[1, 10],
		[4, 5],
		[4, 8],
		[3, 16],
		[-2, 3],
		[-5, -2],
		[-9, 5],
		[-9, 9],
		[-9, -8]
	],
	equivalentFractions: [
		[2, 4, 4, 8, 6, 12],       [4, 14, 8, 28, 10, 35],
		[8, 22, 20, 55, 32, 88],   [3, 9, 7, 21, 11, 33],
		[10, 12, 15, 18, 50, 60],  [8, 14, 16, 28, 32, 56],
		[6, 16, 9, 24, 12, 32],    [10, 30, 15, 45, 20, 60],
		[33, 21, 77, 49, 110, 70], [6, 27, 14, 63, 22, 99]
	],
	reducingFractions: [
		[2, 2, 1, 2],    [3, 3, 1, 3],   [2, 2, 4, 5],
		[2, 2, 5, 6],    [3, 3, 4, 5],   [5, 5, 4, 5],
		[10, 10, 3, 4],  [9, 9, 2, 5],   [8, 8, 2, 7],
		[8, 8, 2, 3],    [6, 6, 2, 3],   [4, 4, 5, 7],
		[15, 15, 2, 3],  [4, 4, 3, 2],   [19, 19, 2, 1],
		[50, 50, 1, 20], [50, 50, 5, 2], [16, 16, 4, 1],
		[36, 36, 1, 4],  [25, 25, 3, 5], [2, 2, 2, 1]
	],
	improperAndMixedFractions: [
		[4, 2, 3],   [0, 7, 2],  [4, 1, 2],
		[0, 13, 3],  [7, 0, 2],  [0, -18, 5],
		[-1, 5, 7],  [0, 59, 8], [11, 1, 2],
		[0, 64, 7],  [2, 1, 5],  [0, -65, 7],
		[0, -45, 7], [-7, 6, 7], [0, -51, 7]
	],
	fracAddSubtract: [
		[0, 7, 11],  [0, 7, 8],
		[0, 1, 3],   [0, 68, 75],
		[0, 29, 60], [1, 1, 36],
		[0, 1, 33],  [2, 4, 5],
		[-4, 3, 10], [-1, 5, 18]
	],
	fracMultiplyDivide: [
		[2, 15], [9, 5],
		[1, 2],  [40, 3],
		[1, 4],  [2, 5],
		[-7, 1], [-3, 1],
		[24, 1], [-81, 125]
	],
	exponents: [
		[9, 1],    [-9, 1],   [1, 1],
		[8, 1],    [1, 8],    [-1, 1],
		[1, 1],    [125, 1],  [-16, 1],
		[-125, 1], [-1, 125], [81, 1],
		[1, 1],    [1, 1000], [1000, 1]
	],
	toScientificNotation: [
		[3, -5],    [4.7, -3],
		[2, 6],     [3.452, 2],
		[7.423, 3], [5.5, -2]
	],
	fromScientificNotation: [
		[0.000005], [0.0000025],
		[803000], [14]
	]
}
var userAnswers = {
	countBy3s: [
		//
	],
	multiply: [
		//
	],
	divide: [
		//
	],
	divisibility: [
		//
	],
	factoring: [
		//
	],
	primeFactorization: [
		//
	],
	lcm: [
		//
	],
	gcf: [
		//
	],
	intAddSubtract: [
		//
	],
	intMultiplyDivide: [
		//
	],
	theNumberGame: [
		//
	],
	equivalentFractions: [
		//
	],
	reducingFractions: [
		//
	],
	improperAndMixedFractions: [
		//
	],
	fracAddSubtract: [
		//
	],
	fracMultiplyDivide: [
		//
	],
	exponents: [
		//
	],
	toScientificNotation: [
		//
	],
	fromScientificNotation: [
		//
	]
}
var timeLimits = { //Given in minutes
	countBy3s: 5,
	multiply: 5,
	divide: 5,
	divisibility: 5,
	factoring: 5,
	primeFactorization: 5,
	lcm: 5,
	gcf: 5,
	intAddSubtract: 5,
	intMultiplyDivide: 5,
	theNumberGame: 5,
	equivalentFractions: 5,
	reducingFractions: 5,
	improperAndMixedFractions: 5,
	fracAddSubtract: 5,
	fracMultiplyDivide: 5,
	exponents: 5,
	toScientificNotation: 5,
	fromScientificNotation: 5
}

//////////////////////////////////////////////////
/// GLOBAL VARIABLES
//////////////////////////////////////////////////

var categories = []; //A list of the navigation sidebar's categories.
var sections = {}; //An object containing the different sections.
var currentLoadedSection = "home"; //The sections are home, countBy3s, multiply, divide, divisibility, factoring,
                                   //primeFactorization, lcm, gcf, intAddSubtract, intMultiplyDivide, theNumberGame,
                                   //equivalentFractions, reducingFractions, improperAndMixedFractions, fracAddSubtract,
                                   //fracMultiplyDivide, exponents, toScientificNotation, fromScientificNotation
var scetionInProgress = false; //Whether or not a section of the test is currently being taken.
var currentSectionStartTime; //The start time of the current section.
var stopTimer = false; //Force the timer to stop.

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
	this.currentQuestion = 0;
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
		sections[currentLoadedSection].start();
	}
	this.loadQuestion = function(num) {
		if(num >= questions[this.id].length) {
			stopTimer = true;
			this.getScore();
			return;
		}
		for(var i=0; i<questions[this.id][num].length; ++i) {
			document.getElementById(this.id + "Question" + String(i + 1)).innerHTML = questions[this.id][num][i];
		}
		for(var i=0; i<correctAnswers[this.id][num].length; ++i) {
			document.getElementById(this.id + "Answer" + String(i + 1)).value = "";
		}
		if(this.id == "countBy3s") {
			document.getElementById(this.id + "Answer" + String(1)).value = "3";
		}
	}
	this.start = function() {
		scetionInProgress = true;
		currentSectionStartTime = window.performance.now();
		this.loadQuestion(this.currentQuestion);
		requestAnimationFrame(updateTimer);
	}
	this.getAnswers = function() {
		var ans = [];
		if(this.id == "countBy3s") {
			for(var i=0; i<correctAnswers[this.id].length; ++i) {
				console.log(this.id + "Answer" + String(i+1));
				console.log(document.getElementById(this.id + "Answer" + String(i + 1)).value);
				ans.push(document.getElementById(this.id + "Answer" + String(i + 1)).value);
			}
		}
		else {
			for(var i=0; i<correctAnswers[this.id][this.currentQuestion].length; ++i) {
				console.log(this.id + "Answer" + String(i+1));
				console.log(document.getElementById(this.id + "Answer" + String(i + 1)).value);
				ans.push(document.getElementById(this.id + "Answer" + String(i + 1)).value);
			}
		}
		userAnswers[this.id].push(ans);
	}
	this.getScore = function() {
		this.getAnswers();
		for(var i=userAnswers[this.id].length; i<correctAnswers.length; ++i) {
			userAnswers.push([]);
		}
		var correct = 0;
		var total = 0;
		if(this.id == "countBy3s") {
			for(var i=0; i<correctAnswers[this.id].length; ++i) {
				++total;
				if(userAnswers[this.id][0][i] == correctAnswers[this.id][i]) {
					++correct;
				}
			}
		}
		else {
			for(var i=0; i<correctAnswers[this.id].length; ++i) {
				++total;
				var allCorrect = true;
				for(var j=0; j<correctAnswers[this.id][i].length; ++j) {
					if(userAnswers[this.id][i][j] != correctAnswers[this.id][i][j]) {
						allCorrect = false;
						break;
					}
				}
				if(allCorrect) {
					++correct;
				}
			}
		}
		alert("In the section " + this.id + ", you got " + correct + "/" + total + ".");
	}

	this.element.addEventListener("click", this.load);

	sections[this.id] = this;
}

//////////////////////////////////////////////////
/// FUNCTIONS
//////////////////////////////////////////////////

function setup() {
	for(var i=0; i<numCategories; ++i) {
		categories.push(new category("part" + String(i+1)));
	}
	var submitButtons = document.getElementsByClassName("questionCategoryEnterAnswer");
	for(var i=0; i<submitButtons.length; ++i) {
		submitButtons[i].addEventListener("click", function() {
			sections[currentLoadedSection].getAnswers();
			sections[currentLoadedSection].loadQuestion(sections[currentLoadedSection].currentQuestion+1);
			++sections[currentLoadedSection].currentQuestion;
		});
	}
}
function updateTimer() {
	if(stopTimer) {
		stopTimer = false;
		return;
	}
	var currentTime = window.performance.now();
	var elapsed = currentTime - currentSectionStartTime;
	var maxTime = timeLimits[currentLoadedSection];
	var timeLeft = (maxTime * 60 * 1000) - elapsed;

	var done = false;
	if(timeLeft < 0) {
		timeLeft = 0;
		done = true;
	}

	var minutes = String(Math.floor(timeLeft / (1000 * 60))); while(minutes.length < 2) { minutes = "0" + minutes; } timeLeft -= minutes * 1000 * 60;
	var seconds = String(Math.floor(timeLeft / (1000)));      while(seconds.length < 2) { seconds = "0" + seconds; } timeLeft -= seconds * 1000;
	var millis  = String(Math.floor(timeLeft / (1)));         while(millis.length < 3) {millis = "0" + millis; }     timeLeft -= millis * 1;

	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	document.getElementById("milliseconds").innerHTML = millis;

	if(!done) {
		requestAnimationFrame(updateTimer);
	}
	else {
		sections[currentLoadedSection].getScore();
	}
}

//////////////////////////////////////////////////
/// EXECUTED CODE
//////////////////////////////////////////////////

setup();