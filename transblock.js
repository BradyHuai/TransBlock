"use strict";
const log = console.log
log('----------')
log('SCRIPT: Creating and loading our JS libraries')

// function BlockGenerator() {
//     this.block = document.createElement('div');
//     this.block.style = 'width: 60px; height: 60px;';
//     const body = $('body')
// 	body.append(this.block)
//     this.elements = [];
//     this.timing = 4;
    
//     this.start = function() {

//         let next = 0;
//         setInterval(() => {
//             if (this.block.childElementCount != 0){
//                 this.elements[next-1].style.clipPath = "circle(0% at center)";
//                 this.block.removeChild(this.elements[next-1]);
//             }
//             else{
//                 if (next >= this.elements.length) {
//                     next = 0;
//                     this.elements.map((item) => item.classList.remove("active"));
//                     this.block.appendChild(this.elements[next]);
//                 } else {
//                     this.elements[next].style.clipPath = "circle(100% at center)";
//                     this.block.appendChild(this.elements[next]);
//                 }
//             }
            
//             next++;
//         }, this.timing * 1000);
//     }
// }

// BlockGenerator.prototype = {
//     setBlockSize: function(size){
//         this.block.style.width = size.toString() + "px";
//         this.block.style.height = size.toString() + "px";
//     },

//     addElement: function(ele) {
//         this.elements.push(ele);
//         ele.style.position = "relative";
//         ele.style.top = 0;
//         ele.style.width = "100%";
//         ele.style.height = "100%";
//         ele.style.border = "1px solid";
//         ele.style.transition = "clipPath 1.5s ease";
//     },

//     removeElement: function(i) {
//         this.elements.slice(i, i+1);
//     },

//     setTiming: function(time) {
//         this.timing = time;
//     },

// }

function BlockGenerator() {
    this.block = document.createElement('div');
    this.block.className = "block-container";
    const body = $('body')
    body.append(this.block)
    
    this.itemList = document.createElement("div");
    this.itemList.className = "item-list";
    this.block.appendChild(this.itemList);

    this.leftButton = document.createElement('button');
    this.leftButton.id = "l-button";
    this.rightButton = document.createElement('button');
    this.rightButton.id = "r-button";


    this.width = 800;
    this.height = 500;
    this.elements = [];
    this.timing = 4;
    this.counter = 0;
}

BlockGenerator.prototype = {
    addElement: function(ele) {
        ele.className = "item";
        ele.style = "border: 2px solid";
        ele.style.minHeight = this.height + "px";
        ele.style.minWidth = this.width + "px";

        this.elements.push(ele);
    },

    setSize: function(w, h) {
        this.height = h;
        this.width = w;
        this.elements.map((element) => {
            element.style.minWidth = w + "px";
            element.style.minHeight = h + "px";
        })

        this.block.style.width = w + "px";
    },

    generate: function() {
        this.elements.map((element) => {
            this.itemList.appendChild(element);
        })
    },

    generateButtons: function() {
        this.leftButton.appendChild(document.createTextNode('previous'));
        this.rightButton.appendChild(document.createTextNode('next'));
        this.block.appendChild(this.leftButton);
        this.block.appendChild(this.rightButton);

        this.rightButton.addEventListener("click", ()=> {
            if (this.counter >= this.elements.length) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter++;
            this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";
        })

        this.leftButton.addEventListener("click", ()=> {
            if (this.counter <= -1) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter--;
            this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";
        })
    },

    start: function() {
        // this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";
        this.itemList.addEventListener("transitionend", () => {
            if (this.counter === this.elements.length){
                this.itemList.style.transition = "none";
                this.counter = 0;
                this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";
            }
            else if (this.counter === -1){
                this.itemList.style.transition = "none";
                this.counter = this.elements.length - 1;
                this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";
            }
        });
    },
}
