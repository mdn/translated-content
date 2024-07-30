---
title: "AnalyserNode: smoothingTimeConstant プロパティ"
short-title: smoothingTimeConstant
slug: Web/API/AnalyserNode/smoothingTimeConstant
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

**`smoothingTimeConstant`** は {{ domxref("AnalyserNode") }} インターフェイスのプロパティで、最後の分析フレームとの平均化定数を表す double 値です。これは基本的に、現在のバッファーと `AnalyserNode` が処理した最後のバッファーとの間の平均であり、結果として、よりスムーズな時間による値の変化の集合になります。

## 値

doublet で、 `0` から `1` までの範囲内です（`0` は平均時間ではありません）。既定値は `0.8` です。

0 が設定されている場合、平均化は行われませんが、1 の値は「値を計算する間に前回と現在のバッファーがかなりオーバーラップする」ことを意味しており、実質的に {{domxref("AnalyserNode.getFloatFrequencyData")}}/{{domxref("AnalyserNode.getByteFrequencyData")}} 呼び出し間の変化を滑らかにします。

専門用語では、[ブラックマンウィンドウ](https://webaudio.github.io/web-audio-api/#blackman-window)を適用し、時間による値の変化を平滑化します。ほとんどの場合、既定値で十分です。

> [!NOTE]
> 0～1 の範囲の外の値を設定するには、 `INDEX_SIZE_ERR` 例外が発生します。

## 例

次の例では、 {{domxref("AudioContext")}} で `AnalyserNode` を作成し、 {{domxref("window.requestAnimationFrame()", "requestAnimationFrame")}} と {{htmlelement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。
より完全な応用例/情報については、 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)を参照）。

`smoothingTimeConstant()` が持つ効果に興味がある場合は、上記の例を複製して、代わりに `analyser.smoothingTimeConstant = 0;` を設定してみてください。値の変化がより激しくなることがわかるでしょう。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;

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
