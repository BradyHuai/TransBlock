"use strict";
log('----------')
log('SCRIPT: Examples of using our libraries')

// const exampleText = "This is a random text";
// const exampleText2 = "To be, or not to be--that is the question: \
// Whether 'tis nobler in the mind to suffer\
// The slings and arrows of outrageous fortune\
// Or to take arms against a sea of troubles\
// And by opposing end them. To die, to sleep--\
// No more--and by a sleep to say we end\
// The heartache, and the thousand natural shocks\
// That flesh is heir to. 'Tis a consummation\
// Devoutly to be wished. To die, to sleep--\
// To sleep--perchance to dream: ay, there's the rub,\
// For in that sleep of death what dreams may come\
// When we have shuffled off this mortal coil,\
// Must give us pause. There's the respect\
// That makes calamity of so long life.\
// For who would bear the whips and scorns of time,\
// Th' oppressor's wrong, the proud man's contumely\
// The pangs of despised love, the law's delay,\
// The insolence of office, and the spurns\
// That patient merit of th' unworthy takes,\
// When he himself might his quietus make\
// With a bare bodkin? Who would fardels bear,\
// To grunt and sweat under a weary life,\
// But that the dread of something after death,\
// The undiscovered country, from whose bourn\
// No traveller returns, puzzles the will,\
// And makes us rather bear those ills we have\
// Than fly to others that we know not of?\
// Thus conscience does make cowards of us all,\
// And thus the native hue of resolution\
// Is sicklied o'er with the pale cast of thought,\
// And enterprise of great pitch and moment\
// With this regard their currents turn awry\
// And lose the name of action. -- Soft you now,\
// The fair Ophelia! -- Nymph, in thy orisons\
// Be all my sins remembered.";

// const extext3 = "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"

// var img1 = document.createElement("IMG");
// img1.src = "./assets/img1.jpg";
// img1.alt = "";

// var img2 = document.createElement("IMG");
// img2.src = "./assets/img2.jpg";
// img2.alt = "";

// var img3 = document.createElement("IMG");
// img3.src = "./assets/img3.jpg";
// img3.alt = "";

// var text1 = document.createElement("p");
// text1.appendChild(document.createTextNode(exampleText));

// const bg = new BlockGenerator()
// bg.addElement(img1);
// bg.addElement(img2);
// bg.addElement(text1);
// bg.addElement(img3);
// bg.setTiming(2)
// bg.generateButtons();
// bg.activateNoAnimation();

// var img4 = document.createElement("IMG");
// img4.src = "./assets/img4.jpg";
// img4.alt = "";

// var img5 = document.createElement("IMG");
// img5.src = "./assets/img5.jpg";
// img5.alt = "";

// var img6 = document.createElement("IMG");
// img6.src = "./assets/img3.jpg";
// img6.alt = "";

// var text2 = document.createElement("p");
// text2.appendChild(document.createTextNode(exampleText2));

// const bg2 = new BlockGenerator()
// bg2.addElement(img4);
// bg2.addElement(img5);
// bg2.addElement(text2);
// bg2.addElement(img6);
// bg2.generate();
// bg2.generateButtons2();
// bg2.activateRightSwipe();

// var img7 = document.createElement("IMG");
// img7.src = "./assets/img1.jpg";
// img7.alt = "";

// var img8 = document.createElement("IMG");
// img8.src = "./assets/img2.jpg";
// img8.alt = "";

// var text3 = document.createElement("p");
// text3.appendChild(document.createTextNode(exampleText));

// var text4 = document.createElement("p");
// text4.appendChild(document.createTextNode(exampleText2));


// var text5 = document.createElement("span");
// text5.innerText = "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum \
// lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem \
// ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \
// lorem ipsum lorem ipsum";

// const textdiv = document.createElement("div");

// for (let i = 0; i <= 20; i++){
//     var temp = text5.cloneNode(true);
//     textdiv.appendChild(temp);
// }

// const bg3 = new BlockGenerator()
// bg3.addElement(img7);
// bg3.addElement(textdiv);
// bg3.addElement(text3);
// bg3.addElement(text4);
// bg3.addElement(img8);
// bg3.setTiming(3);
// bg3.generate();
// bg3.generateButtons3();
// bg3.activateUpSwipe();



var img1 = document.createElement("IMG");
img1.src = "./assets/img1.jpg";
img1.alt = "";

var img2 = document.createElement("IMG");
img2.src = "./assets/img2.jpg";
img2.alt = "";

var img3 = document.createElement("IMG");
img3.src = "./assets/img3.jpg";
img3.alt = "";

const bg = new BlockGenerator()
bg.addElement(img3);
bg.addElement(img1);
bg.addElement(img2);
bg.generate();
bg.activateFade();
