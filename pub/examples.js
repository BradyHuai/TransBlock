"use strict";
log('----------')
log('SCRIPT: Examples of using our libraries')

var img1 = document.createElement("IMG");
img1.className = "image";
img1.src = "../assets/img1.png";
img1.alt = "";

const cg = new BlockGenerator()
cg.setBlockSize(500)
cg.addElement(img1)
// cg.makeCircle()
// cg.makeCircle()
// cg.changeCirclesColor()