
function example2(){
    var img3 = document.createElement("IMG");
    img3.src = "./assets/image3.png";
    img3.alt = "";

    var img4 = document.createElement("IMG");
    img4.src = "./assets/image4.png";
    img4.alt = "";

    const bg2 = new BlockGenerator("ex2")
    bg2.addElement(img3);
    bg2.addElement(img4);
    bg2.setSize(200, 600);
    bg2.activateUpSwipe();
}
example2();