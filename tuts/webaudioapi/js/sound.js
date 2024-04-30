

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

song.onloadeddata = function() {
    playbutton.style.visibility = "visible";
}
