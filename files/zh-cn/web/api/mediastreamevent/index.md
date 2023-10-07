---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`MediaStreamEvent`** 接口表示发生在 {{domxref("MediaStream")}}中的事件。这种类型返回两个事件：{{domxref("RTCPeerConnection.addstream_event", "addstream")}} 和 {{domxref("RTCPeerConnection.removestream_event", "removestream")}}.

## Properties

_一个 {{domxref("MediaStreamEvent")}} 作为一个 {{domxref("Event")}}，该事件也实现了这些属性。_

- {{domxref("MediaStreamEvent.stream")}} {{readOnlyInline}}
  - : 包含了 {{domxref("MediaStream")}} 以及相关的事件流。

## Constructors

- {{domxref("MediaStreamEvent.MediaStreamEvent()", "MediaStreamEvent()")}}
  - : 返回一个新的 `MediaStreamEvent`. 它需要两个参数，第一个为 {{domxref("DOMString")}} 代表事件的类型；第二个是一个 {{domxref("MediaStream")}} 集合。

## Methods

_一个 {{domxref("MediaStreamEvent")}} 作为一个 {{domxref("Event")}}, 这个事件也实现了这些属性_. _没有特定的 _{{domxref("MediaStreamEvent")}}_ 方法。_

## 示例

```js
pc.onaddstream = function (ev) {
  alert(
    "A stream (id: '" + ev.stream.id + "') has been added to this connection.",
  );
};
```

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/Guide/API/WebRTC)
- Its usual target: {{domxref("RTCPeerConnection")}}.
