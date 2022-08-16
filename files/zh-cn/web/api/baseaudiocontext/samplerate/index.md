---
title: AudioContext.sampleRate
slug: Web/API/BaseAudioContext/sampleRate
---
{{ APIRef("Web Audio API") }}

{{domxref("AudioContext")}} 的 `sampleRate` 属性返回一个浮点数表示采样率（每秒采样数），同一个 AudioContext 中的所有节点采样率相同，所以不支持采样率转换。

## 语法

```js
var audioCtx = new AudioContext();
var mySampleRate = audioCtx.sampleRate;
```

### 返回值

A floating point number.

## 例子

> **备注：** 想要完整的 Web Audio 实例，可以查看[MDN Github repo](https://github.com/mdn/)上的 Web Audio Demo，比如[panner-node](https://github.com/mdn/panner-node)。不妨试试在浏览器控制台输入`audioCtx.sampleRate`

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

...

console.log(audioCtx.sampleRate);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.BaseAudioContext.sampleRate")}}

## 另见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
