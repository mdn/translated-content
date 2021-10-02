---
title: AudioBufferSourceNode.buffer
slug: Web/API/AudioBufferSourceNode/buffer
translation_of: Web/API/AudioBufferSourceNode/buffer
---
{{ APIRef("Web Audio API") }}

La propriété **`buffer`** de l'interface {{ domxref("AudioBufferSourceNode") }} donne la possibilité de lire un son en utilisant un {{domxref("AudioBuffer")}} comme ressource audio.

Si la propriété `buffer` a la valeur NULL, elle définit un canal unique silencieux (chaque échantillon vaut 0).

## Syntaxe

    AudioBufferSourceNode.buffer = soundBuffer;

### Valeur

Un {{domxref("AudioBuffer")}} qui contient les données représentant le son que le noeud va lire.

## Exemple

> **Note :** Pour un exemple complet, voir [le code interprété](http://mdn.github.io/audio-buffer/), ou [le code source](https://github.com/mdn/audio-buffer).

```js
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // Remplit le buffer avec du bruit blanc;
  // valeurs aléatoires entre -1.0 et 1.0
  for (var channel = 0; channel < channels; channel++) {
   // Crée le ArrayBuffer qui contient effectivement les données
   var nowBuffering = myArrayBuffer.getChannelData(channel);
   for (var i = 0; i < frameCount; i++) {
     // Math.random() is in [0; 1.0]
     // audio doit être compris entre [-1.0; 1.0]
     nowBuffering[i] = Math.random() * 2 - 1;
   }
  }

  // Crée un AudioBufferSourceNode.
  // C'est le AudioNode à utiliser pour jouer un AudioBuffer
  var source = audioCtx.createBufferSource();
  // Définit le buffer dans l'AudioBufferSourceNode
  source.buffer = myArrayBuffer;
```

## Spécifications

| Spécification                                                                                            | Statut                               | Commentaire         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("Web Audio API", "#widl-AudioBufferSourceNode-buffer", "buffer")}} | {{Spec2("Web Audio API")}} | Définition initiale |

## Compatibilité navigateurs

{{Compat("api.AudioBufferSourceNode.buffer")}}

## Voir aussi

{{page("/en-US/docs/Web/API/AudioBufferSourceNode","See_also")}}
