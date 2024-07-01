---
title: RTCPeerConnection.ondatachannel
slug: Web/API/RTCPeerConnection/datachannel_event
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.ondatachannel`** 属性是一个事件处理器，当 `datachannel` 事件在 {{domxref("RTCPeerConnection")}} 发生时，它指定的那个事件处理函数就会被调用。这个事件继承于 {{domxref("RTCDataChannelEvent")}}，当远方伙伴调用 {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} 时这个事件被加到这个连接（RTCPeerConnection）中。

在这个事件被收到的同时，这个 {{domxref("RTCDataChannel")}} 实际上并没有打开，确保在 open 这个事件在`RTCDataChannel`触发以后才去使用它。

## 语法

```plain
RTCPeerConnection.ondatachannel = function;
```

### 值

将这个属性设置为接受一个参数的函数：这个参数是一个{{domxref("RTCDataChannelEvent")}}，它的 channel 属性是一个已经创建了的{{domxref("RTCDataChannel")}}对象

## 示例

```js
pc.ondatachannel = function (ev) {
  console.log("Data channel is created!");
  ev.channel.onopen = function () {
    console.log("Data channel is open and ready to be used.");
  };
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [使用 WebRTC data channel](/zh-CN/docs/Web/API/WebRTC_API/Using_data_channels)
- [RTCDataChannel 简单示例](/zh-CN/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
