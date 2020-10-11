class rope {
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var pointX = pointB.x + this.offsetX;
        var pointY = pointB.y + this.offsetY;
        line(pointA.x,pointA.y,pointX,pointY);

    }
}