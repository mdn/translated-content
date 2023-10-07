---
title: AudioParam
slug: Web/API/AudioParam
---

{{APIRef("Web Audio API")}}

Web Audio API 的 `AudioParam` 接口代表音频相关的参数，通常是 {{domxref("AudioNode")}}（例如 {{ domxref("GainNode.gain") }}）的参数。

`AudioParam` 可以用于安排在特定时间并遵循特定模式设置一个具体的值或者数值的变化过程。

每个 `AudioParam` 都有一个初始化为空的事件列表，用于定义值在何时发生的具体变化。当该列表不为空时，将忽略使用 `AudioParam.value` 属性进行的更改。该事件列表使我们能够使用任意基于时间线的自动化曲线来安排必须在非常精确的时间发生的更改。使用的时间定义于 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} 中。

## AudioParam 类型

有两种类型的 `AudioParam`：_a-rate_ 和 _k-rate_ 参数。规范中为每个 {{domxref("AudioNode")}} 都定义了其参数为 _a-rate_ 还是 _k-rate_。

### a-rate

_a-rate_ `AudioParam` 获取音频信号的每个[采样帧](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#音频片段：帧、样本和声道)的当前音频参数值。

### k-rate

_k-rate_ `AudioParam` 对待处理的整个块使用相同的初始音频参数值，即 128 个采样帧。换句话说，其将相同的值应用于节点处理的音频中的每一帧。

## 实例属性

- {{domxref("AudioParam.defaultValue")}} {{ReadOnlyInline}}
  - : 代表被具体的 {{domxref("AudioNode")}} 创建的 `AudioParam` 的属性的初始值。
- {{domxref("AudioParam.maxValue")}} {{ReadOnlyInline}}
  - : 代表参数有效范围的最大可能值。
- {{domxref("AudioParam.minValue")}} {{ReadOnlyInline}}
  - : 代表参数有效范围的最小可能值。
- {{domxref("AudioParam.value")}}
  - : 代表参数的当前浮点数音量值；初始化设定为 {{domxref("AudioParam.defaultValue", "defaultValue")}} 的值。

## 实例方法

- {{domxref("AudioParam.setValueAtTime()")}}
  - : 参照 {{domxref("AudioContext.currentTime")}}，安排在一个确切的时间，立即更改 `AudioParam` 的值。新的值由 `value` 参数给定。
- {{domxref("AudioParam.linearRampToValueAtTime()")}}
  - : 调整 `AudioParam` 的值，使其逐渐按线性变化。这个变化会从*上一个*事件指定的事件开始，跟随一个线性变化到参数给定的新值，并在 `endTime` 参数给定的时间到达新值。
- {{domxref("AudioParam.exponentialRampToValueAtTime()")}}
  - : 调整 `AudioParam` 的值，使其逐渐按指数变化。这个变化会从*上一个*事件指定的事件开始，跟随一个指数变化到参数给定的新值，并在 `endTime` 参数给定的时间到达新值。
- {{domxref("AudioParam.setTargetAtTime()")}}
  - : 安排逐渐改变 `AudioParam` 的值的开始时间。这个变化将从 `startTime` 指定的时间开始，并且以指定的方式向目标参数给定的值改变。指数衰减速率由 `timeConstant` 参数定义，以秒为单位。
- {{domxref("AudioParam.setValueCurveAtTime()")}}
  - : 调整 `AudioParam` 的值以跟随一组缩放到适应给定间隔的浮点数值，该间隔从给定的起始时间开始，持续一段给定的时长。
- {{domxref("AudioParam.cancelScheduledValues()")}}
  - : 取消所有安排的对 `AudioParam` 的未来的改变。
- {{domxref("AudioParam.cancelAndHoldAtTime()")}}
  - : 取消所有安排的对 `AudioParam` 的未来的改变，但是保持给定时间的值，直到将来的使用其他方法产生改变。

## 示例

首先，基础示例展示了如何设置 {{domxref("GainNode")}} 的 `gain` 值。`gain` 是 _a-rate_ `AudioParam` 的一个示例，因为该值可以针对音频的每个样本帧进行不同的设置。

```js
const audioCtx = new AudioContext();

const gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

下一个示例展示了如何修改 {{ domxref("DynamicsCompressorNode") }} 的一些参数值。这是 _k-rate_ `AudioParam` 的一个示例，因为它是一次可以为整个音频块设置的值。

```js
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
