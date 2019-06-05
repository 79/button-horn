function preload() {
  roboto = loadFont('assets/fonts/RobotoMono.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  textAlign(CENTER)
  textFont(roboto)
  textSize(16)

  displayTitle()
}

function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume()
  }
}

function keyPressed() {
  console.log(key, 'is pressed')
  console.log(keyCode, 'is pressed')

  switch (key) {
    case 'A':
      let foo = new p5.Speech()
      foo.speak('hello gorgeous')
      break
  }
}

function playOnce(soundFile) {
  if (soundFile.isPlaying()) { soundFile.stop() }

  clearTitle()

  soundFile.play()
}

// Utilities
function squish(str) {
  return str.replace(/ +(?= )/g, '')
}

function placeholder(str) {
  return str === undefined ? '---' : str
}

function displayTitle(title) {
  push()
  rectMode(CORNER)
  fill('black')
  textAlign(CENTER, CENTER)
  textSize(32)
  text("PRESS ME WHEN GOAL IS SCORED", 0, 0, width, height)

  textSize(120)
  textFont('Courier New')
  text("↓", 0, 200, width, height)
  pop()
}

function clearTitle() {
  background(255)
}
