function setup(){
  createCanvas(600, 400);
}


function draw(){
  background(200);
  // add your drawing code here ...
  background(135, 206, 235); //  blue background
  
   // Head - using ellipse
   ellipse(205, 155, 120, 110);

   // Nose using rect and ellipse
   fill(260, 192, 193); // Pink color for the nose
   rect(185, 160, 30, 20, 10); // Rounded rectangle for nose
   fill(0); // Black color for nostrils
   ellipse(190, 170, 5, 5);
   ellipse(210, 170, 5, 5);
   
   // Body of the piggy - using ellipse
fill(255, 182, 193); // Pink color for the piggy
ellipse(200, 250, 200, 100);

   // Eyes - using ellipse and point for pupils
   fill(255); // White color for eyes
   ellipse(180, 140, 20, 20);
   ellipse(220, 140, 20, 20);
   fill(0); // Black color for pupils
   point(180, 140);
   point(220, 140);
// Oval Hands
ellipse(130, 250, 30, 20); // Left hand
ellipse(270, 250, 30, 20); // Right hand

   // Ears  using triangle
   fill(255, 182, 193); // Pink color for the ears
   triangle(160, 100, 140, 60, 180, 80);
   triangle(250, 110, 225, 60, 260, 80);

   // Legs using rect
   fill(256, 182, 195); // Pink color for the legs
   rect(160, 300, 20, 30); // Left leg
   rect(210, 300, 20, 30); // Right leg
}
