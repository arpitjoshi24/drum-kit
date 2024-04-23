

// document.querySelector('button').addEventListener('click',handleclick);



// function handleclick(){
//     alert("i got clicked");
// }


    // ananymous function--
    // document.querySelector('button').addEventListener('click',function() {
    //     alert("i got clicked");
    // });

    // button press

for (i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function() {
      
      var btn =this.innerHTML;
      makesound(btn);
        animation(btn);
         
         });
}
// detecting keyboard press 

document.addEventListener("keydown", (e)=>{
    makesound(e.key);
    animation(e.key);
});


function makesound(key){
    switch (key) {
        case "w":
              var audio1 = new Audio("tom-1.mp3");
              audio1.play();
            break;
        case "a":
              var audio2 = new Audio("tom-2.mp3");
              audio2.play();
            break;
        case "s":
              var audio3 = new Audio("tom-3.mp3");
              audio3.play();
            break;
        case "d":
              var audio4 = new Audio("tom-4.mp3");
              audio4.play();
            break;
        case "j":
              var audio5 = new Audio("crash.mp3");
              audio5.play();
            break;
        case "k":
              var audio6 = new Audio("kick-bass.mp3");
              audio6.play();
            break;
        case "l":
              var audio7 = new Audio("snare.mp3");
              audio7 .play();
            break;
    
        default: console.log(btn)
            break;
       }
}

function animation(currentkey){
    var atvbutton=document.querySelector("."+currentkey);
    atvbutton.classList.add("pressed");
    setTimeout(delay,100);
    function delay(){
        atvbutton.classList.remove("pressed");
    }
}


