import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const loader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xeeeeee);
document.body.appendChild( renderer.domElement );

let object;
let camera;

loader.load( 'scene.gltf', function ( gltf ) {
    object = gltf.scene;
    scene.add( object );
    camera = gltf.cameras[0];
},
function(xhr){
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}, function ( error ) {
    console.error( error );
} );


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

