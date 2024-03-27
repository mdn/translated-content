---
title: "AnalyserNode: getByteTimeDomainData() メソッド"
short-title: getByteTimeDomainData()
slug: Web/API/AnalyserNode/getByteTimeDomainData
l10n:
  sourceCommit: 7cf0e50d0acfaeba8fd2fa243f9d5612b61d408c
---

{{ APIRef("Web Audio API") }}

**`getByteTimeDomainData()`** は {{ domxref("AnalyserNode") }} インターフェイスのメソッドで、渡される {{jsxref("Uint8Array")}} （符号なしバイト配列）に、現在の波形または時間領域のデータをコピーします。

配列の持つ要素が {{domxref("AnalyserNode.fftSize")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合、余分な要素は無視されます。

## 構文

```js-nolint
getByteTimeDomainData(array)
```

### 引数

- `array`
  - : 時間領域データのコピー先の {{jsxref("Uint8Array")}} です。
    配列の持つ要素が {{domxref("AnalyserNode.fftSize")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合、余分な要素は無視されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次の例では、 {{domxref("AudioContext")}} で `AnalyserNode` を作成し、 {{domxref("window.requestAnimationFrame()", "requestAnimationFrame")}} と {{htmlelement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)を参照）。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.fftSize;
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

  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;

  canvasCtx.beginPath();
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

  canvasCtx.lineTo(WIDTH, HEIGHT / 2);
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
