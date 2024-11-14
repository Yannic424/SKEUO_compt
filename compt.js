// script.js
let counter = 0;

const segments = {
    0: ["a", "b", "c", "d", "e", "f"],
    1: ["c", "f"],
    2: ["b", "c", "g", "d", "e"],
    3: ["b", "c", "g", "f", "e"],
    4: ["a", "g", "c", "f"],
    5: ["b", "a", "g", "f", "e"],
    6: ["b", "a", "d", "e", "f", "g"],
    7: ["b", "c", "f"],
    8: ["b", "a", "c", "g", "d", "e", "f"],
    9: ["b", "a", "c", "g", "f", "e"],
};

function updateDisplay(digit, value) {
    const segmentsToLightUp = segments[value];
    const digitElement = document.getElementById(digit);

    // Éteindre tous les segments d'abord
    digitElement.querySelectorAll('.segment').forEach(seg => seg.classList.remove('on'));

    // Allumer les segments nécessaires
    segmentsToLightUp.forEach(segmentClass => {
        const segment = digitElement.querySelector(`.segment.${segmentClass}`);
        segment.classList.add('on');
    });
}

function incrementCounter() {
    counter = (counter + 1) % 100;
    const tens = Math.floor(counter / 10);
    const units = counter % 10;

    updateDisplay("tens", tens);
    updateDisplay("units", units);
}

// Initialiser le compteur
incrementCounter();
