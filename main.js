nose_x = 0;
nose_y = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 500);
    canvas.position(580, 75);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 
function modelLoaded() {
    console.log("Model loaded !!!");
}

function draw() {
    background('#f8fc77');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}