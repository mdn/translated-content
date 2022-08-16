---
title: AudioContext.destination
slug: Web/API/BaseAudioContext/destination
---
{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}的`destination属性返回一个`{{ domxref("AudioDestinationNode") }}表示 context 中所有音频（节点）的最终目标节点，一般是音频渲染设备，比如扬声器。

## 语法

```js
var audioCtx = new AudioContext();
gainNode.connect(audioCtx.destination);
```

### 返回值

An {{ domxref("AudioDestinationNode") }}.

## 例子

> **备注：** 想要完整的例子，可以去看看[MDN Github repo](https://github.com/mdn/)的 DEMO，比如[panner-node](https://github.com/mdn/panner-node)

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillatorNode.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.BaseAudioContext.destination")}}

## 另见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
