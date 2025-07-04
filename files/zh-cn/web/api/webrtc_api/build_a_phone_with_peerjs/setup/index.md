---
title: 设置
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup
l10n:
  sourceCommit: f20e6e3ea01fe15f7d95420e43d199432f4ea8c4
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}

让我们开始为我们基于 WebRTC 的电话应用程序建立基础。

1. 首先，在你的本地文件结构中找到一个合适的位置，然后运行 `mkdir audio_app`，然后使用 `cd audio_app` 创建一个包含你的应用程序的目录并进入其中。
2. 接下来，通过运行 `yarn init` 创建一个新的应用程序。按照提示提供项目名称、版本、描述等信息。
3. 然后，使用以下命令安装所需的依赖项：
   - [Express](https://expressjs.com/)：`yarn add express`
   - [PeerJS](https://peerjs.com/docs/)：`yarn add peerjs`
   - [Peer](https://github.com/peers/peerjs-server)：`yarn add peer`

   Peer 用于对等服务器，而 PeerJS 用于访问 PeerJS API 和框架。安装完成依赖项后，你的 `package.json` 应该类似于以下内容：

   ```json
   {
     "name": "audio_app",
     "version": "1.0.0",
     "description": "An audio app using WebRTC",
     "scripts": {
       "start": "node server.js",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "Lola Odelola",
     "license": "MIT",
     "dependencies": {
       "express": "^4.17.1",
       "peer": "^0.5.3",
       "peerjs": "^1.3.1"
     }
   }
   ```

4. 完成设置后，你需要将以下 HTML 和 CSS 文件复制到项目文件夹的根目录中。你可以将这两个文件命名为 `index`，因此 HTML 文件将是 `index.html`，CSS 文件将是 `index.css`。在接下来的文章中，你不需要对这些文件进行太多修改。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Lola 的 Web 电话！</title>
    <meta
      property="og:description"
      content="将您的计算机投射到您的设备上以用作电话机提词器" />

    <!-- 导入网页的样式表 -->
    <link rel="stylesheet" href="/index.css" />
    <!-- 导入 javascript -->
    <script src="script.js" defer></script>
    <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/davidshimjs-qrcodejs@0.0.2/qrcode.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>给朋友打电话</h1>
      <p id="cast-status" class="big">连线中……</p>
      <p>请使用耳机！</p>
      <button class="call-btn">呼叫</button>
      <section class="call-container" hidden>
        <div class="audio-container">
          <p>您已自动静音，请取消静音！</p>
          <audio controls id="remoteAudio" muted="true"></audio>
          <audio controls id="localAudio" muted="true"></audio>
        </div>
        <button class="hangup-btn">挂断</button>
      </section>
    </div>

    <section class="modal" hidden>
      <div id="close">关闭</div>
      <div class="inner-modal">
        <label>请提供您朋友的设备 ID</label>
        <input placeholder="输入您朋友的设备 ID" aria-colcount="10" />
        <button class="connect-btn">连线</button>
      </div>
    </section>
  </body>
</html>
```

```css
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  color: darkslategrey;
  display: flex;
  align-items: center;
  justify-content: center;
  background: antiquewhite;
}

h1 {
  font-size: 6rem;
  letter-spacing: 0.2rem;
  margin-bottom: auto;
}

p {
  text-align: center;
  font-size: 2rem;
}

button {
  background-color: light-dark(white, black);
  padding: 1rem 10rem;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
}

.call-btn {
  background-color: darkslategrey;
  color: antiquewhite;
  font-size: 3rem;
  margin-left: 7rem;
}

.hangup-btn {
  background-color: darkred;
  color: white;
  font-size: 1.5rem;
  margin-left: 6rem;
  margin-top: 4rem;
}

.modal {
  padding: 5rem;
  background-color: whitesmoke;
  border-radius: 2rem;
  width: 40rem;
  height: 20rem;
}

.inner-modal {
  text-align: center;
}

.modal label {
  font-size: 1.5rem;
}
.modal input {
  margin: 1rem 7rem 3rem;
  display: block;
  padding: 1rem;
  border-radius: 3rem;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.19);
  border: none;
  width: 50%;
}

.connect-btn {
  background-color: #0c1d1d;
  color: whitesmoke;
  font-size: 1.5rem;
}
```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}
