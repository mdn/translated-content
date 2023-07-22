---
title: AnalyserNode
slug: Web/API/AnalyserNode
---

{{APIRef("Web Audio API")}}

**`AnalyserNode`** インタフェースはリアルタイム時間領域/周波数領域分析情報を表現します。{{domxref("AudioNode")}}は、入力から出力の流れにおいて audio stream そのものは変えず、データ加工や音声の可視化をすることができます。

１つの`AnalyzerNode`は必ず１つの入力と出力を持ちます。出力先がなくても AnalyzerNode は問題ありません。

![Without modifying the audio stream, the node allows to get the frequency and time-domain data associated to it, using a FFT.](fttaudiodata_en.svg)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code> (but may be left unconnected)</td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Inheritance

このインタフェースは以下のインタフェースと継承関係にあります。:

{{InheritanceDiagram}}

## Properties

_以下は、{{domxref("AudioNode")}}からプロパティを継承する_.

- {{domxref("AnalyserNode.fftSize")}}
  - : 符号なしの long 型の値で FFT（[高速フーリエ変換](http://en.wikipedia.org/wiki/Fast_Fourier_transform)）において周波数領域を決定するために使われているサイズを表している。
- {{domxref("AnalyserNode.frequencyBinCount")}} {{readonlyInline}}
  - : 符号なしの long 型で FFT（高速フーリエ変換）のサイズの半分の値。一般的に音声再生時の可視化に用いられる。
- {{domxref("AnalyserNode.minDecibels")}}
  - : unsigned byte 型値へ変換する FFT 分析データのスケーリング時の最小のパワー値を表す double 型の値である。一般的に、この値は、getByteFrequencyData()の使用時の結果の範囲の最小値として明記される。
- {{domxref("AnalyserNode.maxDecibels")}}
  - : unsigned byte 型値へ変換する FFT 分析データのスケーリング時の最大のパワー値を表す double 型の値である。一般的に、この値は、getByteFrequencyData()の使用時の結果の範囲の最大値として明記される。
- {{domxref("AnalyserNode.smoothingTimeConstant")}}
  - : 分析フレームの平均間隔を表す double 型の値で、使用例として時間的にスペクトルを平滑化させるのに用いられる。

## Methods

_{{domxref("AudioNode")}}からメソッドを継承する_.

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : 周波数データを引数として渡された Float32Array 配列へコピーする。

<!---->

- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : 周波数データを引数として渡された Uint8Array 配列(unsigned byte 配列)へコピーする。

<!---->

- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : 音声波形データを引数として渡された Float32Array 配列へコピーする。
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : 音声波形データを引数として渡された Uint8Array 配列(unsigned byte 配列)へコピーする。

## Examples

> **メモ:** オーディオヴィジュアライゼーションのための Web Audio API を使ったヴィジュアライゼーションガイドを御覧ください。

### Basic usage

以下の例では、AudioContext から１つの AnalyserNode を作成しており、requestAnimationFrame と\<canvas>へ繰り返し時間波形データを繰り返し集め現入力を"オシロスコープスタイル"で出力し描画している。

より多くのサンプルは 我々の [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/) デモにご覧頂けます。 (see [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) for relevant code).

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("api.AnalyserNode")}}

## See also

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
