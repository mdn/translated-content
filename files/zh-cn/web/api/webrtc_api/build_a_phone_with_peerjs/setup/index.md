---
title: 设置
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup
l10n:
  sourceCommit: 3f7036e4dbe83e50c873c42a88a5a7d1d80a478e
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

4. 完成设置后，你需要将以下 [HTML](https://gist.github.com/lolaodelola/578d692e4700dfe2c9d239c80bbdbabc) 和 [CSS 文件](https://gist.github.com/lolaodelola/b4498288b86ddce995603546a64abb29)复制到项目文件夹的根目录中。你可以将这两个文件命名为 `index`，因此 HTML 文件将是 `index.html`，CSS 文件将是 `index.css`。在接下来的文章中，你不需要对这些文件进行太多修改。

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}
