"use strict";
const log = console.log
log('----------')
log('SCRIPT: Creating and loading our JS libraries')

function BlockGenerator() {
    this.block = document.createElement('div');
    this.block.style = 'width: 60px; height: 60px;';
    const body = $('body')
	body.append(this.block)
    this.elements = [];
    this.timing = 1;
}

BlockGenerator.prototype = {
    setBlockSize: function(size){
        this.block.style.width = size.toString() + "px";
        this.block.style.height = size.toString() + "px";
    },

    addElement: function(ele) {

        this.elements.push(ele);
        this.block.style.backgroundImage = `url(${this.elements[0].src})`;
        this.block.style.backgroundSize = "cover";
        log(this.elements)
    }

	// addElement: function() {
	// 	const element = document.createElement('div')
	// 	element.style = 'width: 60px; height: 60px; border-radius: 50%; margin: 10px; background-color: Aqua;'
		
	// 	const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
	// 	body.append(circle)
		
	// 	this.block.push(circle) // add to the circles list
	// },

	// changeCirclesColor: function() {
	// 	for (let i = 0; i < this.circles.length; i++) {
	// 		this.block[i].style.backgroundColor = 'darkmagenta'
	// 	}
	// }
}