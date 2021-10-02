---
title: BaseAudioContext.createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
tags:
  - API
  - BaseAudioContext
  - Méthode
  - Reference
  - Web Audio
  - Web Audio API
  - createBiquadFilter
translation_of: Web/API/BaseAudioContext/createBiquadFilter
---
{{ APIRef("Web Audio API") }}

La méthode `createBiquadFilter()` de l'interface {{ domxref("BaseAudioContext") }} crée un {{ domxref("BiquadFilterNode") }}, qui représente un filtre de second ordre configurable comme plusieurs types de filtres communs différents.

## Syntaxe

    baseAudioContext.createBiquadFilter();

### Retourne

un {{domxref("BiquadFilterNode")}}.

## Exemple

L'exemple suivant montre une utilisation basique d'un AudioContext pour créer un nœud de filtre Biquad. Pour un exemple fonctionnel complet, visitez notre démonstration [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et lisez de même le [code source](https://github.com/mdn/voice-change-o-matic)).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//set up the different audio nodes we will use for the app
var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();
var convolver = audioCtx.createConvolver();

// connect the nodes together

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
biquadFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);
biquadFilter.gain.setValueAtTime(25, audioCtx.currentTime);
```

## Spécifications

| Specification                                                                                                                    | Status                               | Comment |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#dom-baseaudiocontext-createbiquadfilter', 'createBiquadFilter()')}} | {{Spec2('Web Audio API')}} |         |

## Compatibilité des navigateurs

{{Compat("api.BaseAudioContext.createBiquadFilter")}}

## Voir aussi

- [Utiliser l'API Web Audio](/en-US/docs/Web_Audio_API/Using_Web_Audio_API)
