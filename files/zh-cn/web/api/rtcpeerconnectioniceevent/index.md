---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

**`RTCPeerConnectionIceEvent`** 接口表示与{{Glossary("ICE", "交互式连接建立")}}候选目标（通常是 {{domxref("RTCPeerConnection")}}）相关的事件。

只有一个事件属于这种类型：{{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}。

{{InheritanceDiagram}}

## 实例属性

_{{domxref("RTCPeerConnectionIceEvent")}} 是 {{domxref("Event")}}，该事件还实现了这些属性。_

- {{domxref("RTCPeerConnectionIceEvent.candidate")}} {{ReadOnlyInline}}
  - : 包含与事件相关联的 {{domxref("RTCIceCandidate")}} 候选项，如果此事件指示没有更多的候选项，则为 `null`。

## 构造函数

- {{domxref("RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent()", "RTCPeerConnectionIceEvent()")}}
  - : 返回新的 `RTCPeerConnectionIceEvent`。它接收两个参数，第一个是表示事件类型的字符串；第二个包含它所引用的 {{domxref("RTCIceCandidate")}} 的字典。

## 实例方法

_{{domxref("RTCPeerConnectionIceEvent")}} 是 {{domxref("Event")}}，因此该事件也实现了以下属性。没有特定的 {{domxref("RTCDataChannelEvent")}} 方法。_

## 示例

```js
pc.onicecandidate = (ev) => {
  console.log(
    `交互式连接候选地址（传输地址：“${ev.candidate.candidate}”）已添加到连接中。`,
  );
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
- 通常的目标是：{{domxref("RTCPeerConnection")}}。
