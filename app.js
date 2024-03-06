const synth = new Tone.PolySynth(Tone.Synth).toDestination();

const noteMap = {
    'a': 'C4',
    'w': 'C#4',
    's': 'D4',
    'e': 'D#4',
    'd': 'E4',
    'f': 'F4',
    't': 'F#4',
    'g': 'G4',
    'y': 'G#4',
    'h': 'A4',
    'u': 'A#4',
    'j': 'B4',
    'k': 'C5'
};

document.addEventListener('keydown', (e) => {
    const note = noteMap[e.key];
    if (note) {
        synth.triggerAttack(note);
    }
});

document.addEventListener('keyup', (e) => {
    const note = noteMap[e.key];
    if (note) {
        synth.triggerRelease(note);
    }
});

const reverb = new Tone.Reverb(3).toDestination(); // 3 seconds decay
synth.connect(reverb);

const effectControl = document.getElementById('effect-control');
effectControl.addEventListener('input', (e) => {
    const value = e.target.value;
    reverb.decay = value * 0.03; // Scale value for effect
});
