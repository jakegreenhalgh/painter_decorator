const Decorator = function() {
    this.paint_stock = []
}

Decorator.prototype.addPaint = function(paint) {
    this.paint_stock.push(paint)
}

Decorator.prototype.totalPaint = function() {
    let sum = 0;
    for (let index = 0; index < this.paint_stock.length; index++) {
        paint = this.paint_stock[index]
        sum += paint.capacity
    }
    return sum
}
Decorator.prototype.checkPaint = function(room) {
    const total_paint = this.totalPaint()
    if (total_paint >= room.area) {
        return true
    } else {
        return false
    }
}

Decorator.prototype.paintRoom = function(room) {
    let area = room.area
    
    let can_paint = this.checkPaint(room);
    if (can_paint === true && room.painted === false){
        room.painted = true;
        for (const paint of this.paint_stock) {
            let paintCap = paint.capcity
            paint.capacity -= area
            area -= paintCap
            if (paint.capacity < 0){
            paint.capicty = 0}
            
        }
    }
}

module.exports = Decorator