
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
  */


  /*Exercice 1.1*/

  console.log("Hey look in your browser console. It works!");

  document.querySelector("#button1").addEventListener("click", () => {
  	document.querySelector("#button4").style.backgroundColor = "blue";
  });

  document.querySelector("#button2").addEventListener("click", () => {
  	document.querySelector("#button4").style.backgroundColor = "red"; 
  });

  document.querySelector("#button3").addEventListener("click", () => {
  	document.querySelector("#button4").style.backgroundColor = "green"; 
  });

  /*Exerice 1.2*/


  document.querySelector("#add").addEventListener("click", () => {
  	let number1 = document.querySelector('#myNumber').value; 
  	number1 = Number(number1);
    let number2 = document.querySelector('#myNumber2').value; 
    number2 = Number(number2);
    let total = number1 + number2;
    document.querySelector("#result").innerText = "Result : " + total;
  });

  document.querySelector("#soustract").addEventListener("click", () => {
   let number1 = document.querySelector('#myNumber').value; 
   number1 = Number(number1);
   let number2 = document.querySelector('#myNumber2').value; 
   number2 = Number(number2);
   let total = number1 - number2;
   document.querySelector("#result").innerText = "Result : " + total;
 });

  document.querySelector("#multiply").addEventListener("click", () => {
   let number1 = document.querySelector('#myNumber').value; 
   number1 = Number(number1);
   let number2 = document.querySelector('#myNumber2').value; 
   number2 = Number(number2);
   let total = number1 * number2;
   document.querySelector("#result").innerText = "Result : " + total;
 });

  document.querySelector("#divide").addEventListener("click", () => {
   let number1 = document.querySelector('#myNumber').value; 
   number1 = Number(number1);
   let number2 = document.querySelector('#myNumber2').value; 
   number2 = Number(number2);
   let total = number1 / number2;
   document.querySelector("#result").innerText = "Result : " + total;
 });

//Exercice 1.3

document.querySelector("#reset").addEventListener("click", () => {
  document.getElementById("allReset").reset();
});

document.querySelector("#display").addEventListener("click", () => {
  document.getElementById("hidden").style.visibility = "hidden";
  let a = document.getElementById("Text1").value;
  let b = document.getElementById("Text2").value;
  let c = document.getElementById("Text3").value;
  let d = document.getElementById("Text4").value;
  document.querySelector("#h1").innerHTML = 'Hahaha, everyone should know that "The Super Vilain" ' +  a + "\nwho think having super power like " + b + "\n has for motivation to " + c + "\nand his plan to conquer the world is" + d;
});



//Exercice 1.4


/*
document.querySelector("#go").addEventListener("click", () => {
  let number_01 = document.querySelector("#day").value;
  number_01 = Number(number_01);
  console.log(number_01);



});*/