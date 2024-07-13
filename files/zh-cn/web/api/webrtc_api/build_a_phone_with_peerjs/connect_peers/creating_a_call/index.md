---
title: 创建呼叫
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call
l10n:
  sourceCommit: 65cd9754ed95f116b641c68cad80f14ecf580b41
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}

令人兴奋的时刻——现在你将让用户能够创建通话。

1. 首先，通过将以下内容添加到 `script.js` 文件的底部，获取对 HTML 中定义的“Call”按钮的引用：

   ```js
   const callBtn = document.querySelector(".call-btn");
   ```

2. 当呼叫者点击“Call”时，你将要求他们提供要呼叫的对等方的对等方 ID（我们将在 `getStreamCode()` 中将其存储在 `code` 变量中），然后你需要使用这一代码来创建连接。在上述代码的下方添加以下内容：

   ```js
   callBtn.addEventListener("click", () => {
     getStreamCode();
     connectPeers();
     const call = peer.call(code, window.localStream); // A

     call.on("stream", (stream) => {
       // B
       window.remoteAudio.srcObject = stream; // C
       window.remoteAudio.autoplay = true; // D
       window.peerStream = stream; //E
       showConnectedContent(); //F    });
     });
   });
   ```

   让我们逐步解读这段代码：

   - `const call = peer.call(code, window.localStream)`：这将使用我们之前赋值的 `code` 和 `window.localStream` 创建一个呼叫。请注意，`localStream` 将是用户的 `localStream`。因此，对于呼叫者 A，它将是他们的流，而对于 B，它将是他们自己的流。
   - `call.on('stream', (stream) => {`：peerJS 为我们提供了一个 `stream` 事件，你可以在已创建的 `call` 上使用它。当呼叫开始流式传输时，你需要确保将从呼叫中传来的远程流赋值到正确的 HTML 元素和窗口，这就是你要做的事情。
   - 匿名函数以 `MediaStream` 对象作为参数，然后你必须将其设置为你窗口的 HTML，就像之前所做的那样。在这里，我们获取你的远程 `<audio>` 元素，并将传递给函数的流赋值给 `srcObject` 属性。
   - 确保元素的 `autoplay` 属性也设置为 `true`。
   - 确保窗口的 `peerStream` 设置为传递给函数的流。
   - 最后，你希望显示正确的内容，因此调用你之前创建的 `showConnectedContent()` 函数。

3. 为了测试这个功能，打开两个浏览器窗口中的 `localhost:8000`，并在其中一个窗口中点击“Call”。你应该会看到这个页面：

   ![两个屏幕并排放置，都有浓郁的奶油色背景，标题为“phone a friend”，以黑色深绿色字体加粗显示。第一个屏幕下方显示“Your device ID is: 3b77”，第二个屏幕下方显示“Your device ID is: 2doa”，紧接着标题下方，显示“please use headphones!”。在下方，有一个大大的深绿色按钮，上面写着“Call”，字体颜色与背景色相同。第二个屏幕有一个浏览器对话框，询问对等方 ID。](screens_side_by_side.png)

   如果你提交了另一个对等方的 ID，呼叫将被连接！

到目前为止，一切都正常运行，但我们需要允许另一个浏览器接听或拒绝呼叫。我们将在下一步中处理这个。

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}
