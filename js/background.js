const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg"
];

chosenImg = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);