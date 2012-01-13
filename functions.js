// JavaScript Document



var letter 

while (!name) { 
	letter = prompt('write an alphabetical letter');
}
//(trace)
console.log(letter);

document.write(letter);

for (var i = 0; i < 10; i++) {
	document.write('<br>' + i);
	document.write('<h1>' + i + '</h1>'); 
}

function isNameCool () {
	var name = prompt ('What is your name?');
	
	if (name == 'mike') {
		document.write('That is an awesome name!');
	}else{
		document.write("I dont like your name");
	}
}

isNameCool();

var writeNameMultipleTimes = function () {
	for (var i = 0; i < 5; i++) {
		document.write('<strong>mike</strong><br>');

};

writeNameMultipleTimes ();

}











// JavaScript Document