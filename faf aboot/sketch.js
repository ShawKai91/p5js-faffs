let H = 500;
let W = 500;
let num = [50];

function setup() {
  createCanvas(W, H);
  num[0] = floor(random(100000));

}

function draw() {
  background(220);
  rect(W/5,25,5,5)
  text( nf(num[0],5), (W/5), 25 );
}