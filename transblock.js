"use strict";
const log = console.log
log('----------')
log('SCRIPT: Creating and loading JS library')

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

    removeElement: function(i) {
        this.elements.slice(i, i+1);
    },

    setTiming: function(time) {
        this.timing = time;
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

    activateRightSwipe: function() {
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

        setInterval(() => {
            if (this.counter >= this.elements.length) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter++;
            this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";
        }, this.timing * 1000);
    },

    generateButtons2: function() {
        this.leftButton.appendChild(document.createTextNode('previous'));
        this.rightButton.appendChild(document.createTextNode('next'));
        this.block.appendChild(this.leftButton);
        this.block.appendChild(this.rightButton);

        this.rightButton.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.itemList.removeChild(this.elements[this.counter-1]);
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
                this.itemList.appendChild(this.elements[this.counter]);
            } else {
                this.itemList.appendChild(this.elements[this.counter]);
            }
            this.counter++;
        })

        this.leftButton.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.itemList.removeChild(this.elements[this.counter-1]);
            }
            this.counter -= 2;
            if (this.counter < 0) {
                this.counter = this.elements.length - 1;
                this.itemList.appendChild(this.elements[this.counter]);
            } else {
                this.itemList.appendChild(this.elements[this.counter]);
            }
            this.counter++;
        })
    },

    activateNoAnimation: function() {
        this.itemList.appendChild(this.elements[0]);
        this.counter++;

        setInterval(() => {
            if (this.itemList.childElementCount != 0){
                this.itemList.removeChild(this.elements[this.counter-1]);
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
                this.itemList.appendChild(this.elements[this.counter]);
            } else {
                this.itemList.appendChild(this.elements[this.counter]);
            }
            this.counter++;
        }, this.timing * 1000);
    },
}
