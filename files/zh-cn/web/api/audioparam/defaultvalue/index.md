---
title: AudioParam：defaultValue 属性
short-title: defaultValue
slug: Web/API/AudioParam/defaultValue
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{ domxref("AudioParam") }} 接口的只读属性 **`defaultValue`** 表示创建该 `AudioParam` 的特定 {{domxref("AudioNode")}} 所定义属性的初始值。

## 值

浮点数 {{jsxref("Number")}}。

## 示例

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const defaultVal = gainNode.gain.defaultValue;
console.log(defaultVal); // 1
console.log(defaultVal === gainNode.gain.value); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
