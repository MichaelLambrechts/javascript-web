
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
  */

  console.log("Hey look in your browser console. It works!");


  let a = 0;


  import img1 from "./img_cat/cat1.jpeg";
  import img2 from "./img_cat/cat2.jpeg";
  import img3 from "./img_cat/cat3.jpeg";
  import img4 from "./img_cat/cat4.jpeg";
  import img5 from "./img_cat/cat5.jpg";
  import img6 from "./img_cat/cat6.jpeg";
  import img7 from "./img_cat/cat7.jpg";
  import img8 from "./img_cat/cat8.jpg";
  import img9 from "./img_cat/cat9.jpg";
  import img10 from "./img_cat/cat10.jpg";
  import img11 from "./img_cat/cat11.jpeg";
  import img12 from "./img_cat/cat12.jpeg";


  let arr = [];
  arr[0] = img1;
  arr[1] = img2;
  arr[2] = img3;
  arr[3] = img4;
  arr[4] = img5;
  arr[5] = img6;
  arr[6] = img7;
  arr[7] = img8;
  arr[8] = img9;
  arr[9] = img10;
  arr[10] = img11;
  arr[11] = img12;



  function changeImg(){
  	if (a < 11){
  	var image = document.getElementById("img");
  	var new_image = new Image();
  	new_image.src = arr[a];
  	image.src = new_image.src; 
  	a++;
  	}
  	else{
  		var image = document.getElementById("img");
  		var new_image = new Image();
  		new_image.src = arr[a];
  		image.src = new_image.src; 
  		a=0;
  	}
  }
  setInterval(changeImg, 1000);













//document.getElementById("img").innerHTML = img3;


/*tab = [src = '<img src="img_cat/cat1.jpeg" alt="">',




]*/



//document.getElementById("container_img").innerHTML = arr[a];

/*function changeImg(){

	if (a < 12){

		var image = document.createElement("img");

		var new_image = new Image();
		new_image.src = arr[a];
		image.src = new_image.src;
		a++;
	}
	else {
		a = 0;
	}
}

setInterval(changeImg, 1000);*/
