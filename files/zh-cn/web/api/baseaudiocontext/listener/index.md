---
title: AudioContext.listener
slug: Web/API/BaseAudioContext/listener
---
{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}的`listener属性`返回一个{{ domxref("AudioListener") }} 对象，可以用来实现 3D 音频空间化。

## 语法

```js
var audioCtx = new AudioContext();
var myListener = audioCtx.listener;
```

### 返回值

An {{ domxref("AudioListener") }} object.

## 例子

> **备注：** 想要完整的音频空间化例子，可以查看[panner-node](https://github.com/mdn/panner-node) DEMO

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

...

var myListener = audioCtx.listener;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.BaseAudioContext.listener")}}

## 另见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
