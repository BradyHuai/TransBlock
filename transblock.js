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
            if (this.block.childElementCount != 0){
                this.block.removeChild(this.elements[next-1]);
            }
            if (next >= this.elements.length) {
                next = 0;
                this.block.appendChild(this.elements[next]);
                // this.block.style.backgroundImage = `url(${this.elements[next].src})`;
                // this.block.style.backgroundSize = "cover";
            } else {
                this.block.appendChild(this.elements[next]);
                // this.block.style.backgroundImage = `url(${this.elements[next].src})`;
                // this.block.style.backgroundSize = "cover";
            }
            
            next++;
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
        ele.style.width = "100%";
        ele.style.height = "100%";
    }

}