function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let myman=mouseY
  let notmyman=mouseX
 circle(notmyman,myman,40)
  line(notmyman,myman + 20,notmyman,myman + 120)
  line(notmyman + 40,myman + 180,notmyman,myman + 120)
  line(notmyman - 40,myman + 200,notmyman,myman + 120)
  line(notmyman + 60,myman + 100,notmyman,myman + 80)
  line(notmyman - 60,myman + 100,notmyman,myman + 80)

}