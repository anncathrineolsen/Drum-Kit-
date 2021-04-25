/* En måde til at vælge alle pågældende trommer */
var numberOfButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
let buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML)

    })

}
/* Til at skabe lyd, når de pågældende bogstaver benyttes på tastatur */
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key)

})
/* Lydeffekter til alle trommerne */
function makeSound(key){


switch (key) {
    case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

                case "d":
                    let tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

                    case "j":
                        let tom5 = new Audio("sounds/snare.mp3");
                        tom5.play();
                        break;

                        case "k":
                            let tom6 = new Audio("sounds/kick-bass.mp3");
                            tom6.play();
                            break;

                            case "l":
                                let tom7 = new Audio("sounds/crash.mp3");
                                tom7.play();
                                break;
    default:
        break;
}


}
/* Aktivitet i knap ved tryk */
function buttonAnimation(currentKey){

    let activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
    
    
    
}