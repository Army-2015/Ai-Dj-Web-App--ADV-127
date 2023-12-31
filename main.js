function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 450, 450);
}

song = "";

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
}