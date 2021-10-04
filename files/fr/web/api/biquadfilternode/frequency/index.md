---
title: BiquadFilterNode.frequency
slug: Web/API/BiquadFilterNode/frequency
translation_of: Web/API/BiquadFilterNode/frequency
---
{{ APIRef("Web Audio API") }}

La propriété `frequency` de l'interface {{ domxref("BiquadFilterNode") }} est un  {{domxref("AudioParam")}} de type [k-rate](/fr/docs/DOM/AudioParam#k-rate) : un nombre flottant à double précision représentant une fréquence de l'algorithme de filtrage courant, exprimée en hertz (Hz).

Sa valeur par défaut est de `350` avec une portée nominale de `10` à la [fréquence de Nyquist](http://en.wikipedia.org/wiki/Nyquist_frequency), qui est la moitié de la fréquence d'échantillonnage.

## Syntax

```js
var contexteAudio = new AudioContext();
var filtreBiquad = contexteAudio.createBiquadFilter();
filtreBiquad.frequency.value = 3000;
```

> **Note :** Bien que le `AudioParam` renvoyé soit en lecture seule, la valeur qu'il représente ne l'est pas.

### Valeur

Un {{domxref("AudioParam")}}.

## Exemple

L'exemple suivant montre l'utilisation basique d'un AudioContext pour créer un filtre Biquad. Pour un exemple complet, consultez notre démo [voice-change-o-matic](http://mdn.github.io/voice-change-o-matic/) (et son [code source](https://github.com/mdn/voice-change-o-matic)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();

// mise en place des différents noeuds audio que nous utiliserons par la suite
var analyseur = contexteAudio.createAnalyser();
var distortion = contexteAudio.createWaveShaper();
var noeudGain = contexteAudio.createGain();
var filtreBiquad = contexteAudio.createBiquadFilter();
var convolution = contexteAudio.createConvolver();

// connecte les noeuds ensemble

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyseur);
analyseur.connect(distortion);
distortion.connect(filtreBiquad);
biquadFilter.connect(convolution);
convolution.connect(noeudGain);
noeudGain.connect(contexteAudio.destination);

// manipule le filtre Biquad

filtreBiquad.type = "lowshelf";
filtreBiquad.frequency.value = 1000;
filtreBiquad.gain.value = 25;
```

## Spécification

| Specification                                                                                            | Status                               | Comment |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#widl-BiquadFilterNode-frequency', 'frequency')}} | {{Spec2('Web Audio API')}} |         |

## Compatibilité navigateurs

{{Compat("api.BiquadFilterNode.frequency")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
