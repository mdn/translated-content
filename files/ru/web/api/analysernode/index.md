---
title: AnalyserNode
slug: Web/API/AnalyserNode
---

{{APIRef("Web Audio API")}}

`AnalyserNode` интерфейс который предоставляет частоту (frequency) в реальном времени. Элемент {{domxref("AudioNode")}} который пропускает аудиопоток неизменным от ввода (input) до вывода (output), но позволяет использовать генерируемые данные, обрабатывать или создавать аудиовизуализацию.

`AnalyserNode` имеет только один ввод и один вывод. Узел работает даже если вывод не подсоединён.

![Without modifying the audio stream, the node allows to get the frequency and time-domain data associated to it, using a FFT.](fttaudiodata_en.svg)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Количество входов</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Количество выводов</th>
      <td><code>1</code> (but may be left unconnected)</td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Количество каналов</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Наследование

Интерфейс унаследован от следующих родительских интерфейсов:

{{InheritanceDiagram}}

## Constructor

- {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}}
  - : Creates a new instance of an `AnalyserNode` object.

## Properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

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

_Inherits methods from its parent, {{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}

  - : Copies the current frequency data into a {{domxref("Float32Array")}} array passed into it.

- {{domxref("AnalyserNode.getByteFrequencyData()")}}

  - : Copies the current frequency data into a {{domxref("Uint8Array")}} (unsigned byte array) passed into it.

- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : Copies the current waveform, or time-domain, data into a {{domxref("Float32Array")}} array passed into it.
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : Copies the current waveform, or time-domain, data into a {{domxref("Uint8Array")}} (unsigned byte array) passed into it.

## Examples

> **Примечание:** See the guide [Visualizations with Web Audio API](/ru/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) for more information on creating audio visualizations.

### Basic usage

The following example shows basic usage of an {{domxref("AudioContext")}} to create an `AnalyserNode`, then {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} and {{htmlelement("canvas")}} to collect time domain data repeatedly and draw an "oscilloscope style" output of the current audio input. For more complete applied examples/information, check out our [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

// ...

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Get a canvas defined with ID "oscilloscope"
var canvas = document.getElementById("oscilloscope");
var canvasCtx = canvas.getContext("2d");

// draw an oscilloscope of the current audio source

function draw() {
  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200, 200, 200)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0, 0, 0)";

  canvasCtx.beginPath();

  var sliceWidth = (canvas.width * 1.0) / bufferLength;
  var x = 0;

  for (var i = 0; i < bufferLength; i++) {
    var v = dataArray[i] / 128.0;
    var y = (v * canvas.height) / 2;

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
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [Using the Web Audio API](/ru/docs/Web_Audio_API/Using_Web_Audio_API)
