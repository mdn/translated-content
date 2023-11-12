---
title: EventSource
slug: Web/API/EventSource
---

{{APIRef("Server Sent Events")}}

**`EventSource`** 接口是 web 内容与[服务器发送事件](/zh-CN/docs/Web/API/Server-sent_events)通信的接口。

一个 `EventSource` 实例会对 [HTTP](/zh-CN/docs/Web/HTTP) 服务器开启一个持久化的连接，以 `text/event-stream` 格式发送[事件](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)，此连接会一直保持开启直到通过调用 {{domxref("EventSource.close()")}} 关闭。

{{InheritanceDiagram}}

一旦连接开启，来自服务端传入的消息会以事件的形式分发至你代码中。如果接收消息中有一个 event 字段，触发的事件与 event 字段的值相同。如果不存在 event 字段，则将触发通用的 {{domxref("EventSource/message_event", "message")}} 事件。

与 [WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 不同的是，服务器发送事件是单向的。数据消息只能从服务端到发送到客户端（如用户的浏览器）。这使其成为不需要从客户端往服务器发送消息的情况下的最佳选择。例如，对于处理如社交媒体状态更新、消息来源（news feed）或将数据传递到[客户端存储](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)机制（如 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 或 [web 存储](/zh-CN/docs/Web/API/Web_Storage_API)）之类的，`EventSource` 无疑是一个有效方案。

> **警告：** 当**不使用 HTTP/2** 时，服务器发送事件（SSE）受到打开连接数的限制，这个限制是*对于浏览器*的，并且设置为非常低的数字（6），打开多个选项卡时可能会特别痛苦。在 [Chrome](https://crbug.com/275955) 和 [Firefox](https://bugzil.la/906896) 中，这个问题已被标记为“不会修复”。这个限制是每个浏览器和域名的，这意味着你可以在所有标签页中打开 6 个 SSE 连接到 `www.example1.com`，以及另外 6 个 SSE 连接到 `www.example2.com`（来源：[Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)）。当使用 HTTP/2 时，最大并发 *HTTP 流*的数量是由服务器和客户端协商的（默认为 100）。

## 构造函数

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : 创建一个新的 `EventSource`，用于从指定的 URL 接收服务器发送事件，可以选择开启凭据模式。

## 实例属性

_此接口从其父接口 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("EventSource.readyState")}} {{readonlyinline}}
  - : 一个代表连接状态的数字。可能值是 `CONNECTING`（`0`）、`OPEN`（`1`）或 `CLOSED`（`2`）。
- {{domxref("EventSource.url")}} {{readonlyinline}}
  - : 一个表示事件源的 URL 字符串。
- {{domxref("EventSource.withCredentials")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示 `EventSource` 对象是否使用跨源资源共享（[CORS](/zh-CN/docs/Web/HTTP/CORS)）凭据来实例化（`true`），或者不使用（`false`，即默认值）。

### 实例方法

_此接口也从其父接口 {{domxref("EventTarget")}} 继承了方法。_

- {{domxref("EventSource.close()")}}
  - : 关闭连接（如果有），并将 `readyState` 属性设置为 `CLOSED`。如果连接已经关闭，则该方法不执行任何操作。

## 事件

- {{domxref("EventSource/error_event", "error")}}
  - : 在事件源连接未能打开时触发。
- {{domxref("EventSource/message_event", "message")}}
  - : 在从事件源接收到数据时触发。
- {{domxref("EventSource/open_event", "open")}}
  - : 在与事件源的连接打开时触发。

此外，事件源本身可以发送具有 event 字段的消息，这将创建一个以该值为键的特定事件。

## 示例

在这个基本的例子中，创建了一个 `EventSource` 来从服务器接收未命名的事件；一个名为 `sse.php` 的页面负责生成这些事件。

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

每个接收到的事件都会导致我们的 `EventSource` 对象的 `onmessage` 事件处理程序运行。它会创建一个新的 {{HTMLElement("li")}} 元素，并将消息的数据写入其中，然后将新元素附加到文档中已有的列表元素中。

> **备注：** 你可以在 Github 上找到完整的示例——[使用 PHP 语言的简单 SSE 示例](https://github.com/mdn/dom-examples/tree/main/server-sent-events)。

要监听具名事件，你需要为每种类型的事件添加一个监听器。

```js
const sse = new EventSource("/api/v1/sse");

/*
 * 这将仅监听类似下面的事件
 *
 * event: notice
 * data: useful data
 * id: someid
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * 同理，以下代码将监听具有字段 `event: update` 的事件
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * “message”事件是一个特例，因为它可以捕获没有 event 字段的事件，
 * 以及具有特定类型 `event：message` 的事件。
 * 它不会触发任何其他类型的事件。
 */
sse.addEventListener("message", (e) => {
  console.log(e.data);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [服务器发送事件](/zh-CN/docs/Web/API/Server-sent_events)
- [使用服务器发送事件](/zh-CN/Server-sent_events/Using_server-sent_events)
