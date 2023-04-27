img = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 300);
    fill("#FF0000");
    text("Cat", 300, 65);
    noFill();
    stroke("#FF0000");
    rect(290, 50, 350, 300);
}

function preload(){
     img = loadImage("dog_cat.jpg");
}
