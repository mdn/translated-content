---
title: AudioBufferSourceNode.detune
slug: Web/API/AudioBufferSourceNode/detune
---

{{ APIRef("Web Audio API") }}

La propriété `detune` de l'interface {{ domxref("AudioBufferSourceNode") }} est un {{domxref("AudioParam")}} de type [k-rate](/fr/docs/DOM/AudioParam#k-rate) représentant le désaccord des oscillations en [cents](http://en.wikipedia.org/wiki/Cent_%28music%29).

Ses valeur sont comprises entre -1200 et 1200.

## Syntaxe

```js
var source = contexteAudio.createBufferSource();
source.detune.value = 100; // valeur en cents
```

> [!NOTE]
> Bien que l'`AudioParam` renvoyé soit en lecture seule, la valeur qu'il représente ne l'est pas.

### Valeur

Un {{domxref("AudioParam")}} de type [k-rate](/fr/docs/DOM/AudioParam#k-rate).

## Exemple

```js
var audioCtx = new AudioContext();

var nbChan = 2;
var nbFrames = audioCtx.sampleRate * 2.0;

var audioBuffer = audioCtx.createBuffer(nbChan, nbFrames, audioCtx.sampleRate);

for (var chan = 0; chan < nbChan; chan++) {
  var chanData = audioBuffer.getChannelData(chan);
  for (var i = 0; i < nbFrames; i++) {
    chanData[i] = Math.random() * 2 - 1;
  }
}

var source = audioCtx.createBufferSource();
source.buffer = audioBuffer;
source.connect(audioCtx.destination);
source.detune.value = 100; // valeur en cents
source.start();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
