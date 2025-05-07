// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis; 
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const face = document.querySelector('img');
  const textInput = document.getElementById('text-to-speak');
  let voices = [];

  function addVoices(){
    voices = synth.getVoices();

    voiceSelect.innerHTML = '';

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;

      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  addVoices();
  synth.addEventListener('voiceschanged', addVoices);

  speakButton.addEventListener('click', ()=> {
    const utterance = new SpeechSynthesisUtterance(textInput.value);

    const selectedVoiceName = voiceSelect.value;
    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);

    face.src = 'assets/images/smiling-open.png';

    utterance.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png';
    });

    synth.speak(utterance);

  });
}