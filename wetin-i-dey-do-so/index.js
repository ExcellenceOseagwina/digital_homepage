const images = ["assets/image1.jpg", "assets/image2.avif", "assets/image3.jpg"];

let currentImage = 0;
let specialImage = "assets/image2.avif";

setInterval(() => {
  currentImage++
  if (currentImage >= images.length) currentImage = 0;


  document.body.style.backgroundImage = `url("${images[currentImage]}")`;
  document.body.style.transition = "background-image .5s ease";
}, 3000);

