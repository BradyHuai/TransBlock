"use strict";
log('----------')
log('SCRIPT: Examples of using our libraries')

var img1 = document.createElement("IMG");
img1.className = "image";
img1.src = "../assets/img1.png";
img1.alt = "";
var img2 = document.createElement("IMG");
img2.className = "image";
img2.src = "../assets/img2.png";
img2.alt = "";
var img3 = document.createElement("IMG");
img3.className = "image";
img3.src = "../assets/img3.png";
img3.alt = "";

const bg = new BlockGenerator()
bg.setBlockSize(500);
bg.addElement(img1);
bg.addElement(img2);
bg.addElement(img3);
bg.start();