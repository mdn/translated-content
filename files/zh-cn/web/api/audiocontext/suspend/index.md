---
title: AudioContext：suspend() 方法
slug: Web/API/AudioContext/suspend
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Web Audio API")}}

{{domxref("AudioContext")}} 接口的 `suspend()` 方法会暂停音频上下文中时间的推进，暂时停止对音频硬件的访问，从而降低 CPU 或电池占用——如果你希望应用在一段时间内不使用音频上下文时关闭音频硬件，此方法会很有用。

如果在 {{domxref("OfflineAudioContext")}} 上调用此方法，将抛出 `INVALID_STATE_ERR` 异常。

## 语法

```js-nolint
suspend()
```

### 参数

无。

### 返回值

一个兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。如果上下文已关闭，则该 Promise 会被拒绝。

## 示例

以下代码片段取自我们的 [AudioContext states 演示](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html)（[查看在线运行效果](https://mdn.github.io/webaudio-examples/audiocontext-states/)）。点击暂停/恢复按钮时，会查询 {{domxref("BaseAudioContext/state", "AudioContext.state")}}——如果状态为 `running`，则调用 `suspend()`；如果状态为 `suspended`，则调用 {{domxref("AudioContext/resume", "resume()")}}。在每种情况下，Promise 兑现后都会相应更新按钮的文本标签。

```js
susResBtn.onclick = () => {
  if (audioCtx.state === "running") {
    audioCtx.suspend().then(() => {
      susResBtn.textContent = "恢复上下文";
    });
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume().then(() => {
      susResBtn.textContent = "暂停上下文";
    });
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 音频 API 的运用](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
