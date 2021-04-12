class String {
    constructor(bodya,bodyb,xpoint,ypoint){
        var options = {
            bodyA:bodya,
            bodyB:bodyb,
            pointB:{x:xpoint,y:ypoint}
        }
        
        this.string=Constraint.create(options)
        this.xoff=xpoint;
        this.yoff=ypoint
        World.add(world,this.string)

    }
    display(){
        if(this.string.bodyA){
        var pointa = this.string.bodyA.position
        var pointb = this.string.bodyB.position
        strokeWeight(3);
        line(pointa.x,pointa.y,pointb.x+this.xoff,pointb.y+this.yoff);
        }
    }
}
