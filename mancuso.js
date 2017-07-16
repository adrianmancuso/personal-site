var close = document.getElementsByClassName('close');
var menu = document.getElementsByTagName('aside')[0];
var links = document.getElementsByClassName('link');
var aboutMe = "adrian@mancuso: ~/life/about/ \nadrian@mancuso: about_me.txt\n adrian@mancuso:\n >DJ turned full stack webdeveloper. I enjoy problem solving, writing clean code, trying new things and eating fresh bread.\n >If you would like to know more please feel free to contact me.\n...\n... ";
var printLock = false;
var timeout = 75;

function typeText(string, location){
	if (printLock)
		return;
	printLock = true;

	Sequencr.for(0, string.length, function(i){
		location.innerText += string[i];
	}, timeout,
	function(){printLock = false});
}

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

for (var i = close.length - 1; i >= 0; i--) {
	close[i].addEventListener('click', closeField);
};

for (var i = links.length - 1; i >= 0; i--) {
	links[i].addEventListener('click', openLink)
};