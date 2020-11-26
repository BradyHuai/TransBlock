"use strict";
log('----------')
log('SCRIPT: Examples of using our libraries')

var img1 = document.createElement("IMG");
img1.src = "../assets/img1.png";
img1.alt = "";

var img2 = document.createElement("IMG");
img2.src = "../assets/img2.png";
img2.alt = "";

var img3 = document.createElement("IMG");
img3.src = "../assets/img3.png";
img3.alt = "";

var text1 = document.createElement("p");
const exampleText = "This is a random text";
text1.appendChild(document.createTextNode(exampleText));

const bg = new BlockGenerator()
bg.addElement(img1);
bg.addElement(img2);
bg.addElement(text1);
bg.addElement(img3);
bg.generateButtons();
bg.activateNoAnimation();

var img4 = document.createElement("IMG");
img4.src = "../assets/img1.png";
img4.alt = "";

var img5 = document.createElement("IMG");
img5.src = "../assets/img2.png";
img5.alt = "";

var img6 = document.createElement("IMG");
img6.src = "../assets/img3.png";
img6.alt = "";

var text2 = document.createElement("p");
text2.appendChild(document.createTextNode(exampleText));

const bg2 = new BlockGenerator()
bg2.addElement(img4);
bg2.addElement(img5);
bg2.addElement(text2);
bg2.addElement(img6);
bg2.generate();
bg2.generateButtons2();
bg2.activateRightSwipe();

var img7 = document.createElement("IMG");
img7.src = "../assets/img1.png";
img7.alt = "";

var img8 = document.createElement("IMG");
img8.src = "../assets/img2.png";
img8.alt = "";

var img9 = document.createElement("IMG");
img9.src = "../assets/img3.png";
img9.alt = "";

var text3 = document.createElement("p");
text3.appendChild(document.createTextNode(exampleText));

const bg3 = new BlockGenerator()
bg3.addElement(img7);
bg3.addElement(img8);
bg3.addElement(text3);
bg3.addElement(img9);
bg3.generate();
bg3.generateButtons3();
bg3.activateUpSwipe();