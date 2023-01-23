// alert("hiiii");

// if i add this next line thwn website start hotei alert ta kaj korbe 
// button click korle alert wont work so amra function r naam tai debo 
// addeventlistener r bhetore without bracket or parenthesis
// document.querySelector("button").addEventListener("click",buttonClick());

// document.querySelector("button").addEventListener("click",buttonClick);
// function buttonClick(){     
//     alert("i got tipuni");
// }  // this is one way of adding or passing the fn to the event listener

// another way of adding fn in event listener is as follows 


// now will add loop as sob kota button r jonno alada kore event listener banono sombhob na

// for(var i=0;i<document.querySelectorAll("button").length;i++){
// document.querySelector("button").addEventListener("click",function(){     
//     alert("i got tipuni");
// } );
// }   // ei method ta subhider noye as button jodi onno kaj r jonno toiri kori setateo ei function ta kaj korbe

// eibar class diye target korbo tai .drum use  korchi 
   var drumLength= document.querySelectorAll(".drum").length;
for(var i=0;i<drumLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){     
       // alert("i got tipuni");

       var audio = new Audio("sounds/tom-1.mp3");
             audio.play();


    } );
    } 