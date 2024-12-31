const burnerToggle = document.getElementById('burnerToggle');
const flameControl = document.getElementById('flameControl');
const flame = document.getElementById('flame');
const vapour = document.getElementById('vapour');

let burnerOn = false;
let flameState = 'off';

burnerToggle.addEventListener('click', () => {
    burnerOn = !burnerOn;
    burnerToggle.textContent = burnerOn ? ' Off' : ' On';
    flameControl.disabled = !burnerOn;

    if (burnerOn) {

        flameState = 'low';
        flame.className = 'flame low';
        vapour.style.display = 'none';
    } else {

        flame.className = 'flame';
        flameState = 'off';
        vapour.style.display = 'none';
    }
});

flameControl.addEventListener('click', (event) => {
    if (!burnerOn) return;

    const rect = flameControl.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const buttonWidth = rect.width;

    if (clickX < buttonWidth / 2) {

        flameState = 'low';
        flame.className = 'flame low';
        vapour.style.display = 'none';
    } else {

        flameState = 'high';
        flame.className = 'flame high';
        setTimeout(() => {
            if (flameState === 'high') {
                vapour.style.display = 'block';
            }
        }, 2000);
    }
});