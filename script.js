const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

const images = [
  {
    url: "https://media.istockphoto.com/id/1057853430/photo/red-car-standing-on-a-road.webp?s=170667a&w=0&k=20&c=rzVc3bh44JuRPY300NrhMWLUwkvoEIRrngB5N3G0IZg=",
    alt: "Concept car parked on a runway",
  },
  {
    url: "https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Red racing car parked by a tree",
  },
  {
    url: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Grey BMW 3 series",
  },
  {
    url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Blue Chevrolet sports car parked off-road",
  },
  {
    url: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Black ford mustang GT in the sunset",
  },
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
