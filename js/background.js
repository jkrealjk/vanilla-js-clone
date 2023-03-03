const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const random = Math.floor(Math.random() * images.length);
const chooseImg = images[random];

const bgimg = document.createElement("img");

bgimg.src = `img/${chooseImg}`;

document.body.appendChild(bgimg);
