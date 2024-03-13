---
title: EventSource：message 事件
slug: Web/API/EventSource/message_event
---

{{APIRef}}

{{domxref("EventSource")}} API 的 `message` 事件，会在通过事件源收到数据时触发。

此事件不能取消，也不会冒泡。

## 语法

在如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## 事件类型

_一个 {{domxref("MessageEvent")}}。继承自 {{domxref("Event")}}。_

{{InheritanceDiagram("MessageEvent")}}

## 事件属性

_本接口也继承了父接口 {{domxref("Event")}} 的属性。_

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : 消息发射器发出的数据。
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 一个字符串，表示消息发射器的源（origin）。
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 一个字符串，表示事件的唯一 ID。
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : 一个 `MessageEventSource`（可以是一个 {{glossary("WindowProxy")}}、{{domxref("MessagePort")}} 或 {{domxref("ServiceWorker")}} 对象），表示事件发射器。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("MessagePort")}} 对象的数组，表示与正在发送消息的通道相关联的端口（如果适用，例如在传递通道消息，或者向共享的 worker 发送消息时）。

## 示例

在这个基本示例中，创建了一个 `EventSource` 对象来接收来自服务器的事件；名为 `sse.php` 的页面负责生成这些事件。

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.addEventListener("message", (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
});
```

### onmessage 的等价写法

```js
evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Server-sent 事件](/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/zh-CN/docs/Web/API/EventSource/open_event)
- [`error`](/zh-CN/docs/Web/API/EventSource/error_event)
