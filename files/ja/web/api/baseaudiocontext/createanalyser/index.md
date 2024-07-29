---
title: "BaseAudioContext: createAnalyser() メソッド"
short-title: createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef("Web Audio API")}}

`createAnalyser()` は {{domxref("BaseAudioContext")}} インターフェイスのメソッドで、 {{domxref("AnalyserNode")}} を作成します。これは音声の時間と周波数データを公開し、データの可視化を行います。

> **メモ:** {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}} コンストラクターが {{domxref("AnalyserNode")}} を生成するのに推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

> [!NOTE]
> このノードの詳しい説明は、 {{domxref("AnalyserNode")}} のページを参照してください。

## 構文

```js-nolint
createAnalyser()
```

### 引数

なし。

### 返値

{{domxref("AnalyserNode")}} です。

## 例

次の例では、 AudioContext を使用して Analyser ノードを作成し、 requestAnimationFrame() を使用してタイムドメインのデータを繰り返し収集し、現在の音声入力の「オシロスコープ形式」の出力を描画する基本的な使用方法を示しています。より完全な応用例や情報については、 [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) のデモをご覧ください（関連コードは、 [app.js 108-193 行目](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic/scripts/app.js#L108-L193)をご覧ください）。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 現在の音のオシロスコープのように描く

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";

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
