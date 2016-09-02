var images = {
	a:"http://imgur.com/Xs7Qy2F.jpg",
	b:"http://imgur.com/n72bKGj.jpg",
	c:"http://imgur.com/u5JZFTg.jpg",
	d:"http://imgur.com/M03Q0h6.jpg",
	e:"http://imgur.com/s8duR8f.jpg",
	f:"http://imgur.com/KuUE42p.jpg",
	g:"http://i.imgur.com/Ti0ByI7.jpg",
	h:"http://imgur.com/39RxiTu.jpg",
	i:"http://imgur.com/SazaHUq.jpg",
	j:"https://i.reddituploads.com/969da38bd02b48feb81a9cf0a13ee3e1?fit=max&h=1536&w=1536&s=63bbd6c6cb363a30530d66f2149b435c",
	k:"http://imgur.com/Cjn6NfS.jpg",
	l:"http://imgur.com/zpTu0Te.jpg",
	m:"http://imgur.com/nLAYa86.jpg",
	n:"http://i.imgur.com/q35FfV2.jpg",
	o:"http://i.imgur.com/pEgeMPC.jpg",
	p:"http://imgur.com/OltxF2x.jpg",
	q:"http://25.media.tumblr.com/tumblr_mb50xf8S9c1rgw39go1_500.jpg",
	r:"http://i.imgur.com/zYrDjNp.jpg",
	s:"http://imgur.com/piSCzuZ.jpg",
	t:"http://i.imgur.com/3C1StJZ.jpg"
};

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBm7UhEYhynvXHPdwWItD9-kDi1LvdLBnM",
	authDomain: "animash-81a89.firebaseapp.com",
	databaseURL: "https://animash-81a89.firebaseio.com",
	storageBucket: "",
};
firebase.initializeApp(config);

function setRandomPictures(){
	var picture1 = document.getElementById("pic1");
	var picture2 = document.getElementById("pic2");
	var firstKey = getRandomValue(images, "");
	picture1.src = firstKey;
	console.log("Got Here");
	picture2.src = getRandomValue(images, firstKey);
}

function getRandomValue(object, cantBe) {
  var keys = Object.keys(object);
  var key = object[keys[Math.floor(keys.length * Math.random())]];
  while (key == cantBe){
  	key = object[keys[Math.floor(keys.length * Math.random())]];
  }
  console.log(key);
  return key;
};

function pageLoad(){
	setRandomPictures();
}

function choosePicOne(){
	location.reload();
}

function choosePicTwo(){
	location.reload();
}

  
  