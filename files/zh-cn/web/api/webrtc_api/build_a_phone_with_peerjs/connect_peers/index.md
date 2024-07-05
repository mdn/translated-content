---
title: 连接对等方
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission")}}

在上一篇文章中，我们设置了服务器，但由于我们尚未提供任何内容，因此它还没有起作用。这是你一直在等待的部分——实际上创建客户端对等连接和呼叫逻辑。这将是一个复杂的过程，但我们已将其分为许多子部分，因此你可以轻松地逐个部分处理。

1. 首先，在与其他文件相同的位置创建一个 `script.js` 文件——这是你所有逻辑的存放地点。
2. 我们需要创建一个带有 ID 的对等对象。该 ID 将用于将两个对等点连接在一起，如果你不创建，系统将会为对等点分配。将以下内容添加到 `script.js` 文件中：

   ```js
   const peer = new Peer(
     `${Math.floor(Math.random() * 2 ** 18)
       .toString(36)
       .padStart(4, 0)}`,
     {
       host: location.hostname,
       debug: 1,
       path: "/myapp",
     },
   );
   ```

3. 接下来，你需要将 peer 附加到 window 对象上，以便可以访问它。在你之前的代码下面添加以下行：

   ```js
   window.peer = peer;
   ```

4. 在另一个终端窗口中，通过在手机应用目录的根目录中运行以下命令来启动对等服务器：

   ```bash
   peerjs --port 443 --key peerjs --path /myapp
   ```

这看起来与我们在上一步创建的对等服务器非常相似；这是客户端部分。为了让浏览器连接到正在运行的对等服务器，我们需要告诉它如何连接；上面的代码就是这样做的。

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission")}}
