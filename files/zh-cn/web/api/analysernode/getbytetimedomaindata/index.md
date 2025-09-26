---
title: AnalyserNode.getByteTimeDomainData()
slug: Web/API/AnalyserNode/getByteTimeDomainData
---

{{ APIRef("Mountain View APIRef Project") }}

{{ domxref("AnalyserNode") }} 接口的 **`getByteTimeDomainData()`** 方法复制当前波形或时域数据到传递给它的 {{domxref("Uint8Array")}} (无符号字节数组) 中。

如果该数组的元素少于 {{domxref("AnalyserNode.fftSize")}}, 多余的元素会被丢弃。如果它有多于所需的元素，则忽略多余的元素。

## 语法

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
var dataArray = new Uint8Array(analyser.fftSize); // Uint8Array should be the same length as the fftSize
analyser.getByteTimeDomainData(dataArray); // fill the Uint8Array with data returned from getByteTimeDomainData()
```

### 参数

- `array`
  - : 时域数据将被复制到的 {{domxref("Uint8Array")}} 。
    如果数组中的元素少于 {{domxref("AnalyserNode.frequencyBinCount")}}, 则会删除多余的元素。如果它包含的元素多于需要的元素，则忽略多余的元素。

### 返回值

**`void`** | None

## 例子

以下的例子展示了 {{domxref("AudioContext")}} 生成一个 `AnalyserNode` 基础用法，然后通过 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} 和 {{htmlelement("canvas")}} 重复的收集和绘制一个当前音频输入的“示波器样式”输出。有关更完整的应用实例/信息，请查看我们的 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (有关代码请参阅 [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205))。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
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

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      ctx.beginPath();
      for(var i = 0; i < bufferLength; i++) {
        let v = dataArray[i]/128.0,
            y = v * HEIGHT/2;

        if(i === 0)
          canvasCtx.moveTo(x, y);
        else
          canvasCtx.lineTo(x, y);

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };

    draw();
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
