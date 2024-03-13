---
title: AudioContext.createScriptProcessor()
slug: Web/API/BaseAudioContext/createScriptProcessor
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

{{ domxref("AudioContext") }} 接口的`createScriptProcessor()` 方法创建一个{{domxref("ScriptProcessorNode")}} 用于通过 JavaScript 直接处理音频。

## 语法

```js
var audioCtx = new AudioContext();
myScriptProcessor = audioCtx.createScriptProcessor(
  bufferSize,
  numberOfInputChannels,
  numberOfOutputChannels,
);
```

### 参数

- `bufferSize`
  - : 缓冲区大小，以样本帧为单位。具体来讲，缓冲区大小必须是下面这些值当中的某一个：256, 512, 1024, 2048, 4096, 8192, 16384. 如果不传，或者参数为 0，则取当前环境最合适的缓冲区大小，取值为 2 的幂次方的一个常数，在该 node 的整个生命周期中都不变。
    该取值控制着 `audioprocess` 事件被分派的频率，以及每一次调用多少样本帧被处理。较低 bufferSzie 将导致一定的延迟。较高的 bufferSzie 就要注意避免音频的崩溃和故障。推荐作者不要给定具体的缓冲区大小，让系统自己选一个好的值来平衡延迟和音频质量。
- `numberOfInputChannels`
  - : 值为整数，用于指定输入 node 的声道的数量，默认值是 2，最高能取 32.
- `numberOfOutputChannels`
  - : 值为整数，用于指定输出 node 的声道的数量，默认值是 2，最高能取 32.

> **警告：** Webkit (version 31) 要求调用这个方法的时候必须传入一个有效的 bufferSize .

> **备注：** `numberOfInputChannels`和`numberOfOutputChannels`的值不能同时为 0，二者同时为 0 是无效的

### 返回

A {{domxref("ScriptProcessorNode")}}.

## 示例

下面的例子展示了一个 `ScriptProcessorNode` 的基本用法，数据源取自 {{ domxref("AudioContext.decodeAudioData") }}, 给每一个音频样本加一点白噪声，然后通过{{domxref("AudioDestinationNode")}}播放 (其实这个就是系统的扬声器)。对于每一个声道和样本帧，在把结果当成输出样本之前，`scriptNode.onaudioprocess` 方法关联 `audioProcessingEvent` ，并用它来遍历每输入流的每一个声道，和每一个声道中的每一个样本，并添加一点白噪声。

> **备注：** 完整的示例参照 [script-processor-node](https://mdn.github.io/webaudio-examples/script-processor-node/) github (查看源码 [source code](https://github.com/mdn/webaudio-examples/blob/master/script-processor-node/index.html).)

```js
var myScript = document.querySelector("script");
var myPre = document.querySelector("pre");
var playButton = document.querySelector("button");

// Create AudioContext and buffer source
var audioCtx = new AudioContext();
source = audioCtx.createBufferSource();

// Create a ScriptProcessorNode with a bufferSize of 4096 and a single input and output channel
var scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);
console.log(scriptNode.bufferSize);

// load in an audio track via XHR and decodeAudioData

function getData() {
  request = new XMLHttpRequest();
  request.open("GET", "viper.ogg", true);
  request.responseType = "arraybuffer";
  request.onload = function () {
    var audioData = request.response;

    audioCtx.decodeAudioData(
      audioData,
      function (buffer) {
        myBuffer = buffer;
        source.buffer = myBuffer;
      },
      function (e) {
        "Error with decoding audio data" + e.err;
      },
    );
  };
  request.send();
}

// Give the node a function to process audio events
scriptNode.onaudioprocess = function (audioProcessingEvent) {
  // The input buffer is the song we loaded earlier
  var inputBuffer = audioProcessingEvent.inputBuffer;

  // The output buffer contains the samples that will be modified and played
  var outputBuffer = audioProcessingEvent.outputBuffer;

  // Loop through the output channels (in this case there is only one)
  for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    var inputData = inputBuffer.getChannelData(channel);
    var outputData = outputBuffer.getChannelData(channel);

    // Loop through the 4096 samples
    for (var sample = 0; sample < inputBuffer.length; sample++) {
      // make output equal to the same as the input
      outputData[sample] = inputData[sample];

      // add noise to each output sample
      outputData[sample] += (Math.random() * 2 - 1) * 0.2;
    }
  }
};

getData();

// wire up play button
playButton.onclick = function () {
  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();
};

// When the buffer source stops playing, disconnect everything
source.onended = function () {
  source.disconnect(scriptNode);
  scriptNode.disconnect(audioCtx.destination);
};
```

## 规范

自 2014 年 8 月 29 日 [Web Audio API 规范](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createscriptprocessor)发布以来，此特性已被弃用。它不再有望成为标准。

它已被 [AudioWorklet](/zh-CN/docs/Web/API/AudioWorklet) 和 {{domxref("AudioWorkletNode")}} 接口所取代。

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
