---
title: BaseAudioContext：createBuffer() 方法
slug: Web/API/BaseAudioContext/createBuffer
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Audio API") }}

{{ domxref("BaseAudioContext") }} 接口的 `createBuffer()` 方法用于新建一个空的 {{ domxref("AudioBuffer") }} 对象，随后可以填充数据，并通过 {{ domxref("AudioBufferSourceNode") }} 播放。

更多关于音频片段的细节，请查阅 {{domxref("AudioBuffer")}} 参考页面。

> [!NOTE]
> `createBuffer()` 过去可以接收压缩音频数据，并返回解码后的采样数据，但这项功能已经从规范中删除，因为所有的解码工作都在主线程中完成，导致 `createBuffer()` 阻塞了其他代码的执行。异步方法 `decodeAudioData()` 能够完成相同的工作——传入 MP3 文件之类的压缩音频数据，并直接返回一个可以通过 {{ domxref("AudioBufferSourceNode") }} 播放的 {{ domxref("AudioBuffer") }}。对于诸如播放 MP3 这类简单使用场景，`decodeAudioData()` 就是你应当使用的。

如果想深入了解音频片段是如何工作的，以及这些参数的作用，请阅读基本概念指南中的[音频片段：帧、样本和声道](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#音频片段：帧、样本和声道)。

## 语法

```js-nolint
createBuffer(numOfChannels, length, sampleRate)
```

### 参数

- `numOfChannels`
  - : 一个整数，表示音频片段应包含的声道数。默认值为 1，所有浏览器必须支持至少 32 个声道。
- `length`
  - : 一个整数，表示音频片段的大小，单位是采样帧（每个采样帧的大小等于单个采样的字节数乘以 `numOfChannels`）。要确定特定秒数音频所需的 `length`，使用 `numSeconds * sampleRate`。
- `sampleRate`
  - : 线性音频数据的采样率，单位是每秒采样帧数。所有浏览器必须支持至少 8000 Hz 到 96000 Hz 范围内的采样率。

### 返回值

一个基于指定参数配置的 {{domxref("AudioBuffer")}}。

### 异常

- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果一个或多个参数为负数或具有无效值（例如 `numberOfChannels` 高于支持的值，或 `sampleRate` 超出正常范围），则抛出此异常。
- {{jsxref("RangeError")}}
  - : 如果没有足够的内存来分配音频片段，则抛出此异常。

## 示例

首先，我们将从几个浅显易懂的示例入手，来解释如何使用这些参数：

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, 22050, 44100);
```

如果你这样调用，你将会得到一个立体声（双声道）的音频片段，当它在一个 44100 Hz（非常常见，大多数普通声卡都运行在该频率下）的音频上下文（AudioContext）中播放的时候，会持续 0.5 秒：22050 帧 / 44100 Hz = 0.5 秒。

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(1, 22050, 22050);
```

如果你这样调用，你将会得到一个单声道的音频片段，当它在一个 44100 Hz 的音频上下文（`AudioContext`）中播放的时候，会被自动*重采样*到 44100 Hz（因此也会产生 44100 个采样帧），并持续 1 秒：44100 帧 / 44100 Hz = 1 秒。

> [!NOTE]
> 音频重采样与图片的缩放非常类似：假设你有一张 16 x 16 的图片，但希望它填充一个 32 x 32 的区域，你就需要对它进行缩放（重采样）。缩放后的结果质量会有所下降（可能会变得模糊或出现锯齿，取决于缩放算法），但它仍然可用，而且缩放后的图片占用的空间更小。重采样的音频原理相同——你能节省一些空间，但是也会无法准确再现高频内容（高音区）。

现在来看一个更加复杂的 `createBuffer()` 示例，我们将创建一个 3 秒的音频片段，用白噪声填充它，之后通过一个音频片段源节点（{{ domxref("AudioBufferSourceNode") }}）播放。代码中的注释应该能充分解释发生了什么。你可以[实时运行代码](https://mdn.github.io/webaudio-examples/audio-buffer/)，或者[查看源代码](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html)。

```js
const audioCtx = new AudioContext();

// 创建一个 3 秒的立体声空音频片段，采样率与 AudioContext 相同
const myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// 使用白噪声填充音频片段
// 即 -1.0 到 1.0 之间的随机数
for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // 这会给我们提供包含数据的实际 ArrayBuffer
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < myArrayBuffer.length; i++) {
    // Math.random() 的范围是 [0; 1.0]
    // 音频需要在 [-1.0; 1.0] 之间
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

// 获取一个 AudioBufferSourceNode
// 这是当我们想要播放 AudioBuffer 时所使用的 AudioNode
const source = audioCtx.createBufferSource();
// 设置 AudioBufferSourceNode 的 buffer
source.buffer = myArrayBuffer;
// 将 AudioBufferSourceNode 连接到 destination，这样我们就能听到声音了
source.connect(audioCtx.destination);
// 开始播放音频源
source.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 音频 API 的运用](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
