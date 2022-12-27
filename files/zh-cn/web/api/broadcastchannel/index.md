---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
---

{{APIRef("Broadcast Channel API")}}

**`BroadcastChannel`** 接口代理了一个命名频道，可以让指定 {{glossary("origin")}} 下的任意 {{glossary("browsing context")}} 来订阅它。它允许同源的不同浏览器窗口，Tab 页，frame 或者 iframe 下的不同文档之间相互通信。通过触发一个 {{event("message")}} 事件，消息可以广播到所有监听了该频道的 `BroadcastChannel` 对象。

{{AvailableInWorkers}}

## 构造函数

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : 创建一个链接到命名频道的对象。

## 属性

_该接口会从它的父级 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("BroadcastChannel.name")}}
  - : 频道名称，返回 {{domxref("DOMString")}}。

### 事件处理程序

- {{domxref("BroadcastChannel.onmessage")}}

  - : {{event("Event_handlers", "event handler")}} ，用于定义当该对象上触发了 {{event("message")}} 事件时要执行的函数。

- {{domxref("BroadcastChannel.onmessageerror")}}
  - : {{event("Event_handlers", "event handler")}} ，用于定义当该对象上触发了类型为 {{domxref("MessageError")}} 的 {{domxref("MessageEvent")}} 事件时要执行的函数。当接收到一条无法反序列化的消息时会触发此事件。

## 方法

_该接口会从它的父级 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("BroadcastChannel.postMessage()")}}
  - : 向所有监听了相同频道的 `BroadcastChannel` 对象发送一条消息，消息内容可以是任意类型的数据。
- {{domxref("BroadcastChannel.close()")}}
  - : 关闭频道对象，告诉它不要再接收新的消息，并允许它最终被垃圾回收。

## 事件

- [`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event)
  - : 当频道收到一条消息时触发。
    也可以使用 [`onmessage`](/zh-CN/docs/Web/API/BroadcastChannel/onmessage) 属性访问。
- [`messageerror`](/zh-CN/docs/Web/API/BroadcastChannel/messageerror_event)
  - : 当频道收到一条无法反序列化的消息时触发。
    也可以使用 [`onmessageerror`](/zh-CN/docs/Web/API/BroadcastChannel/onmessageerror) 属性访问。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 一种在不同浏览器上下文之间通信的重量级方案：{{domxref("ServiceWorker")}}。
- [Broadcast Channel API overview](/zh-CN/docs/Web/API/Broadcast_Channel_API)
