---
title: BaseAudioContext.createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
---

{{APIRef("Web Audio API")}}

`createAnalyser()` は {{domxref("BaseAudioContext")}} インターフェイスのメソッドで、 {{domxref("AnalyserNode")}} を作成します。これは音声の時間と周波数データを公開し、データの可視化を行います。

> **メモ:** {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}} コンストラクターが {{domxref("AnalyserNode")}} を生成するのに推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

> **メモ:** このノードの詳しい説明は、 {{domxref("AnalyserNode")}} のページを参照してください。

## 構文

```js
createAnalyser();
```

### 引数

なし。

### 返値

{{domxref("AnalyserNode")}} です。

## 例

次の例では、 AudioContext を使用して Analyser ノードを作成し、 requestAnimationFrame() を使用してタイムドメインのデータを繰り返し収集し、現在の音声入力の「オシロスコープ形式」の出力を描画する基本的な使用方法を示しています。より完全な応用例や情報については、 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) のデモをご覧ください（関連コードは、 [app.js 128-205 行目](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)をご覧ください）。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 現在の音のオシロスコープのように描く

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
