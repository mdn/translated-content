---
title: AudioBuffer.getChannelData()
slug: Web/API/AudioBuffer/getChannelData
translation_of: Web/API/AudioBuffer/getChannelData
---
{{ APIRef("Web Audio API") }}

La méthode `getChannelData()` de l'interface [`AudioBuffer`](/fr/docs/Web/API/AudioBuffer) renvoie un [`Float32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) contenant les données PCM associées au canal spécifié (0 correspondant au premier canal).

## Syntaxe

```js
var tableauDonnees = contexteAudio.createBuffer(nombreCanaux, nombreFrames, contexteAudio.sampleRate);
var tampon = tableauDonnees.getChannelData(canal);
```

### Valeur

Un {{domxref("Float32Array")}}.

## Exemple

Dans l'exemple suivant crée un buffer de 2 secondes, le remplit avec du bruit blanc puis le lit via un {{ domxref("AudioBufferSourceNode") }}. Vous pouvez aussi [exécuter le code](http://mdn.github.io/audio-buffer/), or [voir le code source](https://github.com/mdn/audio-buffer).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var bouton = document.querySelector('button');
var preformate = document.querySelector('pre');
var monScript = document.querySelector('script');

preformate.innerHTML = monScript.innerHTML;

// Stéréo
var nombreCanaux = 2;
// Crée un buffer vide de 2 secondes
// au taux d'échantillonage du contexte audio
var nombreFrames = contexteAudio.sampleRate * 2.0;

var tableauDonnees = contexteAudio.createBuffer(nombreCanaux, nombreFrames, contexteAudio.sampleRate);

bouton.onclick = function() {
  // remplit la mémoire tampon avec du bruit blanc
  // valeurs aléatoires entre -1.0 et 1.0
  for (var canal = 0; canal < nombreCanaux; canal++) {
    // génère le tableau contenant les données
    var tampon = tableauDonnees.getChannelData(canal);
    for (var i = 0; i < nombreFrames; i++) {
      // Math.random() donne une valeur comprise entre [0; 1.0]
      // l'audio doit être compris entre [-1.0; 1.0]
      tampon[i] = Math.random() * 2 - 1;
    }
  }

  // Récupère un AudioBufferSourceNode.
  // C'est un AudioNode à utiliser quand on veut jouer AudioBuffer
  var source = contexteAudio.createBufferSource();

  // assigne le buffer au AudioBufferSourceNode
  source.buffer = tableauDonnees;

  // connecte le AudioBufferSourceNode avec
  // la destination pour qu'on puisse entendre le son
  source.connect(contexteAudio.destination);

  // lance la lecture du so
  source.start();
}
```

## Paramètres

- channel
  - : The channel property is an index representing the particular channel to get data for. An index value of 0 represents the first channel. If the `channel` index value is greater than of equal to {{domxref("AudioBuffer.numberOfChannels")}}, an `INDEX_SIZE_ERR` exception will be thrown.

## Spécification

| Spécification                                                                                                                                                | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioBuffer-getChannelData-Float32Array-unsigned-long-channel', 'getChannelData')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioBuffer.getChannelData")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
