---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
---

{{APIRef("Web Audio API")}}

**`AudioBufferSourceNode`** 接口继承自 {{domxref("AudioScheduledSourceNode")}}，表现为一个音频源，它包含了一些写在内存中的音频数据，通常储存在一个 ArrayBuffer 对象中。在处理有严格的时间精确度要求的回放的情形下它尤其有用。比如播放那些需要满足一个指定节奏的声音或者那些储存在内存而不是硬盘或者来自网络的声音。为了播放那些有时间精确度需求但来自网络的流文件或者来自硬盘，则使用 {{domxref("AudioWorkletNode")}} 来实现回放。

{{InheritanceDiagram}}

`AudioBufferSourceNode` 没有输入却有一个输出，其通道数与其 {{domxref("AudioBufferSourceNode.buffer", "buffer")}} 属性所指定的 `AudioBuffer` 相同。如果没有设置 buffer，也就是说 `buffer` 属性是 `null` 的话，输出将包含一个无声的单通道（每个采样点均为 0）。

一个 {{domxref("AudioBufferSourceNode")}} 只能被播放一次，也就是说，每次调用 {{domxref("AudioScheduledSourceNode.start", "start()")}} 之后，如果还想再播放一遍同样的声音，那么就需要再创建一个 `AudioBufferSourceNode`。庆幸的是，创建该节点的代价并不大，并且想要多次播放声音的话，实际上 `AudioBuffer` 也可以被重用。事实上，你可以用一种“阅后即焚”的方式来使用这些节点：创建节点，调用 `start()` 开始播放声音，然后，你甚至不需要再保留这个节点的引用了。声音播放完成之后，垃圾收集器会找个恰当的时机回收资源。

`多次调用 AudioBufferSourceNode.stop()` 是允许的。如果这时候 `AudioBufferSourceNode` 还没有到达缓冲区末尾的话，最近一次的调用将替换上一次的调用。

![The AudioBufferSourceNode takes the content of an AudioBuffer and m](webaudioaudiobuffersourcenode.png)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">输入数量</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">输出数量</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">频道数量</th>
      <td>由相关的 {{domxref("AudioBuffer")}} 定义</td>
    </tr>
  </tbody>
</table>

## 属性

_从父级的_ _{{domxref("AudioNode")}} 继承属性_.

- {{domxref("AudioBufferSourceNode.buffer")}}
  - : 是一个 {{domxref("AudioBuffer")}} 它定义了要播放的音频，当设置它的值为 0 时，它会定义一个静默的单通道。
- {{domxref("AudioBufferSourceNode.detune")}}
  - : Is a [k-rate](/zh-CN/docs/DOM/AudioParam#k-rate) {{domxref("AudioParam")}} representing detuning of oscillation in [cents](http://en.wikipedia.org/wiki/Cent_%28music%29). Its default value is `0`.
- {{domxref("AudioBufferSourceNode.loop")}}
  - : Is a Boolean attribute indicating if the audio asset must be replayed when the end of the {{domxref("AudioBuffer")}} is reached. Its default value is `false`.
- {{domxref("AudioBufferSourceNode.loopStart")}}
  - : Is a double value indicating, in seconds, where in the {{domxref("AudioBuffer")}} the restart of the play must happen. Its default value is `0`.
- {{domxref("AudioBufferSourceNode.loopEnd")}}
  - : Is a double value indicating, in seconds, where in the {{domxref("AudioBuffer")}} the replay of the play must stop (and eventually loop again). Its default value is `0`.
- {{domxref("AudioBufferSourceNode.playbackRate")}}
  - : Is an [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} that defines the speed factor at which the audio asset will be played. Since no pitch correction is applied on the output, this can be used to change the pitch of the sample.

### 事件

- {{domxref("AudioBufferSourceNode.onended")}}
  - : 是一个事件处理器类型，包含了与 `ended` 相关联的结束事件。

## 方法

_从父级的 {{domxref("AudioNode")}} 继承方法。_

- {{domxref("AudioBufferSourceNode.start()")}}
  - : Schedules the start of the playback of the audio asset.
- {{domxref("AudioBufferSourceNode.stop()")}}
  - : Schedules the end of the playback of an audio asset.

## 例子

在这个例子中，我们将会创建一个 2 秒的缓冲器，并用白噪音填充它，然后通过{{domxref("AudioBufferSourceNode")}}来播放它。注释里说明了它的功能。

> **备注：** 你可以 [查看在线演示](http://mdn.github.io/audio-buffer/) 或 [查看源代码](https://github.com/mdn/audio-buffer).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector("button");
var pre = document.querySelector("pre");
var myScript = document.querySelector("script");

pre.innerHTML = myScript.innerHTML;

// Stereo
var channels = 2;
// Create an empty two-second stereo buffer at the
// sample rate of the AudioContext
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function () {
  // Fill the buffer with white noise;
  //just random values between -1.0 and 1.0
  for (var channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    var nowBuffering = myArrayBuffer.getChannelData(channel);
    for (var i = 0; i < frameCount; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  var source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = myArrayBuffer;
  // connect the AudioBufferSourceNode to the
  // destination so we can hear the sound
  source.connect(audioCtx.destination);
  // start the source playing
  source.start();
};
```

> **备注：** 音频数据解码的例子请查看 {{domxref("AudioContext.decodeAudioData")}} 页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关页面

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
