---
title: AudioContext.resume()
slug: Web/API/AudioContext/resume
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} 的 `resume()` 方法，恢复之前暂停播放的音频。

如果在 {{domxref("OfflineAudioContext")}} 上调用，会导致 `INVALID_STATE_ERR` 错误。

## 语法

```js
var audioCtx = new AudioContext();
audioCtx.resume().then(function() { ... });
```

### 结果

{{jsxref("Promise")}}成功的话返回空值，返回失败是因为 context 已经关闭了。

## 示例

下面的代码是 [AudioContext states demo](https://github.com/mdn/audiocontext-states/settings) ([see it running live](http://mdn.github.io/audiocontext-states/)) 的一部分。当点击暂停／恢复按钮的时候，需要{{domxref("AudioContext.state")}}做判断：如果是运行状态，调用{{domxref("suspend()")}}，如果是暂停状态，调用`resume()。每次点击事件成功后，按钮的文字也会随着变成对应的状态`。

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

## 规范

{{Specifications}}

## 兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
