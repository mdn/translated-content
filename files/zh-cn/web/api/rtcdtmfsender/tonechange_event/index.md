---
title: RTCDTMFSender：tonechange 事件
slug: Web/API/RTCDTMFSender/tonechange_event
---

{{APIRef("WebRTC")}}

**`tonechange`** 事件会被 [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API) 发送给 {{domxref("RTCDTMFSender")}}，以指示先前（通过调用 {{domxref("RTCDTMFSender.insertDTMF()")}}）排队等待发送的 {{Glossary("DTMF")}} 音调何时开始和结束。

要确定哪个音调开始播放，或者音调是否停止播放，请检查事件的 {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} 属性的值。

此事件不可取消，也不会冒泡。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("tonechange", (event) => {});

ontonechange = (event) => {};
```

## 事件类型

一个 {{domxref("RTCDTMFToneChangeEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## 事件属性

_除了 {{domxref("Event")}} 的属性外，此接口还提供以下属性：_

- {{domxref("RTCDTMFToneChangeEvent.tone")}} {{ReadOnlyInline}}
  - : 一个字符串，指定已开始播放的音调，或者如果上一个音调已完成播放，则为空字符串（`""`）。

## 示例

此示例建立了一个处理 `tonechange` 事件的处理器，它会更新一个元素以在其内容中显示当前播放的音调，或者，如果所有音调都已播放，则显示字符串 "\<none>"。

这可以使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 来完成：

```js
dtmfSender.addEventListener(
  "tonechange",
  (ev) => {
    let tone = ev.tone;
    if (tone === "") {
      tone = "&lt;none&gt;";
    }

    document.getElementById("playingTone").innerText = tone;
  },
  false,
);
```

你还可以直接设置 `ontonechange` 事件处理器属性：

```js
dtmfSender.ontonechange = (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&lt;none&gt;";
  }

  document.getElementById("playingTone").innerText = tone;
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
