img ="";
status ="";

function preload() {
img = loadImage('https://i.pinimg.com/564x/51/13/60/511360c5fbc286e4d7fb984dfa4f0a66.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cococssd', modelLoaded);
    document.getElementById("status").innerHTML = "Stautus : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("bed", 65, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 350, 350);

    fill("#FF0000");
    text("lamp", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
   if(error) {
    console.log(error);
   }
   console.log(results);
}