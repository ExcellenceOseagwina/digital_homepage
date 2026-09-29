const images = ["assets/image1.jpg", "assets/image2.avif"];

let currentImage = 0;

setInterval(() => {
  if (currentImage >= images.length) currentImage = 0;

  document.body.style.backgroundImage = `url("${images[currentImage]}")`;
 
}, 3000);
