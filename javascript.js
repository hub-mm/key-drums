document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    console.log(keys);  // Debugging log

    keys.forEach(key => {
        key.addEventListener('transitionend', removeTransition);
        key.addEventListener('click', playSound);
    });

    console.log('Transition end and click event listeners added to keys:', keys) // Debugging log

    window.addEventListener('keydown', playSound);

    console.log('Keydown and click event listener added to window'); // Debugging log

});

function playSound(e) {
    let keyCode;

    if (e.type === 'keydown') {
        keyCode = e.keyCode;
    } else if (e.type === 'click') {
        const keyElement = e.target.closest('.key');
        keyCode = keyElement ? keyElement.dataset.key : null;
        // keyCode = e.target.closest('.key').dataset.key
    }

    console.log('Key pressed or clicked:', keyCode);  // Debugging log

    if (!keyCode) {
        console.log('No keyCode found for event:', e);
        return;
    }

    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

    if (!audio) {
        console.log('No audio element found for key:', keyCode); // Debugging log
        return;
    }

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    console.log('Playing class added to:', key); // Debugging log

}

function removeTransition(e) {

    console.log('Transition end event fired:', e); // Debugging log

    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');

    console.log('Remove playing class from:', this); // Debugging log

}