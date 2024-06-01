document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const button = document.querySelectorAll('button');

    console.log('These are your logged keys:', keys);  // Debugging log
    console.log('These are your logged button:', button);  // Debugging log

    keys.forEach(key => {
        key.addEventListener('click', playSound);
        key.addEventListener('transitionend', removeTransition);
    });

    button.forEach(button => {
        button.addEventListener('click', changeBackground);
    });

    console.log('Transition end and click event listeners added to keys:', keys) // Debugging log

    window.addEventListener('keydown', playSound);

    console.log('Keydown and click event listener added to window'); // Debugging log

});

function playSound(e) {
    let code;

    if (e.type === 'keydown') {
        code = e.code;
    } else if (e.type === 'click') {
        const keyElement = e.target.closest('.key');
        code = keyElement ? keyElement.dataset.key : null;
    }
    
    console.log('Event type:', e.type); // Debugging log
    console.log('Key pressed or clicked:', code);  // Debugging log
    
    const audio = document.querySelector(`audio[data-key='${code}']`);
    const key = document.querySelector(`.key[data-key='${code}']`);
    
    if (!code) {
        console.log('No code found for event:', e); // Debugging log
        return;
    }

    console.log('Audio element:', audio); // Log found audio element
    console.log('Key element:', key); // Log found key element

    if (!audio) {
        console.log('No audio element found for key:', code); // Debugging log
        return;
    }


    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
    key.classList.add('playing');

    console.log('Playing class added to:', key); // Debugging log
}

function removeTransition(e) {

    console.log('Transition end event fired:', e); // Debugging log

    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');

    console.log('Remove playing class from:', this); // Debugging log

}

function changeBackground(e) {
    
    console.log('Clicked element:', e.target);

    if (e.target.id === 'drum-kit') {
        document.body.style.backgroundImage = "url('./img/drum-kit.jpeg')";
        console.log('Background URl changed:', document.body.style.backgroundImage);
    } else if (e.target.id === 'concert-crowd') {
        document.body.style.backgroundImage = "url('./img/concert-crowd.jpeg')";
        console.log('Background URl changed:', document.body.style.backgroundImage);
    } else {
        console.log('Primary background:', document.body.style.backgroundImage);
    }
}