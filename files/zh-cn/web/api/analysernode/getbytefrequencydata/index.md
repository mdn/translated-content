---
title: AnalyserNode.getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
---

{{ APIRef("Web Audio API") }}

{{ domxref("AnalyserNode") }}接口的 **`getByteFrequencyData()`** 方法将当前频率数据复制到传入的 Uint8Array（无符号字节数组）中。

如果数组的长度小于 {{domxref("AnalyserNode.frequencyBinCount")}}, 那么 Analyser 多出的元素会被删除。如果是大于，那么数组多余的元素会被忽略。

## 语法

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
var dataArray = new Uint8Array(analyser.frequencyBinCount); // Uint8Array 的长度应该和 frequencyBinCount 相等
analyser.getByteFrequencyData(dataArray); // 调用 getByteFrequencyData 方法填充 Uint8Array
```

### 返回值

一个 {{domxref("Uint8Array")}}（无符号字节数组）.

## 例子

下面的例子展示了 {{domxref("AudioContext")}} 创建一个 `AnalyserNode`, 然后用 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} 和 {{htmlelement("canvas")}} 去反复收集当前音频的频率数据，并绘制为一个柱状风格的输出 (频谱).

更多的例子/信息，查看 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 演示 (相关代码在 [app.js 的 128 行\~205 行](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

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

## 参数

- array (数组)
  - : 必须为{{domxref("Uint8Array")}}, 频域数据将复制到该数组内。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
