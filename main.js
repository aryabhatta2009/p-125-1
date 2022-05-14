leftwristx=0;
rightwristx=0;
difference=0;
nosex=0;
nosey=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,450);
    canvas.position(600,125);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#4169E1');
    textSize(difference);
     fill('#FFE787');
     text('COCO',nosex,nosey);
}
function modelLoaded(){
    console.log("Posenet is initialised.");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(difference);
    };
};