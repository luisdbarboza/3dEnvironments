import * as THREE from "https://cdn.skypack.dev/three@0.135.0";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.135.0/examples/jsm/loaders/GLTFLoader";
import { scene, camera } from "../js/scene.js";
import gsap from "https://cdn.skypack.dev/gsap";

//En este archivo se inicializa el modelo 3D, se establece su posicion y
//Se ejecuta su animacion
let timeline = gsap.timeline();

//instancia un cargador para modelos GLTF
const loader = new GLTFLoader();

let gltfModel;
let mixer;
/*
  Hola daviel, aqui puedes ver como cargo los modelos 3d junto a los Entornos que me pasó gonzalo
*/

loader.load('/Entornos/Entorno2/Entorno2.gltf', (gltf) => {
    camera.position.y = 5;
    camera.position.z = 30;
    
    gltf.scene.traverse( function( node ) {
      if ( node.isMesh ) { node.receiveShadow = true; }
    });

    scene.add(gltf.scene);

    gltfModel = gltf;
  },
  undefined,
  (error) => {
    console.log(error);
  }
);

loader.load('/Card2/Card.gltf', (gltf) => {
    gltf.scene.position.y = 0.02;

    gltf.scene.traverse( function( node ) {
      if ( node.isMesh ) { 
        node.receiveShadow = true;
        node.castShadow = true; 
      }
    });

    scene.add(gltf.scene);
  }, 
  undefined,
  error => {
    console.log(error);
  }
)

export { gltfModel, mixer };
