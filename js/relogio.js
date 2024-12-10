export default function relogio() {
  let digitalElement = document.querySelector('.digital');
  let segundoElement = document.querySelector('.p_s');
  let minutoElement = document.querySelector('.p_m');
  let horaElement = document.querySelector('.p_h');

  const abrirRelogio = document.querySelector('.button-relogio');
  const containerRelogio = document.querySelector('.relogio');
  abrirRelogio.addEventListener('click', () => {
    containerRelogio.classList.toggle('ativo');
  })

  function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}` //dentro dos parenteses está o TIME da função FIXZERO

    let segundoDeg = ((360 / 60) * second) - 90; // -90 graus para que o ponteiro fique no lugar certo
    let minutoDeg = ((360 / 60) * minute) - 90;
    let horaDeg = ((360 / 12) * hour) - 90;

    segundoElement.style.transform = `rotate(${segundoDeg}deg)`;
    minutoElement.style.transform = `rotate(${minutoDeg}deg)`;
    horaElement.style.transform = `rotate(${horaDeg}deg)`;
  }

  function fixZero(time) {  //Função para os números ficarem com 2 casas decimais quando forem menor que 10.
    if (time < 10) {
        return '0'+ time;
    } else {
        return time;
    }
    // return time < 10 ? `0${time}` : time;  ===> código acima simplificado. Funciona da mesma forma
  }

  setInterval(updateClock, 1000); //a função UPDATECLOCK será rodada a cada 1 segundo (ou o tempo que eu determinar alí)
  updateClock();
  }