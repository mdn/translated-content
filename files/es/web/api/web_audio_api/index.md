---
title: Web Audio API
slug: Web/API/Web_Audio_API
---

{{apiref("Web Audio API")}}

La API de Audio Web provee un sistema poderoso y versatil para controlar audio en la Web, permitiendo a los desarrolladores escoger fuentes de audio, agregar efectos al audio, crear visualizaciones de audios, aplicar efectos espaciales (como paneo) y mucho más.

## Conceptos y uso de audio Web

La API de Audio Web involucra manejar operaciones de audio dentro de un **contexto de audio**, y ha sido diseñada para permitir **enrutamiento modular**. Las operaciones de audio básicas son realizadas con **nodos de audio**, que están enlazados juntos para formar un **gráfico de enrutamiento de audio**. Muchas fuentes — con diferentes tipos de diseño de canales — están soportadas incluso dentro de un único contexto. Este diseño modular provee flexibilidad para crear funciones de audio complejas con efectos dinámicos.

Los nodos de audio están enlazados en cadenas y redes simples por sus entradas y salidas. Éstos típicamente empiezan con una o más fuentes. Las fuentes provee matrices de intensidades de sonidos (muestras) en segmentos de tiempo muy pequeños, a menudo decenas de miles de éstos por segundo. Éstos podrían ser calculados matemáticamente (como {{domxref("OscillatorNode")}}), o pueden ser grabaciones de archivos de audio o video (como {{domxref("AudioBufferSourceNode")}} y {{domxref("MediaElementAudioSourceNode")}}) y transmisiones de audio ({{domxref("MediaStreamAudioSourceNode")}}). De hecho, los archivos de sonido son sólo grabaciones de intensidades de sonido, que vienen desde micrófonos o instrumentos eléctricos, y mezclados en una onda única y complicada.

Los resultados de éstos nodos podrían ser enlazados a las entradas de otros, que mezclan o modifican estas transmisiones de muestras de audio en diferentes transmisiones. Una modificación común es multiplicar las muestras por un valor para hacerlas más fuertes o silenciosas (como es el caso con {{domxref("GainNode")}}). Una vez que el sonido ha sido lo suficientemente procesado por el efecto necesario, puede ser enlazados a la entrada de un destino({{domxref("AudioContext.destination")}}), que enviá el sonido a los altavoces o auriculares. Esta última conexión sólo es necesaria si el usuario debe escuchar el audio.

Un diagrama de flujo simple y típico para el audio web se vería algo como esto:

1. Crear contexto de audio
2. Dentro del contexto, crear fuentes — como `<audio>`, oscillator, stream
3. Crear nodos de efectos, tales como reverberación, filtro biquad, panner, compresor
4. Escoge el destino final del audio, por ejemplo tu sistema de altavoces
5. Conecta las fuentes a los efectos, y los efectos al destino.

![A simple box diagram with an outer box labeled Audio context, and three inner boxes labeled Sources, Effects and Destination. The three inner boxes have arrow between them pointing from left to right, indicating the flow of audio information.](audio-context_.png)

El tiempo es controlado con alta precisión baja latencia, permitiendo a los desarrolladores escribir código que responda con precisión a los eventos y sea capaz de apuntar a muestras específicas, incluso en una alta frecuencia de muestreo. Por lo tanto, las aplicaciones como las cajas de ritmos y los secuenciadores están a su alcance.

El API de Audio Web también nos permite controlar cómo el audio es _espacializado_. Usando un sistema basado en un _modelo fuente-oyente_, esto permite controlar el _modeo de paneo_ y que se ocupa de la _atenuación inducida por distancia_ o _desplazamiento doppler_ inducido por una fuente en movimiento (o un oyente en movimiento).

> **Nota:** Puedes leear sobre la teoría del API de Audio Web con más detalle en nuestro artículo [Conceptos Básicos detrás del API de Audio Web](/es/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API).

## Interfaces del API de Audio Web

La API de Audio Web tiene un número de interfaces y eventos asociados, que han sido divididos en nueve categorias de funcionalidad.

### Definición general del gráfico de audio

Contenedores y definiciones generales que dan forma a los gráficos de audio en el uso de Web Audio API.

- {{domxref("AudioContext")}}
  - : La interfaz **`AudioContext`** representa un gráfico de procesamiento de audio construido de módulos de audio enlazados juntos, cada uno representado por un {{domxref("AudioNode")}}. Un contexto de audio controla la creación de los nodos que contiene y la ejecución del procesamiento del audio, or decoding. Necesitas crear un `AudioContext` antes de hacer cualquier cosa, ya que todo pasa dentro de un contexto de audio.
- {{domxref("AudioNode")}}
  - : La interfaz **`AudioNode`** representa un módulo de procesamiento de audio como una _fuente de audio_ (por ejemplo un ejemplo HTML {{HTMLElement("audio")}} or {{HTMLElement("video")}}), _destino de audio_, _módulo de procesamiento intermedio_ (por ejemplo un filtro como {{domxref("BiquadFilterNode")}}, o _control de volumen_ como {{domxref("GainNode")}}).
- {{domxref("AudioParam")}}
  - : La interfaz **`AudioParam`** representa un parámetro relacionado al audio, como uno de un {{domxref("AudioNode")}}. Esto puede ser establecido a un valor específico o un cambio de valor, y puede ser agendado para que ocurra en un momento específico y siguiendo un patrón específico.
- {{domxref("AudioParamMap")}}
  - : Provee una interfaz como para mapear a un grupo de interfaces {{domxref("AudioParam")}}, lo que significa que proporciona los métodos `forEach()`, `get()`, `has()`, `keys()`, y `values()`, como también una propiedad `size`.
- {{domxref("BaseAudioContext")}}
  - : La interfaz **`BaseAudioContext`** actúa como una definición base para procesamiento de gráficos de audio en y fuera de línea, como lo representa {{domxref("AudioContext")}} y {{domxref("OfflineAudioContext")}} resepectivamente. No tendrás que usar `BaseAudioContext` directamente — tendrás que usar sus características a través de una de éstas dos interfaces heredadas.
- El evento [`ended`](/es/docs/Web/Reference/Events/ended)
  - : El evento `ended` es lanzado cuando la reproducción se detiene porque se alcanzó el fin del archivo de medio.

### Definiendo fuentes de audio

Las interfaces que definen fuentes de audio para usar en la API de Web.

- {{domxref("AudioScheduledSourceNode")}}
  - : La interfaz **`AudioScheduledSourceNode`** es una interfaz padre para muchos tipos de interfaces de nodos de fuentes de audio. Es un {{domxref("AudioNode")}}.

<!---->

- {{domxref("OscillatorNode")}}
  - : La interfaz **`OscillatorNode`** representa una forma de onda periódica, como una onda sinusoidal o triangular. Es un módulo de procesamiento de audio {{domxref("AudioNode")}} que causa que se cree una _frecuencia_ de onda determinada.
- {{domxref("AudioBuffer")}}
  - : La interfaz **`AudioBuffer`** representa un recurso de audio corto que reside en la memoria, creado desde un archivo de audio usando el método {{ domxref("AudioContext.decodeAudioData()") }}, o creado con datos sin procesar usando {{ domxref("AudioContext.createBuffer()") }}. Una vez decodificado en esta forma, el audio puede ser colocado en un {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("AudioBufferSourceNode")}}
  - : La interfaz **`AudioBufferSourceNode`** representa una fuente de audio que consiste en una datos de audio en la memoria, almacenada en un {{domxref("AudioBuffer")}}. Es un {{domxref("AudioNode")}} que actúa como una fuente de audio.
- {{domxref("MediaElementAudioSourceNode")}}
  - : La interfaz **`MediaElementAudioSourceNode`** representa una fuente de audio que consiste en un elemento {{ htmlelement("audio") }} o {{ htmlelement("video") }} de HTML5. Es un {{domxref("AudioNode")}} que actúa como una fuente de audio.
- {{domxref("MediaStreamAudioSourceNode")}}
  - : La interfaz **`MediaStreamAudioSourceNode`** representa una fuente de audio que consiste en un {{domxref("MediaStream")}} de [WebRTC](/es/docs/WebRTC) (como una cámara web, micrófono, o una transmisión siendo enviada a una computadora remota). Es un {{domxref("AudioNode")}} que actúa como una fuente de audio.

### Definiendo filtros de efectos de audio

Interfaces para definir efectos que quieras aplicar a tus fuentes de audio.

- {{domxref("BiquadFilterNode")}}
  - : La interfaz **`BiquadFilterNode`** representa una filtro de bajo orden sencillo. Es un {{domxref("AudioNode")}} que puede representar diferentes tipos de filtros, dispositivos de control de tono, o ecualizadores gráficos. Un `BiquadFilterNode` siempre tiene exactamente una entrada y una salida.
- {{domxref("ConvolverNode")}}
  - : La interfaz **`ConvolverNode`** es un {{domxref("AudioNode")}} que realiza una Convolución Lineal en un {{domxref("AudioBuffer")}} determinado, y es usado a menudo para lograr un efecto de reverberación.
- {{domxref("DelayNode")}}
  - : La interfaz **`DelayNode`** representa una [línea de detardo](http://en.wikipedia.org/wiki/Digital_delay_line); un módulo de procesamiento de audio de {{domxref("AudioNode")}} que causa un retardo entre la llegada de una entrada de datos y su propagación a la salida.
- {{domxref("DynamicsCompressorNode")}}
  - : La intefaz **`DynamicsCompressorNode`** proporciona un efecto de compresión, que reduce el volumen de las partes más ruidosas de la señal para ayudar a evitar el recorte y la distorsión que pueden ocurrir cuando se reproducen y multiplexan múltiples sonidos a la vez.
- {{domxref("GainNode")}}
  - : La intefaz **`GainNode`** representa un cambio de volumen. Es un módulo de procesamiento de audio de {{domxref("AudioNode")}} que causa que una _ganancia_ determinada para ser aplicada a la entrada de datos antes de su propacación a la salida.
- {{domxref("WaveShaperNode")}}
  - : La interfaz **`WaveShaperNode`** representa un la interfaz representa un distorsionador no lineal. Es un {{domxref("AudioNode")}} que usa una curva para aplicar una distorsión en forma de onda a la señal. Además de los obvios efectos de distorsión, a menudo se usa para agregar una sensación cálida a la señal.
- {{domxref("PeriodicWave")}}
  - : Describe una forma de onda periódica que puede ser usada para dar forma a la salida de un {{ domxref("OscillatorNode") }}.
- {{domxref("IIRFilterNode")}}
  - : Implementa un filtro de **[respuesta de pulso infinito](https://en.wikipedia.org/wiki/infinite%20impulse%20response)** (IIR) general; este tipo de filtro se puede usar para implementar dispositivos de control de tono y ecualizadores gráficos también.

### Definición de destinos de audio

Una vez que haya terminado de procesar su audio, estas interfaces definen dónde emitirlo.

- {{domxref("AudioDestinationNode")}}
  - : La interfaz **`AudioDestinationNode`** representa el destino final de una fuente de audio en contexto determinado — usualmente los altavoces de tu dispositivo.
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : La interfaz **`MediaStreamAudioDestinationNode`** representa un destino de audio que consiste en un {{domxref("MediaStream")}} de [WebRTC](/es/docs/WebRTC) con un `AudioMediaStreamTrack` sencillo, que puede ser usado de una manera similiar a un {{domxref("MediaStream")}} obtenido desde {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}. Es un {{domxref("AudioNode")}} que actúa como un destino de audio.

### Análisis y visualización de datos

Si quieres extraer el tiempo, frecuencia, y otros datos de tu audio, `AnalyserNode` es lo que necesitas.

- {{domxref("AnalyserNode")}}
  - : La interfaz **`AnalyserNode`** representa un nodo capáz de proveer la frecuencia en tiempo real y la información del análisis del dominio de tiempo, para propósitos de análisis y visualización de datos.

### División y fusión de canales de audio

Para dividir y fusionar canales de audio, deberás usar estas interfaces.

- {{domxref("ChannelSplitterNode")}}
  - : La interfaz **`ChannelSplitterNode`** separa los diferentes canales de una fuente de audio enn un conjunto de salidas _mono_.
- {{domxref("ChannelMergerNode")}}
  - : La interfaz **`ChannelMergerNode`** reune las diferentes salidas mono en una sola salida. Cada entrada deberá ser usada para llenar un canal de la salida.

### Espacialización de audio

Estas interfaces te permiten agregar efectos de paneo de especialización de audio a tus fuentes de audio.

- {{domxref("AudioListener")}}
  - : La interfaz **`AudioListener`** representa la posición y orientación de la única persona escuchando la escena de audio usada en la espacialización de audio.
- {{domxref("PannerNode")}}
  - : La interfaz **`PannerNode`** representa la posición y comportamiento de una señal de fuente de audio en un espacio 3D, permitiéndote crear efectos de paneo complejos.
- {{domxref("StereoPannerNode")}}
  - : La interfaz **`StereoPannerNode`** representa un nodo de panner estéreo simple que se puede usar para panoramizar un flujo de audio hacia la izquierda o hacia la derecha.

### Proccesamiento de audio en JavaScript

Usando worklets de audio (pequeñas tareas), puedes definir nodos personalizados de audio escritos en JavaScript o [WebAssembly](/es/docs/WebAssembly). Los worklets de audios implementan la interfaz {{domxref("Worklet")}}, una versión ligera de la interfaz {{domxref("Worker")}}. A partir del enero de 2018, los worklets de audio están disponibles en Chrome 64 detrás de un identificador.

- {{domxref("AudioWorklet")}} {{experimental_inline}}
  - : La interfaz `AudioWorklet` está disponible a través de {{domxref("BaseAudioContext.audioWorklet")}} y te permite agregar nuevos móduloss al worklet de audio.
- {{domxref("AudioWorkletNode")}} {{experimental_inline}}
  - : La intefaz `AudioWorkletNode` representa un {{domxref("AudioNode")}} que está insertada en un gráfico de audio y puede pasar mensajes a la `AudioWorkletProcessor`.
- {{domxref("AudioWorkletProcessor")}} {{experimental_inline}}
  - : La interfaz `AudioWorkletProcessor` representa código de procesamiento de audio que se ejecuta en un `AudioWorkletGlobalScope` que genera, procesa, o analiza audio directamente, y puede pasar mensajes al `AudioWorkletNode`.
- {{domxref("AudioWorkletGlobalScope")}} {{experimental_inline}}
  - : La interfaz `AudioWorkletGlobalScope` es un objeto derivado de `WorkletGlobalScope` que representa un contexto del worker en el que se ejecuta un script de procesamiento de audio; está diseñado para permitir la generación, procesamiento, y análisis de datos de audio directamente usando JavaScript en un hilo worklet.

Antes de que se definieran los worklets de audio, la API de Web Audio usó `ScriptProcessorNode` {{deprecated_inline}} para procesamiento de audio basado en JavaScript. Como el código se ejecuta en el hilo principal, tuvo un mal rendimiento. `ScriptProcessorNode` se mantiene por razones históricas pero está marcada como obsoleta y será removida en una versión futura de la especificación.

- {{domxref("ScriptProcessorNode")}} {{deprecated_inline}}
  - : La interfaz **`ScriptProcessorNode`** permite la generación, procesamiento, o análisis de audio usando JavaScript. Es un módulo de procesamiento de audio {{domxref("AudioNode")}} que está enlazado a dos buffers, uno conteniendo la actual entrada, uno conteniendo la salida. Un evento, implementando la interfaz {{domxref("AudioProcessingEvent")}}, es enviado al objeto cada vez que el buffer de entrada contiene nuevos datos, y el manejador del evento termina cuando ha llenado el buffer de salida con datos.
- [`audioprocess`](/es/docs/Web/Reference/Events/audioprocess) (event) {{deprecated_inline}}
  - : El evento `audioprocess` es lanzado cuando un buffer de entrada de un {{domxref("ScriptProcessorNode")}} del API del Audio Web está listo para ser procesado.
- {{domxref("AudioProcessingEvent")}} {{deprecated_inline}}
  - : El evento `AudioProcessingEvent` del [API de Audio Web](/es/docs/Web_Audio_API) representa los eventos que ocurren cuando un buffer de entrada {{domxref("ScriptProcessorNode")}} está listo para ser procesado.

### Procesamiento de audio offline/en segundo plano

Es posible procesar/renderizar un gráfico de muy rápidamente en segundo plano — renderizándolo en un {{domxref("AudioBuffer")}} en lugar de hacerlo a los altavoces del equipo — con lo siguiente.

- {{domxref("OfflineAudioContext")}}
  - : La interfaz **`OfflineAudioContext`** es una interfaz {{domxref("AudioContext")}} representando un gráfico de procesamiento de audio construido a partir de varios {{domxref("AudioNode")}} enlazados juntos. En contraste con un `AudioContext` estándar, un `OfflineAudioContext` realmente no procesa el audio sino que lo genera, _lo más rápido que puede_, en un buffer.
- [`complete`](/es/docs/Web/Reference/Events/complete) (event)
  - : El evento `complete` es lanzado cuando el renderizado de un {{domxref("OfflineAudioContext")}} está terminado.
- {{domxref("OfflineAudioCompletionEvent")}}
  - : La interfaz `OfflineAudioCompletionEvent` representa los eventos que ocurren cuando procesamiento de un {{domxref("OfflineAudioContext")}} is terminado. El evento [`complete`](/es/docs/Web/Reference/Events/complete) implementa esta interfaz.

## Interfaces obsoletas

Las siguientes interfaces fueron definidas en versiones antiguas de la especificación del API de Audio Web, pero ahora están obsoletas y han sido reemplazadas por otras interfaces.

- {{domxref("JavaScriptNode")}}
  - : Usada para dirigir procesamiento de audio a través de JavaScript. Esta interfaz está obsoleta, y ha sido reemplazada por {{domxref("ScriptProcessorNode")}}.
- {{domxref("WaveTableNode")}}
  - : Usada para definir una forma de onda periórica. Esta interfaz está obsoleta, y ha sido reemplazada por {{domxref("PeriodicWave")}}.

## Ejemplo

Este ejemplo muestra una amplia variedad de funciones del API de Audio Web siendo usadas. Puedes ver este código en acción en la demostración de [Voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (también revisa el [código completo en Github](https://github.com/mdn/voice-change-o-matic)) — este es un demo experimental de juguete cambiador de voz; manten tus parlantes en bajo volumen cuando lo uses ¡Al menos al comenzar!

Las líneas del API de Audio Web están resaltadas; si quieres saber más sobre lo que hacen los diferentes métodos, etc., busca en las páginas de referencia.

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // definir contexto de audio
// los navegadores Webkit/blink necesitan prefijo, Safari no funcionará sin window.

var voiceSelect = document.getElementById("voice"); // caja de selección para la selección de opciones de efectos de voz
var visualSelect = document.getElementById("visual"); // caja de selección para la selección de opciones de visualización de audio
var mute = document.querySelector(".mute"); // botón de silencio
var drawVisual; // requestAnimationFrame

var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();

function makeDistortionCurve(amount) {
  // función para hacer que la forma de curva para distorsión / nodo modificador de onda para usar
  var k = typeof amount === "number" ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for (; i < n_samples; ++i) {
    x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

navigator.getUserMedia(
  // restricciones - solo el audio es necesario para esta aplicación
  {
    audio: true,
  },

  // Retrollamada de éxito
  function (stream) {
    source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination); // conectando los diferentes nodos de grafo de audio juntos

    visualize(stream);
    voiceChange();
  },

  // Retrollamada de error
  function (err) {
    console.log("Se produjo el siguiente error gUM: " + err);
  },
);

function visualize(stream) {
  WIDTH = canvas.width;
  HEIGHT = canvas.height;

  var visualSetting = visualSelect.value;
  console.log(visualSetting);

  if (visualSetting == "sinewave") {
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount; // la mitad del valor de FFT
    var dataArray = new Uint8Array(bufferLength); // crear una matriz para almacenar los datos

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray); // obtener datos de forma de onda y ponerlo en la matriz creada arriba

      canvasCtx.fillStyle = "rgb(200, 200, 200)"; // dibujar onda con canvas
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";

      canvasCtx.beginPath();

      var sliceWidth = (WIDTH * 1.0) / bufferLength;
      var x = 0;

      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = (v * HEIGHT) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    }

    draw();
  } else if (visualSetting == "off") {
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.fillStyle = "red";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  }
}

function voiceChange() {
  distortion.curve = new Float32Array();
  biquadFilter.gain.value = 0; // restablecer los efectos cada vez que se ejecuta la función VoiceChange

  var voiceSetting = voiceSelect.value;
  console.log(voiceSetting);

  if (voiceSetting == "distortion") {
    distortion.curve = makeDistortionCurve(400); // aplicar distorsión al sonido usando el nodo waveshaper
  } else if (voiceSetting == "biquad") {
    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 1000;
    biquadFilter.gain.value = 25; // aplicar el filtro lowshelf a los sonidos usando biquad
  } else if (voiceSetting == "off") {
    console.log("Voice settings turned off"); // no hacer nada, ya que se eligió la opción de apagado
  }
}

// oyentes de eventos para cambiar la visualización y la configuración de voz

visualSelect.onchange = function () {
  window.cancelAnimationFrame(drawVisual);
  visualize(stream);
};

voiceSelect.onchange = function () {
  voiceChange();
};

mute.onclick = voiceMute;

function voiceMute() {
  // alternar para silenciar y activar el sonido
  if (mute.id == "") {
    gainNode.gain.value = 0; // ganancia establecida en 0 para silenciar el sonido
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
    gainNode.gain.value = 1; // ganancia establecida en 1 para activar el sonido
    mute.id = "";
    mute.innerHTML = "Mute";
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También ver

- [Usando el API de Audio Web](/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Visualizaciones con el API de Audio Web](/es/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Voice-change-O-matic example](http://mdn.github.io/voice-change-o-matic/)
- [Violent Theremin example](http://mdn.github.io/violent-theremin/)
- [Bases de la espacialización de audio Web](/es/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Mixing Positional Audio and WebGL](http://www.html5rocks.com/tutorials/webaudio/positional_audio/)
- [Developing Game Audio with the Web Audio API](http://www.html5rocks.com/tutorials/webaudio/games/)
- [Porting webkitAudioContext code to standards based AudioContext](/es/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext)
- [Tonos](https://github.com/bit101/tones): Una sencilla librería para reproducción de tonos/notas específicas usando el API de Audio Web.
- [howler.js](https://github.com/goldfire/howler.js/): a JS audio library that defaults to [Web Audio API](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html) and falls back to [HTML5 Audio](http://www.whatwg.org/specs/web-apps/current-work/#the-audio-element), as well as providing other useful features.
- [Mooog](https://github.com/mattlima/mooog): jQuery-style chaining of AudioNodes, mixer-style sends/returns, and more.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML5 video language lab web application using the Web Audio API to record and combine video and audio from different sources into a single file ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))
