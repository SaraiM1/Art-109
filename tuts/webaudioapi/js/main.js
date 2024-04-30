
import * as THREE from 'three';



/*const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);


// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( './audio/song.mp3', function( buffer ) {
	sound.setBuffer( buffer );
    window.addEventListener('click', function(){
        sound.play();
        sound.setLoop( true );
        sound.setVolume( 0.3 );


    })
});

---------another way to play audio, future reference----------

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