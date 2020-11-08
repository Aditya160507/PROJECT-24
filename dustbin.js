class dustbin 
{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
this.height=height;

        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;

        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255)
        rect(0,0,this.width,this.height);
        pop()
    }
}