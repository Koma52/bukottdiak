var audioFile = new Audio('assets/Zámbó Jimmy  - Még nem veszíthetek [ALPÁRI REMIX]-w7K61jgTT9A.mp3')

audioFile.autoplay = true;
audioFile.loop = true;

function audioToggle(){
	if(audioFile.paused == true){
		audioFile.play();
	}
	else{
		audioFile.pause();
	}
}