

let song = document.querySelector("#song");
let playbutton = document.querySelector("#play-button");
let pausebutton = document.querySelector("#pause-button");


/*--Event Listener used to make wait time happen before button is pushed--*/
playbutton.addEventListener('click', function () {
    song.play();
    song.volume = .3;
    
})

pausebutton.addEventListener('click', function () {
    song.pause();
})





/* ---------another way to play audio, future reference----------

window.onload = setInterval(Gameloop); //10fps

let myAudio = new Audio();

myAudio.src = './audio/song.mp3';

function Gameloop() {
    myAudio.play();
    if (myAudio.paused == true) {
        myAudio.play();
    }
}
*/