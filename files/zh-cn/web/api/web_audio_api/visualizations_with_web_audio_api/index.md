---
title: 基于 Web Audio API 实现音频可视化效果
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}

网页音频接口最有趣的特性之一它就是可以获取频率、波形和其他来自声源的数据，这些数据可以被用作音频可视化。这篇文章将解释如何做到可视化，并提供了一些基础使用案例。

> [!NOTE]
> 你可以在[Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)演示里找到本文出现的所有代码片段。

## 基本概念

要从你的音频源获取数据，你需要一个 {{ domxref("AnalyserNode") }}节点，它可以用 {{ domxref("AudioContext.createAnalyser()") }} 方法创建，比如：

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
```

然后把这个节点（node）连接到你的声源：

```js
source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
// etc.
```

> [!NOTE]
> 分析器节点 (Analyser Node) 不一定输出到另一个节点，不输出时也可以正常使用。但前提是它必须与一个声源相连（直接或者通过其他节点间接相连都可以）。

分析器节点 (Analyser Node) 将在一个特定的频率域里使用[快速傅立叶变换](https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2)(Fast Fourier Transform (FFT) ) 来捕获音频数据，这取决于你给 {{ domxref("AnalyserNode.fftSize") }} 属性赋的值（如果没有赋值，默认值为 2048）。

> [!NOTE]
> 你也可以为 FFT 数据缩放范围指定一个最小值和最大值，使用{{ domxref("AnalyserNode.minDecibels") }} 和{{ domxref("AnalyserNode.maxDecibels") }}进行设置，要获得不同数据的平均常量，使用 {{ domxref("AnalyserNode.smoothingTimeConstant") }}。阅读这些页面以获得更多如何使用它们的信息。

要捕获数据，你需要使用 {{ domxref("AnalyserNode.getFloatFrequencyData()") }} 或 {{ domxref("AnalyserNode.getByteFrequencyData()") }} 方法来获取频率数据，用 {{ domxref("AnalyserNode.getByteTimeDomainData()") }} 或 {{ domxref("AnalyserNode.getFloatTimeDomainData()") }} 来获取波形数据。

这些方法把数据复制进了一个特定的数组当中，所以你在调用它们之前要先创建一个新数组。第一个方法会产生一个 32 位浮点数组，第二个和第三个方法会产生 8 位无符号整型数组，因此一个标准的 JavaScript 数组就不能使用——你需要用一个 {{ domxref("Float32Array") }} 或者 {{ domxref("Uint8Array") }} 数组，具体需要哪个视情况而定。

那么让我们来看看例子，比如我们正在处理一个 2048 尺寸的 FFT。我们返回 {{ domxref("AnalyserNode.frequencyBinCount") }} 值，它是 FFT 的一半，然后调用 Uint8Array()，把 frequencyBinCount 作为它的长度参数——这代表我们将对这个尺寸的 FFT 收集多少数据点。

```js
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
```

要正确检索数据并把它复制到我们的数组里，就要调用我们想要的数据收集方法，把数组作为参数传递给它，例如：

```js
analyser.getByteTimeDomainData(dataArray);
```

现在我们就获取了那时的音频数据，并存到了我们的数组里，而且可以把它做成我们喜欢的可视化效果了，比如把它画在一个 HTML5 {{ htmlelement("canvas") }} 画布上。

下面让我们来看一些具体的例子。

## 创建一个波形/示波器

要创建一个示波器视觉效果（感谢 [Soledad Penadés](http://soledadpenades.com/) 在 [Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L123-L167) 中提供的源码），我们首先用下面代码框中的代码为标准设置一个 buffer：

```js
analyser.fftSize = 2048;
var bufferLength = analyser.fftSize;
var dataArray = new Uint8Array(bufferLength);
```

接下来，我们清空画布为绘制新的可视化效果做准备：

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

现在我们来定义 `draw()` 函数：

```js
function draw() {
```

这里我们用 `requestAnimationFrame()` 来保持绘图持续更新：

```js
drawVisual = requestAnimationFrame(draw);
```

接下来我们获取时间域上的数据并将它复制到数组当中：

```js
analyser.getByteTimeDomainData(dataArray);
```

接下来把 canvas 用纯色填满作为背景：

```js
canvasCtx.fillStyle = "rgb(200, 200, 200)";
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

为我们要画的波形设置好线宽和线的颜色，然后开始绘制路径：

```js
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0, 0, 0)";

canvasCtx.beginPath();
```

用 canvas 画布的总宽度除以数组的长度（与之前定义的 FrequencyBinCount 相等）来决定要花上的每段线条的宽度，之后设置横坐标 (x) 为 0，将画笔移动到起始位置：

```js
var sliceWidth = (WIDTH * 1.0) / bufferLength;
var x = 0;
```

接下来我们进入循环，遍历数组，通过其中的数据来确定每段线条的高度，之后改变横坐标将画笔移动到下一段线条开始的地方：

```js
for (var i = 0; i < bufferLength; i++) {
  var v = dataArray[i] / 128.0;
  var y = (v * HEIGHT) / 2;

  if (i === 0) {
    canvasCtx.moveTo(x, y);
  } else {
    canvasCtx.lineTo(x, y);
  }

  x += sliceWidth;
}
```

最后，我们把线连到右边的中央，然后画出来：

```js
      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };
```

在这块代码最后，我们调用 `draw()` 函数来开始整个过程：

```js
draw();
```

这个演示画出了一个每秒会刷新几次并且看起来还不错的波形图：

![a black oscilloscope line, showing the waveform of an audio signal](wave.png)

## 创建一个频率条形图

另一种小巧的可视化方法是创建频率条形图，在 [Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L123-L167) 中已经有一个做好的，现在让我们来看看它是如何实现的。

首先，我们设置好解析器和空数组，之后用 [clearRect()](/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect) 清空画布。与之前的唯一区别是我们这次大大减小了 FFT 的大小，这样做的原因是为了使得每个频率条足够宽，让它们看着像“条”而不是“细杆”。

```js
analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

接下来我们写好 `draw()` 函数，再一次用 `requestAnimationFrame()` 设置一个循环，这样显示的数据就可以保持刷新，并且每一帧都清空一次画布。

```js
    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

现在我们来设置一个 `barWidth` 变量，它等于每一个条形的宽度。理论上用花布宽度除以条的个数就可以得到它，但是在这里我们还要乘以 2.5。这是因为有很多返回的频率区域中是没有声音的，我们每天听到的大多数声音也只是在一个很小的频率区域当中。在条形图中我们肯定不想看到大片的空白条，所以我们就把一些能正常显示的条形拉宽来填充这些空白区域。

我们还要设置一个条高度变量 `barHeight`，还有一个 `x` 变量来记录当前条形的位置。

```js
var barWidth = (WIDTH / bufferLength) * 2.5;
var barHeight;
var x = 0;
```

像之前一样，我们进入循环来遍历 `dataArray` 数组中的数据。在每一次循环过程中，我们让条形的高度 `barHeight` 等于数组的数值，之后根据高度设置条形的填充色（条形越高，填充色越亮），然后在横坐标 `x` 处按照设置的宽度和高度的一半把条形画出来（我们最后决定只画高度的一半因为这样条形看起来更美观）。

需要多加解释的一点是每个条形竖直方向的位置，我们在 `HEIGHT-barHeight/2` 的位置画每一条，这是因为我想让每个条形从底部向上伸出，而不是从顶部向下（如果我们把竖直位置设置为 0 它就会这样画）。所以，我们把竖直位置设置为画布高度减去条形高度的一半，这样每个条形就会从中间向下画，直到画布最底部。

```js
      for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
      }
    };
```

和刚才一样，我们在最后调用 draw() 函数来开启整个可视化过程。

```js
draw();
```

这些代码会带来下面的效果：

![a series of red bars in a bar graph, showing intensity of different frequencies in an audio signal](bar-graph.png)

> [!NOTE]
> 本文中的案例展现了 {{ domxref("AnalyserNode.getByteFrequencyData()") }} 和 {{ domxref("AnalyserNode.getByteTimeDomainData()") }} 的用法。如果想要查看 {{ domxref("AnalyserNode.getFloatFrequencyData()") }} 和 {{ domxref("AnalyserNode.getFloatTimeDomainData()") }} 的用法，请参考我们的 [Voice-change-O-matic-float-data](http://mdn.github.io/voice-change-o-matic-float-data/) 演示（也能看到 [源代码](https://github.com/mdn/voice-change-o-matic-float-data) ）——它和本文中出现的 [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/) 功能完全相同，唯一区别就是它使用的是浮点数作数据，而不是本文中的无符号整型数。
