---
title: OfflineAudioContext.OfflineAudioContext()
slug: Web/API/OfflineAudioContext/OfflineAudioContext
---

{{APIRef("Web Audio API")}}

**`OfflineAudioContext()`** 构造函数创建一个新的 {{domxref("OfflineAudioContext")}} 对象实例。

## 语法

```js-nolint
new OfflineAudioContext(options)

new OfflineAudioContext(numberOfChannels, length, sampleRate)
```

### 参数

- `numberOfChannels`
  - : An integer 代表该缓冲区拥有的声道的数目。该实现需要支持至少 32 个声道。
- `length`
  - : 代表采样帧缓冲区的大小的整数。
- `sampleRate`
  - : 采样帧每一秒的线性音频数据的采样率。该实现必须支持在 22050 到 96000 之间的采样率，44100 是最经常用到的采样率。

这里有个重要的警告，你可以通过不带参数的使用 `new AudioContext()` 构造函数创建一个新的 {{domxref("AudioContext")}}，但是 `OfflineAudioContext()` 构造函数必须带上三个参数。当你通过 {{domxref("AudioContext.createBuffer")}} 方法创建一个新的{{domxref("AudioBuffer")}} 时，你也是需要做一样的事情。想要知道更多信息，请阅读我们的基本概念指南的 [音频片段：帧，样本和声道](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#音频片段：帧，样本和声道)。

> **备注：** 像普通的 `AudioContext`，`OfflineAudioContext` 可以成为事件的目标，因此它的实现是 {{domxref("EventTarget")}} 接口。

## 例子

```js
// 定义一个在线或者离线的音频上下文

var audioCtx = new AudioContext();
var offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

source = offlineCtx.createBufferSource();

// 更多代码...
```

> **备注：** 想要获取完整的例子，请看我们在 Github 仓库的 [offline-audio-context-promise](http://mdn.github.io/offline-audio-context-promise/) （也可以看 [源代码](https://github.com/mdn/offline-audio-context-promise) ）

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
