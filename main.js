difference=0
left_wrist_x=0
right_wrist_x=0

function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)

    canvas=createCanvas(550,550)
    canvas.position(560,150)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("poseNet is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        left_wrist_x = results[0].pose.leftWrist.x
        right_wrist_x = results[0].pose.rightWrist.x

        difference = floor(left_wrist_x - right_wrist_x)
        console.log("left_wrist_x=",left_wrist_x,"right_wrist_x=",right_wrist_x,"difference=",difference)
    }
}

function draw(){
    background('#969A97')
    fill('#F90093')
    textSize(difference)
    text('Bineet',50,400)

}