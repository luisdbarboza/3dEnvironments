import * as THREE from "https://cdn.skypack.dev/three@0.135.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.135.0/examples/jsm/controls/OrbitControls";

//En este archivo se describe la escena, la camara, el renderizador, la luz,
//los controles de la camara, y se inicializa el reloj

//construye una nueva escena
const scene = new THREE.Scene();
scene.background = new THREE.Color("#DDD");

//Responsive values
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

//Añade una luz uniforme a toda la escena
const light = new THREE.AmbientLight(0xFFFFFF, 0.5); // soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.castShadow = true;
directionalLight.position.set( -3, 5, 0 ); //default;
directionalLight.shadow.mapSize.width = 1024; // default
directionalLight.shadow.mapSize.height = 1024; // default
scene.add( directionalLight );

//Ayudas para los ejex
// const axesHelper = new THREE.AxesHelper( 20 );
// scene.add( axesHelper );

//Crea un renderizador para que dibuje el 3D en el canvas
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  preserveDrawingBuffer: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer.domElement);

renderer.outputEncoding = THREE.sRGBEncoding;

//PerspectiveCamera(
// FOV = campo de vision en grados,
// aspectRatio, la mayoria de las veces quieres usar el ancho / altura
// valor de corte cercano - los objetos que se renderizen antes que el valor de corte no se mostraran
// valor de corte lejano - los objetos que se renderizen despues que el valor de corte no se mostraran
//)
const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
 
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

//Controles para la camara libre
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Reloj para el tiempo delta
const clock = new THREE.Clock();

export { scene, controls, camera, clock, renderer };
