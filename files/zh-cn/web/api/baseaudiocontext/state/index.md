---
title: AudioContext.state
slug: Web/API/BaseAudioContext/state
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}的 `state` 属性是只读的，返回 `AudioContext` 的当前状态。

## 语法

```js
var audioCtx = new AudioContext();
var myState = audioCtx.state;
```

### 返回值

{{domxref("DOMString")}}，可能的值如下：

- `suspended`: audio context 被阻塞了 (用{{domxref("AudioContext.suspend()")}} 方法)
- `running`: audio context 正常运行
- `closed`: audio context 被关闭了 (用{{domxref("AudioContext.close()")}}方法)

## 例子

下面这段代码是[AudioContext states demo](https://github.com/mdn/audiocontext-states/settings) (直接运行) 中的，其中{{domxref("AudioContext.onstatechange")}}处理器会在每次当前状态发生变化时把它输出到控制台。

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
