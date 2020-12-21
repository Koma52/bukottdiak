var audioFile = new Audio('assets/Zámbó Jimmy  - Még nem veszíthetek [ALPÁRI REMIX]-w7K61jgTT9A.mp3')

audioFile.autoplay = true;
audioFile.loop = true;

function setup(){
	if(audioFile.paused == true){
		document.getElementById('paragraph').innerHTML = "Kattints a képre a jóságért!!44!!négy!! 😊";
	}
	else{
		document.getElementById('paragraph').innerHTML = "Kattints a képre, hogy megálljon a zene"
	}
}

function audioToggle(){
	if(audioFile.paused == true){
		audioFile.play();
		setup();
	}
	else{
		audioFile.pause();
		setup();
	}
}