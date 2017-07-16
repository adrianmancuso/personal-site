var close = document.getElementsByClassName('close');
var menu = document.getElementsByTagName('aside')[0];
var links = document.getElementsByClassName('link');

var closeField = function() {
	currentBox = event.target.parentElement;
	currentBox.classList.add("hidden");
	menu.classList.remove("hidden");
};

var openLink = function(){
	menu.classList.add("hidden");
	targetClass = event.target.innerText.split(")")[1];
	newWindow = document.getElementsByClassName(targetClass)[0];
	newWindow.classList.remove("hidden");
};

for (var i = close.length - 1; i >= 0; i--) {
	close[i].addEventListener('click', closeField);
};

for (var i = links.length - 1; i >= 0; i--) {
	links[i].addEventListener('click', openLink)
};