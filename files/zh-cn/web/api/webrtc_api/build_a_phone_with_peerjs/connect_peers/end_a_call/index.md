---
title: 结束呼叫
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading")}}

你已经快完成了！最后一件事是确保你的呼叫者有一种结束通话的方式。最优雅的方式是使用 `close()` 函数关闭连接，你可以在挂断按钮的事件侦听器中执行这个操作。

1. 在你的 `script.js` 文件的末尾添加以下内容：

   ```js
   const hangUpBtn = document.querySelector(".hangup-btn");
   hangUpBtn.addEventListener("click", () => {
     conn.close();
     showCallContent();
   });
   ```

2. 当连接关闭时，你还需要显示正确的 HTML 内容，所以你可以直接调用你的 `showCallContent()` 函数。在 `call` 事件内部，你还需要确保远程浏览器也更新。为了实现这一点，在 `peer.on('call', (stream) => { }` 事件监听器内部，添加另一个事件监听器在条件块内。

   ```js
   conn.on("close", () => {
     showCallContent();
   });
   ```

   这样，如果发起通话的人首先点击了“挂断”，两个浏览器仍然会更新到新的状态。

3. 再次测试你的应用程序，并尝试关闭通话。

> [!NOTE]
> 在 `conn` 变量上调用的 `on('close')` 事件在 Firefox 中尚不可用；这意味着在 Firefox 中，每个呼叫者都必须单独挂断。

> [!WARNING]
> 目前我们编写的代码意味着当一个连接关闭时，**只有**发起通话的人首先点击“挂断”时，两个浏览器才会更新。如果回答通话的人先点击“挂断”，则另一个呼叫者也必须点击“挂断”才能看到正确的 HTML。

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading")}}
