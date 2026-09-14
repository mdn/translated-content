---
title: AnalyserNode.frequencyBinCount
slug: Web/API/AnalyserNode/frequencyBinCount
---

{{ APIRef("Web Audio API") }}

**`frequencyBinCount`** 的值固定为 {{ domxref("AnalyserNode") }} 接口中 fftSize 值的一半。该属性通常用于可视化的数据值的数量。

## 语法

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
var bufferLength = analyser.frequencyBinCount;
```

### 值类型

无符号长整形 (unsigned long).

## 例子

下面的例子展示了 [`AudioContext`](/zh-CN/docs/Web/API/AudioContext) 创建一个 `AnalyserNode`, 然后用 [`requestAnimationFrame`](/zh-CN/docs/Web/API/Window/requestAnimationFrame) 和 [`<canvas>`](/zh-CN/docs/Web/HTML/Reference/Elements/canvas) 去反复收集频率数据，并绘制为一个柱状风格的输出 (频谱).

更多的例子/信息，查看 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 演示 (相关代码在 [app.js 的 128 行\~205 行](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
