const Room = function(area) {
    this.area = area;
    this.painted = false;
}


Room.prototype.rePaint = function(){
    this.painted = false
}

module.exports = Room