---
title: WaveShaperNode.curve
slug: Web/API/WaveShaperNode/curve
---

{{ APIRef("Web Audio API") }}

{{ domxref("WaveShaperNode") }} 接口的 `curve` 属性是一个描述要被应用的畸变的{{domxref("Float32Array")}} 数组。

数组的中间元素被应用于每个信号数值 `0`，第一个应用于信号数值 `-1`，最后一个应用于信号数值 `1`；小于 `-1` 或者大于 `1` 的数值分别按照 `-1` 和 `1` 来处理。

如有必要，使用线性插值计算畸变曲线的中间值。

> [!NOTE]
> 数组的值可以是 `null` : 在这个情况下，不会有畸变被应用到输入的信号上。

## 语法

```js
var audioCtx = new AudioContext();
var distortion = audioCtx.createWaveShaper();
distortion.curve = myCurveDataArray; // myCurveDataArray is a Float32Array
```

### Value

一个 {{domxref("Float32Array")}}.

## 示例

参见 [`BaseAudioContext.createWaveShaper()`](/zh-CN/docs/Web/API/BaseAudioContext/createWaveShaper#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
