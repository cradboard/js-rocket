//practice.js
//variables
var favColor = 'blue';
var myFavColors = ['blue', 'red', 'green'];
var numOfFavColors = 3;
var hasGotFavColors = true;
var richObject = {
	firstName: 'Jordan',
	lastName: 'Towers',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 22,
	isMale: true
}
//end of variables
//start of functions
var whatIsMyFavColor = function () {

	return true;

	return 'blue';

}

var doSomething = function () {
	console.log("do Something!!!");
}

var area = function (width, height) {
	return width * height;
}

var fullname = function (firstname, secondname) {
	return firstname + ' ' + secondname;
}

var firstname = 'Jordan';
var secondname = 'Towers';

//if statements

var number1 = 10;
var number2 = 100;

if (number1 < number2) {
	alert('true!!!')
};

var number1 = 10;
var number2 = 100;

if (number1 < number2) {
	alert('true!!!')
} else {
	alert('false!!!')
}

var name1 = 'Jordan';
var name2 = 'Yeet';

if (name1 == 'Jordan') {
	alert('true!!!');
} else if (name2 == 'Jordan') {
	alert('true!!!2');
} else {
	alert('false!!!');
}

var name1 = 'Jordan';
var name2 = 'Yeet';

if (name1 == 'Jordan' && name2 == 'Yeet') {
	alert('true!!!');
} else if (name2 == 'Jordan') {
	alert('true!!!2');
} else {
	alert('false!!!');
}

