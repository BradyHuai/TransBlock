"use strict";


(function(global, document, $) {
function BlockGenerator(id) {
    // The block container
    this.block = document.createElement('div');
    this.block.className = "block-container";
    this.block.id = id;
    const body = $('body');
    body.append(this.block);
    
    // The list containing all elements
    this.itemList = document.createElement("div");
    this.itemList.className = "item-list fade";
    this.block.appendChild(this.itemList);

    // The left button (previous item)
    this.buttonPrevious = document.createElement('i');
    this.buttonPrevious.id = "l-button";
    // The right button (next item)
    this.buttonNext = document.createElement('i');
    this.buttonNext.id = "r-button";

    this.buttonPrevious.className = "fas fa-arrow-left";
    this.buttonNext.className = "fas fa-arrow-right";

    // Default settings
    this.width = 800;
    this.height = 500;
    this.timing = 4;

    // The index of current element
    this.counter = 0;

    // The list of elements added
    this.elements = [];

    // Tracks weather the item is hovered over
    this.hovered_flag = false;
    this.block.onmouseover = function() {mouseOver()};
    this.block.onmouseout = function() {mouseOut()};

    var mouseOver = () => {
        this.hovered_flag = true;
    }
    var mouseOut = () => {
        this.hovered_flag = false;
    }
}


BlockGenerator.prototype = {
    // Add element to element list
    addElement: function(ele) {
        ele.className = "item";
        ele.style.minHeight = this.height + "px";
        ele.style.minWidth = this.width + "px";
        ele.style.width = this.width + "px";
        ele.style.height = this.height + "px";

        this.elements.push(ele);
    },

    // Set size of block container in px
    setSize: function(w, h) {
        this.height = h;
        this.width = w;
        this.elements.map((element) => {
            element.style.minWidth = w + "px";
            element.style.minHeight = h + "px";
            element.style.width = w + "px";
            element.style.height = h + "px";
        })

        this.block.style.width = w + "px";
        this.block.style.height = h + "px";
    },

    // Remove element from element list
    removeElement: function(i) {
        this.elements.slice(i, i+1);
    },

    // Set Timing for display time of each element
    setTiming: function(time) {
        this.timing = time;
    },

    // Set button icons
    setButton: function(previous, next) {
        this.buttonPrevious = previous;
        this.buttonNext = next;
    },

    // Helper function to position buttons
    setButtonPosition: function(vertical) {
        if (vertical){
            // Set button position
            this.buttonNext.style.bottom = "5%";
            this.buttonNext.style.left = "50%";
            this.buttonPrevious.style.top = "5%";
            this.buttonPrevious.style.left = "50%";
        }
        else {
            // Set button position
            this.buttonNext.style.top = "50%";
            this.buttonNext.style.right = "5%";
            this.buttonPrevious.style.top = "50%";
            this.buttonPrevious.style.left = "5%";
        }
    },

    // Generate previous and next buttons
    generateButtons: function() {
        this.block.appendChild(this.buttonPrevious);
        this.buttonPrevious.id = "l-button";
        this.block.appendChild(this.buttonNext);
        this.buttonNext.id = "r-button";
    },

    // Helper function to generate all elements
    generate: function() {
        this.elements.map((element) => {
            this.itemList.appendChild(element);
        })
    },

    // Disable hover blur
    disableBlur: function() {
        this.itemList.classList.remove("fade");
    },

    // Set hover content
    setBlurContent: function(text) {
        this.itemList.style.content = text;
    },

    // Set no animation for transition
    activateNoAnimation: function() {
        // Set button position
        this.setButtonPosition(false);

        this.generate();

        this.elements.map((element) => {
            element.style.position = "absolute";
            element.style.opacity = 0;
        })

        this.elements[0].style.opacity = 1;
        this.counter++;

        // Handle next element to display
        const handleNext = (() => {
            if (this.hovered_flag) return;
            if (this.counter > 0){
                this.elements[this.counter-1].style.opacity = 0;
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
            }
            this.elements[this.counter].style.opacity = 1;
            this.counter++;
        });

        // Run iteration
        var run = setInterval(handleNext, this.timing * 1000);

        // Handle next button event
        this.buttonNext.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.elements[this.counter-1].style.opacity = 0;
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
            }
            this.elements[this.counter].style.opacity = 1;
            this.counter++
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })

        // Handle previous button event
        this.buttonPrevious.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.elements[this.counter-1].style.opacity = 0;
            }
            this.counter -= 2;
            if (this.counter < 0) {
                this.counter = this.elements.length - 1;
            }
            this.elements[this.counter].style.opacity = 1;
            this.counter++;
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })
    },

    activateRightSwipe: function() {
        // Set button position
        this.setButtonPosition(false);

        // Generate all elements in element list
        this.generate();
        this.itemList.style.display = "flex";
        
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

        // Handle swipe right animation for next element to display
        const handleNext = (() => {
            if (this.hovered_flag) return;
            if (this.counter >= this.elements.length) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter++;
            this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";
        });

        // Run iteration
        var run = setInterval(handleNext, this.timing * 1000);

        // Handle button next onClick
        this.buttonNext.addEventListener("click", ()=> {
            if (this.counter >= this.elements.length) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter++;
            this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";

            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })

        // Handle button previous onClick
        this.buttonPrevious.addEventListener("click", ()=> {
            if (this.counter <= -1) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter--;
            this.itemList.style.transform = "translateX(" + (-this.width * this.counter) + "px)";

            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })
    },

    activateUpSwipe: function() {
        // Set button position
        this.setButtonPosition(true);

        this.buttonPrevious.className = "fas fa-arrow-up";
        this.buttonNext.className = "fas fa-arrow-down";

        // Generate all elements in element list
        this.generate();

        this.itemList.addEventListener("transitionend", () => {
            if (this.counter === this.elements.length){
                this.itemList.style.transition = "none";
                this.counter = 0;
                this.itemList.style.transform = "translateY(" + (-this.height * this.counter) + "px)";
            }
            else if (this.counter === -1){
                this.itemList.style.transition = "none";
                this.counter = this.elements.length - 1;
                this.itemList.style.transform = "translateY(" + (-this.height * this.counter) + "px)";
            }
        });

        // Handle up swipe animation for next element to display
        const handleNext = (() => {
            if (this.hovered_flag) return;
            if (this.counter >= this.elements.length) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter++;
            this.itemList.style.transform = "translateY(" + (-this.height * this.counter) + "px)";
        });

        // Run iteration
        var run = setInterval(handleNext, this.timing * 1000);

        // Handle button next onClick
        this.buttonNext.addEventListener("click", ()=> {
            if (this.counter >= this.elements.length) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter++;
            this.itemList.style.transform = "translateY(" + (-this.height * this.counter) + "px)";
            // Reset timer
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })

        // Handle button previous onClick
        this.buttonPrevious.addEventListener("click", ()=> {
            if (this.counter <= -1) return;
            this.itemList.style.transition = "transform 0.5s ease-in-out";
            this.counter--;
            this.itemList.style.transform = "translateY(" + (-this.height * this.counter) + "px)";
            // Reset timer
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })
    },

    activateCircle: function() {
        // Set button position
        this.setButtonPosition(false);

        // Generate all elements in element list
        this.generate();
        this.elements.map((element) => {
            element.style.position = "absolute";
            element.style.clipPath = "circle(0% at center)";
        })

        this.elements[0].style.clipPath = "circle(100% at center)";
        this.counter++;

        // Handle dixplay of the next element
        const handleNext = (() => {
            if (this.hovered_flag) {
                return;
            }
            if (this.counter != 0){
                this.elements[this.counter-1].style.transition = "clip-path 0.5s ease";
                this.elements[this.counter-1].style.clipPath = "circle(0% at center)";
            }
            if (this.counter >= this.elements.length){
                this.counter = 0;
            }
            this.elements[this.counter].style.transition = "clip-path 2.5s ease";
            this.elements[this.counter].style.clipPath = "circle(100% at center)";
            this.counter++;
        });

        // Run iteration
        var run = setInterval(handleNext, this.timing * 1000);

        // Handle next button event
        this.buttonNext.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.elements[this.counter-1].style.transition = "clip-path 0.5s ease";
                this.elements[this.counter-1].style.clipPath = "circle(0% at center)";
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
            }
            this.elements[this.counter].style.transition = "clip-path 2.5s ease";
            this.elements[this.counter].style.clipPath = "circle(100% at center)";
            this.counter++;
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })

        // Handle previous button event
        this.buttonPrevious.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.elements[this.counter-1].style.transition = "clip-path 0.5s ease";
                this.elements[this.counter-1].style.clipPath = "circle(0% at center)";
            }
            this.counter -= 2;
            if (this.counter < 0) {
                this.counter = this.elements.length - 1;
            }
            this.elements[this.counter].style.transition = "clip-path 2.5s ease";
            this.elements[this.counter].style.clipPath = "circle(100% at center)";
            this.counter++;
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })
    },

    activateFade: function() {
        // Set button position
        this.setButtonPosition(false);

        this.generate();

        this.elements.map((element) => {
            element.style.position = "absolute";
            element.style.opacity = 0;
        })

        this.elements[0].style.opacity = 1;
        this.counter++;

        // Handle next element to display
        const handleNext = (() => {
            if (this.hovered_flag) {
                return;
            }
            if (this.counter != 0){
                this.elements[this.counter-1].style.transition = "opacity 2s ease";
                this.elements[this.counter-1].style.opacity = 0;
            }
            if (this.counter >= this.elements.length){
                this.counter = 0;
            }
            this.elements[this.counter].style.transition = "opacity 2s ease";
            this.elements[this.counter].style.opacity = 1;
            this.counter++;
        });

        // Run iteration
        var run = setInterval(handleNext, this.timing * 1000);

        // Handle next button event
        this.buttonNext.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.elements[this.counter-1].style.transition = "opacity 2s ease";
                this.elements[this.counter-1].style.opacity = 0;
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
            }
            this.elements[this.counter].style.transition = "opacity 2s ease";
            this.elements[this.counter].style.opacity = 1;
            this.counter++
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })

        // Handle previous button event
        this.buttonPrevious.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.elements[this.counter-1].style.transition = "opacity 2s ease";
                this.elements[this.counter-1].style.opacity = 0;
            }
            this.counter -= 2;
            if (this.counter < 0) {
                this.counter = this.elements.length - 1;
            }
            this.elements[this.counter].style.transition = "opacity 2s ease";
            this.elements[this.counter].style.opacity = 1;
            this.counter++;
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })
    },

    activateXSlice: function() {
        // Set button position
        this.setButtonPosition(false);

        // Divition of the X
        const gridX = 4;
        // Delay for each component
        const delay = 0.05;

        this.elements.map((element) => {
            if (element.nodeName == "IMG"){
                // Container for each image as a whole
                const container = document.createElement("div");
                container.classList.add("x-slice")
                container.style.width = this.width;
                container.style.height = this.height;

                // Divide image into a gridX parts
                for(let x = 0; x < gridX; x++){
                    var width = x * this.width / gridX + "px";
                    var div = document.createElement("div");
                    container.appendChild(div);
        
                    div.style.left = width;
                    div.style.top = 0;
                    div.style.width = this.width / gridX + "px";
                    div.style.height = this.height + "px";
                    div.style.backgroundImage = "url(" + element.src + ")";
                    div.style.backgroundPosition = "-" + width;
                    div.style.backgroundSize = this.width + "px 100%";
                    div.style.transitionDelay = x * delay + "s";
                    // div.style.backgroundSize = "cover";
                }

                this.itemList.appendChild(container);
            }
        })

        this.itemList.children[this.counter].classList.add("active");
        this.counter++;

        // Handle animation for next element on display
        const handleNext = (() => {
            if (this.hovered_flag) return;

            if (this.counter != 0){
                this.itemList.children[this.counter-1].classList.remove("active");
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
            }
            this.itemList.children[this.counter].classList.add("active");
            this.counter++;
        });

        // Run iteration
        var run = setInterval(handleNext, this.timing * 1000);

        // Handle next button event
        this.buttonNext.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.itemList.children[this.counter-1].classList.remove("active");
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
            }
            this.itemList.children[this.counter].classList.add("active");
            this.counter++
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })

        // Handle previous button event
        this.buttonPrevious.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.itemList.children[this.counter-1].classList.remove("active");
            }
            this.counter -= 2;
            if (this.counter < 0) {
                this.counter = this.elements.length - 1;
            }
            this.itemList.children[this.counter].classList.add("active");
            this.counter++;
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })
    },

    activateYSlice: function() {
        // Set button position
        this.setButtonPosition(true);
        this.buttonPrevious.className = "fas fa-arrow-up";
        this.buttonNext.className = "fas fa-arrow-down";

        // Divition of the X
        const gridY = 4;
        // Delay for each component
        const delay = 0.05;

        this.elements.map((element) => {
            if (element.nodeName == "IMG"){
                // Container for each image as a whole
                const container = document.createElement("div");
                container.classList.add("y-slice")
                container.style.width = this.width;
                container.style.height = this.height;

                // Divide image into a gridX parts
                for(let y = 0; y < gridY; y++){
                    var height = y * this.height / gridY + "px";
                    var div = document.createElement("div");
                    container.appendChild(div);
        
                    div.style.top = height;
                    div.style.left = 0;
                    div.style.height = this.height / gridY + "px";
                    div.style.width = this.width + "px";

                    div.style.backgroundImage = "url(" + element.src + ")";
                    div.style.backgroundPosition = "center -" + height;
                    div.style.transitionDelay = y * delay + "s";
                    div.style.backgroundSize = "100% " + this.height + "px";
                }

                this.itemList.appendChild(container);
            }
        })

        this.itemList.children[this.counter].classList.add("active");
        this.counter++;

        // Handle animation for next element on display
        const handleNext = (() => {
            if (this.hovered_flag) return;

            if (this.counter != 0){
                this.itemList.children[this.counter-1].classList.remove("active");
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
            }
            this.itemList.children[this.counter].classList.add("active");
            this.counter++;
        });

        // Run iteration
        var run = setInterval(handleNext, this.timing * 1000);

        // Handle next button event
        this.buttonNext.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.itemList.children[this.counter-1].classList.remove("active");
            }
            if (this.counter >= this.elements.length) {
                this.counter = 0;
            }
            this.itemList.children[this.counter].classList.add("active");
            this.counter++
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })

        // Handle previous button event
        this.buttonPrevious.addEventListener("click", ()=> {
            if (this.itemList.childElementCount != 0){
                this.itemList.children[this.counter-1].classList.remove("active");
            }
            this.counter -= 2;
            if (this.counter < 0) {
                this.counter = this.elements.length - 1;
            }
            this.itemList.children[this.counter].classList.add("active");
            this.counter++;
            clearInterval(run);
            run = setInterval(handleNext, this.timing * 1000);
        })
    },
}

global.BlockGenerator = global.BlockGenerator || BlockGenerator;
})(window, window.document, $);