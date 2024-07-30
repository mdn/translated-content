---
title: 创建对等连接
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call")}}

接下来，你需要确保用户有一种与其对等方连接的方法。为了连接两个对等方，你需要其中一个的对等方 ID。

1. 让我们创建一个变量来存储 ID，并创建一个函数来请求用户输入它，稍后我们将调用它。将以下内容添加到 `script.js` 文件的底部：

   ```js
   let code;
   function getStreamCode() {
     code = window.prompt("Please enter the sharing code");
   }
   ```

   [`window.prompt()`](/zh-CN/docs/Web/API/Window/prompt) 方法提供了一种方便的方式来获取相关的对等方 ID ——你可以在需要收集对等方 ID 以创建连接时使用它。

2. 使用 PeerJS 框架，你将希望将 `localPeer` 连接到 `remotePeer`。PeerJS 为我们提供了 `connect()` 函数，它接受一个要连接的对等方的 ID。将以下代码块添加到上述代码的下方：

   ```js
   let conn;
   function connectPeers() {
     conn = peer.connect(code);
   }
   ```

3. 当创建连接时，让我们使用 PeerJS 框架的 `on('connection')` 来设置远程对等方的 ID 并打开连接。此侦听器的函数接受一个 `connection` 对象，该对象是 `DataConnection` 对象的实例（它是围绕 WebRTC 的 [`RTCDataChannel`](/zh-CN/docs/Web/API/RTCDataChannel) 的包装器）；在此函数中，你将希望将其赋值给一个变量。同样，你需要在函数之外创建变量，以便稍后进行赋值。在上述代码的下方添加以下内容：

   ```js
   peer.on("connection", (connection) => {
     conn = connection;
   });
   ```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call")}}
