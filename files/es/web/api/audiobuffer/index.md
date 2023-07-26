---
title: AudioBuffer
slug: Web/API/AudioBuffer
---

{{APIRef("Web Audio API")}}

La interfaz **`AudioBuffer`** representa un pequeño recurso de audio que se almacena en memoria, creado a partir de un archivo de audio usando el método {{ domxref("AudioContext.decodeAudioData()") }}, o de datos en bruto con el método {{ domxref("AudioContext.createBuffer()") }}. Una véz cargado en AudioBuffer, el audio puede ser reproducido pasandolo en el método {{ domxref("AudioBufferSourceNode") }}.

Objetos de este tipo son diseñados para almacenar pequeños trozos de audio, normalmente menos de 45 segundos. Para audios más extensos, los objectos implementan {{domxref("MediaElementAudioSourceNode")}} que es más adecuado. El buffer contiene data en el siguiente formado: non-interleaved IEEE754 32-bit linear PCM with a nominal range between `-1` and `+1`, that is, 32bits floating point buffer, with each samples between -1.0 and 1.0. If the {{domxref("AudioBuffer")}} has multiple channels, they are stored in separate buffer.

## Constructor

- {{domxref("AudioBuffer.AudioBuffer", "AudioBuffer()")}}
  - : Crea y retorna una nueva instancia de `AudioBuffer`

## Propiedades

- {{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}
  - : Returns a float representing the sample rate, in samples per second, of the PCM data stored in the buffer.
- {{domxref("AudioBuffer.length")}} {{readonlyInline}}
  - : Returns an integer representing the length, in sample-frames, of the PCM data stored in the buffer.
- {{domxref("AudioBuffer.duration")}} {{readonlyInline}}
  - : Returns a double representing the duration, in seconds, of the PCM data stored in the buffer.
- {{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}
  - : Returns an integer representing the number of discrete audio channels described by the PCM data stored in the buffer.

## Métodos

- {{domxref("AudioBuffer.getChannelData()")}}
  - : Returns a {{jsxref("Float32Array")}} containing the PCM data associated with the channel, defined by the `channel` parameter (with `0` representing the first channel).
- {{domxref("AudioBuffer.copyFromChannel()")}}
  - : Copies the samples from the specified channel of the `AudioBuffer` to the `destination` array.
- {{domxref("AudioBuffer.copyToChannel()")}}
  - : Copies the samples to the specified channel of the `AudioBuffer`, from the `source` array.

## Ejemplo

El siguiente ejemplo muestra como se crea un `AudioBuffer` y rellena con un sonido blanco aleatorio. Puedes encontrar el código completo en nuestro repositorio: [webaudio-examples](https://github.com/mdn/webaudio-examples); y una versión disponible: [running live](https://mdn.github.io/webaudio-examples/audio-buffer/)

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Create an empty three-second stereo buffer at the sample rate of the AudioContext
var myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// Fill the buffer with white noise;
// just random values between -1.0 and 1.0
for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // This gives us the actual array that contains the data
  var nowBuffering = myArrayBuffer.getChannelData(channel);
  for (var i = 0; i < myArrayBuffer.length; i++) {
    // Math.random() is in [0; 1.0]
    // audio needs to be in [-1.0; 1.0]
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

// Get an AudioBufferSourceNode.
// This is the AudioNode to use when we want to play an AudioBuffer
var source = audioCtx.createBufferSource();

// set the buffer in the AudioBufferSourceNode
source.buffer = myArrayBuffer;

// connect the AudioBufferSourceNode to the
// destination so we can hear the sound
source.connect(audioCtx.destination);

// start the source playing
source.start();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- [Using the Web Audio API](/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
