---
title: RTCPeerConnection.ontrack
slug: Web/API/RTCPeerConnection/track_event
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.ontrack`** 属性是一个事件处理器，此属性指定了在 {{domxref("RTCPeerConnection")}}接口上触发 `track` 事件时调用的方法。该方法接收一个 {{domxref("RTCTrackEvent")}} 类型的 event 对象，该 event 对象将在 {{domxref("MediaStreamTrack")}} 被创建时或者是关联到已被添加到接收集合的 {{domxref("RTCRtpReceiver")}} 对象中时被发送。

## 语法

```plain
RTCPeerConnection.ontrack = eventHandler;
```

### 参数

将`ontrack`设置为你提供的一个输入{{domxref("RTCTrackEvent")}}对象用于描述新的 track 将如何使用的方法。这一信息包含了代表新 track 的{{domxref("MediaStreamTrack")}}对象、{{domxref("RTCRtpReceiver")}}对象、{{domxref("RTCRtpTransceiver")}}对象以及一个{{domxref("MediaStream")}}对象列表，该对象列表表示该 track 是那个媒体流的一部分。

## 示例

本示例，从这篇文章的代码和视频调用的代码中，将传入的轨迹连接到将用于显示传入{{HTMLElement("video")}}元素。

```js
pc.ontrack = function (event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
};
```

在第一行代码中，我们的`ontrack` 事件处理器获取传入的第媒体流数组中的第一个，并赋值给 video 元素的[`srcobject`](/zh-CN/docs/Web/HTML/Element/video#srcobject) 。这样媒体流就和页面中的 video 元素结合起来以便于呈现给用户。第二行代码简单启用了“挂断”按钮，用户可以使用它去断开呼叫。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
