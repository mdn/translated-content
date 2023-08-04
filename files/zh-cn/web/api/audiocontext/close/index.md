---
title: AudioContext.close()
slug: Web/API/AudioContext/close
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}的`close()`方法可以关闭 audio context，同时释放占用的所有系统资源。

关闭的 context 不能用来创建新节点，但可以解码音频数据，创建 buffer 等等

该函数不会自动释放所有用`AudioContext 创建的对象`，除非其他引用也都已经解除了。但是，它会强制释放所有可能阻止其他`AudioContexts 被创建或使用`的系统音频资源。挂起 audio context 中音频时间的进度，并停止对音频数据的处理。所有的 AudioContext 创建/阻塞资源都被释放后，返回的{{jsxref("Promise")}}才会被释放。如果在一个{{domxref("OfflineAudioContext")}}上调用该方法，则会抛出`INVALID_STATE_ERR` 异常。

## 语法

```js
var audioCtx = new AudioContext();
audioCtx.close().then(function() { ... });
```

### 返回值

一个 resolve void 值得 {{jsxref("Promise")}}。

## 例子

下面这段代码是[AudioContext states demo](https://github.com/mdn/audiocontext-states/settings) ([直接运行](http://mdn.github.io/audiocontext-states/)) 中的，点击停止按钮调用`close()`。promise 释放后，回到初始状态。

```js
stopBtn.onclick = function () {
  audioCtx.close().then(function () {
    startBtn.removeAttribute("disabled");
    susresBtn.setAttribute("disabled", "disabled");
    stopBtn.setAttribute("disabled", "disabled");
  });
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
