---
title: AnalyserNode.getFloatFrequencyData()
slug: Web/API/AnalyserNode/getFloatFrequencyData
---

{{ APIRef("Web Audio API") }}

**`getFloatFrequencyData()`** 作为{{domxref("AnalyserNode")}} 接口的方法能将当前分析节点（AnalyserNode）的频率数据拷贝进一个 {{domxref("Float32Array")}} 数组对象。

此数组表示的频率范围为 0 \~ 22050 Hz，每个元素表示对应频率上的信号分量强度，单位为分贝。

如果你需要更好的性能并且不太在意数据的精度，你可以使用 {{domxref("AnalyserNode.getByteFrequencyData()")}} 作为代替，这一接口使用 {{domxref("Uint8Array")}}来存储数据（对应的也是这个精度的格式）.

## 语法

```
void analyser.getFloatFrequencyData(array);
```

### 参数

- `array`
  - : 你即将用于拷贝频域数据（frequency domain data）的 {{domxref("Float32Array")}} 数组。对于任何无声的样本，它的值应该是 `-Infinity`.
    如果这一数组的可容纳元素数少于该分析节点的{{domxref("AnalyserNode.frequencyBinCount")}}值，超出容量的数据元素将被舍弃。而如果容量多于需要，多余的数组元素将不会被操作。

### 返回值

无返回值。

## 示例

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
// Float32Array 的长度应该和 frequencyBinCount 相同
const myDataArray = new Float32Array(analyser.frequencyBinCount);
// 用 getFloatFrequencyData() 方法的返回数据填充 Float32Array 数组
analyser.getFloatFrequencyData(myDataArray);
```

### 例：绘制一个频谱

下面的示例展示了一个 {{domxref("AudioContext")}}对象连接 {{domxref("MediaElementAudioSourceNode")}}到`AnalyserNode 对象的基本用法（即用 AudioContext 将音频内容连接到分析节点，从而可以展开对音频数据的分析）`. 当音频播放时，我们使用 {{domxref("window.requestAnimationFrame()","requestAnimationFrame()")}}方法产生轮询从而不断地收集频率数据，进而在 {{htmlelement("canvas")}} 元素上绘制 winamp（windows 上的一款 MP3 播放软件）条形图风格的频谱。

更多的应用示例和应用信息，可以参看我们 [Voice-change-O-matic-float-data](http://mdn.github.io/voice-change-o-matic-float-data/) 示例 (在 [source code](https://github.com/mdn/voice-change-o-matic-float-data) 同样有).

```html
<!doctype html>
<body>
  <script>
    const audioCtx = new AudioContext();

    //创建一个音频源
    //在示例中我们使用了一个音频文件，但其实这里也可以用麦克风输入
    const audioEle = new Audio();
    audioEle.src = "my-audio.mp3"; //这里是文件名
    audioEle.autoplay = true;
    audioEle.preload = "auto";
    const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

    //生成一个分析节点 (analyser node)
    const analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 256;
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);

    //设置音频节点网络（音频源->分析节点->输出）
    audioSourceNode.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);

    //生成 2D canvas
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const canvasCtx = canvas.getContext("2d");
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    function draw() {
      //准备好下次重绘
      requestAnimationFrame(draw);

      //获取实时的频谱信息
      analyserNode.getFloatFrequencyData(dataArray);

      //画一个黑色的背景
      canvasCtx.fillStyle = "rgb(0, 0, 0)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      //绘制频谱
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let posX = 0;
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] + 140) * 2;
        canvasCtx.fillStyle =
          "rgb(" + Math.floor(barHeight + 100) + ", 50, 50)";
        canvasCtx.fillRect(
          posX,
          canvas.height - barHeight / 2,
          barWidth,
          barHeight / 2,
        );
        posX += barWidth + 1;
      }
    }

    draw();
  </script>
</body>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
