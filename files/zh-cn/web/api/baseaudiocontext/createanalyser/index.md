---
title: BaseAudioContext：createAnalyser() 方法
short-title: createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
---

{{APIRef("Web Audio API")}}

{{domxref("BaseAudioContext")}} 接口的 `createAnalyser()` 方法创建一个{{domxref("AnalyserNode")}}，它可以用来暴露音频时间和频率数据，以及创建数据可视化。

> [!NOTE]
> {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}} 构造函数是创建 {{domxref("AnalyserNode")}} 的推荐方法；请查看[创建 AudioNode](/zh-CN/docs/Web/API/AudioNode#创建_audionode)。

> [!NOTE]
> 有关使用此节点的更多信息，请查看 {{domxref("AnalyserNode")}} 页面。

## 语法

```js-nolint
createAnalyser()
```

### 参数

无。

### 返回值

一个 {{domxref("AnalyserNode")}} 对象。

## 示例

下面的示例展示了 AudioContext 创建分析器节点的基本用法，然后用 requestAnimationFrame() 来反复获取时域数据，并绘制出当前音频输入的“示波器风格”输出。更多完整示例/信息请查看 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 实例（参阅 [app.js 的 108-193 行](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic/scripts/app.js#L108-L193)代码）。

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 绘制当前音频源的波形图

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200, 200, 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0, 0, 0)";

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
