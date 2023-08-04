---
title: AudioContext.createChannelSplitter()
slug: Web/API/BaseAudioContext/createChannelSplitter
---

{{ APIRef("Web Audio API") }}

The `createChannelSplitter()` method of the {{ domxref("AudioContext") }} Interface is used to create a {{domxref("ChannelSplitterNode")}}, which is used to access the individual channels of an audio stream and process them separately.

## Syntax

```js
var audioCtx = new AudioContext();
var splitter = audioCtx.createChannelSplitter(2);
```

### 参数

- numberOfOutputs
  - : 你期待将输入音频分割成的声道道数目; 当不传入参数时，默认为 6

### Returns

一个 {{domxref("ChannelSplitterNode")}}.

## Example

下面这个简单的例子告诉你怎样分割一个双声道音轨 (或者说一段音乐), 以及对于左右声道不同的处理。要使用它们，你需要用到{{domxref("AudioNode.connect(AudioNode)") }}方法的第二个和第三个参数，他们会指定链接声道源的序号和链接到的声道序号。

```js
var ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, function (data) {
  var source = ac.createBufferSource();
  source.buffer = data;
  var splitter = ac.createChannelSplitter(2);
  source.connect(splitter);
  var merger = ac.createChannelMerger(2);

  // Reduce the volume of the left channel only
  var gainNode = ac.createGain();
  gainNode.gain.value = 0.5;
  splitter.connect(gainNode, 0);

  // Connect the splitter back to the second input of the merger: we
  // effectively swap the channels, here, reversing the stereo image.
  gainNode.connect(merger, 0, 1);
  splitter.connect(merger, 1, 0);

  var dest = ac.createMediaStreamDestination();

  // Because we have used a ChannelMergerNode, we now have a stereo
  // MediaStream we can use to pipe the Web Audio graph to WebRTC,
  // MediaRecorder, etc.
  merger.connect(dest);
});
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
