---
title: AnalyserNode.fftSize
slug: Web/API/AnalyserNode/fftSize
---

{{ APIRef("Web Audio API") }}

{{ domxref("AnalyserNode") }} 接口的 `fftSize` 属性的值是一个无符号长整型的值，表示（信号）样本的窗口大小。当执行[快速傅里叶变换](/zh-CN/docs/Web)（Fast Fourier Transfor (FFT)）时，这些（信号）样本被用来获取频域数据。

fftSize 属性的值必须是从 32 到 32768 范围内的 2 的非零幂; 其默认值为 2048.

> [!NOTE]
> 如果其值不是 2 的幂，或者它在指定范围之外，则抛出异常 INDEX_SIZE_ERR.

## 语法

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;
```

### 值

一个无符号长整型。

## 例子

下面的例子展示了 [`AudioContext`](/zh-CN/docs/Web/API/AudioContext) 创建一个 `AnalyserNode`, 然后用 [`requestAnimationFrame`](/zh-CN/docs/Web/API/Window/requestAnimationFrame) 和 [`<canvas>`](/zh-CN/docs/Web/HTML/Element/canvas) 去反复收集当前音频的时域数据，并绘制为一个示波器风格的输出 (频谱).

更多的例子/信息，查看 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 演示 (相关代码在 [app.js 在 128 行\~205 行](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
var bufferLength = analyser.fftSize;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current audio source

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
