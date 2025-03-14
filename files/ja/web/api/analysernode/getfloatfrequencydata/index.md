---
title: "AnalyserNode: getFloatFrequencyData() メソッド"
short-title: getFloatFrequencyData()
slug: Web/API/AnalyserNode/getFloatFrequencyData
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

**`getFloatFrequencyData()`** は {{domxref("AnalyserNode")}} インターフェイスのメソッドで、渡された {{jsxref("Float32Array")}} 配列に現在の周波数データをコピーします。配列の各値はサンプルで、それぞれの時点における信号の大きさです。

配列の各項目は、固有の周波数のデシベル値を表します。周波数はサンプルレートの 0 から 1/2 まで直線的に広がります。例えば、サンプルレートが `48000` Hz の場合、配列の最後の項目は `24000` Hz のデシベル値を表します。

より高いパフォーマンスが必要で、精度を気にしない場合は、代わりに {{jsxref("Uint8Array")}} で動作する {{domxref("AnalyserNode.getByteFrequencyData()")}} を使用することができます。

## 構文

```js-nolint
getFloatFrequencyData(array)
```

### 引数

- `array`
  - : 周波数領域データのコピー先となる {{jsxref("Float32Array")}} です。無音のサンプルの場合、値は `-Infinity` です。
    配列の持つ要素が {{domxref("AnalyserNode.frequencyBinCount")}} より少なかった場合、余分な要素は削除されます。必要以上の要素があった場合は、余分な要素は無視されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
// Float32Array should be the same length as the frequencyBinCount
const myDataArray = new Float32Array(analyser.frequencyBinCount);
// fill the Float32Array with data returned from getFloatFrequencyData()
analyser.getFloatFrequencyData(myDataArray);
```

### スペクトルの描画

次の例では、 {{domxref("AudioContext")}} で {{domxref("MediaElementAudioSourceNode")}} を作成し、 {{domxref("window.requestAnimationFrame()","requestAnimationFrame()")}} と {{htmlelement("canvas")}} で時刻領域のデータを繰り返し収集し、現在の音声入力の「オシロスコープ」出力を描画する基本的な使用方法を示します。

より完全な応用例/情報については、 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) のデモを調べてください（関連するコードは [app.js の 108 ～ 193 行目](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)を参照）。

```html
<!doctype html>
<body>
  <script>
    const audioCtx = new AudioContext();

    //Create audio source
    //Here, we use an audio file, but this could also be e.g. microphone input
    const audioEle = new Audio();
    audioEle.src = "my-audio.mp3"; //insert file name here
    audioEle.autoplay = true;
    audioEle.preload = "auto";
    const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

    //Create analyser node
    const analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 256;
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);

    //Set up audio node network
    audioSourceNode.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);

    //Create 2D canvas
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const canvasCtx = canvas.getContext("2d");
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    function draw() {
      //Schedule next redraw
      requestAnimationFrame(draw);

      //Get spectrum data
      analyserNode.getFloatFrequencyData(dataArray);

      //Draw black background
      canvasCtx.fillStyle = "rgb(0, 0, 0)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      //Draw spectrum
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let posX = 0;
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] + 140) * 2;
        canvasCtx.fillStyle =
          "rgb(" + Math.floor(barHeight + 100) + ", 50, 50)";
        canvasCtx.fillRect(
          posX,
          canvas.height - barHeight / 2,
          barWidth,
          barHeight / 2,
        );
        posX += barWidth + 1;
      }
    }

    draw();
  </script>
</body>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
