var close = document.getElementsByClassName('close');
var menu = document.getElementsByTagName('aside')[0];
var links = document.getElementsByClassName('link');
var header = document.querySelector('header');
var headerText = "adrianMancuso;";
var aboutMe = ">>>DJ turned full stack web developer.\n I enjoy: problem solving, writing clean code, trying new things && eating fresh bread. >>>Contact:adrian.mancuso@gmail.com";

var printLock = false;
var timeout = 35;

var typeText = function (string, location){
	if (printLock)
		return;
	printLock = true;

	Sequencr.for(0, string.length, function(i){
		location.textContent += string[i];
	}, timeout,
	function(){printLock = false});
};

var closeField = function() {
	var currentBox = event.target.parentElement;
	currentBox.classList.add("hidden");
	menu.classList.remove("hidden");
};

var openLink = function(){
	menu.classList.add("hidden");

	var targetClass = event.target.innerText.split(")")[1];
	var newWindow = document.getElementsByClassName(targetClass)[0];

	newWindow.classList.remove("hidden");
	var textField = document.createElement('p');
	newWindow.appendChild(textField);
	typeText(aboutMe, textField);
};

window.onload = function(){
	var h1 = document.createElement('h1');
	header.appendChild(h1);
	typeText(headerText, h1);
};

for (var i = close.length - 1; i >= 0; i--) {
	close[i].addEventListener('click', closeField);
};

for (var i = links.length - 1; i >= 0; i--) {
	links[i].addEventListener('click', openLink)
};