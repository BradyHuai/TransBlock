// right swipe
var img1 = document.createElement("IMG");
img1.src = "./assets/image1.png";
img1.alt = "";

var img2 = document.createElement("IMG");
img2.src = "./assets/image2.png";
img2.alt = "";

var div = document.createElement("div");
var h1 = document.createElement("h1");
h1.innerText = "Important";
var p = document.createElement("p");
p.innerText = "Notice: Here is an important notice, please read the following message:"
p.style.margin = "20px";
p.style.fontSize = "20px";
p.style.display = "flex"
p.style.justifyContent = "center";
p.style.alignItems = "center";
var p2 = document.createElement("p");
p2.innerText = "It is really not that important."
p2.style.margin = "20px";
p2.style.fontSize = "20px";
p2.style.display = "flex";
p2.style.justifyContent = "center";
p2.style.alignItems = "center";
div.appendChild(h1);
div.appendChild(p);
div.appendChild(p2);

const bg = new BlockGenerator()
bg.addElement(img1);
bg.addElement(img2);
bg.addElement(div);
bg.setSize(1260, 400);
bg.generateButtons();
bg.activateRightSwipe();
