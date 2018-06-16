let partyParrot
let showPartyParrot

function preload() {
  roboto = loadFont('assets/fonts/RobotoMono.ttf')

  soundFormats('mp3', 'wav', 'ogg')
  biggieSound = loadSound('assets/sounds/biggie.mp3')
  airhornSound = loadSound('assets/sounds/airhorn.wav')
  scratchSound = loadSound('assets/sounds/scratch.wav')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  textAlign(CENTER)
  textFont(roboto)
  textSize(16)

  partyParrot = createImg('assets/images/partyparrot.gif')

  background(255)
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
      if (biggieSound.isPlaying()) biggieSound.stop()
      biggieSound.play()
      break
    case 'S':
      if (airhornSound.isPlaying()) airhornSound.stop()
      airhornSound.play()
      break
    case 'D':
      if (scratchSound.isPlaying()) scratchSound.stop()
      scratchSound.play()
      break
    case 'F':
      let duration = airhornSound.duration() * 1000
      clearTimeout(showPartyParrot)
      showPartyParrot = setTimeout(function() { partyParrot.hide() }, duration)

      airhornSound.play()
      partyParrot.position(random(width - partyParrot.width), random(height - partyParrot.height))
      partyParrot.show()
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
