---
title: AudioContext.suspend()
slug: Web/API/AudioContext/suspend
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} 接口的`suspend()` 方法暂停音频上下文对象中的进度，并暂时剥离进程对音频设备硬件的访问权限，减少 CPU 和电池的使用。当程序在一段时间内不会使用音频上下文对象时，这个方法对减少硬件资源占用是非常有用的。

若对{{domxref("OfflineAudioContext")}} 调用此方法，将会抛出 `INVALID_STATE_ERR` 错误。

## Syntax

```js
var audioCtx = new AudioContext();
audioCtx.suspend().then(function() { ... });
```

### Returns

A {{jsxref("Promise")}} that resolves with void. The promise is rejected if the context has already been closed.

## Example

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/audiocontext-states/settings) ([see it running live](http://mdn.github.io/audiocontext-states/).) When the suspend/resume button is clicked, the {{domxref("AudioContext.state")}} is queried — if it is `running`, `suspend()` is called; if it is `suspended`, {{domxref("resume")}} is called. In each case, the text label of the button is updated as appropriate once the promise resolves.

```js
susresBtn.onclick = function () {
  if (audioCtx.state === "running") {
    audioCtx.suspend().then(function () {
      susresBtn.textContent = "Resume context";
    });
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume().then(function () {
      susresBtn.textContent = "Suspend context";
    });
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
