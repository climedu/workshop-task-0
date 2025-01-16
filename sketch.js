
function setup () {
    createCanvas(400,400);
    angleMode(DEGREES);
}

function draw () {
    background(255, 253, 208);
    fill(203,206,145);
    noStroke();
    arc(50,20,50,50,0,180);
    arc(50,70,50,50,180,0);
    triangle(170,20,170,70,220,70);
    arc(345,50,50,50,360,0);
    //trying to experiment with the angles, turned out to change it to half circle vertical, eneded to be either 270,90 or 90,270
    arc(100,120,50,50,270,90);
    arc(150,120,50,50,90,270);
    triangle(250,95,250,120,275,120);
    triangle(275,120, 300,120, 300,145);
    arc(75,170,100,100,90,180);
    //trying combination of 4 half circle
    arc(195,170,50,25,0,180);
    arc(195,220,50,25,180,0);
    arc(170,195,25,50,270,90);
    arc(220,195,25,50,90,270);
    arc(320,220,100,100,270,0);
    
    
  
  //pink
    fill(234,115,140);
    noStroke();
    square(100,20,50);
    arc(250,20,100,100,0,90);
    arc(50,120,50,50,360,0);
    square(170,95,25);
    square(195,120,25);
  //trying same shapes with quad, like the 2 green triangle
    quad(320,95, 320, 120, 370,120, 370,145);
    arc(125,195,50,50,270,180);
    square(250,170,50);
    rect(0,250,400,150);
    
  
//cream
    fill(255, 253, 208);
    square(263,183,25);
//trying experimenting with the text
    textAlign(LEFT);
    textSize(30);
//the number is for the color
    stroke(255,253,208);
    strokeWeight(1);
//To apply fonts
    textFont("Courier New");
    text("Spring in Geometry",25,280,200);
    textAlign(RIGHT);
    textSize(12);
    textFont("Courier New");
    text("Cindy Limanto", 380,380);
    
}