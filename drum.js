const kick = document.getElementById('kick');
const snare = document.getElementById('snare');
const hihat = document.getElementById('hihat');
const openhat = document.getElementById('openhat');
const crash = document.getElementById('crash');
const ride = document.getElementById('ride');
const lowtom = document.getElementById('lowtom');
const midtom = document.getElementById('midtom');
const hightom = document.getElementById('hightom');

const brightColors = ['#39FF14', '#FF69B4', '#FF0000', '#52FFFF', '#D142FF', '#FFA500']; 


document.addEventListener('keydown', (event) => {
    playSound(event.code);
    handleButtonAnimation(event.code);
});

document.querySelectorAll('.pad').forEach(pad => {
    pad.addEventListener('click', () => {
        const key = pad.getAttribute('data-key');
        playSound(key);
        handleButtonAnimation(key);
    });
});


function playSound(key) {
    if (key === 'KeyG') {
        kick.currentTime = 0;
        kick.play();
    } else if (key === 'KeyH') {
        snare.currentTime = 0;
        snare.play();
    } else if (key === 'KeyJ') {
        hihat.currentTime = 0;
        hihat.play();
    } else if (key === 'KeyM') {
        openhat.currentTime = 0;
        openhat.play();
    } else if (key === 'KeyB') {
        crash.currentTime = 0;
        crash.play();
    } else if (key === 'KeyN') {
        ride.currentTime = 0;
        ride.play();
    } else if (key === 'KeyT') {
        lowtom.currentTime = 0;
        lowtom.play();
    } else if (key === 'KeyY') {
        midtom.currentTime = 0;
        midtom.play();
    } else if (key === 'KeyU') {
        hightom.currentTime = 0;
        hightom.play();
    }
}


function getRandomColor() {
    return brightColors[Math.floor(Math.random() * brightColors.length)];
}


function handleButtonAnimation(key) {
    const pad = document.querySelector(`.pad[data-key="${key}"]`);
    if (pad) {
        const randomColor = getRandomColor();
        pad.style.backgroundColor = randomColor;
        setTimeout(() => {
            pad.style.backgroundColor = '#303030';
        }, 100);
    }
}
