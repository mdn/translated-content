---
title: BaseAudioContext.createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
---

{{ APIRef("Web Audio API") }}

El metodo `createBiquadFilter()` de la interfaz {{ domxref("BaseAudioContext") }} crea un {{ domxref("BiquadFilterNode") }}, el cual representa un filtro de segundo orden configurable, asi como varios tipos de filtros comunes diferentes.

## Sintaxis

```js
var audioCtx = new AudioContext();
var biquadFilter = audioCtx.createBiquadFilter();
```

### Retorna

Un {{domxref("BiquadFilterNode")}}.

## Ejemplo

El siguiente ejemplo muestra el uso básico de un AudioContext para crear un nodo de filtro Biquad. Para ver el ejemplo trabanjando completamente, mire nuestra demostración [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (mirar tambien [source code](https://github.com/mdn/voice-change-o-matic)).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Configurar los diferentes nodos de audio que usaremos para la aplicación.
var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();
var convolver = audioCtx.createConvolver();

// conectar los nodos juntos

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipule el filtro Biquad

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- [Using the Web Audio API](/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
