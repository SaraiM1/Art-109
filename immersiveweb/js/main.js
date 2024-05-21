
import * as THREE from 'three';

import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, sun, mixer;
let sceneContainer = document.querySelector("#scene-container");
let sunAction;


function init () {


  //---setting up scene, camera and renderer---//
scene = new THREE.Scene();

const light1 = new THREE.DirectionalLight(0xffffff, 3);
light1.position.set(-1,-1,-5);
scene.add(light1);


// const light = new THREE.DirectionalLight( 0xFFFFFF,3 );
// light.position.set(1,5,1);
// scene.add( light );


// const helper = new THREE.DirectionalLightHelper( light, 3 );
// scene.add( helper );





camera = new THREE.PerspectiveCamera(13, sceneContainer.clientWidth / sceneContainer.clientHeight, .1, 1000);

renderer = new THREE.WebGLRenderer( {antialias: true, alpha: true} );
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
sceneContainer.appendChild(renderer.domElement);


//-----initiate add-ons---//
const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader(); //loads 3d models

loader.load('assets/project/project3lesslight.gltf', function (gltf){
    sun = gltf.scene;
    scene.add(sun);
    sun.scale.set(1,1,1);
  
   mixer = new THREE.AnimationMixer(sun);
  const clips = gltf.animations;
 const clip = THREE.AnimationClip.findByName(clips, 'sunAction');
 const action = mixer.clipAction(clip);
   action.play();

  
 


})




//---create geometry---//


//----position camera---//
camera.position.z = -150;
 camera.position.x = 280;
 camera.position.y = 50;

console.log("IcosphereAction")
}


const clock = new THREE.Clock();

//---Animation Loop ---//
function animate() {
    requestAnimationFrame(animate);
    if (mixer)
mixer.update(clock.getDelta());

renderer.render(scene,camera);

}


function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;   //aspect ratio needs division size
   // camera.updateProjectMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);   //render sets size so it has comma
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
