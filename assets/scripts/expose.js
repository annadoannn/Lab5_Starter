// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const audio = document.querySelector('audio');
  const image = document.querySelector('img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.getElementById('volume-controls').querySelector('img');
  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', updateHorn);
  function updateHorn() {
    const selectedHorn = hornSelect.value;
  
    switch(selectedHorn){
      case 'air-horn':
        image.src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        image.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        image.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
        break;
    }
    audio.load();
  }

  button.addEventListener('click', () => {
    audio.play();

    if (hornSelect.value === 'party-horn'){
      jsConfetti.addConfetti();
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volumeVal = volumeSlider.value;
    audio.volume = volumeVal / 100;

    if (volumeVal == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeVal < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeVal < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });
}

