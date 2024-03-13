---
title: AudioBufferSourceNode.buffer
slug: Web/API/AudioBufferSourceNode/buffer
---

{{APIRef("Web Audio API")}}

La propriété **`buffer`** de l'interface [`AudioBufferSourceNode`](/fr/docs/Web/API/AudioBufferSourceNode) donne la possibilité de lire un son en utilisant un objet [`AudioBuffer`](/fr/docs/Web/API/AudioBuffer) comme ressource audio.

Si la propriété `buffer` a la valeur `null`, le nœud génère un canal unique silencieux (chaque échantillon vaut `0`).

## Syntaxe

```js
AudioBufferSourceNode.buffer = soundBuffer;
```

### Valeur

Un objet [`AudioBuffer`](/fr/docs/Web/API/AudioBuffer) qui contient les données représentant le son que le nœud va lire.

## Exemple

> **Note :** Pour un exemple complet, voir [cette démonstration](https://mdn.github.io/webaudio-examples/audio-buffer/), ou [le code source correspondant](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html).

```js
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

// Stereo
let channels = 2;

function init() {
  audioCtx = new AudioContext();
}

button.onclick = function () {
  if (!audioCtx) {
    init();
  }

  // On crée un tampon stéréo vide de deux secondes
  // qui utilise l'échantillonage de AudioContext
  let frameCount = audioCtx.sampleRate * 2.0;

  let myArrayBuffer = audioCtx.createBuffer(
    channels,
    frameCount,
    audioCtx.sampleRate,
  );

  // On remplit le buffer avec du bruit blanc ;
  // soit des valeurs entre -1.0 et 1.0
  for (let channel = 0; channel < channels; channel++) {
    // Voici le calcul du tableau réel qui contient
    // les données
    let nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() donne une valeur sur [0; 1.0]
      // audio doit être sur [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // On récupère un AudioBufferSourceNode.
  // C'est l'objet AudioNode à utiliser pour lire
  // un AudioBuffer
  let source = audioCtx.createBufferSource();
  // on passe le buffer avec AudioBufferSourceNode
  source.buffer = myArrayBuffer;
  // on connecte le nœud AudioBufferSourceNode à
  // la destination afin d'entendre le son
  source.connect(audioCtx.destination);
  // on lance la lecture
  source.start();

  source.onended = () => {
    console.log("Bruit blanc terminé");
  };
};
```

## Spécifications

{{Specifications}}

## Compatibilité navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API <i lang="en">Web Audio</i>](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [L'API <i lang="en">Web Audio</i>](/fr/docs/Web/API/Web_Audio_API)
