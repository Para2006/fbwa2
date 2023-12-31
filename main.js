function preload(){

}

function setup(){
    canvas = createCanvas(360,360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}
 
function modelLoaded(){
    console.log('PoseNet Is Initialised');
}

function draw(){
  image(video , 0,0,350,350);
}

function take_snapshot(){
    save('filterimg.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}