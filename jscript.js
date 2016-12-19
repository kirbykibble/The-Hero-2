function load() {
	info = document.getElementById("info");
	
	startBut = document.getElementById("start");
	aboutBut = document.getElementById("about");
	
	display = document.getElementById("display");
	
	out = false;
	
	console.log("ready");
}

function about() {

	console.log("About information is out: " + out);
	
	if (out === false) {
	info.style.color = "rgba(255,255,255,1)";
	info.style.marginTop = "0";
	out = true;
	}
	else if (out === true) {
		info.style.color = "rgba(255,255,255,0)";
		info.style.marginTop = "10vh";
		out = false;
	}
	else {
		console.log("error");
	}
	
	
}
function move(itself) {
	itself.style.marginRight = "30vw";
	itself.style.marginLeft = "-30vw";
	itself.style.backgroundColor = "rgba(255,255,255,0)";
	itself.style.color = "rgba(255,255,255,0)";
}

function start() {
	console.log("start button working...");
	
	startBut.style.transition = "all ease 1s";
	aboutBut.style.transition = "all ease 1.5s";
	info.style.transition = "all ease 2s";
	
	move(startBut);
	move(aboutBut);
	move(info);
	
	display.style.opacity = "0";
	
	setTimeout(function() {
		display.style.backgroundImage = "url('')";
		display.style.opacity = "1";
	}, 3000);
}