//////////////////////////////////////////////////
/// QUESTIONS
//////////////////////////////////////////////////

var questions = {
	multiplyWholeNumbers: [
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
	divideWholeNumbers: [
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
	factorWholeNumbers: [
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
	leastCommonMultiple: [
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
	greatestCommonFactor: [
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
	addSubtractIntegers: [
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
	multiplyDivideIntegers: [
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
	orderOfOperations: [
		//
	],
	equivalentFractions: [
		[1, 2, 4, 8, 12],
		[2, 7, 14, 28, 35],
		[4, 11, 22, 55, 88],
		[1, 3, 9, 21, 33],
		[5, 6, 12, 18, 60],
		[4, 7, 14, 28, 56],
		[3, 8, 16, 24, 32],
		[1, 3, 30, 45, 60]
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
	solveEquations: [
		//
	],
	addSubtractFractions: [
		["", 5, 11, "+", "", 2, 11],  ["", 3, 8, "+", "", 1, 2],
		["", 11, 12, "-", "", 7, 12], ["", 16, 25, "+", "", 4, 15],
		["", 5, 6, "-", "", 7, 20],   ["", 11, 18, "+", "", 5, 12],
		["", 6, 11, "-", "", 17, 33], [5, "", "", "-", 2, 1, 5],
		[-1, 4, 5, "-", 2, 1, 2],     [-2, 4, 9, "+", 1, 1, 6]
	],
	multiplyDivideFractions: [
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
	],
	decimals: [
		//
	],
	percents: [
		//
	],
	percentProblems: [
		//
	]
};
var correctAnswers = {
	multiplyWholeNumbers: [
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
	divideWholeNumbers: [
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
		["2,4"],
		["2,3,6"],
		["3,5"],
		["2,3,4,6,9"],
		["3,5,9"],
		["2,4"],
		["2,3,5,10"],
		[""],
		["3,5,9"],
		["2,3,5,6,9,10"],
	],
	factorWholeNumbers: [
		["1,3,9"],
		["1,19"],
		["1,2,3,4,6,12"],
		["1,3,5,15,25,75"],
		["1,3,17,51"],
		["1,3,5,9,15,45"],
		["1,2,3,4,6,9,12,18,36"],
		["1,2,4,5,8,10,16,20,40,80"],
		["1,2,3,4,6,8,12,16,24,48"],
		["1,3,9,27,81"]
	],
	primeFactorization: [
		["2,2,2,3"],
		["3,3,5"],
		["2,2,5,5"],
		["2,2,2,2,3"],
		["3,5,5"],
		["2,3,5,7"],
		["2,2,2,3,5"],
		["3,17"],
		["2,2,2,2,3,3"],
		["3,3,5,5"]
	],
	leastCommonMultiple: [
		[12], [24],
		[30], [56],
		[75], [18],
		[60], [72],
		[36], [112]
	],
	greatestCommonFactor: [
		[2],  [2],
		[10], [8],
		[6],  [8],
		[75], [1],
		[24], [17]
	],
	addSubtractIntegers: [
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
	multiplyDivideIntegers: [
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
		[2,  6],
		[1,  10],
		[4,  5],
		[4,  8],
		[3,  16],
		[-2, 3],
		[-5, -2],
		[-9, 5],
		[-9, 9],
		[-9, -8]
	],
	orderOfOperations: [
		//
	],
	equivalentFractions: [
		[2,4,6],    [4,8,10],
		[8,20,32],  [3,7,11],
		[10,15,50], [8,16,32],
		[6,9,12],   [10,15,20]
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
	solveEquations: [
		//
	],
	addSubtractFractions: [
		[0, 7, 11],  [0, 7, 8],
		[0, 1, 3],   [0, 68, 75],
		[0, 29, 60], [1, 1, 36],
		[0, 1, 33],  [2, 4, 5],
		[-4, 3, 10], [-1, 5, 18]
	],
	multiplyDivideFractions: [
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
	],
	decimals: [
		//
	],
	percents: [
		//
	],
	percentProblems: [
		//
	]
};
var userAnswers = {
	multiplyWholeNumbers: [
		//
	],
	divideWholeNumbers: [
		//
	],
	divisibility: [
		//
	],
	factorWholeNumbers: [
		//
	],
	primeFactorization: [
		//
	],
	leastCommonMultiple: [
		//
	],
	greatestCommonFactor: [
		//
	],
	addSubtractIntegers: [
		//
	],
	multiplyDivideIntegers: [
		//
	],
	theNumberGame: [
		//
	],
	orderOfOperations: [
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
	solveEquations: [
		//
	],
	addSubtractFractions: [
		//
	],
	multiplyDivideFractions: [
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
	],
	decimals: [
		//
	],
	percents: [
		//
	],
	percentProblems: [
		//
	]
};
var timeLimits = { //Given in minutes
	multiplyWholeNumbers: 30, //0.25, //3,
	divideWholeNumbers: 30, //0.25, //3,
	divisibility: 30, //0.25, //3,
	factorWholeNumbers: 30, //0.25, //2,
	primeFactorization: 30, //0.25, //3,
	leastCommonMultiple: 30, //0.25, //3,
	greatestCommonFactor: 30, //0.25, //3,
	addSubtractIntegers: 30, //0.25, //3,
	multiplyDivideIntegers: 30, //0.25, //3,
	theNumberGame: 30, //0.25, //3,
	orderOfOperations: 0.1, //0.25, //3,
	equivalentFractions: 30, //0.25, //3,
	reducingFractions: 30, //0.25, //3,
	improperAndMixedFractions: 30, //0.25, //2,
	solveEquations: 30, //0.25, //8,
	addSubtractFractions: 30, //0.25, //8,
	multiplyDivideFractions: 30, //0.25, //8,
	exponents: 30, //0.25, //3,
	toScientificNotation: 30, //0.25, //5,
	fromScientificNotation: 30, //0.25, //5,
	decimals: 30, //0.25, //5,
	percents: 30, //0.25, //4,
	percentProblems: 30, //0.25 //4
};
var requiresSpecificCheck = {
	multiplyWholeNumbers: false,
	divideWholeNumbers: false,
	divisibility: true,
	factorWholeNumbers: true,
	primeFactorization: true,
	leastCommonMultiple: false,
	greatestCommonFactor: false,
	addSubtractIntegers: false,
	multiplyDivideIntegers: false,
	theNumberGame: false,
	orderOfOperations: false,
	equivalentFractions: false,
	reducingFractions: false,
	improperAndMixedFractions: true,
	solveEquations: false,
	addSubtractFractions: false,
	multiplyDivideFractions: false,
	exponents: false,
	toScientificNotation: false,
	fromScientificNotation: false,
	decimals: false,
	percents: false,
	percentProblems: false
}

//////////////////////////////////////////////////
/// GLOBAL VARIABLES
//////////////////////////////////////////////////

var sectionInProgress = false; //Whether or not a mini test is currently being taken.
var currentMiniTestStartTime; //The start time of the current mini test.
var stopTimer = false; //Force the timer to stop.
var firstName, lastName, school;
var currentPart = 0;
var currentTest = 0;
var currentQuestion = 0;
var currentMiniTestIndex;
var userScores = [];
var currentLoadedMiniTest = ""; //multiplyWholeNumbers, divideWholeNumbers, divisibility, factorWholeNumbers, primeFactorization, leastCommonMultiple,
                                //greatestCommonFactor, addSubtractInegers, multiplyDivideIntegers, theNumberGame, orderOfOperations, equivalentFractions,
                                //reducingFractions, improperAndMixedFractions, solveEquations, addSubtractFractions, multiplyDivideFractions,
                                //exponents, toScientificNotation, fromScientificNotation, decimals, percents, percentProblems
var miniTestList = [
	["multiplyWholeNumbers", "divideWholeNumbers", "divisibility", "factorWholeNumbers", "primeFactorization", "leastCommonMultiple", "greatestCommonFactor"],
	["addSubtractIntegers", "multiplyDivideIntegers", "theNumberGame", "orderOfOperations", "equivalentFractions", "reducingFractions", "improperAndMixedFractions"],
	["solveEquations", "addSubtractFractions", "multiplyDivideFractions"],
	["exponents", "toScientificNotation", "fromScientificNotation", "decimals", "percents", "percentProblems"]
];

//////////////////////////////////////////////////
/// FUNCTIONS
//////////////////////////////////////////////////

function validUsername(name) {
	if(name == null) {
		return false;
	}
	else if(name == "") {
		return false;
	}
	else {
		return true;
	}
}
function clickedACheckbox(e) {
	var id = e.target.id;
	var partNum = Number(id.slice(-1));
	if(currentPart != 0) {
		document.getElementById("testSelectionCheckbox" + String(currentPart)).checked = false;
	}
	else {
		var continueButton = document.getElementById("testSelectionContinueButton");
		continueButton.style.display = "inline-block";
		continueButton.addEventListener("click", loadTestInstructions);
	}
	currentPart = partNum;
	document.getElementById("testSelectionCheckbox" + currentPart).checked = true;
}
function sendAnswers() {
	document.getElementById("testCont").style.display = "none";
	document.getElementById("thanks").style.display = "inline-block";
}
function checkAnswers() {
	for(var i=0; i<miniTestList[currentPart-1].length; ++i) {
		userScores.push(0);
		var currentTestName = miniTestList[currentPart-1][i];
		for(var j=0; j<correctAnswers[currentTestName].length; ++j) {
			var correct = true;
			if(requiresSpecificCheck[currentTestName]) {
				switch(currentTestName) {
					case "divisibility":
						var responseNums = userAnswers[currentTestName][j].split(",");
						var correctNums = correctAnswers[currentTestName][j].split(",");
						for(var k=0; k<responseNums.length; ++k) {
							if(!correctNums.includes(responseNums[k])) {
								correct = false;
								break;
							}
						}
						if(/*still*/ correct) {
							for(var k=0; k<correctNums.length; ++k) {
								if(!responseNums.includes(correctNums[k])) {
									correct = false;
									break;
								}
							}
						}
						break;
					case "factorWholeNumbers":
						var responseNums = userAnswers[currentTestName][j].split(",");
						var correctNums = correctAnswers[currentTestName][j].split(",");
						for(var k=0; k<responseNums.length; ++k) {
							if(!correctNums.includes(responseNums[k])) {
								correct = false;
								break;
							}
						}
						if(/*still*/ correct) {
							for(var k=0; k<correctNums.length; ++k) {
								if(!responseNums.includes(correctNums[k])) {
									correct = false;
									break;
								}
							}
						}
						break;
					case "primeFactorization":
						var responseNums = userAnswers[currentTestName][j].slice(0);
						var correctNums = correctAnswers[currentTestName][j].slice(0);
						while(responseNums.length > 0 && correctNums.length > 0) {
							if(responseNums.length != correctNums.length) {
								correct = false;
								break;
							}
							var currentNum = responseNums.pop();
							var index = correctNums.indexOf(currentNum);
							if(index == -1) {
								correct = false;
								break;
							}
							else {
								correctNums.splice(index, 1);
							}
						}
						break;
					case "improperAndMixedFractions":
						if(userAnswers[currentTestName][j][1] != correctAnswers[currentTestName][j][1]) {
							correct = false;
						}
						else if(userAnswers[currentTestName][j][2] != correctAnswers[currentTestName][j][2]) {
							correct = false;
						}
						else if(correctAnswers[currentTestName][j][0] != 0) {
							if(userAnswers[currentTestName][j][0] != correctAnswers[currentTestName][j][0]) {
								correct = false;
							}
						}
						else {
							if(!(userAnswers[currentTestName][j][0] == "0" || userAnswers[currentTestName][j][0] == " " || userAnswers[currentTestName][j][0] == "" || userAnswers[currentTestName][j][0] == null)) {
								correct = false;
							}
						}
						break;
				}
			}
			else {
				for(var k=0; k<correctAnswers[currentTestName][j].length; ++k) {
					if(userAnswers[currentTestName][j] == null) {
						correct = false;
						break;
					}
					if(userAnswers[currentTestName][j][k] != correctAnswers[currentTestName][j][k]) {
						correct = false;
						break;
					}
				}
			}
			if(correct) {
				++userScores[i];
			}
		}
	}
}
function endTest() {
	var currentTestName = miniTestList[currentPart-1][currentTest];
	for(var i=userAnswers[currentTestName].length; i<correctAnswers[currentTestName].length; ++i) {
		userAnswers[currentTestName].push(null);
	}
	++currentTest;
	document.getElementById("timer").style.display = "none";
	if(currentTest >= miniTestList[currentPart-1].length) {
		checkAnswers();
		sendAnswers();
	}
	else {
		loadTest(currentTest);
	}
}
function timerLoop() {
	var currentTime = new Date().getTime();
	var timeElapsed = currentTime - currentMiniTestStartTime;
	var timeRemaining = ((timeLimits[currentLoadedMiniTest]*60*1000) - timeElapsed)/1000;
	timeRemaining = Math.max(timeRemaining, 0);
	var minutes = Math.floor(timeRemaining / 60);
	var minutesString = "0" + String(minutes);
	minutesString = minutesString.slice(-2);
	var seconds = Math.floor(timeRemaining - (minutes * 60));
	var secondsString = "0" + String(seconds);
	secondsString = secondsString.slice(-2);
	document.getElementById("min").innerHTML = minutesString;
	document.getElementById("sec").innerHTML = secondsString;

	if(timeRemaining == 0 || stopTimer) {
		endTest();
	}
	else {
		requestAnimationFrame(timerLoop);
	}
}
function loadNextQuestion() {
	++currentQuestion;
	var currentTestName = miniTestList[currentPart-1][currentTest];
	for(var i=0; i<questions[currentTestName][currentQuestion-1].length; ++i) {
		var currentVal = questions[currentTestName][currentQuestion-1][i];
		document.getElementById(currentTestName + "Question" + String(i+1)).innerHTML = currentVal;
	}
	document.getElementById(currentTestName + "Answer1").focus();
}
function submitAnswer() {
	var currentTestName = miniTestList[currentPart-1][currentTest];
	userAnswers[currentTestName].push([]);
	for(var i=0; i<correctAnswers[currentTestName][currentQuestion-1].length; ++i) {
		var ans = document.getElementById(currentTestName + "Answer" + String(i+1)).value;
		userAnswers[currentTestName][currentQuestion-1].push(ans);
	}
	clearAnswers();
	loadNextQuestion();
}
function skipQuestion() {
	var currentTestName = miniTestList[currentPart-1][currentTest];
	userAnswers[currentTestName].push([]);
	for(var i=0; i<correctAnswers[currentTestName][currentQuestion-1].length; ++i) {
		userAnswers[currentTestName][currentQuestion-1].push(null);
	}
	clearAnswers();
	loadNextQuestion();
}
function clearAnswers() {
	var currentTestName = miniTestList[currentPart-1][currentTest];
	for(var i=0; i<correctAnswers[currentTestName][currentQuestion-1].length; ++i) {
		document.getElementById(currentTestName + "Answer" + String(i+1)).value = "";
	}
}
function startTest() {
	currentQuestion = 0;
	document.getElementById("timer").style.display = "inline-block";
	currentMiniTestStartTime = new Date().getTime();
	requestAnimationFrame(timerLoop);
	sectionInProgress = true;
	document.getElementById(miniTestList[currentPart-1][currentTest] + "HideUntilStart").style.display = "inline-block";
	document.getElementById(miniTestList[currentPart-1][currentTest] + "SubmitButton").addEventListener("click", submitAnswer);
	document.getElementById(miniTestList[currentPart-1][currentTest] + "SkipButton").addEventListener("click", skipQuestion);
	document.getElementById(miniTestList[currentPart-1][currentTest] + "StartButton").style.display = "none";
	loadNextQuestion();
}
function loadTest(testNum) {
	document.getElementById("testExplanationCont").style.display = "none";
	document.getElementById("part" + String(currentPart) + "Explanation").style.display = "none";

	document.getElementById("testCont").style.display = "inline-block";
	document.getElementById("test" + String(currentPart)).style.display = "inline-block";
	for(var i=0; i<miniTestList[currentPart-1].length; ++i) {
		document.getElementById(miniTestList[currentPart-1][i]).style.display = "none";
	}
	document.getElementById(miniTestList[currentPart-1][testNum]).style.display = "inline-block";
	document.getElementById(miniTestList[currentPart-1][testNum] + "StartButton").addEventListener("click", startTest);
	currentLoadedMiniTest = miniTestList[currentPart-1][testNum];
}
function loadTestInstructions() {
	document.getElementById("testSelectionCont").style.display = "none";

	document.getElementById("testExplanationCont").style.display = "inline-block";
	document.getElementById("part" + String(currentPart) + "Explanation").style.display = "inline-block";
	document.getElementById("startWholeTest" + currentPart).addEventListener("click", function() {
		currentTest = 0;
		loadTest(currentTest);
	});
}
function setup() {
	firstName = prompt("What is your first name?");
	while(!validUsername(firstName)) {
		firstName = prompt("I'm sorry, but that's not a valid first name. Try again!");
	}
	lastName = prompt("What is your last name?");
	while(!validUsername(lastName)) {
		lastName = prompt("I'm sorry, but that's not a valid last name. Try again!");
	}
	school = prompt("What is your school?");
	while(!validUsername(school)) {
		school = prompt("I'm sorry, but that's not a valid school name. Try again!");
	}
	document.getElementById("testSelectionCont").style.display = "inline-block";
	for(var i=1; i<=4; ++i) {
		document.getElementById("testSelectionCheckbox" + String(i)).addEventListener("click", function(event) { clickedACheckbox(event); });
	}
}

window.setTimeout(setup, 0);