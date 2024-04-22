---
title: AudioContext.createChannelMerger()
slug: Web/API/BaseAudioContext/createChannelMerger
---

{{ APIRef("Web Audio API") }}

`AudioContext.createChannelMerger()` 方法，会创建一个 `ChannelMergerNode`，后者可以把多个音频流的通道整合到一个音频流。

## 语法

```js
var audioCtx = new AudioContext();
var merger = audioCtx.createChannelMerger(2);
```

### 参数

- numberOfInputs
  - : 通道输入音频流的数量，输出流将包含这个数量的通道。默认值 6。

### 返回值

一个 {{domxref("ChannelMergerNode")}}.

## 示例

下面的例子展示了如何分离立体音轨（就是一段音乐），处理使左右声道不同。使用的时候，需要指定 AudioNode.connect(AudioNode) 方法的第二个和第三个参数，分别用来指定通道链接来源的索引和输出的索引。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
