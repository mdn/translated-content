---
title: Building the server
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server
l10n:
  sourceCommit: 65cd9754ed95f116b641c68cad80f14ecf580b41
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}

在本文中，我们将为我们的电话应用程序设置服务器。服务器文件看起来像一个常规的 Express 服务器文件，只有一个区别，即 Peer 服务器。

1. 首先，在与之前创建的 HTML 和 CSS 文件相同的位置创建一个名为`server.js`的文件。这是我们应用程序的入口点，如我们的`package.json`文件中定义的那样。
2. 你需要在`server.js`文件的顶部启动你的代码，通过引入 Peer 服务器，以确保我们可以访问 Peer 服务器：

   ```js
   const { ExpressPeerServer } = require("peer");
   ```

3. 然后，你需要实际创建 Peer 服务器。在之前的代码行下面添加以下代码：

   ```js
   const peerServer = ExpressPeerServer(server, {
     proxied: true,
     debug: true,
     path: "/myapp",
     ssl: {},
   });
   ```

   我们使用`ExpressPeerServer`对象来创建Peer服务器，在此过程中传递一些选项。Peer服务器将处理我们所需的WebRTC信令，因此我们无需担心STUN/TURN服务器或其他协议。

4. 最后，你需要通过调用`app.use(peerServer)`告诉你的应用程序使用`peerServer`。你完成的`server.js`应包括在服务器文件中包含的其他必要依赖项，以及将`index.html`文件提供给根路径。
    更新`server.js`文件，使其看起来像这样：

    ```js
   const express = require("express");
   const http = require("http");
   const path = require("path");
   const app = express();
   const server = http.createServer(app);
   const { ExpressPeerServer } = require("peer");
   const port = process.env.PORT || "8000";

   const peerServer = ExpressPeerServer(server, {
     proxied: true,
     debug: true,
     path: "/myapp",
     ssl: {},
   });

   app.use(peerServer);

   app.use(express.static(path.join(__dirname)));

   app.get("/", (request, response) => {
     response.sendFile(`${__dirname}/index.html`);
   });

   server.listen(port);
   console.log(`Listening on: ${port}`);
   ```

5. 你应该能够通过`localhost`连接到你的应用程序（在我们的`server.js`中，我们使用端口8000（在第7行定义），但你可能正在使用另一个端口号）。在终端中运行`yarn start`（其中`start`是你在上一页的`package.json`中声明的脚本）。在浏览器中访问`localhost:8000`，你应该会看到一个类似下面这样的页面：

    ![一个奶油色的背景，标题使用深绿色粗体字显示：“phone a friend”。下方紧接着是“Connecting...”，再下方是“please use headphones!”。接着是一个大大的深绿色按钮，上面写着“Call”，与背景色相同，呈奶油色。 ](connecting_screen.png)

如果你想了解更多关于 Peer.js 的信息，请查看[GitHub 上的 Peer.js 服务器存储库](https://github.com/peers/peerjs-server)。

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}
