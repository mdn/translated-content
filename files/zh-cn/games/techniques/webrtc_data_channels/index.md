---
title: WebRTC 数据通道
slug: Games/Techniques/WebRTC_data_channels
l10n:
  sourceCommit: 1807880849aac9898e04e78605f31b29c6f4da21
---

[WebRTC](/zh-CN/docs/Web/API/WebRTC_API)（Web 实时通信）API 主要以其对音频和视频通信的支持而闻名；然而，它也提供了点对点的数据通道。本文将对此进行详细说明，并展示如何利用库在你的游戏中实现数据通道。

## 什么是数据通道？

WebRTC 数据通道允许你通过活动连接向对等方发送文本或二进制数据。在游戏中，这就可以让玩家间相互发送数据（无论是进行文本聊天还是交换游戏状态信息）。数据通道有两种类型。

**可靠通道**保证你发送的消息会到达另一端，并且顺序与发送时一致。这类似于 TCP 套接字。

**不可靠通道**则不做此类保证；消息不保证按特定顺序到达，甚至可能根本无法到达。这类似于 UDP 套接字。

我们有[关于使用 WebRTC 的文档](/zh-CN/docs/Web/API/WebRTC_API)。不过，本文将利用一些可以简化工作的库，并演示如何通过抽象来规避不同浏览器之间的实现差异。当然，我们希望这些差异最终能够消失。

## 原始文档信息

- 作者：Alan Kligman
- 原文：[WebRTC Data Channels for Great Multiplayer](https://hacks.mozilla.org/2013/03/webrtc-data-channels-for-great-multiplayer/)
- 其他贡献者：Robert Nyman
- 版权信息：Alan Kligman，2013
