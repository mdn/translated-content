---
title: EventSource
slug: Web/API/EventSource
---

{{APIRef("Websockets API")}}

**`EventSource`** 是服务器推送的一个网络事件接口。一个 EventSource 实例会对 HTTP 服务开启一个持久化的连接，以`text/event-stream` 格式发送事件，会一直保持开启直到被要求关闭。

一旦连接开启，来自服务端传入的消息会以事件的形式分发至你代码中。如果接收消息中有一个事件字段，触发的事件与事件字段的值相同。如果没有事件字段存在，则将触发通用事件。

与 [WebSockets](/zh-CN/docs/Web/API/WebSockets_API),不同的是，服务端推送是单向的。数据信息被单向从服务端到客户端分发。当不需要以消息形式将数据从客户端发送到服务器时，这使它们成为绝佳的选择。例如，对于处理社交媒体状态更新，新闻提要或将数据传递到客户端存储机制（如 IndexedDB 或 Web 存储）之类的，EventSource 无疑是一个有效方案。

## 构造函数

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : 以指定的 {{domxref("USVString")}} 创建一个新的 `EventSource`。

## 属性

_此接口从其父接口 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("EventSource.onerror")}}
  - : 是一个 {{event("Event_handlers", "event handler")}}，当发生错误时被调用，并且在此对象上派发 {{event("error")}} 事件。
- {{domxref("EventSource.onmessage")}}
  - : 是一个 {{event("Event_handlers", "event handler")}}，当收到一个 {{event("message")}} 事件，即消息来自源头时被调用。
- {{domxref("EventSource.onopen")}}
  - : 是一个 {{event("Event_handlers", "event handler")}}，当收到一个 {{event(" open ")}} 事件，即连接刚打开时被调用。
- {{domxref("EventSource.readyState")}} {{readonlyinline}}
  - : 一个 `unsigned short` 值，代表连接状态。可能值是 `CONNECTING` (`0`), `OPEN` (`1`), 或者 `CLOSED` (`2`)。
- {{domxref("EventSource.url")}} {{readonlyinline}}
  - : 一个{{domxref("DOMString")}}，代表事件源的 URL。

### 事件接收器

- {{domxref("EventSource.onerror")}}
  - : Is an {{event("Event_handlers", "event handler")}} called when an error occurs and the {{domxref("EventSource/error_event", "error")}} event is dispatched on an `EventSource` object.
- {{domxref("EventSource.onmessage")}}
  - : Is an {{event("Event_handlers", "event handler")}} called when a {{domxref("EventSource/message_event", "message")}} event is received, that is when a message is coming from the source.
- {{domxref("EventSource.onopen")}}
  - : Is an {{event("Event_handlers", "event handler")}} called when an {{domxref("EventSource/open_event", "open")}} event is received, that is when the connection was just opened.

## 方法

_此接口从其父接口 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("EventSource.close()")}}
  - : 如果存在，则关闭连接，并且设置 `readyState` 属性为 `CLOSED`。如果连接已经被关闭，此方法不会再进行任何操作。

## 事件

- {{domxref("EventSource/error_event", "error")}}
  - : Fired when a connection to an event source failed to open.
- {{domxref("EventSource/message_event", "message")}}
  - : Fired when data is received from an event source.
- {{domxref("EventSource/open_event", "open")}}
  - : Fired when a connection to an event source has opened.

Additionally, the event source itself may send messages with an event field, which will create ad-hoc events keyed to that value.

## 示例

In this basic example, an `EventSource` is created to receive unnamed events from the server; a page with the name `sse.php` is responsible for generating the events.

```js
var evtSource = new EventSource('sse.php');
var eventList = document.querySelector('ul');

evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
```

Each received event causes our `EventSource` object's `onmessage` event handler to be run. It, in turn, creates a new {{HTMLElement("li")}} element and writes the message's data into it, then appends the new element to the list element already in the document.

> **备注：** You can find a full example on GitHub — see [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

To listen to named events, you'll require a listener for each type of event sent.

```js
  const sse = new EventSource('/api/v1/sse');

  /* This will listen only for events
   * similar to the following:
   *
   * event: notice
   * data: useful data
   * id: someid
   *
   */
  sse.addEventListener("notice", function(e) {
    console.log(e.data)
  })

  /* Similarly, this will listen for events
   * with the field `event: update`
   */
  sse.addEventListener("update", function(e) {
    console.log(e.data)
  })

  /* The event "message" is a special case, as it
   * will capture events without an event field
   * as well as events that have the specific type
   * `event: message` It will not trigger on any
   * other event type.
   */
  sse.addEventListener("message", function(e) {
    console.log(e.data)
  })

```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Server-sent events](/zh-CN/docs/Web/API/Server-sent_events)
- [使用 Server-sent events](/zh-CN/Server-sent_events/Using_server-sent_events)
