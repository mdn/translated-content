---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("Web Audio API")}}

La interfaz `BaseAudioContext` de la [API de Audio Web](/es/docs/Web/API/Web_Audio_API) actúa como una definición base para los gráficos de procesamiento de audio en línea y fuera de línea, como se representa mediante {{domxref("AudioContext")}} y {{domxref("OfflineAudioContext")}} respectivamente. No use `BaseAudioContext` directamente; use sus funciones a través de una de estas dos interfaces heredadas.

`BaseAudioContext` puede ser destino de eventos, por lo que implementa la interfaz {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Propiedades de instancia

- {{domxref("BaseAudioContext.audioWorklet")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Devuelve el objeto {{domxref("AudioWorklet")}}, que se puede usar para crear y administrar {{domxref("AudioNode")}} en los que el código JavaScript que implementa la interfaz {{domxref("AudioWorkletProcessor")}} se ejecuta en segundo plano para procesar datos de audio.
- {{domxref("BaseAudioContext.currentTime")}} {{ReadOnlyInline}}
  - : Devuelve un `double` que representa un tiempo de hardware cada vez mayor en segundos utilizado para la programación. Comienza en `0`.
- {{domxref("BaseAudioContext.destination")}} {{ReadOnlyInline}}
  - : Devuelve un {{domxref("AudioDestinationNode")}} que representa el destino final de todo el audio en el contexto. Se puede considerar como el dispositivo de reproducción de audio.
- {{domxref("BaseAudioContext.listener")}} {{ReadOnlyInline}}
  - : Devuelve el objeto {{domxref("AudioListener")}}, utilizado para la espacialización 3D.
- {{domxref("BaseAudioContext.sampleRate")}} {{ReadOnlyInline}}
  - : Devuelve un `float` que representa la frecuencia de muestreo (en muestras por segundo) utilizada por todos los nodos en este contexto. La frecuencia de muestreo de un {{domxref("AudioContext")}} no se puede cambiar.
- {{domxref("BaseAudioContext.state")}} {{ReadOnlyInline}}
  - : Devuelve el estado actual de `AudioContext`.

## Métodos de instancia

_También implementa métodos de la interfaz_ {{domxref("EventTarget")}}.

- {{domxref("BaseAudioContext.createAnalyser()")}}
  - : Crea un {{domxref("AnalyserNode")}}, que se puede usar para exponer datos de tiempo y frecuencia de audio y, por ejemplo, para crear visualizaciones de datos.
- {{domxref("BaseAudioContext.createBiquadFilter()")}}
  - : Crea un {{domxref("BiquadFilterNode")}}, que representa un filtro de segundo orden configurable como varios tipos de filtros comunes diferentes: paso alto, paso bajo, paso banda, etc.
- {{domxref("BaseAudioContext.createBuffer()")}}
  - : Crea un objeto {{ domxref("AudioBuffer") }} nuevo y vacío, que luego se puede completar con datos y reproducir a través de un {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("BaseAudioContext.createBufferSource()")}}
  - : Crea un {{domxref("AudioBufferSourceNode")}}, que se puede usar para reproducir y manipular datos de audio contenidos en un objeto {{domxref("AudioBuffer") }}. Los {{ domxref("AudioBuffer") }} se crean usando {{domxref("BaseAudioContext/createBuffer", "AudioContext.createBuffer()")}} o los devuelve {{domxref("BaseAudioContext/decodeAudioData", "AudioContext. decodeAudioData()")}} cuando decodifica con éxito una pista de audio.
- {{domxref("BaseAudioContext.createConstantSource()")}}
  - : Crea un objeto {{domxref("ConstantSourceNode")}}, que es una fuente de audio que emite continuamente una señal de sonido monoaural (de un canal) cuyas muestras tienen el mismo valor.
- {{domxref("BaseAudioContext.createChannelMerger()")}}
  - : Crea un {{domxref("ChannelMergerNode")}}, que se usa para combinar canales de varias transmisiones de audio en una sola transmisión de audio.
- {{domxref("BaseAudioContext.createChannelSplitter()")}}
  - : Crea un {{domxref("ChannelSplitterNode")}}, que se utiliza para acceder a los canales individuales de una transmisión de audio y procesarlos por separado.
- {{domxref("BaseAudioContext.createConvolver()")}}
  - : Crea un {{domxref("ConvolverNode")}}, que se puede usar para aplicar efectos de convolución a su gráfico de audio, por ejemplo, un efecto de reverberación.
- {{domxref("BaseAudioContext.createDelay()")}}
  - : Crea un {{domxref("DelayNode")}}, que se usa para retrasar la señal de audio entrante en cierta cantidad. Este nodo también es útil para crear bucles de retroalimentación en un gráfico de la API de Audio Web.
- {{domxref("BaseAudioContext.createDynamicsCompressor()")}}
  - : Crea un {{domxref("DynamicsCompressorNode")}}, que se puede usar para aplicar compresión acústica a una señal de audio.
- {{domxref("BaseAudioContext.createGain()")}}
  - : Crea un {{domxref("GainNode")}}, que se puede usar para controlar el volumen general del gráfico de audio.
- {{domxref("BaseAudioContext.createIIRFilter()")}}
  - : Crea un {{domxref("IIRFilterNode")}}, que representa un filtro de segundo orden configurable como varios tipos de filtros comunes diferentes.
- {{domxref("BaseAudioContext.createOscillator()")}}
  - : Crea un {{domxref("OscillatorNode")}}, una fuente que representa una forma de onda periódica. Básicamente genera un tono.
- {{domxref("BaseAudioContext.createPanner()")}}
  - : Crea un {{domxref("PannerNode")}}, que se usa para espacializar una transmisión de audio entrante en un espacio 3D.
- {{domxref("BaseAudioContext.createPeriodicWave()")}}
  - : Crea un {{domxref("PeriodicWave")}}, que se usa para definir una forma de onda periódica que se puede usar para determinar la salida de un {{domxref("OscillatorNode") }}.
- {{domxref("BaseAudioContext.createScriptProcessor()")}} {{deprecated_inline}}
  - : Crea un {{domxref("ScriptProcessorNode")}}, que se puede usar para el procesamiento de audio directo a través de JavaScript.
- {{domxref("BaseAudioContext.createStereoPanner()")}}
  - : Crea un {{domxref("StereoPannerNode")}}, que se puede usar para aplicar panoramización estéreo a una fuente de audio.
- {{domxref("BaseAudioContext.createWaveShaper()")}}
  - : Crea un {{domxref("WaveShaperNode")}}, que se usa para implementar efectos de distorsión no lineal.
- {{domxref("BaseAudioContext.decodeAudioData()")}}
  - : Decodifica de forma asíncrona los datos del archivo de audio contenidos en un {{jsxref("ArrayBuffer")}}. En este caso, `ArrayBuffer` generalmente se carga desde un atributo `response` de {{domxref("XMLHttpRequest")}} después de establecer `responseType` en `arraybuffer`. Este método solo funciona en archivos completos, no en fragmentos de archivos de audio.

## Eventos

- {{domxref("BaseAudioContext.statechange_event", "statechange")}}
  - : Se activa cuando el estado de `AudioContext` cambia debido a la llamada de uno de los métodos de cambio de estado ({{domxref("AudioContext.suspend")}}, {{domxref("AudioContext.resume")}}, o { {domxref("AudioContext.close")}}).

## Ejemplos

Declaración básica de contexto de audio:

```js
const audioContext = new AudioContext();
```

Variante entre navegadores:

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const oscillatorNode = audioContext.createOscillator();
const gainNode = audioContext.createGain();
const finish = audioContext.destination;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de la API de Audio Web](/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioContext")}}
- {{domxref("OfflineAudioContext")}}
