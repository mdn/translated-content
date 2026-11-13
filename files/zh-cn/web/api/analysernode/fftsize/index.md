---
title: AnalyserNode：fftSize 属性
short-title: fftSize
slug: Web/API/AnalyserNode/fftSize
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

{{domxref("AnalyserNode")}} 接口的 **`fftSize`** 属性是一个无符号长整型值，表示在执行[快速傅里叶变换](https://zh.wikipedia.org/wiki/快速傅里叶变换)（FFT）以获取频域数据时所使用的采样窗口大小。

## 值

一个表示 FFT 的窗口大小的无符号整数，以采样点数量为单位。较大的数值会在频域中提供更多细节，但在幅度域中则会呈现更少的细节。

必须是介于 2^5 到 2^15 之间的 2 的幂，因此可取：`32`、`64`、`128`、`256`、`512`、`1024`、`2048`、`4096`、`8192`、`16384` 和 `32768`。默认值为 `2048`。

### 异常

- `IndexSizeError` {{domxref("DOMException")}}
  - : 如果设置的值不是 2 的幂，或超出了允许的范围，则会抛出该异常。

## 示例

下面的示例展示了如何使用 {{domxref("AudioContext")}} 来创建一个 `AnalyserNode`，然后借助 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} 和 {{htmlelement("canvas")}} 反复收集时域数据，并绘制当前音频输入的“示波器风格”输出。如需更完整的应用示例或信息，请查看我们的 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) 演示（相关代码见 [app.js 第 108–193 行](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)）。

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

// …

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
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

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
