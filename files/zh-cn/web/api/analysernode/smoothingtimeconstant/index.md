---
title: AnalyserNode.smoothingTimeConstant
slug: Web/API/AnalyserNode/smoothingTimeConstant
---

{{ APIRef("Web Audio API") }}

{{ domxref("AnalyserNode") }} 接口的 **`smoothingTimeConstant`** 属性是一个双精度浮点型 (double) 的值，表示最后一个分析帧的平均常数。它基本上是当前缓冲区和 AnalyserNode 处理的最后一个缓冲区之间的平均值，并导致在值变化时随着时间推移得到一个更平滑的集合。

`smoothingTimeConstant` 属性的默认值为 `0.8`; 值的范围必须在 `0` \~ `1` 之间。如果设置为 0，则不进行平均，而值为 1 意味着 "在计算值时重叠上一个缓冲区和当前缓冲区相当多", 它基本上平滑了 {{domxref("AnalyserNode.getFloatFrequencyData")}}/{{domxref("AnalyserNode.getByteFrequencyData")}} 调用的变化。

在技术术语中，我们应用一个 [布莱克曼窗](http://webaudio.github.io/web-audio-api/#blackman-window) 并随着时间推移去平滑值。大部分情况下，默认值是较好的。

> [!NOTE]
> 如果设置了 0\~1 范围外的值，将会抛出异常`INDEX_SIZE_ERR`.

## 语法

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
analyser.smoothingTimeConstant = 1;
```

### 值类型

双精度浮点型 (double).

## 例子

下面的例子展示了 [`AudioContext`](/zh-CN/docs/Web/API/AudioContext) 创建一个 `AnalyserNode`, 然后用 [`requestAnimationFrame`](/zh-CN/docs/Web/API/Window/requestAnimationFrame) 和 [`<canvas>`](/zh-CN/docs/Web/HTML/Reference/Elements/canvas) 去反复收集当前音频的频率数据，并绘制为一个柱状风格的输出 (频谱).

更多的例子/信息，查看 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 演示 (相关代码在 [app.js 的 128 行\~205 行](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

`如果你对 smoothingTimeConstant()` 的效果好奇，可以尝试克隆上面的例子并设置 "`analyser.smoothingTimeConstant = 0;"` 代替。你会发现值的变化更加快速。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;

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
