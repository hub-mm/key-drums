document.addEventListener('DOMContentLoaded', () => {
const keys = document.querySelectorAll('.key');

console.log(keys);  // Debugging log

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

console.log('Transition end event listeners added to keys') // Debugging log

window.addEventListener('keydown', playSound);

console.log('Keydown event listener added to window'); // Debugging log

});

function playSound(e) { 

    console.log('Key pressed:', e.keyCode);  // Debugging log

    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    
    if (!audio) {
    console.log('No audio element found for key:', e.keyCode); // Debugging log
    return;
    }

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    console.log('Playing class added to:', key); // Debugging log

}

function removeTransition(e) {

    console.log('Transition end event fired:', e); // Debugging log

    // if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');

    console.log('Remove playing class from:', this); // Debugging log

}