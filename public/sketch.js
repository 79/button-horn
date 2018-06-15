function preload() {
  roboto = loadFont('assets/fonts/RobotoMono.ttf')

  soundFormats('mp3', 'wav', 'ogg')
  buttonSound = loadSound('assets/sounds/biggie.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  textAlign(CENTER)
  textFont(roboto)
  textSize(16)
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
      buttonSound.play()
      // restartGame()
      break
  }
}

// Utilities
function squish(str) {
  return str.replace(/ +(?= )/g, '')
}

function placeholder(str) {
  return str === undefined ? '---' : str
}
