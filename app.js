//testing comments

var pics = [
	"images/dragon1.jpg",
	"images/dragon2.jpg",
	"images/dragon3.jpg",
	"images/dragon4.jpg"
];

var counter = 1;
var btn = document.querySelector("#but");
var img = document.querySelector("#i1");

btn.addEventListener("click", function(){
	img.src = pics[counter++];
	if(counter == 4){
		counter = 0;
	}
});