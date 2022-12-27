---
title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection()`** 构造函数，返回一个新建的 {{domxref("RTCPeerConnection")}} 实例，它代表了本地端机器与远端机器的一条连接。

## 语法

```plain
pc = new RTCPeerConnection([configuration]);
```

### 参数

- `configuration` {{optional_inline}}
  - : 一个[`RTCConfiguration` dictionary](#RTCConfiguration_dictionary) 提供了一条新建连接的可选参数。

### RTCConfiguration dictionary

{{page("/en-US/docs/Web/API/RTCConfiguration", "Properties")}}

### 返回值

一个新生成的 {{domxref("RTCPeerConnection")}} 对象，如果指定了配置信息，它按照指定配置进行配置，否则，它将按照基本配置进行配置。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 引申阅读

- [Signaling and video calling](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC architecture overview](/zh-CN/docs/Web/API/WebRTC_API/Architecture)
- [Lifetime of a WebRTC session](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
