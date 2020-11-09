let tips = [];
let C = ['red', 'green', 'blue', 'purple'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  tips = [
    createVector(0, height),
    createVector(width, height),
    createVector(width / 2, 0)
  ]
  for (let i = 0; i < tips.length; i++) {
    stroke(C[3]);
    strokeWeight(10);
    point(tips[i]);
  }
}

function draw() {
  P = createVector(tips[0].x, tips[0].y)
  for (i = 0; i < 100; i++) {
    let v = random(tips);
    P.x = lerp(P.x, v.x, .5);
    P.y = lerp(P.y, v.y, .5);

    stroke(C[tips.indexOf(v)]);
    strokeWeight(0);
    point(P);
  }
}