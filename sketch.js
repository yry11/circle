particle = [];
num = 150;
colors=[ "#ebc560","#1a3fb0","#decec3","#a9c2e6","#5b95dd","#88addc", "#06b4b0","#a7d2e1", "#ffe3b4", "#bed392", "#acddcf", ]
function setup() {
 createCanvas(600, 600);
background(255);
 for (let i=0; i<num; i++) {
   let ang = random(TWO_PI);
   let px = width/2 
   let py = height/2 
   let pos = createVector(px,py);
   let dir = createVector(cos(ang), sin(ang));
   particle[i] = new Particle(pos, dir);
 }
  push();
  filler= color(random(colors))  
   for(let i = 0;i < width;i++){
       for(let j = 0;j < height;j++){
           if (dist(i,j,width/2,height/2)>140) {
               var ra = map(j,0,height,-50,250)+randomGaussian(0,10);
                filler.setAlpha(ra);
               fill( filler);
               noStroke();
               ellipse(i,j,1,1);
           }else {
         var ra = map(j,0,height,200,-50)+randomGaussian(0,10);
                filler.setAlpha(ra);
               fill( filler);
               noStroke();
               ellipse(i,j,1,1);
           }
pop
       }
   }

}

function draw() { 
   filler= color(random(colors))  
 for (let i=0; i<particle.length; i++) {
     stroke(filler);
   particle[i].updateMe();
   particle[i].drawMe();
 }

translate(width/2, height/2)
 push()
 stroke(56,90,184)
 fill(194,242,238)
// fill(232,191,210)
 circle(0, 0, 20)
 for(let i=0; i<13; i++){
  fill(243,210,193,100)
 ellipse(30, 0, 50, 30)
 //line(20, 0, 140, 0)
   //  circle(0, 0, 20)
 rotate(PI/6)
    
 }	
 pop()
}

function keyPressed() {
 if (key == 's') {
   save(".png");
 }
}

class Particle {
  constructor(_pos, _dir) {
   this.pos = _pos;//位置
   this.dir = _dir;//方向
 }
 updateMe() {
   this.dir.x = (this.pos.x-width/2)/30 + random(-2, 2);
   this.dir.y = (this.pos.y- height/2)/30 +random(-2, 2);
   this.pos.add(this.dir);
    this.rCount = this.rCount+1;
 }
 drawMe(){
   fill(filler)
   ellipse(this.pos.x,this.pos.y,random(10),random(10));

}

}

	     
          