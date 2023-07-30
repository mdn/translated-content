---
title: OscillatorNode.frequency
slug: Web/API/OscillatorNode/frequency
---

{{ APIRef("Web Audio API") }}

{{ domxref("OscillatorNode") }} 的 `frequency 属性的接口`是 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}，表示振荡的频率，单位 HZ（hertz）

## 语法

```js
var oscillator = audioCtx.createOscillator();
oscillator.frequency.value = 440; // value in hertz
```

> **备注：** 虽然返回的 `AudioParam` 是只读的，但是它表示的值不是。

### 值

一个 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} 的值

## 示例

下列示例使用 {{ domxref("AudioContext") }} 创建了一个 oscillator node. 这是一个用于展示的示例，查看 [Violent Theremin demo](http://mdn.github.io/violent-theremin/) ([see app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js) 是相关代码).

```js
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.value = 440; // value in hertz
oscillator.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
