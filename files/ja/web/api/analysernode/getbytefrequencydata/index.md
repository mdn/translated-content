---
title: "AnalyserNode: getByteFrequencyData() メソッド"
short-title: getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

**`getByteFrequencyData()`** は {{domxref("AnalyserNode")}} インターフェイスのメソッドで、渡された {{jsxref("Uint8Array")}} （符号なしバイト配列）に現在の周波数データをコピーします．

周波数データは、 0 から 255 まで の範囲の整数で構成されます。

配列の各項目は、固有の周波数のデシベル値を表します。周波数はサンプルレートの 0 から 1/2 まで直線的に広がります。例えば、サンプルレートが `48000` の場合、配列の最後の項目は `24000` Hz のデシベル値を表します。

配列の持つ要素が {{domxref("AnalyserNode.frequencyBinCount")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合、余分な要素は無視されます。

## 構文

```js-nolint
getByteFrequencyData(array)
```

### 引数

- `array`
  - : 周波数領域データがコピーされる {{jsxref("Uint8Array")}}。
    配列の持つ要素が {{domxref("AnalyserNode.frequencyBinCount")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合、余分な要素は無視されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次の例では、 {{domxref("AudioContext")}} で `AnalyserNode` を作成し、 {{domxref("window.requestAnimationFrame()", "requestAnimationFrame")}} と {{htmlelement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)を参照）。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

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
