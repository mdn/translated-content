---
title: AnalyserNode：getByteTimeDomainData() 方法
short-title: getByteTimeDomainData()
slug: Web/API/AnalyserNode/getByteTimeDomainData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

{{domxref("AnalyserNode")}} 接口的 **`getByteTimeDomainData()`** 方法把当前波形（时域）数据复制到传入的 {{jsxref("Uint8Array")}}（无符号字节数组）中。

如果数组的元素个数少于 {{domxref("AnalyserNode.fftSize")}}，多出的数据会被丢弃。如果元素多于所需，多出的数组元素会被忽略。

## 语法

```js-nolint
getByteTimeDomainData(array)
```

### 参数

- `array`
  - : 时域数据将复制到的 {{jsxref("Uint8Array")}}。如果数组的元素个数少于 {{domxref("AnalyserNode.fftSize")}}，多出的数据会被丢弃。如果元素多于所需，多出的数组元素会被忽略。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

下面的示例展示了如何使用 {{domxref("AudioContext")}} 创建 `AnalyserNode`，再借助 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} 和 {{htmlelement("canvas")}} 反复采集时域数据，并绘制当前音频输入的“示波器风格”输出。如需更完整的应用示例或信息，请查看我们的[变声器](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)演示（相关代码见 [app.js 第 108–193 行](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)）。

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.fftSize;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 绘制当前音频源的示波器
function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";

  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;

  canvasCtx.beginPath();
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

  canvasCtx.lineTo(WIDTH, HEIGHT / 2);
  canvasCtx.stroke();
}

draw();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
