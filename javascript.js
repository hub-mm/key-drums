
function playSound(e) { 
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    
    if (!audio) {
    console.log('No audio element found')
    return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    console.log('Transition end event fired:', e);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log('Remove playing class from:', this);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)