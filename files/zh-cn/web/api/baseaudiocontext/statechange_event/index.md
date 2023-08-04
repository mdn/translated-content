---
title: AudioContext.onstatechange
slug: Web/API/BaseAudioContext/statechange_event
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} 的 `onstatechange` 属性定义了一个事件处理器函数，触发 [`statechange`](/zh-CN/docs/Web/API/RTCIceTransport/statechange_event) 会被调用，也就是说 audio context 的状态发生变化时会执行。

## 语法

```js
var audioCtx = new AudioContext();
audioCtx.onstatechange = function() { ... };
```

## 例子

下面这段代码是[AudioContext states DEMO](https://github.com/mdn/audiocontext-states/settings) ([直接运行](http://mdn.github.io/audiocontext-states/)) 中的，其中 `onstatechange` 处理器会在每次当前 {{domxref("state")}} 发生变化时把它输出到控制台。

```js
audioCtx.onstatechange = function () {
  console.log(audioCtx.state);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
