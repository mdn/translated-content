---
title: "AnalyserNode: frequencyBinCount プロパティ"
short-title: frequencyBinCount
slug: Web/API/AnalyserNode/frequencyBinCount
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`frequencyBinCount`** は {{domxref("AnalyserNode")}} インターフェイスの読み取り専用プロパティで、 {{domxref("AudioContext")}} の {{domxref("BaseAudioContext.sampleRate", "sampleRate")}} で利用可能なデータポイントの総数が格納されます。これは {{domxref("AnalyserNode.fftSize")}} の `value` の半分です。 2 つのメソッドのインデックスは、0 から[ナイキスト周波数](https://ja.wikipedia.org/wiki/ナイキスト周波数)の間で、それらが表す周波数と線形関係にあります。

## 値

符号なし整数で、指定された `TypedArray` にコピーされる {{domxref("AnalyserNode.getByteFrequencyData()")}} と {{domxref("AnalyserNode.getFloatFrequencyData()")}} が値の数に等しいものです。

[高速フーリエ変換](https://ja.wikipedia.org/wiki/高速フーリエ変換)を定義する方法に関する技術的な理由から，常に {{domxref("AnalyserNode.fftSize")}} の半分の値になります．したがって、 `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384` のうちのいずれかになります。

## 例

次の例では、 {{domxref("AudioContext")}} で `AnalyserNode` を作成し、 {{domxref("window.requestAnimationFrame()", "requestAnimationFrame")}} と {{htmlelement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)を参照）。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

// …

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0, 0, 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  const barWidth = (WIDTH / bufferLength) * 2.5 - 1;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth;
  }
}

draw();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
