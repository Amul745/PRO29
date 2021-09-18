class Stone{

constructor(x,y,width,height){
var options={
restitution:0.8,
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
World.add(world,this.body)
}
show(){
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    fill("white");
    ellipse(0, 0, this.width, this.height);
    pop();
}

}