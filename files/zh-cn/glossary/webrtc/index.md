---
title: WebRTC
slug: Glossary/WebRTC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**WebRTC**（_Web 实时通信_）是一个可以用在视频聊天、音频聊天或 P2P 文件分享等 Web 应用中的 {{Glossary("API")}}。

WebRTC 主要由以下几个部分组成：

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : 获取设备的摄像头与（或）麦克风权限，并将这些信号接入 RTC 连接。
- {{domxref("RTCPeerConnection")}}
  - : 用于配置音频或视频聊天的接口。
- {{domxref("RTCDataChannel")}}
  - : 用于设置两个浏览器之间的{{Glossary("P2P", "端到端")}}数据连接。

## 参见

- 维基百科上的 [WebRTC](https://zh.wikipedia.org/wiki/WebRTC)
- [MDN 上的 WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [WebRTC 的浏览器支持](https://caniuse.com/rtcpeerconnection)
