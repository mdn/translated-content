---
title: BaseAudioContext：createChannelSplitter() 方法
slug: Web/API/BaseAudioContext/createChannelSplitter
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

{{domxref("BaseAudioContext")}} 接口的 `createChannelSplitter()` 方法用于创建一个 {{domxref("ChannelSplitterNode")}}，该节点可用于访问音频流中的各个声道并分别处理它们。

> [!NOTE]
> 推荐使用 {{domxref("ChannelSplitterNode.ChannelSplitterNode", "ChannelSplitterNode()")}} 构造函数来创建 {{domxref("ChannelSplitterNode")}}；请参见[创建 AudioNode](/zh-CN/docs/Web/API/AudioNode#创建_audionode)。

## 语法

```js-nolint
createChannelSplitter(numberOfOutputs)
```

### 参数

- `numberOfOutputs`
  - : 你希望分别输出的输入音频流中的声道数；如果未指定此参数，默认值为 6。

### 返回值

一个 {{domxref("ChannelSplitterNode")}}。

## 示例

下面的简单示例展示了如何分离立体声音轨（例如一段音乐），并对左右声道进行不同处理。要使用它们，你需要使用 {{domxref("AudioNode/connect", "AudioNode.connect(AudioNode)")}} 方法的第二和第三个参数，这两个参数分别用于指定连接来源声道的索引以及连接目标声道的索引。

```js
const ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, (data) => {
  const source = ac.createBufferSource();
  source.buffer = data;
  const splitter = ac.createChannelSplitter(2);
  source.connect(splitter);
  const merger = ac.createChannelMerger(2);

  // 仅降低左声道的音量
  const gainNode = ac.createGain();
  gainNode.gain.setValueAtTime(0.5, ac.currentTime);
  splitter.connect(gainNode, 0);

  // 将分离器重新连接到合并器的第二个输入：
  // 这里实际上交换了声道，从而反转了立体声声像。
  gainNode.connect(merger, 0, 1);
  splitter.connect(merger, 1, 0);

  const dest = ac.createMediaStreamDestination();

  // 因为我们使用了 ChannelMergerNode，现在得到了一个立体声
  // MediaStream，可用于将 Web Audio 图管道传输到 WebRTC、
  // MediaRecorder 等。
  merger.connect(dest);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 音频 API 的运用](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
