// import { Howl } from 'howler';

var sound = new Howl({ src: ['../audio/sound.mp3'] });

let btn = document.querySelector('.play');

btn.addEventListener('click', audioPlay);

function audioPlay() {
  sound.play();
  console.log('play');
}
