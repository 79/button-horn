let partyParrot
let showPartyParrot
let showBiggieSmalls

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
  biggieSmalls = createImg('assets/images/all-a-dream.gif')

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
    case 'D':
      playOnce(biggieSound)

      clearTimeout(showBiggieSmalls)
      showBiggieSmalls = setTimeout(function() { biggieSmalls.hide() }, biggieSound.duration() * 1000)
      biggieSmalls.position(random(width - biggieSmalls.width), random(height - biggieSmalls.height))
      biggieSmalls.show()
      break
    case 'S':
      playOnce(scratchSound)

      // clearTimeout(showPartyParrot)
      // showPartyParrot = setTimeout(function() { partyParrot.hide() }, airhornSound.duration() * 1000)
      // partyParrot.position(random(width - partyParrot.width), random(height - partyParrot.height))
      // partyParrot.show()
      break
    case 'A':
      playOnce(airhornSound)

      clearTimeout(showPartyParrot)
      showPartyParrot = setTimeout(function() { partyParrot.hide() }, airhornSound.duration() * 1000)
      partyParrot.position(random(width - partyParrot.width), random(height - partyParrot.height))
      partyParrot.show()
      break
  }
}

function playOnce(soundFile) {
  if (soundFile.isPlaying()) { soundFile.stop() }

  soundFile.play()
}

// Utilities
function squish(str) {
  return str.replace(/ +(?= )/g, '')
}

function placeholder(str) {
  return str === undefined ? '---' : str
}
