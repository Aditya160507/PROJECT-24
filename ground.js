class ground{
constructor(x,y,w,h){
var options={
isSatic:true
}
this.body=Bodies.rectangle(x,y,w,h)
this.x=x;
this.y=y;
this.width=w;
this.height=h;

World.add(world,this.body);
}
display(){

var pos= this.body.position;
var angle= this.body.angle;
push();
translate(pos.x,pos.y);
rectMode(CENTER);
strokeWeight(4);
fill(255,255,0)
rect(0,0,this.width, this.height);
pop()


}

}