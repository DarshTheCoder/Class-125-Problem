noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);

    video.size(550,500);

    canvas=createCanvas(550,323);

    canvas.position(560,150);

    poseNet=ml5.poseNet(video,ModelLoaded);

    poseNet.on("pose",gotPoses);
}
function draw() {
    document.getElementById("square_side").innerHTML="Width And height Of The Square Will be "+difference+"px";
fill("#F90093");

stroke("#F90093");

square(noseX,noseY,difference);
}
function ModelLoaded()
{
    console.log("Pose Net Loaded");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);

    noseX=results[0].pose.nose.x;

    noseY=results[0].pose.nose.y;

console.log("Nose X = "+noseX+" And Nose Y = "+noseY);

leftWristX=results[0].pose.leftWrist.x;

rightWristX=results[0].pose.rightWrist.x;

difference=floor(leftWristX-rightWristX);

console.log("Left Wrist X = "+leftWristX+" And Right Wrist X = "+rightWristX);
}
}