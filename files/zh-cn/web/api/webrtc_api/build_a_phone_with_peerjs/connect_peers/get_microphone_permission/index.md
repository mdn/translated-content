---
title: 获取麦克风权限
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}

在创建对等方后，你将希望获得浏览器访问麦克风的权限。我们将使用 [`navigator.mediaDevices`](/zh-CN/docs/Web/API/Navigator/mediaDevices) 对象的 [`getUserMedia()`](/zh-CN/docs/Web/API/MediaDevices/getUserMedia) 方法。`getUserMedia()` 端点接受一个 `constraints` 对象，该对象指定所需的权限。`getUserMedia()` 是一个 promise，当成功兑现时，会返回一个包含来自我们流的音频的 [`MediaStream`](/zh-CN/docs/Web/API/MediaStream) 对象。如果 promise 没有成功兑现，你将需要捕获并显示错误。

1. 在你的 `script.js` 文件底部添加以下代码：

   ```js
   function getLocalStream() {
     navigator.mediaDevices
       .getUserMedia({ video: false, audio: true })
       .then((stream) => {
         window.localStream = stream; // A
         window.localAudio.srcObject = stream; // B
         window.localAudio.autoplay = true; // C
       })
       .catch((err) => {
         console.error(`you got an error: ${err}`);
       });
   }
   ```

   让我们解释一下最重要的几行：

   - `window.localStream = stream` 将 `MediaStream` 对象（我们在上一行赋值给 `stream` 的对象）附加到窗口的 `localStream`。
   - `window.localAudio.srcObject = stream` 将 ID 为 `localAudio` 的 [`<audio>` 元素](/zh-CN/docs/Web/HTML/Element/audio)的 `src` 属性设置为由 promise 返回的 `MediaStream`，以便它会播放我们的流。
   - `window.localAudio.autoplay = true` 将 `<audio>` 元素的 `autoplay` 属性设置为 true，以便音频自动播放。

   > [!WARNING]
   > 如果你在网上进行了一些调查，可能会发现 [`navigator.getUserMedia`](/zh-CN/docs/Web/API/Navigator/getUserMedia) 并认为你可以使用它而不是 `navigator.mediaDevices.getUserMedia`。你是错误的。前者是一个已弃用的方法，它需要回调以及约束作为参数。后者使用 promise，因此你不需要使用回调。

2. 通过在代码底部添加以下行来尝试调用你的 `getLocalStream` 函数：

   ```js
   getLocalStream();
   ```

3. 刷新你的应用程序，它应该仍在 `localhost:8000` 上运行；你应该看到以下权限弹出窗口：

   ![一个浏览器权限对话框，上面写着“http://localhost:8000 想要使用你的麦克风”，下面有两个选项：“阻止”和“允许”](use_microphone_dialogue_box.png)

4. 在允许麦克风使用之前，插入一些耳机，这样当你稍后取消静音时，你不会听到任何反馈。如果你没有看到权限提示，请打开检查器查看是否有任何错误。确保你的 JavaScript 文件正确链接到你的 `index.html`。

这就是所有内容的综合效果：

```js
/* 全局对等方 */

/**
 * 获取当前呼叫者的本地音频流
 * @param callbacks - 一个对象，用于设置成功或错误时的行为
 * @returns {void}
 */

function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream;
      window.localAudio.srcObject = stream;
      window.localAudio.autoplay = true;
    })
    .catch((err) => {
      console.error(`你得到了一个错误：${err}`);
    });
}

getLocalStream();
```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}
