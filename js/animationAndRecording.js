/*
import * as THREE from "https://cdn.skypack.dev/three@0.135.0";
import { gltfModel, mixer } from "./gltfConfig.js";
import { product } from "./gltfConfig.js";

//Crea un "grabador" para el canvas
let recorder = new CCapture({
  verbose: false,
  display: true,
  framerate: 60,
  quality: 100,
  format: "webm",
  //timeLimit: 7,
});

let recording = false;

let recordButton = document.querySelector("#record-btn");

let playAnimationButton = document.querySelector("#play-stop-animation-btn");

let animate = false;

const stopAnimation = (gltfModel) => {
  gltfModel.animations.forEach((clip) => {
    const clipAction = mixer.clipAction(clip);
    console.log(clipAction);

    clipAction.stop();
  });
};

recordButton.addEventListener("click", () => {
  if (!recording) {
    recording = true;

    recorder.start();
    recordButton.innerText = "Stop recording";
  } else {
    recording = false;

    recorder.stop();
    recorder.save();
    recordButton.innerText = "Record animation";
  }
});

//Reproduce la animación principal
playAnimationButton.addEventListener("click", () => {
  if (!animate) {
    //Reproduce las animaciones 1 sola vez
    gltfModel.animations.forEach((clip) => {
      //asegura que el ultimo frame prevalezca al terminar la animacion
      const clipAction = mixer.clipAction(clip);
      clipAction.clampWhenFinished = true;
      clipAction.loop = THREE.LoopOnce;

      //Clips de animacion para cada panel
      if (clip.name === product.animationsPerAngle[0] && !clip.name.includes('Main')) clipAction.play();
    
      //El componente del canvas con camara libre debe tener una linea 
      //de código que ejecute las animaciones principales con nombre "Main{Numero}"
      //if(clip.name.includes('Main')) clipAction.play();
    });

    playAnimationButton.innerText = "Stop animation";
    animate = true;

    mixer.addEventListener("finished", (e) => {
      // playAnimationButton.innerText = "Play animation";
      // animate = false;

      // stopAnimation(gltfModel);
    });
  } else {
    stopAnimation(gltfModel);

    playAnimationButton.innerText = "Play animation";
    animate = false;
  }
});

export { recorder, recording };

*/
