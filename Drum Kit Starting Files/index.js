
var noOfDrumBtns=document.querySelectorAll(".drum").length;

//event listener for button clicks

//event listener is applied to the buttons
for(var i=0; i<noOfDrumBtns; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //console.log(this);//this shows the corr button that is clicked

        var buttonInnerHTML=this.innerHTML;

        makeSound(buttonInnerHTML);

        addAnimation(buttonInnerHTML);
    });
    
}

//event listener for keyboard press

//**keypress event listener is added to the entire document**
document.addEventListener("keypress", function(event){//event is pressing of the key
    makeSound(event.key);//key is the event's attribute denoting which key was pressed

    addAnimation(event.key);
})  

function makeSound(key){
    switch(key){
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);

    }
}

//setting animation for button getting clicked
function addAnimation(key){
    var activeBtn=document.querySelector("."+key);//for ex - .w, w button gets selected

    //gives the animation of pressing the button and returning to its normal form
    activeBtn.classList.add("pressed");//apply css

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 200);//carry out the function after 100 milliseconds
}