function example3() {
    const header1 = document.createElement('h1');
    header1.style.fontFamily = "Times New Roman";
    header1.innerText = "All available animations"
    const body = $('body');
    body.append(header1);

    // no Animation
    const subtitle1 = document.createElement('h3');
    subtitle1.innerText = "No animation"
    subtitle1.style.fontFamily = "Times New Roman";

    subtitle1.style.display = "flex"
    subtitle1.style.justifyContent = "center"
    subtitle1.style.alignItems = "center"
    body.append(subtitle1);

    var img5 = document.createElement("IMG");
    img5.src = "./assets/image5.png";
    img5.alt = "";

    var img6 = document.createElement("IMG");
    img6.src = "./assets/image6.png";
    img6.alt = "";

    var img7 = document.createElement("IMG");
    img7.src = "./assets/image7.png";
    img7.alt = "";

    var img8 = document.createElement("IMG");
    img8.src = "./assets/image8.png";
    img8.alt = "";

    const bg3 = new BlockGenerator('ex3')
    bg3.addElement(img5);
    bg3.addElement(img6);
    bg3.addElement(img7);
    bg3.addElement(img8);
    bg3.generateButtons();
    bg3.setSize(350, 350)
    bg3.activateNoAnimation();

    // right swipe
    const subtitle2 = document.createElement('h3');
    subtitle2.innerText = "Right swipe animation"
    subtitle2.style.fontFamily = "Times New Roman";
    subtitle2.style.display = "flex"
    subtitle2.style.justifyContent = "center"
    subtitle2.style.alignItems = "center"
    body.append(subtitle2);

    var img9 = document.createElement("IMG");
    img9.src = "./assets/image5.png";
    img9.alt = "";

    var img10 = document.createElement("IMG");
    img10.src = "./assets/image6.png";
    img10.alt = "";

    var img11 = document.createElement("IMG");
    img11.src = "./assets/image7.png";
    img11.alt = "";

    var img12 = document.createElement("IMG");
    img12.src = "./assets/image8.png";
    img12.alt = "";

    const bg4 = new BlockGenerator('ex4')
    bg4.addElement(img9);
    bg4.addElement(img10);
    bg4.addElement(img11);
    bg4.addElement(img12);
    bg4.generateButtons();
    bg4.setSize(350, 350)
    bg4.activateRightSwipe();

    // up swipe
    const subtitle3 = document.createElement('h3');
    subtitle3.innerText = "Up swipe animation"
    subtitle3.style.fontFamily = "Times New Roman";
    subtitle3.style.display = "flex"
    subtitle3.style.justifyContent = "center"
    subtitle3.style.alignItems = "center"
    body.append(subtitle3);

    var img13 = document.createElement("IMG");
    img13.src = "./assets/image5.png";
    img13.alt = "";

    var img14 = document.createElement("IMG");
    img14.src = "./assets/image6.png";
    img14.alt = "";

    var img15 = document.createElement("IMG");
    img15.src = "./assets/image7.png";
    img15.alt = "";

    var img16 = document.createElement("IMG");
    img16.src = "./assets/image8.png";
    img16.alt = "";

    const bg5 = new BlockGenerator('ex5')
    bg5.addElement(img13);
    bg5.addElement(img14);
    bg5.addElement(img15);
    bg5.addElement(img16);
    bg5.generateButtons();
    bg5.setSize(350, 350)
    bg5.activateUpSwipe();



    // fade
    const subtitle4 = document.createElement('h3');
    subtitle4.innerText = "Fade animation"
    subtitle4.style.fontFamily = "Times New Roman";
    subtitle4.style.display = "flex"
    subtitle4.style.justifyContent = "center"
    subtitle4.style.alignItems = "center"
    body.append(subtitle4);

    var img17 = document.createElement("IMG");
    img17.src = "./assets/image5.png";
    img17.alt = "";

    var img18 = document.createElement("IMG");
    img18.src = "./assets/image6.png";
    img18.alt = "";

    var img19 = document.createElement("IMG");
    img19.src = "./assets/image7.png";
    img19.alt = "";

    var img20 = document.createElement("IMG");
    img20.src = "./assets/image8.png";
    img20.alt = "";

    const bg6 = new BlockGenerator('ex6')
    bg6.addElement(img17);
    bg6.addElement(img18);
    bg6.addElement(img19);
    bg6.addElement(img20);
    bg6.generateButtons();
    bg6.setSize(350, 350)
    bg6.activateFade();


    // circle
    const subtitle5 = document.createElement('h3');
    subtitle5.innerText = "Circle animation"
    subtitle5.style.fontFamily = "Times New Roman";
    subtitle5.style.display = "flex"
    subtitle5.style.justifyContent = "center"
    subtitle5.style.alignItems = "center"
    body.append(subtitle5);

    var img21 = document.createElement("IMG");
    img21.src = "./assets/image5.png";
    img21.alt = "";

    var img22 = document.createElement("IMG");
    img22.src = "./assets/image6.png";
    img22.alt = "";

    var img23 = document.createElement("IMG");
    img23.src = "./assets/image7.png";
    img23.alt = "";

    var img24 = document.createElement("IMG");
    img24.src = "./assets/image8.png";
    img24.alt = "";

    const bg7 = new BlockGenerator('ex7')
    bg7.addElement(img21);
    bg7.addElement(img22);
    bg7.addElement(img23);
    bg7.addElement(img24);
    bg7.generateButtons();
    bg7.setSize(350, 350)
    bg7.activateCircle();


    // x-slice
    const subtitle6 = document.createElement('h3');
    subtitle6.innerText = "Vertial slice animation"
    subtitle6.style.fontFamily = "Times New Roman";
    subtitle6.style.display = "flex"
    subtitle6.style.justifyContent = "center"
    subtitle6.style.alignItems = "center"
    body.append(subtitle6);

    var img25 = document.createElement("IMG");
    img25.src = "./assets/image5.png";
    img25.alt = "";

    var img26 = document.createElement("IMG");
    img26.src = "./assets/image6.png";
    img26.alt = "";

    var img27 = document.createElement("IMG");
    img27.src = "./assets/image7.png";
    img27.alt = "";

    var img28 = document.createElement("IMG");
    img28.src = "./assets/image8.png";
    img28.alt = "";

    const bg8 = new BlockGenerator('ex8')
    bg8.addElement(img25);
    bg8.addElement(img26);
    bg8.addElement(img27);
    bg8.addElement(img28);
    bg8.generateButtons();
    bg8.setSize(350, 350)
    bg8.activateXSlice();


    // y-slice
    const subtitle7 = document.createElement('h3');
    subtitle7.innerText = "Horizontal slice animation"
    subtitle7.style.fontFamily = "Times New Roman";
    subtitle7.style.display = "flex"
    subtitle7.style.justifyContent = "center"
    subtitle7.style.alignItems = "center"
    body.append(subtitle7);

    var img29 = document.createElement("IMG");
    img29.src = "./assets/image5.png";
    img29.alt = "";

    var img30 = document.createElement("IMG");
    img30.src = "./assets/image6.png";
    img30.alt = "";

    var img31 = document.createElement("IMG");
    img31.src = "./assets/image7.png";
    img31.alt = "";

    var img32 = document.createElement("IMG");
    img32.src = "./assets/image8.png";
    img32.alt = "";

    const bg9 = new BlockGenerator('ex9')
    bg9.addElement(img29);
    bg9.addElement(img30);
    bg9.addElement(img31);
    bg9.addElement(img32);
    bg9.generateButtons();
    bg9.setSize(350, 350)
    bg9.activateYSlice();
}
example3();