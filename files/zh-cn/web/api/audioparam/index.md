---
title: AudioParam
slug: Web/API/AudioParam
---

{{APIRef("Web Audio API")}}

`AudioParam` 接口代表音频相关的参数，通常是一个 {{domxref("AudioNode")}} (例如 {{ domxref("GainNode.gain") }}) 的参数。一个 `AudioParam` 可以被设置为一个具体的值或者数值的改变，可以被安排在在一个具体的时刻并且遵循一个特定的模式发生。

下面有两种类型的 `AudioParam`, _a-rate_ 和 _k-rate_ 参数：

- 一个 _a-rate_ `AudioParam` 获取音频信号的每个[采样帧](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Audio_buffers.3A_frames.2C_samples_and_channels)的当前音频参数值。
- 一个 _k-rate_ `AudioParam` 对于待处理的整个块使用相同的初始音频参数值，即 128 个采样帧。

每个 {{domxref("AudioNode")}} 定义了其规格中哪一个参数是 _a-rate_ 或 _k-rate_。

每个 `AudioParam` 有一个事件的列表，初始化时列表为空。该列表定义了什么时候数值怎么改变。当这个列表不是空的时候，使用 `AudioParam.value` 属性的改变会被忽略。事件的列表允许我们去有计划地进行必须在非常精确的时间发生的更改，使用任意的基于时间轴的自动化曲线。被使用的时间在{{domxref("AudioContext.currentTime")}} 中被定义。

## 属性

`AudioParam` _继承的属性来自于它的父类，_ `AudioNode`。

- {{domxref("AudioParam.defaultValue")}} {{readonlyInline}}
  - : 代表被具体的{{domxref("AudioNode")}} 创建的 `AudioParam` 的属性的初始的音量。
- {{domxref("AudioParam.maxValue")}} {{readonlyInline}}
  - : 代表参数有效范围的最大可能值。
- {{domxref("AudioParam.minValue")}} {{readonlyinline}}
  - : 代表参数有效范围的最小可能值。
- {{domxref("AudioParam.value")}}
  - : 代表参数的浮点数音量值；初始化设定为 `AudioParam.defaultValue 的值。虽然它可以被设置，但是任何发生在自动化事件（事件被计划用于 AudioParam）的修改会被忽略，`没有任何例外。

## 方法

AudioParam _初始化的方法来自它的父类，_`AudioNode`.

- {{domxref("AudioParam.setValueAtTime()")}}
  - : 在一个确切的时间，即时更改 `AudioParam` 的值，按照{{domxref("AudioContext.currentTime")}} 的时间。新的值会被传递到 `value` 参数。
- {{domxref("AudioParam.linearRampToValueAtTime()")}}
  - : 调整 `AudioParam` 的值，使其逐渐按线性变化。这个改变会从上一个事件指定的事件开始，跟随一个线性“斜坡”到参数给的新值，并在 `endTime` 参数给定的时间到达新值。
- {{domxref("AudioParam.exponentialRampToValueAtTime()")}}
  - : 调整 `AudioParam` 的值，使其逐渐按指数变化。这个改变会从上一个事件指定的事件开始，跟随一个指数“斜坡”到参数给的新值，并在 `endTime` 参数给定的时间到达新值。
- {{domxref("AudioParam.setTargetAtTime()")}}
  - : 将开始计划改变 `AudioParam` 的值。这个改变将从 `startTime` 指定的时间开始，并且以指定的方式向目标参数给定的值改变。指数衰减速率由 `timeConstant` 参数定义，`time` 参数使以秒作为测量单位的时间。
- {{domxref("AudioParam.setValueCurveAtTime()")}}
  - : 调整 `AudioParam` 的值以跟随一组定义为 {{domxref("Float32Array")}} 的值，数值会缩放到适应给定的间隔，从 `startTime` 时间开始并具有特定的持续时间（duration）。
- {{domxref("AudioParam.cancelScheduledValues()")}}
  - : 取消全部在 `AudioParam` 中的未来计划发生的改变。
- {{domxref("AudioParam.cancelAndHoldAtTime()")}}
  - : 取消全部计划将来对 `AudioParam` 的改变，但是保持给定时间的值，直到将来的使用其他方法产生改变。新的值会被赋予到 `value` 属性中。

## 例子

首先，一个基础的例子展示了 {{domxref("GainNode")}} 拥有的 `gain` 一些值合。`gain` 是一个 a-rate AudioParam 的例子，因为该值可以针对音频的每个样本帧进行不同的设置。

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

另外，一个例子展示了 {{ domxref("BiquadFilterNode") }} 拥有的一些值。这是一个 k-rate AudioParam 的例子，因为一次为整个音频块设置的值。

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var biquadFilter = audioCtx.createBiquadFilter();

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
