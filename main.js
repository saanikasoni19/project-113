function preload() {
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    createCanvas(windowWidth, windowHeight);
}

function take_snapshot(){
    save('student_name.png');
}

function draw(){
    image(video, 0, 0 , 640, 480);
    fill(0, 255, 0);
    rect(100, 60, 2930, 75);
    fill(0, 255, 0);
    rect(100, 860, 2930, 75);
    fill(0, 0, 255);
    rect(43, 100, 75, 800);
    fill(0, 0, 255);
    rect(3000, 100, 75, 800);
    fill(255, 0, 0);
    circle(80, 100, 100);
    fill(255, 0, 0);
    circle(3040, 100, 100);
    fill(255, 0, 0);
    circle(80, 900, 100);
    fill(255, 0, 0);
    circle(3040, 900, 100);
}
