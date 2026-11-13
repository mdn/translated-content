---
title: OscillatorNode：frequency 属性
short-title: frequency
slug: Web/API/OscillatorNode/frequency
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("Web Audio API") }}

{{ domxref("OscillatorNode") }} 接口的 **`frequency`** 属性是一个表示振荡器的频率（单位为赫兹）的 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}。

> [!NOTE]
> 尽管返回的 `AudioParam` 是只读的，但它所表示的数值并不是只读的。

## 值

一个 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) 类型的 {{domxref("AudioParam")}}。

## 示例

下面的示例展示了如何使用 {{ domxref("AudioContext") }} 创建一个振荡器节点的基本用法。若要查看实际应用示例，请参阅我们的 [Violent Theremin 演示](https://mdn.github.io/webaudio-examples/violent-theremin/)（相关代码[参见 app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js)）。

```js
// 创建 web 音频 api 上下文
const audioCtx = new AudioContext();

// 创建振荡器节点
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // 赫兹值
oscillator.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
