---
title: Web Audio API
slug: Web/API/Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}

Web Audio API 提供了在 Web 上控制音频的一个非常有效通用的系统，允许开发者来自选音频源，对音频添加特效，使音频可视化，添加空间效果（如平移），等等。

## Web audio 概念与使用

Web Audio API 使用户可以在**音频上下文**（AudioContext）中进行音频操作，具有**模块化路由**的特点。在**音频节点**上操作进行基础的音频，它们连接在一起构成**音频路由图**。即使在单个上下文中也支持多源，尽管这些音频源具有多种不同类型通道布局。这种模块化设计提供了灵活创建动态效果的复合音频的方法。

音频节点通过它们的输入输出相互连接，形成一个链或者一个简单的网。一般来说，这个链或网起始于一个或多个音频源。音频源可以提供一个片段一个片段的音频采样数据（以数组的方式），一般，一秒钟的音频数据可以被切分成几万个这样的片段。这些片段可以是经过一些数学运算得到（比如{{domxref("OscillatorNode")}}），也可以是音频或视频的文件读出来的（比如{{domxref("AudioBufferSourceNode")}}和{{domxref("MediaElementAudioSourceNode")}}），又或者是音频流（{{domxref("MediaStreamAudioSourceNode")}}）。其实，音频文件本身就是声音的采样数据，这些采样数据可以来自麦克风，也可以来自电子乐器，然后混合成一个单一的复杂的波形。

这些节点的输出可以连接到其他节点的输入上，然后新节点可以对接收到的采样数据再进行其他的处理，再形成一个结果流。一个最常见的操作是通过把输入的采样数据放大来达到扩音器的作用（缩小就是一个弱音器）（参见{{domxref("GainNode")}}）。声音处理完成之后，可以连接到一个目的地（{{domxref("AudioContext.destination")}}），这个目的地负责把声音数据传输给扬声器或者耳机。注意，只有当用户期望听到声音时，才需要进行最后一个这个连接。

一个简单而典型的 web audio 流程如下：

1. 创建音频上下文
2. 在音频上下文里创建源 — 例如 `<audio>`, 振荡器，流
3. 创建效果节点，例如混响、双二阶滤波器、平移、压缩
4. 为音频选择一个目的地，例如你的系统扬声器
5. 连接源到效果器，对目的地进行效果输出

![A simple box diagram with an outer box labeled Audio context, and three inner boxes labeled Sources, Effects and Destination. The three inner boxes have arrow between them pointing from left to right, indicating the flow of audio information.](audio-context_.png)

使用这个 API，时间可以被非常精确地控制，几乎没有延迟，这样开发人员可以准确地响应事件，并且可以针对采样数据进行编程，甚至是较高的采样率。这样，鼓点和节拍是准确无误的。

Web Audio API 也使我们能够控制音频的*空间化*。在基于*源 - 侦听器模型*的系统中，它允许控制*平移模型*和处理*距离引起的衰减*或移动源（移动侦听）引起的*多普勒效应*。

> **备注：** 你可以阅读我们关于 Web Audio API 的文章来了解更多细节 [Web Audio API 背后的基本概念](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)。

## Web Audio API 接口

Web Audio API 共有一系列接口和相关的事件，我们已经把它们分成了九类功能。

### 通用音频图定义

Web Audio API 中与生成音频图相关的定义与通用容器。

- {{domxref("AudioContext")}}
  - : **`AudioContext`** 接口代表由音频模块构成的音频处理图。音频上下文控制其所包含节点的创建和音频处理、解码。使用其他接口前你必需创建一个`音频上下文`，一切操作都在这个环境里进行。
- {{domxref("AudioNode")}}
  - : **`音频节点`** 接口是一个音频处理模块，例如音频源（{{HTMLElement("audio")}}或{{HTMLElement("video")}}），音频输出、中间处理模块（例如：滤波器 {{domxref("BiquadFilterNode")}} 或者音量控制器 {{domxref("GainNode")}}）。
- {{domxref("AudioParam")}}
  - : **`AudioParam`** 接口代表音频相关的参数，比如一个 {{domxref("AudioNode")}}的参数。它可以设置为特定值或值的变化，并且可以在指定的时间之后以指定模式变更。
- [`ended`](/zh-CN/docs/Web/API/HTMLMediaElement/ended_event)结束事件
  - : 当媒体播放停止时，会触发`ended`事件。

### 定义音频源

Web Audio API 使用的音频源接口。

- {{domxref("OscillatorNode")}}
  - : **`OscillatorNode`** 接口代表一种随时间变化的波形，比如正弦波形或三角波形。类型是{{domxref("AudioNode")}}，功能是音频处理模块，可以产生指定*频率*的波形。
- {{domxref("AudioBuffer")}}
  - : **`AudioBuffer`** 代表内存中的一段音频数据，可以通过{{ domxref("AudioContext.decodeAudioData()") }}方法从音频文件创建，也可以通过{{ domxref("AudioContext.createBuffer()") }}方法从原始数据创建。当音频数据被解码成这种格式之后，就可以被放入一个{{ domxref("AudioBufferSourceNode") }}中使用。
- {{domxref("AudioBufferSourceNode")}}
  - : **`AudioBufferSourceNode`** 表示由内存音频数据组成的音频源，音频数据存储在{{domxref("AudioBuffer")}}中。这是一个作为音频源的{{domxref("AudioNode")}}。
- {{domxref("MediaElementAudioSourceNode")}}
  - : **`MediaElementAudioSourceNode`** 接口表示由 HTML5 {{ htmlelement("audio") }}或{{ htmlelement("video") }}元素生成的音频源。这是一个作为音频源的{{domxref("AudioNode")}}。
- {{domxref("MediaStreamAudioSourceNode")}}
  - : **`MediaStreamAudioSourceNode`** 接口表示由 WebRTC {{domxref("MediaStream")}}（如网络摄像头或麦克风）生成的音频源。这是一个作为音频源的{{domxref("AudioNode")}}。

### 定义音效

应用到音频源上的音效。

- {{domxref("BiquadFilterNode")}}
  - : **`BiquadFilterNode`** 接口表示一个简单的低阶滤波器。它是一个{{domxref("AudioNode")}}，可以表示不同种类的滤波器、调音器或图形均衡器。`BiquadFilterNode` 总是只有一个输入和一个输出。
- {{domxref("ConvolverNode")}}
  - : **`ConvolverNode`** 接口是一个{{domxref("AudioNode")}}，对给定的 AudioBuffer 执行线性卷积，通常用于实现混响效果。
- {{domxref("DelayNode")}}
  - : **`DelayNode`** 接口表示[延迟线](http://en.wikipedia.org/wiki/Digital_delay_line)；是{{domxref("AudioNode")}} 类型的音频处理模块，使输入的数据延时输出。
- {{domxref("DynamicsCompressorNode")}}
  - : **`DynamicsCompressorNode`** 提供了一个压缩效果，当多个音频在同时播放并且混合的时候，可以通过它降低音量最大的部分的音量来帮助避免发生削波和失真。
- {{domxref("GainNode")}}
  - : **`GainNode`** 接口用于音量变化。它是一个 {{domxref("AudioNode")}} 类型的音频处理模块，输入后应用*增益* 效果，然后输出。
- {{domxref("StereoPannerNode")}}
  - : **`StereoPannerNode`** 接口表示一个简单立体声控制节点，用来左右移动音频流。
- {{domxref("WaveShaperNode")}}
  - : **`WaveShaperNode`** 接口表示一个非线性的扭曲。它是{{domxref("AudioNode")}}类型，可以利用曲线来对信号进行扭曲。除了一些效果明显的扭曲，还常被用来给声音添加温暖的感觉。
- {{domxref("PeriodicWave")}}
  - : 用来定义周期性的波形，可被用来重塑 {{ domxref("OscillatorNode") }}的输出。

### 定义音频目的地

在你处理完音频之后，这些接口定义了输出到哪里。

- {{domxref("AudioDestinationNode")}}
  - : **`AudioDestinationNode`** 定义了最后音频要输出到哪里，通常是输出到你的扬声器。
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : **`MediaStreamAudioDestinationNode`** 定义了使用 [WebRTC](/zh-CN/docs/WebRTC) 的{{domxref("MediaStream")}}（只包含单个 AudioMediaStreamTrack）应该连接的目的地，AudioMediaStreamTrack 的使用方式和从{{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}中得到{{domxref("MediaStream")}}相似。这个接口是{{domxref("AudioNode")}}类型的音频目的地。

### 数据分析和可视化

如果你想从音频里提取时间、频率或者其他数据，你需要 AnalyserNode。

- {{domxref("AnalyserNode")}}
  - : **`AnalyserNode`** 表示一个可以提供实时频率分析与时域分析的切点，这些分析数据可以用做数据分析和可视化。

### 分离、合并声道

你将使用这些接口来拆分、合并声道。

- {{domxref("ChannelSplitterNode")}}
  - : **`ChannelSplitterNode`** 可以把输入流的每个声道输出到一个独立的输出流。
- {{domxref("ChannelMergerNode")}}
  - : **`ChannelMergerNode`** 用于把一组输入流合成到一个输出流。输出流的每一个声道对应一个输入流。

### 声音空间效果

这些接口用来添加空间平移效果到音频源。

- {{domxref("AudioListener")}}
  - : **`AudioListener`**代表场景中正在听声音的人的位置和朝向。
- {{domxref("PannerNode")}}
  - : **`PannerNode`** 用于表示场景是声音的空间行为。它是{{domxref("AudioNode")}}类型的音频处理模块，这个节点用于表示右手笛卡尔坐标系里声源的位置信息，运动信息（通过一个速度向量表示），方向信息（通过一个方向圆锥表示）。

### 使用 JavaScript 处理音频

可以编写 JavaScript 代码来处理音频数据。当然，这需要用到下面的接口和事件。

> **备注：** 这些功能在 Web Audio API 的 2014 年 8 月 9 日版本中已经标记为不推荐的，这些功能很快会被[Audio_Workers](#audio_workers)代替。

- {{domxref("ScriptProcessorNode")}}
  - : **`ScriptProcessorNode`** 接口用于通过 JavaScript 代码生成，处理，分析音频。它是一个{{domxref("AudioNode")}}类型的音频处理模块，但是它与两个缓冲区相连接，一个缓冲区里包含当前的输入数据，另一个缓冲区里包含着输出数据。每当新的音频数据被放入输入缓冲区，就会产生一个{{domxref("AudioProcessingEvent")}}事件，当这个事件处理结束时，输出缓冲区里应该写好了新数据。
- [`audioprocess`](/zh-CN/docs/Web/API/ScriptProcessorNode/audioprocess_event) (event)
  - : 当一个 Web Audio API {{domxref("ScriptProcessorNode")}}已经准备好进行处理时，这个事件回调会被调用。
- {{domxref("AudioProcessingEvent")}}
  - : 当{{domxref("ScriptProcessorNode")}}的输入流数据准备好了时，`AudioProcessingEvent`事件会产生。

### 离线（后台）音频处理

在后台进行音频的快速处理也是可以的。仅仅生成包含音频数据的{{domxref("AudioBuffer")}}，而不在扬声器里播放它。

- {{domxref("OfflineAudioContext")}}
  - : **`OfflineAudioContext`** 离线音频上下文也是音频上下文{{domxref("AudioContext")}}，也表示把{{domxref("AudioNode")}}连接到一起的一个音频处理图。但是，与一个标准的音频上下文相比，离线上下文不能把音频渲染到扬声器，仅仅是把音频渲染到一个缓冲区。
- [`complete`](/zh-CN/docs/Web/API/OfflineAudioContext/complete_event) (event)
  - : Complete 事件，当离线音频上下文被终止时产生。
- {{domxref("OfflineAudioCompletionEvent")}}
  - : `OfflineAudioCompletionEvent`表示上下文被终止时的事件。

### 音频工作者

在了解这一部分内容之前，你可以先了解一个新的 WebWorker 方面的内容。音频工作者提供了一种可以在一个[WebWorker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)上下文中直接进行音频处理的方式。现在已经定义了一些这部分功能的新接口，接口定义是在 2014 年的 8 月 29 日文档中。到目前为止，还没有浏览器已经对这些接口进行了实现。当这些接口被实现后，{{domxref("ScriptProcessorNode")}}和[前文](/zh-CN/docs/Web/API/Web_Audio_API#Audio_processing_via_JavaScript)中提到的其他接口都会被替代。

- {{domxref("AudioWorkerNode")}}
  - : AudioWorkerNode 也是{{domxref("AudioNode")}}类型，但是它用于与工作者线程合作来直接完成音频的生成，处理或分析等操作。
- {{domxref("AudioWorkerGlobalScope")}}
  - : `AudioWorkerGlobalScope` 继承于 `DedicatedWorkerGlobalScope`。代表一个工作者上下文。这个工作者上下文里运行着对音频进行处理的脚本。设计这个接口的目的，是为了直接通过编写 JavaScript 代码，来完成对音频数据的生成，处理，分析工作。
- {{domxref("AudioProcessEvent")}}
  - : 这是一个事件对象。这个对象会被分发给{{domxref("AudioWorkerGlobalScope")}}对象来进行处理。

## 过时的接口

下面介绍到的这些接口定义于比较老的 Web Audio API 标准，现在已经过时了，而且已经被新接口取代。

- {{domxref("JavaScriptNode")}}
  - : 用于通过编写 JavaScript 代码直接处理音频数据，现在已经被{{domxref("ScriptProcessorNode")}}取代。
- {{domxref("WaveTableNode")}}
  - : 用于定义一个周期性波形，现在已经被{{domxref("PeriodicWave")}}取代。

## 示例

下面的这个示例使用了较多的 Web Audio API 接口，可以通过访问[网址](https://mdn.github.io/voice-change-o-matic/)来查看它的时时运行情况，也可以访问 GitHub 上它的[源代码](https://github.com/mdn/voice-change-o-matic)。这个示例里会对声音的音量进行改变，打开页面时，可以先把扬声器的音量调小一些。

Web Audio API 接口在下面的代码里已经高亮显示。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context
// Webkit/blink browsers need prefix, Safari won't work without window.

var voiceSelect = document.getElementById("voice"); // select box for selecting voice effect options
var visualSelect = document.getElementById("visual"); // select box for selecting audio visualization options
var mute = document.querySelector(".mute"); // mute button
var drawVisual; // requestAnimationFrame

var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();

function makeDistortionCurve(amount) {
  // function to make curve shape for distortion/wave shaper node to use
  var k = typeof amount === "number" ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for (; i < n_samples; ++i) {
    x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

navigator.getUserMedia(
  // constraints - only audio needed for this app
  {
    audio: true,
  },

  // Success callback
  function (stream) {
    source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination); // connecting the different audio graph nodes together

    visualize(stream);
    voiceChange();
  },

  // Error callback
  function (err) {
    console.log("The following gUM error occured: " + err);
  },
);

function visualize(stream) {
  WIDTH = canvas.width;
  HEIGHT = canvas.height;

  var visualSetting = visualSelect.value;
  console.log(visualSetting);

  if (visualSetting == "sinewave") {
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount; // half the FFT value
    var dataArray = new Uint8Array(bufferLength); // create an array to store the data

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray); // get waveform data and put it into the array created above

      canvasCtx.fillStyle = "rgb(200, 200, 200)"; // draw wave with canvas
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";

      canvasCtx.beginPath();

      var sliceWidth = (WIDTH * 1.0) / bufferLength;
      var x = 0;

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

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    }

    draw();
  } else if (visualSetting == "off") {
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.fillStyle = "red";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  }
}

function voiceChange() {
  distortion.curve = new Float32Array();
  biquadFilter.gain.value = 0; // reset the effects each time the voiceChange function is run

  var voiceSetting = voiceSelect.value;
  console.log(voiceSetting);

  if (voiceSetting == "distortion") {
    distortion.curve = makeDistortionCurve(400); // apply distortion to sound using waveshaper node
  } else if (voiceSetting == "biquad") {
    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 1000;
    biquadFilter.gain.value = 25; // apply lowshelf filter to sounds using biquad
  } else if (voiceSetting == "off") {
    console.log("Voice settings turned off"); // do nothing, as off option was chosen
  }
}

// event listeners to change visualize and voice settings

visualSelect.onchange = function () {
  window.cancelAnimationFrame(drawVisual);
  visualize(stream);
};

voiceSelect.onchange = function () {
  voiceChange();
};

mute.onclick = voiceMute;

function voiceMute() {
  // toggle to mute and unmute sound
  if (mute.id == "") {
    gainNode.gain.value = 0; // gain set to 0 to mute sound
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
    gainNode.gain.value = 1; // gain set to 1 to unmute sound
    mute.id = "";
    mute.innerHTML = "Mute";
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Visualizations with Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Voice-change-O-matic example](http://mdn.github.io/voice-change-o-matic/)
- [Violent Theremin example](http://mdn.github.io/violent-theremin/)
- [Web audio spatialisation basics](/zh-CN/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
- [Mixing Positional Audio and WebGL](http://www.html5rocks.com/tutorials/webaudio/positional_audio/)
- [Developing Game Audio with the Web Audio API](http://www.html5rocks.com/tutorials/webaudio/games/)
- [Porting webkitAudioContext code to standards based AudioContext](/zh-CN/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext)
- [Tones](https://github.com/bit101/tones): a simple library for playing specific tones/notes using the Web Audio API.
- [howler.js](https://github.com/goldfire/howler.js/): a JS audio library that defaults to [Web Audio API](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html) and falls back to [HTML5 Audio](http://www.whatwg.org/specs/web-apps/current-work/#the-audio-element), as well as providing other useful features.
