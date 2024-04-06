import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const loader = new GLTFLoader();
/*const textureLoader = new THREE.TextureLoader();
textureLoader.load('Autobots.png', function(texture){
    scene.background = texture;
}); */

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xeeeeee);
document.body.appendChild( renderer.domElement );

let object;
let camera
let mixer;


loader.load( 'scene_with_anims.gltf', function ( gltf ) {
    object = gltf.scene;
    scene.add( object );
    camera = gltf.cameras[0];
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
   mixer = new THREE.AnimationMixer(object);
    gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
    });

},

function(xhr){
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}, function ( error ) {
    console.error( error );
} );

const clock = new THREE.Clock();
function animate() {
    if (mixer){
        mixer.update(clock.getDelta());
    }
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.addEventListener('resize', function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();

