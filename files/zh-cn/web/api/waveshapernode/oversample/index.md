---
title: WaveShaperNode.oversample
slug: Web/API/WaveShaperNode/oversample
---

{{ APIRef("Web Audio API") }}

{{ domxref("WaveShaperNode") }} 接口的 `oversample` 属性是一个指示过采样是否必须使用的枚举值。过采样是一个用于在将畸变应用到音频信号之前创建更多的采样（上采样）的技术。

一旦被应用，采样的数值会被还原为初始的数值。这将通过避免一些混淆现象从而导致更好的结果，代价则是在畸变曲线上会有较低的精确度。

可用的`oversample` 值有：

| Value    | Effect                                |
| -------- | ------------------------------------- |
| `'none'` | 不使用过采样。                        |
| `'2x'`   | 在应用畸变曲线前将采样的数量翻倍。    |
| `'4x'`   | 在应用畸变曲线前将采样的数量翻 4 倍。 |

## 语法

```js
distortion.oversample = enumeratedValue;
```

### 值

- 畸变是一个{{domxref("WaveShaperNode")}}.
- 枚举值`'none'`， `'2x'`，或 `'4x'`。

## 示例

参见 [`BaseAudioContext.createWaveShaper()`](/zh-CN/docs/Web/API/BaseAudioContext/createWaveShaper#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
