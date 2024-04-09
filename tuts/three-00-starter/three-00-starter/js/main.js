// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
let scene, camera, renderer, cylinder, spaceship, mixer;

let capsule, geometry1, material1, texture1, geometry, material;

let sceneContainer = document.querySelector("#scene-container");

let actionDown, actionTail, actionPant;

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x073220);

    //light for 3d model
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1,1,5);
scene.add(light);
const helper = new THREE.DirectionalLightHelper(light, 5);
scene.add(helper);

const lightLeft = new THREE.DirectionalLight(0xff00000, 3);
lightLeft.position.set(1,3,-5);
scene.add(lightLeft);
const helperLeft = new THREE.DirectionalLightHelper(lightLeft, 5);
scene.add(helperLeft);



    camera = new THREE.PerspectiveCamera(75,sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    sceneContainer.appendChild(renderer.domElement);
    


    const geometry = new THREE.CylinderGeometry( .5, .5, .5,5 );
  //  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
   
   const geometry1 = new THREE.CapsuleGeometry( .3, .1, 4, 8 ); 
   const texture1 = new THREE.TextureLoader().load('textures/water.jpg');
   const material1 = new THREE.MeshStandardMaterial( {map: texture1} ); 
    capsule = new THREE.Mesh( geometry1, material1 ); scene.add( capsule ), capsule.position.y = -6;

   const texture = new THREE.TextureLoader().load('textures/ice.jpg');
   const material = new THREE.MeshStandardMaterial( { map: texture } );
   cylinder = new THREE.Mesh( geometry, material );
    scene.add( cylinder ), //cylinder.position.y = 3;
    


    // Position camera!!!
    camera.position.z = 5;
    
}


//Event Listeners
let mouseIsDown = false;

document.querySelector("body").addEventListener("mousedown", () => {
  actionDown.play();
  actionDown.paused = false;
  mouseIsDown = true;
  console.log("mousedown");
})

document.querySelector("body").addEventListener("mouseup", () => {
 // actionDown.stop();
 mouseIsDown = false;
 actionDown.paused = true;
  console.log("mouseup");
})

document.querySelector("body").addEventListener("mousemove", () => {
  if (mouseIsDown == true){
  console.log("mousemove");
  }
 })

document.querySelector("body").addEventListener("mousemove", () => {
  if (mouseIsDown) {
    console.log("mousemove");
    cylinder.rotation.x +=.3;
  }
})






const clock = new THREE.Clock();
function animate() {
	requestAnimationFrame( animate );

  cylinder.rotation.x += 0.01;
 // cylinder.rotation.y += 0.01;

 cylinder.position.x = Math.sin(Date.now() / 3000) * 4;
 cylinder.position.y = Math.sin(Date.now() / 4000) * 4;
 cylinder.position.z = Math.sin(Date.now() / 5000) * 4;

// console.log(cylinder.position);

    capsule.rotation.x += 0.03;
    capsule.rotation.y += 0.03;

    capsule.position.y = Math.sin(Date.now() / 1000) * 1;

    if(spaceship) {
    //spaceship.rotation.x += 0.01;
   // spaceship.rotation.y += 0.01;
    spaceship.rotation.y = Math.sin(Date.now() / 3000) * 3;
    }

    if(mixer){
    const delta = clock.getDelta();
    mixer.update(delta);
  }

  //always end animation loop with renderer
	renderer.render( scene, camera );
}

function onWindowResize() {
camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
camera.updateProjectionMatrix();
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

window.addEventListener('resize', onWindowResize, false);




init();
animate();



// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models

//load spaceship model
loader.load('assets/explorerColor.glb', function (gltf){
    spaceship = gltf.scene;
    scene.add(spaceship);
    spaceship.scale.set(2,2,2);
    spaceship.position.y = .8
})


//doggo model//
loader.load('assets/dog_shiny.gltf', function(gltf) {
  const doggo = gltf.scene;
  scene.add(doggo);
  doggo.position.y = 1.52

//animation
  mixer = new THREE.AnimationMixer(doggo);
  const clips = gltf.animations;

  //load + play animation
  const clipPant = THREE.AnimationClip.findByName(clips, 'pant');
  actionPant = mixer.clipAction(clipPant);
  actionPant.play();

  const clipTail = THREE.AnimationClip.findByName(clips, 'tail');
  actionTail = mixer.clipAction(clipTail);
  actionTail.play();

  const clipDown = THREE.AnimationClip.findByName(clips, 'down');
  actionDown = mixer.clipAction(clipDown);
//  actionDown.play();

 //allllllll animations movements
// clips.forEach(function(clip) {
 //    const action = mixer.clipAction(clip);
 ///     action.play();
 // });
}, undefined, function(error) {
  console.error(error);
});





// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


