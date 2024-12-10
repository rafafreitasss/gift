import {SlideNav} from "./slide.js";
import Countdown from "./countdown.js";
import previsaoTempo from "./previsao.js";
import relogio from "./relogio.js";
import calculadora from "./calculadora.js";

const slide = new SlideNav('.slide', '.slide-wrapper');
const data = new Countdown('28 August 2022 23:59:59 GMT-0300')

slide.init();

previsaoTempo();

relogio();

calculadora();

slide.addArrow('.prev', '.next');

// adicionei a classe que será de controle
slide.addControl();


// Countdown
const anos = document.querySelector('.anos');
anos.innerText = data.total.years;
const meses = document.querySelector('.meses');
meses.innerText = data.total.months;
const dias = document.querySelector('.dias');
dias.innerText = Math.floor(data.total.days);
const horas = document.querySelector('.horas');
horas.innerText = data.total.hours;
const minutos = document.querySelector('.minutos');
minutos.innerText = data.total.minutes;
setInterval(() => {
  minutos.innerText = data.total.minutes;
}, 1000);
setInterval(() => {
  const segundos = document.querySelector('.segundos');
  segundos.innerText = data.total.seconds;
}, 1000);


// AUDIO
const audio = document.querySelector('audio')
const imgAudio = document.querySelector('.imgAudio');
imgAudio.addEventListener('click', () => {
  if(imgAudio.getAttribute('src') === 'img/play.png') {
    imgAudio.setAttribute('src', 'img/pausa.png');
    audio.volume = 0.2;
    audio.play();
  } else if (imgAudio.getAttribute('src') === 'img/pausa.png') {
    imgAudio.setAttribute('src', 'img/play.png');
    audio.pause();
  }  
})

function adjustVolume(increase) {
  const audio = document.querySelector('audio');
  if (increase) {
    audio.volume = Math.min(audio.volume + 0.1, 1);
  } else {
    audio.volume = Math.max(audio.volume - 0.1, 0);
  }
}

const volumeUp = document.querySelector('.volume-up');
volumeUp.addEventListener('click', () => {
  adjustVolume(true);
});
const volumeDown = document.querySelector('.volume-down');
volumeDown.addEventListener('click', () => {
  adjustVolume(false);
});

// Example usage:
// adjustVolume(true); // Increase volume
// adjustVolume(false); // Decrease volume

