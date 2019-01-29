
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





let count = 0;

document.querySelector("#button").addEventListener("mouseover", () => {
    var btn = document.getElementById("button");
    btn.style.top = Math.floor((Math.random() * 500) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * 500) + 1) + "px";
    count++;
    if (count === 10){
  alert ("So difficult to click ? ");
}

else if (count === 20){
  alert ("WTF dude, click on it stupid ");
}

else if (count === 30){
  alert ("mouahahahahaha");
}
});

