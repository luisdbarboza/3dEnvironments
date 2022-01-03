import { scene, camera, renderer, controls, clock } from "./scene.js";
import { mixer } from "./gltfConfig.js";
//import { recorder, recording } from "./animationAndRecording.js";

//Ciclo de renderizado, dibuja cada frame tan rapido como lo
//permita la gpu

//render loop
function renderLoop() {
  // console.log(camera.position);
  // console.log(camera.rotation);

  controls.update();

  renderer.render(scene, camera);

  //Tiempo pasado desde el ultimo frame al actual
  let delta = clock.getDelta();

  if (mixer) mixer.update(delta);

  //esto causa que el rendered redibuje la imagen a la tasa de refresco de la pantalla (usualmente 60 veces por segundo)
  requestAnimationFrame(renderLoop);

  //Hace que ccapture.js capture el canvas

  /*if (recording) {
    recorder.capture(renderer.domElement);
  }*/
}

renderLoop();
