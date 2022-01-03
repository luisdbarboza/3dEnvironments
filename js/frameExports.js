import { renderer } from "./scene.js";

//Configuraciones para exportar escenas utilizando lo dibujado
//en el canvas en un frame especifico

//Crea un flexbox para posicionar los botones <a></a>
const saveLink = document.createElement("div");
saveLink.classList.add("exporter-btns");

//Crea botones ancla para cambiar el tamaño del canvas a una resolución especifica
saveLink.innerHTML =
  '<a href="#" class="exporter-btn" id="saveLink">Save Frame (Canvas Size)</a>';
saveLink.innerHTML +=
  '<a href="#" class="exporter-btn" id="saveLink2">Save Frame SD(640x480)</a>';
saveLink.innerHTML +=
  '<a href="#" class="exporter-btn" id="saveLink3">Save Frame HD(1280x720)</a>';
saveLink.innerHTML +=
  '<a href="#" class="exporter-btn" id="saveLink4">Save Frame Full HD(1920x1080)</a>';
saveLink.innerHTML +=
  '<a href="#" class="exporter-btn" id="saveLink5">Save Frame 2K(2048x1080)</a>';

document.body.appendChild(saveLink);
document
  .getElementById("saveLink")
  .addEventListener("click", () =>
    saveAsImage(window.innerWidth, window.innerHeight, renderer)
  );

document
  .getElementById("saveLink2")
  .addEventListener("click", () => saveAsImage(640, 480, renderer));

document
  .getElementById("saveLink3")
  .addEventListener("click", () => saveAsImage(1280, 720, renderer));

document
  .getElementById("saveLink4")
  .addEventListener("click", () => saveAsImage(1920, 1080, renderer));

document
  .getElementById("saveLink5")
  .addEventListener("click", () => saveAsImage(2048, 1080, renderer));

//tipo MIME para archivos binarios
const strDownloadMime = "image/octet-stream";

const saveAsImage = (width, height, renderer) => {
  renderer.setSize(width, height);

  let imgData;

  try {
    setTimeout(() => {
      let strMime = "image/jpeg";
      imgData = renderer.domElement.toDataURL(strMime);

      console.log(imgData);

      saveFile(imgData.replace(strMime, strDownloadMime), "test.jpg");

      renderer.setSize(window.innerWidth, window.innerHeight);
    }, 500);
  } catch (e) {
    console.log(e);
    return;
  }
};

const saveFile = function (strData, filename) {
  let link = document.createElement("a");
  if (typeof link.download === "string") {
    document.body.appendChild(link); //Firefox requires the link to be in the body
    link.download = filename;
    link.href = strData;
    link.click();
    document.body.removeChild(link); //remove the link when done
  } else {
    location.replace(uri);
  }
};

export default saveAsImage;