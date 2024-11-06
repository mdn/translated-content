---
title: "AnalyserNode: fftSize プロパティ"
short-title: fftSize
slug: Web/API/AnalyserNode/fftSize
l10n:
  sourceCommit: 1c2fd1d981acb52836d3701f52ac46238972b83b
---

{{APIRef("Web Audio API")}}

**`fftSize`** は {{domxref("AnalyserNode")}} インターフェイスのプロパティで、このプロパティは符号なし long 値で、周波数領域データを取得するために[高速フーリエ変換](https://ja.wikipedia.org/wiki/高速フーリエ変換) (FFT) を行う際に使用するウィンドウサイズをサンプル数で表します。

## 値

符号なし整数で、FFT のウィンドウサイズをサンプル数で表します。値を大きくすると、周波数領域での精度は高くなりますが、振幅領域での精度は低くなります。

2 のべき乗で、 2^5 と 2^15 の間でなければなりません。すなわち `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384`, `32768` のいずれかです。既定値は `2048` です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : 設定した値が 2 のべき乗でないか、許容範囲外である場合に発生します。

## 例

次の例では、 {{domxref("AudioContext")}} で `AnalyserNode` を作成し、 {{domxref("window.requestAnimationFrame()", "requestAnimationFrame")}} と {{htmlelement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)を参照）。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current audio source

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200, 200, 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0, 0, 0)";

  canvasCtx.beginPath();

  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * HEIGHT) / 2;

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
