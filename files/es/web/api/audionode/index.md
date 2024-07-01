---
title: AudioNode
slug: Web/API/AudioNode
---

{{APIRef("Web Audio API")}}

**`AudioNode`** es una interfaz genérica para representar un módulo de procesamiento de audio.

Ejemplos que la incluyen:

- Una fuente de audio (por ejemplo, un elemento HTML {{HTMLElement("audio")}} o {{HTMLElement("video")}}, un {{domxref("OscillatorNode")}}, etc.),
- El destino del audio,
- Módulo de procesamiento intermedio (por ejemplo, un filtro como {{domxref("BiquadFilterNode")}} o {{domxref("ConvolverNode")}}), o
- Control de volumen (como {{domxref("GainNode")}})

{{InheritanceDiagram}}

> **Nota:** un `AudioNode` puede ser objetivo de eventos, por lo que implementa la interfaz {{domxref("EventTarget")}}.

## Descripción

### El gráfico de enrutamiento de audio

![Los AudioNodes que participan en un AudioContext crean un gráfico de enrutamiento de audio.](webaudiobasics.png)

Cada `AudioNode` tiene entradas y salidas, y varios nodos de audio están conectados para crear un _gráfico de procesamiento_. Este gráfico está contenido en un {{domxref("AudioContext")}}, y cada nodo de audio solo puede pertenecer a un contexto de audio.

Un _nodo fuente_ tiene cero entradas pero una o múltiples salidas y puede usarse para generar sonido. Por otro lado, un _nodo de destino_ no tiene salidas; en cambio, todas sus entradas se reproducen directamente en los altavoces (o cualquier dispositivo de salida de audio que utilice el contexto de audio). Además, hay _nodos de procesamiento_ que tienen entradas y salidas. El procesamiento exacto realizado varía de un `AudioNode` a otro pero, en general, un nodo lee sus entradas, realiza algún procesamiento relacionado con el audio y genera nuevos valores para sus salidas, o deja pasar el audio (por ejemplo, en el {{domxref ("AnalyserNode")}}, donde se accede por separado al resultado del procesamiento).

Cuantos más nodos haya en un gráfico, mayor será la latencia. Por ejemplo, si su gráfico tiene una latencia de 500ms, cuando el nodo de origen reproduce un sonido, tardará medio segundo hasta que ese sonido se pueda escuchar en sus altavoces (o incluso más debido a la latencia en el dispositivo de audio subyacente). Por lo tanto, si necesita audio interactivo, mantenga el gráfico lo más pequeño posible y coloque nodos de audio controlados por el usuario al final del gráfico. Por ejemplo, un control de volumen (`GainNode`) debe ser el último nodo para que los cambios de volumen tengan efecto inmediato.

Cada entrada y salida tiene una cantidad determinada de _canales_. Por ejemplo, el audio mono tiene un canal, mientras que el audio estéreo tiene dos canales. La Web Audio API mezclará hacia arriba o hacia abajo la cantidad de canales según sea necesario; Consulte las especificaciones de Web Audio para obtener más detalles.

Para obtener una lista de todos los nodos de audio, consulte la página de inicio de la [Web Audio API](/es/docs/Web/API/Web_Audio_API).

### Creando un `AudioNode`

Hay dos formas de crear un `AudioNode`: mediante el _constructor_ y mediante el _método de fábrica_.

```js
// constructor
const analyserNode = new AnalyserNode(audioCtx, {
  fftSize: 2048,
  maxDecibels: -25,
  minDecibels: -60,
  smoothingTimeConstant: 0.5,
});

// método de fábrica
const analyserNode = audioCtx.createAnalyser();
analyserNode.fftSize = 2048;
analyserNode.maxDecibels = -25;
analyserNode.minDecibels = -60;
analyserNode.smoothingTimeConstant = 0.5;
```

Es libre de usar constructores o métodos de fábrica, o mezclar ambos, sin embargo, hay ventajas al usar los constructores:

- Todos los parámetros se pueden configurar durante el tiempo de construcción y no es necesario configurarlos individualmente.
- Puede [hacer subclases de un nodo de audio](https://github.com/WebAudio/web-audio-api/issues/251). Si bien el procesamiento real lo realiza internamente el navegador y no se puede modificar, puede escribir un contenedor alrededor de un nodo de audio para proporcionar propiedades y métodos personalizados.
- Rendimiento ligeramente mejor: tanto en Chrome como en Firefox, los métodos de fábrica llaman a los constructores internamente.

_Breve historia_: La primera versión de la especificación Web Audio solo definía los métodos de fábrica. Después de una [revisión del diseño en octubre de 2013](https://github.com/WebAudio/web-audio-api/issues/250), se decidió agregar constructores porque tienen numerosos beneficios sobre los métodos de fábrica. Los constructores se agregaron a la especificación de agosto a octubre de 2016. Los métodos de fábrica continúan incluidos en la especificación y no están obsoletos.

## Propiedades

- {{domxref("AudioNode.context")}} {{readonlyInline}}
  - : Devuelve el {{domxref("BaseAudioContext")}} asociado, que es el objeto que representa el gráfico de procesamiento en el que participa el nodo.
- {{domxref("AudioNode.numberOfInputs")}} {{readonlyInline}}
  - : Devuelve el número de entradas que alimentan el nodo. Los nodos de origen se definen como nodos que tienen una propiedad `numberOfInputs` con un valor de `0`.
- {{domxref("AudioNode.numberOfOutputs")}} {{readonlyInline}}
  - : Devuelve el número de salidas del nodo. Los nodos de destino, como {{ domxref("AudioDestinationNode") }}, tienen un valor de `0` para este atributo.
- {{domxref("AudioNode.channelCount")}}
  - : Representa un número entero que se usa para determinar cuántos canales se usan cuando se [mezclan hacia arriba y hacia abajo](/es/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) las conexiones a cualquier entrada del nodo. Su uso y definición precisa dependen del valor de {{domxref("AudioNode.channelCountMode")}}.
- {{domxref("AudioNode.channelCountMode")}}
  - : Representa un valor enumerado que describe la forma en que los canales deben coincidir entre las entradas y salidas del nodo.
- {{domxref("AudioNode.channelInterpretation")}}
  - : Representa un valor enumerado que describe el significado de los canales. Esta interpretación definirá cómo ocurrirá la [mezcla hacia arriba y hacia abajo](/es/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) de audio. Los valores posibles son `"speakers"` o `"discrete"`.

## Métodos

_También implementa métodos de la interfaz_ {{domxref("EventTarget")}}.

- {{domxref("AudioNode.connect()")}}
  - : Nos permite conectar la salida de este nodo para que se introduzca en otro nodo, ya sea como datos de audio o como el valor de un {{domxref("AudioParam")}}.
- {{domxref("AudioNode.disconnect()")}}
  - : Nos permite desconectar el nodo actual de otro al que ya está conectado.

## Ejemplo

Este simple fragmento de código muestra la creación de algunos nodos de audio y cómo se pueden usar las propiedades y los métodos de `AudioNode`. Puede encontrar ejemplos de dicho uso en cualquiera de los ejemplos en la página de [Web Audio API](/es/docs/Web/API/Web_Audio_API) (por ejemplo, [Violent Theremin](https://github.com/mdn/violent-theremin)).

```js
const audioCtx = new AudioContext();

const oscillator = new OscillatorNode(audioCtx);
const gainNode = new GainNode(audioCtx);

oscillator.connect(gainNode).connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando Web Audio API](/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
