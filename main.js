var images = {
	a:"https://imgur.com/Xs7Qy2F.jpg",
	b:"https://imgur.com/n72bKGj.jpg",
	c:"https://imgur.com/u5JZFTg.jpg",
	d:"https://imgur.com/M03Q0h6.jpg",
	e:"https://imgur.com/s8duR8f.jpg",
	f:"https://imgur.com/KuUE42p.jpg",
	g:"https://i.imgur.com/Ti0ByI7.jpg",
	h:"https://imgur.com/39RxiTu.jpg",
	i:"https://imgur.com/SazaHUq.jpg",
	j:"https://i.imgur.com/rt9k95e.jpg",
	k:"https://imgur.com/Cjn6NfS.jpg",
	l:"https://imgur.com/zpTu0Te.jpg",
	m:"https://imgur.com/nLAYa86.jpg",
	n:"https://i.imgur.com/q35FfV2.jpg",
	o:"https://i.imgur.com/pEgeMPC.jpg",
	p:"https://imgur.com/OltxF2x.jpg",
	q:"https://25.media.tumblr.com/tumblr_mb50xf8S9c1rgw39go1_500.jpg",
	r:"https://i.imgur.com/zYrDjNp.jpg",
	s:"https://imgur.com/piSCzuZ.jpg",
	t:"https://i.imgur.com/3C1StJZ.jpg",
	u:"https://i.imgur.com/hhUFv.png",
	v:"https://imgur.com/nDJj7ik.jpg",
	w:"https://imgur.com/obVcb.jpg",
	x:"https://i.imgur.com/NZ1TzHh.jpg",
	y:"https://i.imgur.com/iH6UqVf.jpg",
	z:"https://imgur.com/3lzDlmj.jpg",
	aa:"https://imgur.com/urMXQm5.jpg",
	ab:"https://imgur.com/2bNKnKX.jpg",
	ac:"https://i.imgur.com/A4G7i9H.jpg",
	ad:"https://i.imgur.com/mXkeaEG.jpg",
	ae:"https://i.imgur.com/LxfH5TS.jpg",
	af:"https://i.imgur.com/aJ57CAj.jpg",
	ag:"https://i.imgur.com/lF2bRr4.jpg",
	ah:"https://i.imgur.com/l6YYjS5.jpg"
};

var selectedOne = "";
var selectedTwo = "";
var answered = false;

/*
// Initialize Firebase
firebase.intializeApp({
	apiKey: "AIzaSyBm7UhEYhynvXHPdwWItD9-kDi1LvdLBnM",
	authDomain: "animash-81a89.firebaseapp.com",
	databaseURL: "https://animash-81a89.firebaseio.com",
	storageBucket: "",
});
var dbRef = firebase.dataBase().ref().child("scores");

//var ref = new Firebase("https://animash-81a89.firebaseio.com/scores")
*/

function setRandomPictures(){
	var picture1 = document.getElementById("pic1");
	var picture2 = document.getElementById("pic2");
	selectedOne = getRandomValue(images, "");
	picture1.src = images[selectedOne];
	selectedTwo = getRandomValue(images, selectedOne);
	picture2.src = images[selectedTwo];
}

function getRandomValue(object, cantBe) {
  var keys = Object.keys(object);
  var key = keys[Math.floor(keys.length * Math.random())];
  while (key == cantBe){
  	key = keys[Math.floor(keys.length * Math.random())];
  }
  return key;
};

function pageLoad(){
	setRandomPictures();
}

var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

jQuery(document).ready(function($){
	$("#pic1").on(clickHandler, choosePicOne);
	$("#pic2").on(clickHandler, choosePicTwo);
});

function choosePicOne(e){
	if (!answered){
		answered = true;
		updateScores(selectedOne, selectedTwo);
	}
}

function choosePicTwo(e){
	if (!answered){
		answered = true;
		updateScores(selectedTwo, selectedOne);
	}
}

function updateScores(winner, loser){
	updateValues(winner, loser);
}

  
  