---
title: 用 JavaScript（Deno）编写 WebSocket 服务器
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("WebSockets API")}}

这个示例展示了如何用 Deno 创建一个带有配套页面的 WebSocket API 服务器。

Deno 是一个支持即时编译和缓存 TypeScript 的 JavaScript 运行时。Deno 内置了格式化、代码检查、测试执行器等诸多功能，并实现了许多 Web API。通过遵循 Web 标准，所有 Deno 特有的 API 都在 `Deno` 命名空间下实现。

[Deno 官网](https://deno.com/)提供了安装 Deno 的说明。

编写此文档时 Deno 的版本为 `1.36`。

## 代码

代码将包含在两个文件中，一个用于服务器，一个用于客户端。

### 服务器

创建一个 `main.js` 文件。这个文件将包含用于简单的 HTTP 服务器（其同时向客户端提供 HTML）的代码。

```js
Deno.serve({
  port: 80,
  async handler(request) {
    if (request.headers.get("upgrade") !== "websocket") {
      // 如果是一个普通的 HTTP 请求，返回客户端页面。
      const file = await Deno.open("./index.html", { read: true });
      return new Response(file.readable);
    }
    // 如果是 WebSocket 升级请求，我们需要使用 Deno.upgradeWebSocket 辅助函数。
    const { socket, response } = Deno.upgradeWebSocket(request);

    socket.onopen = () => {
      console.log("CONNECTED");
    };
    socket.onmessage = (event) => {
      console.log(`收到：${event.data}`);
      socket.send("pong");
    };
    socket.onclose = () => console.log("断开连接");
    socket.onerror = (error) => console.error("错误：", error);

    return response;
  },
});
```

`Deno.upgradeWebSocket()` 将连接升级为 WebSocket 连接，该机制在[协议升级机制](/zh-CN/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)中有详细解释。

[`Deno.serve()`](https://docs.deno.com/api/deno/~/Deno.serve) 在底层使用 `Deno.listen()` 和 `Deno.serveHttp()`，是一个可以轻松启动 HTTP 服务器的高级接口。如果没有它，代码可能会像这样。

```js
for await (const conn of Deno.listen({ port: 80 })) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
```

### 客户端

创建一个 `index.html` 文件。该文件将在脚本中建立连接后每隔五秒向服务器发送一个 ping 消息。它应该包含以下关键内容：

```html
<h2>WebSocket 测试</h2>
<p>每五秒发送一条 ping 消息</p>
<div id="output"></div>
```

```js
const wsUri = "ws://127.0.0.1/";
const output = document.querySelector("#output");
const websocket = new WebSocket(wsUri);
let pingInterval;

function writeToScreen(message) {
  output.insertAdjacentHTML("afterbegin", `<p>${message}</p>`);
}

function sendMessage(message) {
  writeToScreen(`发送：${message}`);
  websocket.send(message);
}

websocket.onopen = (e) => {
  writeToScreen("CONNECTED");
  sendMessage("ping");
  pingInterval = setInterval(() => {
    sendMessage("ping");
  }, 5000);
};

websocket.onclose = (e) => {
  writeToScreen("断开连接");
  clearInterval(pingInterval);
};

websocket.onmessage = (e) => {
  writeToScreen(`收到：${e.data}`);
};

websocket.onerror = (e) => {
  writeToScreen(`错误：${e.data}`);
};
```

## 运行代码

完成这两个文件后，使用 Deno 运行这个程序。

```sh
deno run --allow-net=0.0.0.0:80 --allow-read=./index.html main.js
```

Deno 要求我们明确指定程序可以访问主机上哪些内容。

- `--allow-net=0.0.0.0:80` 允许这个程序监听本机上的 80 端口。
- `--allow-read=./index.html` 允许这个程序访问用于客户端的 `index.html` 文件。

## 参见

- [编写 WebSocket 服务器](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
