---
title: "AnalyserNode: maxDecibels プロパティ"
short-title: maxDecibels
slug: Web/API/AnalyserNode/maxDecibels
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`maxDecibels`** は {{domxref("AnalyserNode")}} インターフェイスのプロパティで、符号なしバイト値に変換するための、 FFT 分析データの拡大縮小する範囲の最大出力値を表す double 値です。基本的には、 `getByteFrequencyData()` を使用したときの結果の範囲の最大値を指定します。

## 値

double 値で、 FFT 解析データを拡大縮小する際の最大[デシベル](https://ja.wikipedia.org/wiki/デシベル)値を表します。`0` dB は使用可能な最も大きな音、`-10` dB はその 10 分の 1 などです。既定値は `-30` dB です。

`getByteFrequencyData()` からデータを取得した場合、振幅が `maxDecibels` 以上の周波数は `255` として返されます。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `AnalyserNode.minDecibels` 以下の値が設定されている場合に発生します。

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

  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth + 1;
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
