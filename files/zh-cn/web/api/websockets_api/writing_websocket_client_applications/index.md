---
title: 编写 WebSocket 客户端应用
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
---

WebSocket 客户端应用程序使用 WebSocket API 通过 WebSocket 协议与 WebSocket 服务器通信。

{{AvailableInWorkers}}

> **警告：** 本文中的示例代码片段来自我们的 WebSocket 聊天应用示例，[源代码在此处](https://github.com/mdn/samples-server/tree/master/s/websocket-chat)。

## 创建 WebSocket 对象

为了使用 WebSocket 协议通信，你需要创建一个 [`WebSocket`](/zh-CN/WebSockets/WebSockets_reference/WebSocket) 对象；这将会自动地尝试建立与服务器的连接。

WebSocket 构造函数接受一个必要参数和一个可选参数：

```
WebSocket WebSocket(
  in DOMString url,
  in optional DOMString protocols
);
```

- `url`
  - : 要连接的 URL；这应当是 WebSocket 服务器会响应的 URL。
- `protocols` {{ optional_inline() }}
  - : 一个协议字符串或一个协议字符串数组。这些字符串用来指定子协议，这样一个服务器就可以实现多个 WebSocket 子协议（比如你可能希望一个服务器可以根据指定的 `protocol` 来应对不同的互动情况）。如果不指定协议字符串则认为是空字符串。

构造函数可能抛出以下异常：

- `SECURITY_ERR`
  - : 尝试连接的端口被阻塞。

### 连接错误

如果尝试连接过程中发生错误，那么首先一个名为 "error" 的事件会被发送给 [`WebSocket`](/zh-CN/WebSockets/WebSockets_reference/WebSocket) 对象（然后调用其`onerror` handler），然后 [`CloseEvent`](/zh-CN/WebSockets/WebSockets_reference/CloseEvent) 被发送给[`WebSocket`](/zh-CN/WebSockets/WebSockets_reference/WebSocket) （然后调用其 `onclose` handler）以说明连接关闭的原因。

在 Firefox 11 中，通常会从 Mozilla 平台的控制台中收到一个描述性的错误信息，以及一个通过 [`CloseEvent`](/zh-CN/WebSockets/WebSockets_reference/CloseEvent) 在 [RFC 6455, Section 7.4](http://tools.ietf.org/html/rfc6455#section-7.4) 中定义的错误代码。

### 示例

本例创建了一个新的 WebSocket，连接到地址为 `ws://www.example.com/socketserver` 的服务器。请求中命名了一个自定义的协议 "protocolOne"，这一部分可以省略。

```js
var exampleSocket = new WebSocket(
  "ws://www.example.com/socketserver",
  "protocolOne",
);
```

返回后，`exampleSocket.readyState` 参数为 `CONNECTING`。一旦连接可以传送数据，`readyState` 就会变成 `OPEN` 。

如果你想建立一个支持协议可选的连接，你可以指定协议的列表：

```js
var exampleSocket = new WebSocket("ws://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

一旦连接建立了（也就是说 `readyState` 是 `OPEN`） `exampleSocket.protocol` 就会告诉你服务器选择了哪个协议。

上面的例子中 `ws` 替代了 `http`，同样地 `wss 也会替代 https`. 建立 WebSocket 链接有赖于 [HTTP Upgrade mechanism](/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism), 所以当我们使用 `ws://www.example.com`或者 `wss://www.example.com`来访问 HTTP 服务器的时候协议会隐式地升级。

## 向服务器发送数据

一旦你的连接打开完成，你就可以向服务器发送数据了。对每一个要发送的消息使用 `WebSocket` 对象的 [`send()`](</en/WebSockets/WebSockets_reference/WebSocket#send()>) 方法：

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

你可以把数据作为字符串，{{ domxref("Blob") }}，或者[`ArrayBuffer`](/zh-CN/JavaScript_typed_arrays/ArrayBuffer)来发送。

> **备注：** 在版本 11 之前，Firefox 只支持以字符串的形式发送数据。

因为连接的建立是异步的，而且容易失败，所以不能保证刚创建 WebSocket 对象时使用 `send()` 方法会成功。我们至少可以确定企图在链接建立起来之后立马发送数据，可以通过注册 `onopen` 事件处理器解决：

```js
exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### 使用 JSON 发送对象

你可以方便地使用[JSON](/zh-CN/JSON) 来向服务器发送复杂一些的数据。例如一个聊天程序与服务器交互的协议可以通过封装在 JSON 里的数据来实现：

```js
// 服务器向所有用户发送文本
function sendText() {
  // 构造一个 msg 对象，包含了服务器处理所需的数据
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id: clientID,
    date: Date.now(),
  };

  // 把 msg 对象作为 JSON 格式字符串发送
  exampleSocket.send(JSON.stringify(msg));

  // 清空文本输入元素，为接收下一条消息做好准备。
  document.getElementById("text").value = "";
}
```

## 接收服务器发送的消息

WebSockets 是一个基于事件的 API；收到消息的时候，一个 "message" 消息会被发送到 `onmessage` 函数。为了开始监听传入数据，可以进行如下操作：

```js
exampleSocket.onmessage = function (event) {
  console.log(event.data);
};
```

### 接受与解析 JSON 对象

考虑在 [使用 JSON 发送对象](#使用_json_发送对象)中提到的聊天应用客户端。客户端会收到各种类型的数据包，比如：

- 登陆握手
- 消息文本
- 用户列表更新

解析这些收到的消息的代码可能是这样的：

```
exampleSocket.onmessage = function(event) {
  var f = document.getElementById("chatbox").contentDocument;
  var text = "";
  var msg = JSON.parse(event.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();

  switch(msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text = "<b>User <em>" + msg.name + "</em> signed in at " + timeStr + "</b><br>";
      break;
    case "message":
      text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
      break;
    case "rejectusername":
      text = "<b>Your username has been set to <em>" + msg.name + "</em> because the name you chose is in use.</b><br>"
      break;
    case "userlist":
      var ul = "";
      for (i=0; i < msg.users.length; i++) {
        ul += msg.users[i] + "<br>";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
```

这里我们使用 [`JSON.parse()`](/zh-CN/JavaScript/Reference/Global_Objects/JSON/parse) 来将 JSON 转换回原始对象，然后检查并根据其内容做下一步动作。

### 文本数据的格式

通过 WebSocket 连接收到的文本是 UTF-8 格式的。

在 Gecko 9.0 之前，一部分有效的 UTF-8 文本中的非字符将导致连接被中断。现在 Gecko 已经允许这些值。

## 关闭连接

当你不需要再用 WebSocket 连接了，调用 WebSocket [`close()`](</en/WebSockets/WebSockets_reference/WebSocket#close()>) 方法：

```js
exampleSocket.close();
```

关闭连接前最好检查一下 socket 的 `bufferedAmount` 属性，以防还有数据要传输。

## 安全方面的考虑

WebSocket 不应当用于混合的上下文环境；也就是说，不应该在用 HTTPS 加载的页面中打开非安全版本的 WebSocket，反之亦然。而实际上一些浏览器也明确禁止这一行为，包括 Firefox 8 及更高版本。
