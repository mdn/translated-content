---
title: AudioContext.createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}的`createAnalyser()`方法能创建一个{{ domxref("AnalyserNode") }}，可以用来获取音频时间和频率数据，以及实现数据可视化。

> **备注：** 关于该节点的更多信息，请查看{{domxref("AnalyserNode")}}

## 语法

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
```

### 返回值

{{domxref("AnalyserNode")}}对象

## 例子

下面的例子展示了 AudioContext 创建分析器节点的基本用法，然后用 requestAnimationFrame() 来反复获取时域数据，并绘制出当前音频输入的“示波器风格”输出。更多完整例子请查看[Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) demo (中[app.js 的 128–205 行](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)代码)

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

## 另见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
