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
    this.timing = 2;
    this.start = function() {
        let next = 0;
        setInterval(() => {
            if (next >= this.elements.length) {
                next = 0;
                this.block.style.backgroundImage = `url(${this.elements[next].src})`;
                this.block.style.backgroundSize = "cover";
                next++;
            } else {
                this.block.style.backgroundImage = `url(${this.elements[next].src})`;
                this.block.style.backgroundSize = "cover";
                next++;
            }
        }, this.timing * 1000);
    }
}

BlockGenerator.prototype = {
    setBlockSize: function(size){
        this.block.style.width = size.toString() + "px";
        this.block.style.height = size.toString() + "px";
    },

    addElement: function(ele) {
        this.elements.push(ele);
        log(this.elements)
    }

}