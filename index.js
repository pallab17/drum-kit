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
// check korche button press gulo mane screen r button gulo
// function 1
   var drumLength= document.querySelectorAll(".drum").length;
for(var i=0;i<drumLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){     
       // alert("i got tipuni");

       var buttonInnerHTML = this.innerHTML;// i=0 hole w ke target korbe 


      makeAwaj(buttonInnerHTML);

      

    } );
    } 

//     document.addEventListener("keydown",function() {
//            alert("key tipeche");         
//     }) ;

// jokhuni ami function tar modhe parameter hisabe event word ta likhchi 
// tokhuni amake dekhiye deye era je kon malta kati koreche 
// jodi ami p press kori keyboard e then ei event ta amake p key ebong aro details deye p key r bepare
// check korche keyboard e kon key ta press korechi or tipechi
// function 2
document.addEventListener("keydown",function(event) {
                           makeAwaj(event.key);
             }) ;


    // function 3
             function makeAwaj(key){


        switch (key) {
                case "w":
                    var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
                    break;
        
                    case "a":
                        var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                        break;
        
                        case "s":
                            var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                            break;
        
                            case "d":
                                var audio = new Audio("sounds/tom-4.mp3");
                        audio.play();
                                break;
        
                                case "j":
                                    var audio = new Audio("sounds/snare.mp3");
                            audio.play();
                                    break;
        
                                    case "k":
                                        var audio = new Audio("sounds/crash.mp3");
                                audio.play();
                                        break;
        
                                        case "l":
                                            var audio = new Audio("sounds/kick-bass.mp3");
                                    audio.play();
                                            break;
        
               
                default: 
                console.log(buttonInnerHTML);
        
        
                    
               }

    }
// ebar jodi ami normal mouse diye w click kori then fn 1 e innerhtml e w jabe 
// tarpor fn 1 w take pass korbe to fn 3 aar sound ber korbe jeta associate ache
// w button on click screen r jonno


// ebar jodi ami normal keyboard diye j tipi then fn 2 e event.key e j jabe 
// tarpor fn 2 j take pass korbe to fn 3 aar sound ber korbe jeta associate ache
// j button on keyboard press r jonno
