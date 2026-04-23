---
title: 接听呼叫
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call
l10n:
  sourceCommit: 810f6895496d1525bb7800abfef363d6c1da9bb8
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}

现在我们的用户可以进行呼叫，但是他们无法接听来电。让我们添加下一块拼图，以便用户可以接听打给他们的电话。

1. PeerJS 框架使 `.on('call')` 事件可用，让我们在这里使用它。将此添加到 `script.js` 文件的底部：

   ```js
   peer.on("call", (call) => {
     const answerCall = confirm("Do you want to answer?");
   });
   ```

   首先，我们使用确认提示（confirm prompt）提示用户进行接听。这将在屏幕上显示一个窗口（如图所示），用户可以选择“确定”或“取消”——这对应于返回的布尔值。当你在浏览器中点击“呼叫”时，将出现以下提示：

   ![一个浏览器提示框，内容为“你想接听吗？”，有两个选项：“取消”和“确定”。](confirm_prompt.png)

   > [!WARNING]
   > 由于我们使用 `confirm` 提示来询问用户是否要接听呼叫，因此很重要的一点是被呼叫的浏览器和标签必须是“活动”的，这意味着窗口不能最小化，并且标签应该在屏幕上并且鼠标的焦点应该在其内部的某个地方。理想情况下，在这个应用的生产版本中，你应该在 HTML 中创建自己的模态窗口，它不会有这些限制。

2. 让我们充实这个事件监听器。更新如下：

   ```js
   peer.on("call", (call) => {
     const answerCall = confirm("Do you want to answer?");

     if (answerCall) {
       call.answer(window.localStream); // A
       showConnectedContent(); // B
       call.on("stream", (stream) => {
         // C
         window.remoteAudio.srcObject = stream;
         window.remoteAudio.autoplay = true;
         window.peerStream = stream;
       });
     } else {
       console.log("call denied"); // D
     }
   });
   ```

   让我们逐步讲解这段代码中最重要的部分：
   - `call.answer(window.localStream)`：如果 `answerCall` 是 `true`，你将想要调用 peerJS 的 `answer()` 函数来接听通话，传递本地流作为参数。
   - `showCallContent`：类似于你在呼叫按钮事件监听器中所做的，你希望被呼叫者看到正确的 HTML 内容。
   - `call.on('stream', () => { })` 块中的所有内容与呼叫按钮的事件监听器中的内容完全相同。之所以在这里也要添加它，是为了让浏览器也更新被呼叫者的视图。
   - 如果被呼叫者拒绝了通话，我们只会在控制台中记录一条消息。

3. 现在你已经有足够的代码来创建通话并接听它。刷新你的浏览器并进行测试。确保两个浏览器都打开了控制台，否则你将无法获得回答通话的提示。点击呼叫，提交另一个浏览器的对等 ID，然后接听通话。最终页面应该如下所示：

   ![两个屏幕并排，都是深奶油色的背景，用深绿色的粗体字显示着“给朋友打电话”。紧接着是“你已连接”的字样，再下方是“请使用耳机！”和“你已自动静音，请取消静音！”。接着是一个大的深红色按钮，上面用与背景相同的深奶油色写着“挂断”。](screens_side_by_side.png)

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}
