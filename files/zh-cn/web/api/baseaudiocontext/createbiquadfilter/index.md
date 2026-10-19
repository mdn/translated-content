---
title: BaseAudioContext：createBiquadFilter() 方法
short-title: createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Web Audio API")}}

{{domxref("BaseAudioContext")}} 接口的 **`createBiquadFilter()`** 方法创建一个 {{domxref("BiquadFilterNode")}}，表示可配置为多种常见滤波器类型的二阶滤波器。

> [!NOTE]
> {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}} 构造函数是创建 {{domxref("BiquadFilterNode")}} 的推荐方式；请参见[创建一个音频节点](/zh-CN/docs/Web/API/AudioNode#创建一个音频节点)。

## 语法

```js-nolint
createBiquadFilter()
```

### 参数

无。

### 返回值

一个 {{domxref("BiquadFilterNode")}}。

## 示例

下面的示例展示了如何使用 AudioContext 创建 Biquad 滤波器节点。如需更完整的应用示例或信息，请查看我们的[变声器](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)演示（相关代码见 [app.js 第 108–193 行](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)）。

```js
const audioCtx = new AudioContext();

// 设置应用中会用到的各个音频节点
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// 将节点连接在一起

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// 操控 Biquad 滤波器

biquadFilter.type = "lowshelf";
biquadFilter.frequency.setValueAtTime(1000, audioCtx.currentTime);
biquadFilter.gain.setValueAtTime(25, audioCtx.currentTime);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
