# workshop-task-0
Here is a URL to the webpage for this project: [Link](https://climedu.github.io/workshop-task-0/)

## Task
- Create a p5.js editor that links to an external site. Login and sign up to the Processing Foundation's forumLinks to an external site.
- Make a p5.js sketch using 2D primitive shapes, variables, and conditionals. Make sure to save your work.
- Experiment with at least one of the following 2D primitive shapes from the p5.js documentation. Links to an external site.: line, triangle, quad, arc.
- Keep notes to document your process and learning clearly.

## Overview
- Learning about setting up p5js
- Learning some different shapes. Arc is interesting; sometimes, we need to try several to fill the different angles numbers to get the shape of the circle we want.
- Self-learning, from YouTube about adding text 

## Workshop Notes

- Called W0 because in coding, number started from 0
- Langguage of coding : Phyton, C, C++, C#, HTML, etc
- Most communicate with discord
- Program used: JAVASCRIPT. P5JS
- P5 maintain by processionfoundation.org founded 2012 - nonprofit. Software = open source
- Strengh of P5JS. Able to see the outcome, allow to share things we made online.

### Usefull Web 
- p5js.org/reference/
- Discourse.processing.org -> Processing foundation : people learn to code. *with discussion network etc.
- The coding train youtube chanel ->valuable code. (using p5js)
- Phyton code series by hackaday(casey hunt) Art+code
- Using chat gpt. As a learning tool

### Tool
- P5Js https://editor.p5js.org

### Code Notes (Workshop):
- Learn functions, set up, draw
- Code :
```ruby
  function setup() {
    createCanvas(400,400);
  }

  function draw () {
    background(220);
  }
```

- CreateCanvas(number -> x,y)
- Background(colour code) can be number,number, number for RGB colour (max number is 255) just 1 number will be greyscale
```ruby
  function setup() {
    createCanvas(400,400);
  }
  function draw (){
    background(220);

    rect(50,100,40,60);
  }
```


- Rec (pos.x, pos.y, sizex, sizey)
- Code:
```ruby
  function setup() {
    createCanvas(400,400);
  }
  function draw (){
    background(220);

    stroke(255,0,0);
    fill(255,255,0);
    rect(50,100,40,60);
  }
```

![image  width = "300"](https://github.com/user-attachments/assets/9bfe77be-74fa-4a80-985c-981e9331e641)

- Learn to use fill and stroke
- Order is important; those 2 rectangles take the nearest colour up there.

![image  width = "300"](https://github.com/user-attachments/assets/66628c37-00af-4178-90f9-f6accabc8e71)


- Declare variable (Let x = 0)
- Replace the x position of rec -> rect(x,100,40,60); since the x at the "let x = 0" , the x become 0
- Adding "x = x+3" making the rectangle move the the right 3px every 
- Code :
```ruby
    let x = 0;

    function setup() {
    createCanvas(400,400);
  }
  function draw (){
    background(220);

    fill(255,255,0);
    rect(50,100,40,60);

    x = x+3;
  }
```

![image](https://github.com/user-attachments/assets/a5c696d3-13e0-4479-9b10-299096a60334)
- Console.log(x); *adding the console view to see the number all the time)
- Rect(mouseX, mouseY,40,60), the rectangle will follow us when moving the mouse

![image width = "400"](https://github.com/user-attachments/assets/cf6d8267-07fd-4a05-9c15-89f0f1a5b81d)

- If (x>width) {
- X = 0;
- } 

It's for resetting the x to 0 when reaching the width of the canvas

Adding // at the beginning of the lines not gonna be executed

Using if
```ruby
If(mouseX>width/2 {
Fill(255,0,0);
}else {
Fill (255,0,0);
//for changing colour when moving the mouse right,t left
```

## Task Journey
- Create p5.js editor login

<img width="400" alt="Screenshot 2025-01-16 at 4 03 03 PM" src="https://github.com/user-attachments/assets/7ff7f0f9-b079-4d5c-9e35-18338d2a3250" />

- Signup to processing foundations forum
<img width="400" alt="Screenshot 2025-01-16 at 3 59 25 PM" src="https://github.com/user-attachments/assets/08d230c8-b4d8-482e-90fc-5f6ad49f2018" />

- Experiment with 2D sketch
  
  ### 2D Sketch Experiment Starting Point
  Experimenting with various shapes: square, triangle, line, quad,and arc.
  
<img width="200" alt="Screenshot 2025-01-16 at 4 02 07 PM" src="https://github.com/user-attachments/assets/756c8630-6abc-4a87-a252-d0f120512cf5" />
<img width="300" alt="Screenshot 2025-01-16 at 4 09 33 PM" src="https://github.com/user-attachments/assets/2efdd717-f791-4768-b420-82d2e4f21828" />
<img width="300" alt="Screenshot 2025-01-16 at 4 09 39 PM" src="https://github.com/user-attachments/assets/45825b28-85c5-4a7c-becf-4b6b82a70eb8" />
<img width="300" alt="Screenshot 2025-01-16 at 4 09 44 PM" src="https://github.com/user-attachments/assets/8b5e40a6-83a8-4774-93ef-245a6c90f607" />
<img width="400" alt="Screenshot 2025-01-16 at 4 10 04 PM" src="https://github.com/user-attachments/assets/bc17e838-44d1-4e3d-ad18-8011cfacfd44" />

  Learning some new things about arc and colour function through this [video: ](https://www.youtube.com/shorts/4E4MpfG4jiE?si=k_oW5KSt4clCz_hu)
  - Need to use Degree mode to create more precise how full is the circle going to be
  - The position of the number is also matters. Like the pics bellow, 180 first or 0 first
    ![image](https://github.com/user-attachments/assets/27b0deb1-02f1-4728-91f8-09aabcc5db5e)
![image](https://github.com/user-attachments/assets/26171971-e19d-4ae8-a9b9-53e299406248)

Learning some more about text :
  - [Video about how to add text](https://www.youtube.com/watch?v=pZBwbE9r8y4)
  - [Video that discusses changing the font]( https://www.youtube.com/watch?v=Ge_Cq8WW4Lc)
  - The text can also use the right, center, or left allignment

### Process

1st Shape
- arc(50,20,50,50,0,180);
- arc(50,70,50,50,180,0);
<img width="100" alt="Screenshot 2025-01-16 at 4 27 44 PM" src="https://github.com/user-attachments/assets/b715bea5-abce-4bac-a5b0-a11dfdd6993d" />

Similar in shape but a different position 
-   arc(100,120,50,50,270,90);
  - arc(150,120,50,50,90,270);
  <img width="100" alt="Screenshot 2025-01-16 at 4 31 57 PM" src="https://github.com/user-attachments/assets/5cb7e28b-a0f7-4217-9041-2b0fe55ef3ba" />

2 Same shapes, 2 different commands. It turned out that I can do this shape with a quad instead of a triangle.
-    triangle(250,95,250,120,275,120);
  -  triangle(275,120, 300,120, 300,145);
    
-   quad(320,95, 320, 120, 370,120, 370,145);
  <img width="200" alt="Screenshot 2025-01-16 at 4 36 51 PM" src="https://github.com/user-attachments/assets/9b15a9ea-d081-40ef-890d-923af5d44f87" />


### Commentaries
- Triangle shape is quite tricky since we need to think of the position of 3 dots
- Arc is also tricky since I want to make the same size/width/length of each shape and need to adjust the position, size, and angle. Need to try several times.

## Future Development
- Make the shapes animate using coordinate location, size, colour, etc.
- Explore more about the arc function.
