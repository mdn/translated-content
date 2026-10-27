---
title: BaseAudioContext：statechange 事件
short-title: statechange
slug: Web/API/BaseAudioContext/statechange_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

当 {{DOMxRef("BaseAudioContext")}} 对象的 {{domxref("BaseAudioContext.state", "state")}} 成员发生变化时，会在该对象上触发 `statechange` 事件。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## 事件类型

通用的 {{domxref("Event")}}。

## 示例

以下代码片段摘自我们的 [AudioContext 状态演示](https://github.com/mdn/webaudio-examples)（[查看实时运行效果](https://mdn.github.io/webaudio-examples/audiocontext-states/)）。`onstatechange` 处理器用于在当前 {{domxref("BaseAudioContext.state", "state")}} 发生每次变化时，将其记录到控制台。

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
