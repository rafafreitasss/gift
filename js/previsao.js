export default function previsaoTempo() {
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=cachoeirinha&appid=8629a914045ded621068156c5d430157&units=metric&lang=pt_br')
  .then(response => response.json())
  .then(json => {
    document.querySelector('.previsao-titulo').innerHTML = `${json.name}, ${json.sys.country}`;
    document.querySelector('.tempInfo').innerHTML = `${Math.round(json.main.temp)} <sup>ºC</sup>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
    document.querySelector('.ventoInfo').innerHTML = `${json.wind.speed} <span>km/h</span>`;
    document.querySelector('.ventoPonto').style = `transform: rotate(${json.wind.deg - 90}deg)`;
  })

  const previsao = document.querySelector('.previsao-container');
  const button = document.querySelector('.button-previsao');
  button.addEventListener('click', () => {
    previsao.classList.toggle('ativo');
  })

}