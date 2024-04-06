const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

const images = [
  { url: "./assets/audi.jpg", alt: "Audi A8 in the snow" },
  { url: "./assets/bmw.jpg", alt: "BMW M3 coupe in the sunset" },
  { url: "./assets/lamborghini.jpg", alt: "Orange lamborghini in a forest" },
  { url: "./assets/mercedes.jpg", alt: "Orange mercedes CLS track edition" },
  { url: "./assets/mustang.jpg", alt: "Black ford mustang GT in the sunset" },
];

function createThumnails() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    thumbContainer.appendChild(img);
    img.addEventListener("click", function () {
      createLargeImage(image);
    });
  });
}

function createLargeImage(image) {
  displayImage.innerHTML = "";
  const LargeImg = document.createElement("img");
  LargeImg.src = image.url;
  LargeImg.alt = image.alt;
  displayImage.appendChild(LargeImg);
}

createThumnails();
createLargeImage(images[1]);
