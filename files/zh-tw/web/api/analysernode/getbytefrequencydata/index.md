---
title: AnalyserNode.getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
---

{{ APIRef("Web Audio API") }}

{{ domxref("AnalyserNode") }} 介面的 **`getByteFrequencyData()`** 方法會將當前的頻率資料複製到 {{domxref("Uint8Array")}} （無號 byte 陣列）。

如果陣列的元素數目比 {{domxref("AnalyserNode.frequencyBinCount")}} 少的話，多餘的元素會被 drop 掉。如果比需要的少的話，多餘的元素會被忽略。

## 語法

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
var dataArray = new Uint8Array(analyser.frequencyBinCount); // Uint8Array 應該要和 frequencyBinCount 等長
analyser.getByteFrequencyData(dataArray); // 將 getByteFrequencyData() 回傳的資料放進 Uint8Array
```

### 回傳值

{{domxref("Uint8Array")}}。

## 範例

下面的範例顯示出 {{domxref("AudioContext")}} 用於建立一個 `AnalyserNode` 的基本用法，然後 {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame")}} 以及 {{htmlelement("canvas")}} 用來重複收集當前聲音輸入的頻率資料並在 "winamp bargraph style" 畫出輸出。若要知道更完整的範例或是資訊，請參考 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo （看 [app.js 第 128–205 行](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205) 會有相關的程式碼）。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  var barWidth = (WIDTH / bufferLength) * 2.5;
  var barHeight;
  var x = 0;

  for(var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
    canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

    x += barWidth + 1;
  }
};

draw();
```

## 參數

- 陣列
  - : 頻率定義域會被複製進去的 {{domxref("Uint8Array")}} 。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參看

- [使用 Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
