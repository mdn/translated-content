---
title: AudioBuffer
slug: Web/API/AudioBuffer
tags:
  - API
  - Experimental
  - Reference
  - Web Audio API
translation_of: Web/API/AudioBuffer
---
{{APIRef("Web Audio API")}}

L'interface AudioBuffer représente une ressource audio stockée en mémoire, créée à partir d'un fichier audio avec la méthode {{ domxref("AudioContext.decodeAudioData()") }}, ou à partir de données brutes avec {{ domxref("AudioContext.createBuffer()") }}. Une fois mises en mémoire dans un AudioBuffer, les données audio sont transférées dans un {{ domxref("AudioBufferSourceNode") }} afin d'être lues.

Ce type d'objet est conçu pour contenir de petit extraits audio, durant généralement moins de 45s. Pour les sons plus longs, les objets implémentant {{domxref ("MediaAudioElementSourceNode")}} sont plus adaptés. La mémoire tampon contient des données au format non entrelacé IEEE 32-bit PCM linéaire, avec une portée nominale comprise entre -1 et +1. S'il y a plusieurs canaux, ils sont stockés dans des mémoires-tampon distinctes.

## Constructeur

- {{domxref("AudioBuffer.AudioBuffer", "AudioBuffer()")}}
  - : Crée et retourne un nouvel objet `AudioBuffer`.

## Propriétés

- {{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}
  - : Retourne un nombre flottant qui représente la fréquence d'échantillonnage, en échantillons par seconde, des données PCM stockées dans la mémoire tampon.
- {{domxref("AudioBuffer.length")}} {{readonlyInline}}
  - : Retourne un nombre entier qui représente la longueur, en trames d'échantillonnage , des données PCM stockées dans la mémoire tampon.
- {{domxref("AudioBuffer.duration")}} {{readonlyInline}}
  - : Retourne un nombre à virgule flottante de double précision qui représente la durée, exprimée en secondes, des données PCM stockées dans la mémoire tampon.
- {{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}
  - : Retourne un nombre entier qui représente le nombre de canaux audio discrets décrits par les données PCM stockées dans la mémoire tampon.

## Méthodes

- {{domxref("AudioBuffer.getChannelData()")}}
  - : Retourne un {{domxref ("Float32Array")}} contenant les données PCM associés au canal, défini par l'index du canal (0 représentant le premier canal).
- {{domxref("AudioBuffer.copyFromChannel()")}}
  - : Copie les échantillons du canal associé à `AudioBuffer` dans un tableau de destination.
- {{domxref("AudioBuffer.copyToChannel()")}}
  - : Copie les échantillons dans le canal associé à `AudioBuffer`, depuis le tableau `source`.

## Exemple

L'exemple suivant montre comment créer un  `AudioBuffer` et le remplir avec du bruit blanc. Le code source est disponible sur notre repo [audio-buffer demo](https://github.com/mdn/audio-buffer); une [version live](http://mdn.github.io/audio-buffer/) est également consultable.

```js
// Stéréo
var nombreCanaux = 2;

// Crée une mémoire tampon vide de 2 secondes
// à la fréquence d'échantillonage du contexte AudioContext
var nombreFrames = contexteAudio.sampleRate * 2.0;
var tableauDonnees = audioCtx.createBuffer(nombreCanaux, nombreFrames, contexteAudio.sampleRate);

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

## Spécifications

| Spécification                                                                                | Statut                               | Commentaire         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Web Audio API', '#AudioBuffer-section', 'AudioBuffer')}} | {{Spec2('Web Audio API')}} | Définition initiale |

## Compatibilité navigateurs

{{Compat("api.AudioBuffer")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
