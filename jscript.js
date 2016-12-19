function load() {
	info = document.getElementById("info");
	
	startBut = document.getElementById("start");
	aboutBut = document.getElementById("about");
	
	display = document.getElementById("display");
	
	uservar = document.getElementById("userinput");
	
	out = false;
	
	left = document.getElementById("left");
	
	console.log("ready");
}
function addUser(userInp) {
	textArea = document.getElementById("textArea");
	
	newUserText = document.createElement("div");
	textArea.insertBefore(newUserText, textArea.childNodes[0])
	newUserText.innerHTML = userInp;
	newUserText.setAttribute("ID", "notwords");
	setTimeout(function() {
		newUserText.setAttribute("ID", "words");
		newUserText.style.color = "yellow";
	},100)
	
	if (textArea.childElementCount > 12) {
		console.log("count is " + textArea.childElementCount);
		textArea.lastElementChild.setAttribute("ID", "notwords");
		setTimeout(function() {
			textArea.removeChild(textArea.lastElementChild);
		},100)
	}
}
function addOther(other) {
	textArea = document.getElementById("textArea");
	
	newUserText = document.createElement("div");
	textArea.insertBefore(newUserText, textArea.childNodes[0])
	newUserText.innerHTML = other;
	newUserText.setAttribute("ID", "notwords");
	setTimeout(function() {
		newUserText.setAttribute("ID", "words");
	},100)
	
	if (textArea.childElementCount > 12) {
		console.log("count is " + textArea.childElementCount);
		textArea.lastElementChild.setAttribute("ID", "notwords");
		setTimeout(function() {
			textArea.removeChild(textArea.lastElementChild);
		},100)
	}
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
		left.style.opacity = "1";
		startGame()
	}, 3000);
}
function user(userKey) {
	if(event.keyCode == 13 && userKey.value != "") {
		addUser(uservar.value);
		userKey.value = "";
	}
	
}
function getGender() {
	addOther("What is their name?");
	setTimeout(function() {
		uservar.style.opacity = "1";	
	},3000);
	
}
function startGame() {
	var worddif = 1000;
	setTimeout(function() {
		addOther("...");
		setTimeout(function() {
			addOther("...");
			setTimeout(function() {
				addOther("...");
				setTimeout(function() {
					addOther("Hello there, weary soul.");
					setTimeout(function() {
						addOther("You appear to be lost...");
						setTimeout(function() {
							addOther("Yet you are not looking for the afterlife...");
							setTimeout(function() {
								addOther("Ah yes...");
								setTimeout(function() {
									addOther("You must be what is known as a guide...");
									setTimeout(function() {
										addOther("A soul to guide another");
										setTimeout(function() {
											addOther("Someone with the ability to change fate");
											setTimeout(function() {
												addOther("And you influence their actions");
												setTimeout(function() {
													addOther("But before you can begin, you must pick such person....");
													setTimeout(function() {
														getGender()
													},worddif);
												},worddif);
											},worddif);
										},worddif);
									},worddif);
								},worddif);
							},worddif);
						},worddif);
					},worddif);
				},worddif);
			},worddif);
		},worddif);
	},worddif);
}
