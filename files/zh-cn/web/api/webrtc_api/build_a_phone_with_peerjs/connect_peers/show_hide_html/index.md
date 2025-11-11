---
title: 显示和隐藏 HTML
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html
l10n:
  sourceCommit: 810f6895496d1525bb7800abfef363d6c1da9bb8
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}

好了，你已经设置好了麦克风权限。下一步是确保每个用户知道他们的对等方 ID，以便他们可以建立连接。PeerJS 框架为我们提供了一堆可以在之前创建的对等方上调用的事件监听器。

1. 让我们使用 `open` 事件创建一个当对等方打开时显示对等方的 ID 的监听器。将以下代码添加到 `script.js` 的底部：

   ```js
   peer.on("open", () => {
     window.caststatus.textContent = `Your device ID is: ${peer.id}`;
   });
   ```

   这里你正在替换 ID 为 `caststatus` 的 HTML 元素的文本。

2. 尝试在浏览器中重新加载应用程序。不再显示 `connecting...`，而是应该看到 `Your device ID is: <peer ID>`。

   ![一个深绿色粗体字的奶油色背景，上面写着“phone a friend”。紧接着是“Your device ID is: 3b77”，下面是“please use headphones!”。然后是一个大的深绿色按钮，上面写着“Call”，颜色与背景相同。](app_showing_device_id.png)

3. 当你在这里时，也可以创建一些函数来显示和隐藏各种内容，稍后会用到。你应该创建两个函数，`showCallContent()` 和 `showConnectedContent()`。这些函数将负责在适当时显示呼叫按钮，显示挂断按钮和音频元素。

   ```js
   const audioContainer = document.querySelector(".call-container");

   // 显示呼叫按钮和对等方 ID
   function showCallContent() {
     window.caststatus.textContent = `Your device ID is: ${peer.id}`;
     callBtn.hidden = false;
     audioContainer.hidden = true;
   }

   // 显示音频控件和正确的副本
   function showConnectedContent() {
     window.caststatus.textContent = "You're connected";
     callBtn.hidden = true;
     audioContainer.hidden = false;
   }
   ```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection")}}
