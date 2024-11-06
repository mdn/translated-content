---
title: AnalyserNode
slug: Web/API/AnalyserNode
l10n:
  sourceCommit: 2c9f6f0688db9b4437f998321044fdd22afed546
---

{{APIRef("Web Audio API")}}

**`AnalyserNode`** インターフェイスはリアルタイム時間領域/周波数領域分析情報を表現します。 {{domxref("AudioNode")}} は、入力から出力の流れにおいて音声ストリームそのものは変えず、データ加工や音声の可視化をすることができます。

1 つの `AnalyserNode` は必ず 1 つの入力と出力を持ちます。出力先がなくてもこのノードは問題ありません。

![音声ストリームを変更することなく、ノードは FFT を使用して、それに関連する周波数と時刻のデータを取得することができます。](fttaudiodata_en.svg)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力の数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">出力の数</th>
      <td><code>1</code> （ただし未接続のままになる）</td>
    </tr>
    <tr>
      <th scope="row">チャンネル数モード</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルの解釈</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}}
  - : `AnalyserNode` オブジェクトの新しいインスタンスを生成します。

## インスタンスプロパティ

_親である {{domxref("AudioNode")}} から継承したプロパティもあります_。

- {{domxref("AnalyserNode.fftSize")}}
  - : 符号なし long 型の値で、 FFT（[高速フーリエ変換](http://en.wikipedia.org/wiki/Fast_Fourier_transform)）において周波数領域を決定するために使われているサイズを表します。
- {{domxref("AnalyserNode.frequencyBinCount")}} {{ReadOnlyInline}}
  - : 符号なし long 型の値で、 FFT のサイズの半分の値。一般的に音声再生時の可視化に用いられます。
- {{domxref("AnalyserNode.minDecibels")}}
  - : double 型の値で、 unsigned byte 型の値へ変換する FFT 分析データのスケーリング時の最小のパワー値を表します。一般的に、この値は、 `getByteFrequencyData()` の使用時の結果の範囲の最小値を指定します。
- {{domxref("AnalyserNode.maxDecibels")}}
  - : double 型の値で、 unsigned byte 型の値へ変換する FFT 分析データのスケーリング時の最大のパワー値を表します。一般的に、この値は、 `getByteFrequencyData()` の使用時の結果の範囲の最大値を指定します。
- {{domxref("AnalyserNode.smoothingTimeConstant")}}
  - : double 型の値で、分析フレームの平均間隔を表します。基本的に、時間的にスペクトルを平滑化させるのに用いられます。

## インスタンスメソッド

_親である {{domxref("AudioNode")}} から継承したメソッドもあります_。

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : 現在の周波数データを、引数として渡された {{jsxref("Float32Array")}} 配列へコピーします。
- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : 現在の周波数データを、引数として渡された {{jsxref("Uint8Array")}} 配列（unsigned byte 配列）へコピーします。
- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : 現在の波形または時間領域データを、渡された {{jsxref("Float32Array")}} 配列へコピーします。
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : 現在の波形または時間領域データを、引数として渡された {{jsxref("Uint8Array")}} 配列（unsigned byte 配列）へコピーします。

## 例

> [!NOTE]
> 音声の視覚化を作成するための詳細は、[ウェブオーディオ API の視覚化](/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)のガイドを参照してください。

### 基本的な使い方

次の例では、 {{domxref("AudioContext")}} で `AnalyserNode` を作成し、 {{domxref("window.requestAnimationFrame()", "requestAnimationFrame")}} と {{htmlelement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) のデモを調べてください（関連するコードは [app.js の 108-193 行目](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic/scripts/app.js#L108-L193)を参照）。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// …

const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Connect the source to be analysed
source.connect(analyser);

// Get a canvas defined with ID "oscilloscope"
const canvas = document.getElementById("oscilloscope");
const canvasCtx = canvas.getContext("2d");

// draw an oscilloscope of the current audio source

function draw() {
  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200, 200, 200)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0, 0, 0)";

  canvasCtx.beginPath();

  const sliceWidth = (canvas.width * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * canvas.height) / 2;

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
