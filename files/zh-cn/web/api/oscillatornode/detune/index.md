---
title: OscillatorNode.detune
slug: Web/API/OscillatorNode/detune
---

{{ APIRef("Web Audio API") }}

{{ domxref("OscillatorNode") }} 的 `detune 属性的接口`是 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} ，代表振荡频率的失谐量（[cents](http://en.wikipedia.org/wiki/Cent_%28music%29)）。

## 语法

```js
var oscillator = audioCtx.createOscillator();
oscillator.detune.value = 100; // value in cents
```

> **备注：** 虽然返回的 `AudioParam` 是只读的，但是它表示的值不是。

### 值

一个 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} 的值

## 示例

下面的例子使用 {{ domxref("AudioContext") }} 创建了一个 oscillator node。这是已经在运行的例子，查看 [Violent Theremin demo](http://mdn.github.io/violent-theremin/) ([see app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js) 是相关源码)。

```js
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.value = 440; // value in hertz
oscillator.detune.value = 100; // value in cents
oscillator.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
