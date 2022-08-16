---
title: AudioContext.currentTime
slug: Web/API/BaseAudioContext/currentTime
---
{{ APIRef("Web Audio API") }}

`currentTime是`{{ domxref("AudioContext") }}的一个 read-only`属性，返回`double 秒（从 0 开始）表示一个只增不减的硬件时间戳，可以用来控制音频回放，实现可视化时间轴等等。

## 语法

```js
var audioCtx = new AudioContext();
console.log(audioCtx.currentTime);
```

### 返回值

A double.

## 例子

> **备注：** 想要*完整的 Web Audio 例子的话*，可以去[MDN Github repo](https://github.com/mdn/)看 DEMO（例如[panner-node](https://github.com/mdn/panner-node)）。_不妨试试在浏览器控制台输入_`audioCtx.currentTime`。

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

...

console.log(audioCtx.currentTime);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.BaseAudioContext.currentTime")}}

## 另见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
