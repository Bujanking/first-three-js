import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;

const ambientLight = new THREE.AmbientLight( 0xffffff);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff,100,100);
pointLight.position.set(0,15,10);
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper( pointLight, 100 );
scene.add( pointLightHelper );

const plan = new THREE.PlaneGeometry( 1000, 1000, 500, 500 );
const planMat = new THREE.MeshPhysicalMaterial( {
    color: 0xffffff,
} );
const plane = new THREE.Mesh( plan, planMat );
plane.castShadow = true;
plane.position.set(0,-5,0);
plane.rotation.x = -Math.PI/2
scene.add( plane );




const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshPhysicalMaterial( 
    {color: 0x00ff00} 
    ); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.set(0, 0, 0)
scene.add( cube );

function animation(){
    requestAnimationFrame(animation);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera);
}
animation()