---
title: 使用 PeerJS 构建一部联网电话
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

WebRTC 的主要问题之一是它相当复杂，使用和开发起来很复杂——处理信令服务并知道何时调用正确的端点可能会令人困惑。但也有一些好消息；[PeerJS](https://peerjs.com/) 是一个 WebRTC 框架，它抽象了所有的 ICE 和信令逻辑，让你可以专注于应用程序的功能。PeerJS 有两个部分，客户端框架和服务器。

在这一系列的文章中，我们将使用 PeerJS 创建一个简单的电话应用程序。我们将使用服务器和客户端框架，但我们的大部分工作将涉及处理客户端代码。

### 前提

这是一个中级教程；在尝试之前，你应该已经熟悉：

- [原生 JavaScript](/zh-CN/docs/Web/JavaScript)
- [Node](https://nodejs.org/en/docs/)
- [Express](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [HTML](/zh-CN/docs/Web/HTML)

在开始之前，你需要确保已经安装了 [node](https://nodejs.org/en/download/) 和 [Yarn](https://classic.yarnpkg.com/en/docs/install)（后续文章中的说明假设使用 Yarn，但你也可以选择使用 [npm](https://docs.npmjs.com/getting-started/) 或其他包管理器）。

> [!NOTE]
> 如果你更喜欢按步骤编码来学习，我们还提供了这个[代码教程](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial)，你可以使用它。

### 目录

1. [设置](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [构建服务器](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server)
3. [连接对等方](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)
   1. [获取麦克风权限](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [显示和隐藏 HTML](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [创建对等连接](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [创建呼叫](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [接听呼叫](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [结束呼叫](/zh-CN/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
