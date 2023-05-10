---
title: AnalyserNode
slug: Web/API/AnalyserNode
---

{{APIRef("Web Audio API")}}

La interfaz **`AnalyserNode`** representa un nodo habilitado para proveer frecuencia en tiempo real y analisis de tiempo-dominio. Es un {{domxref("AudioNode")}} que pasa el flujo de audio sin modificación desde el origen de entrada a la salida, pero, te permite obtener los datos generados, procesarlos, y crear visualizaciones de audio.

Un `AnalyzerNode` tiene exactamente una entrada y una salida. El nodo trabaja incluso si la salida no se encuentra conectada.

![Without modifying the audio stream, the node allows to get the frequency and time-domain data associated to it, using a FFT.](fttaudiodata_en.svg)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn>Numero de entradas</dfn></th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Numero de salidas</dfn></th>
      <td><code>1</code> (puede estar desconectada)</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Modo de conteo de canal</dfn></th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Conteo de cana</dfn></th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Interpretación de canal</dfn></th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Herencia

Esta interfaz hereda de las siguientes interfaces padre:

{{InheritanceDiagram}}

## Propiedades

_Inherits properties from its parent,_ _{{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.fftSize")}}
  - : Is an unsigned long value representing the size of the FFT ([Fast Fourier Transform](http://en.wikipedia.org/wiki/Fast_Fourier_transform)) to be used to determine the frequency domain.
- {{domxref("AnalyserNode.frequencyBinCount")}} {{readonlyInline}}
  - : Is an unsigned long value half that of the FFT size. This generally equates to the number of data values you will have to play with for the visualization.
- {{domxref("AnalyserNode.minDecibels")}}
  - : Is a double value representing the minimum power value in the scaling range for the FFT analysis data, for conversion to unsigned byte values — basically, this specifies the minimum value for the range of results when using `getByteFrequencyData()`.
- {{domxref("AnalyserNode.maxDecibels")}}
  - : Is a double value representing the maximum power value in the scaling range for the FFT analysis data, for conversion to unsigned byte values — basically, this specifies the maximum value for the range of results when using `getByteFrequencyData()`.
- {{domxref("AnalyserNode.smoothingTimeConstant")}}
  - : Is a double value representing the averaging constant with the last analysis frame — basically, it makes the transition between values over time smoother.

## Methods

_Inherits methods from its parent,_ _{{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : Copies the current frequency data into a {{domxref("Float32Array")}} array passed into it.

<!---->

- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : Copies the current frequency data into a {{domxref("Uint8Array")}} (unsigned byte array) passed into it.

<!---->

- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : Copies the current waveform, or time-domain, data into a {{domxref("Float32Array")}} array passed into it.
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : Copies the current waveform, or time-domain, data into a {{domxref("Uint8Array")}} (unsigned byte array) passed into it.

## Examples

> **Nota:** See the guide [Visualizations with Web Audio API](/es/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) for more information on creating audio visualizations.

### Basic usage

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect time domain data repeatedly and draw an "oscilloscope style" output of the current audio input. For more complete applied examples/information, check out our [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/) demo (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current audio source

function draw() {

      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      for(var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };

    draw();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Using the Web Audio API](/es/docs/Web_Audio_API/Using_Web_Audio_API)
