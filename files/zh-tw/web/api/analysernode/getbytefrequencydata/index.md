---
title: AnalyserNode：getByteFrequencyData() 方法
slug: Web/API/AnalyserNode/getByteFrequencyData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

{{ domxref("AnalyserNode") }} 介面的 **`getByteFrequencyData()`** 方法用於將當前的頻率資料複製到傳入的 {{jsxref("Uint8Array")}}（無符號位元組陣列）中。

頻率資料由 0 到 255 範圍內的整數組成。

陣列中的每個項目代表特定頻率的分貝值。這些頻率從 0 線性分佈到取樣率的一半。例如，對於 `48000` 的取樣率，陣列的最後一個項目將代表 `24000` Hz 的分貝值。

如果陣列的元素數量少於 {{domxref("AnalyserNode.frequencyBinCount")}}，多餘的元素將被丟棄。如果陣列的元素數量多於所需的數量，多餘的元素將被忽略。

## 語法

```js-nolint
getByteFrequencyData(array)
```

### 參數

- `array`
  - : {{jsxref("Uint8Array")}}，頻域資料將被複製到此陣列中。如果陣列的元素數量少於 {{domxref("AnalyserNode.frequencyBinCount")}}，多餘的元素將被丟棄。如果陣列的元素數量多於所需的數量，多餘的元素將被忽略。

### 回傳值

無（{{jsxref("undefined")}}）。

## 範例

以下範例展示了如何使用 {{domxref("AudioContext")}} 建立一個 `AnalyserNode`，然後使用 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} 和 {{htmlelement("canvas")}} 來反覆收集頻率資料並繪製「Winamp 柱狀圖風格」的當前音訊輸出。若需更完整的應用範例或資訊，請參考我們的 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) 範例（相關程式碼請參見 [app.js 第 108–193 行](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)）。

```js
const audioCtx = new AudioContext();
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

  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth + 1;
  }
}

draw();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
