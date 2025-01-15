---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("Broadcast Channel API")}} {{AvailableInWorkers}}

**`BroadcastChannel`** 接口表示给定{{glossary("origin", "源")}}的任何{{glossary("browsing context", "浏览上下文")}}都可以订阅的命名频道。它允许同源的不同浏览器窗口、标签页、frame 或者 iframe 下的不同文档之间相互通信。消息通过 {{domxref("BroadcastChannel/message_event", "message")}} 事件进行广播，该事件在侦听该频道的所有 `BroadcastChannel` 对象上触发，发送消息的对象除外。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : 创建一个链接到命名频道的对象。

## 实例属性

_该接口也从它的父接口 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("BroadcastChannel.name")}}
  - : 频道名称，返回 {{domxref("DOMString")}}。

## 实例方法

_该接口也从它的父接口 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("BroadcastChannel.postMessage()")}}
  - : 向所有监听了相同频道的 `BroadcastChannel` 对象发送一条消息，消息内容可以是任意类型的数据。
- {{domxref("BroadcastChannel.close()")}}
  - : 关闭频道对象，指示它不会收到任何新消息，并允许它最终被垃圾回收。

## 事件

_该接口也从它的父接口 {{domxref("EventTarget")}} 继承事件。_

- {{domxref("BroadcastChannel/message_event", "message")}}
  - : 当频道收到一条消息时触发。也可以使用 `onmessage` 属性访问。
- {{domxref("BroadcastChannel/messageerror_event", "messageerror")}}
  - : 当频道收到一条无法反序列化的消息时触发。也可以使用 `onmessageerror` 属性访问。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 一种在不同浏览器上下文之间通信的重量级方案：{{domxref("ServiceWorker")}}。
- [Broadcast Channel API 概述](/zh-CN/docs/Web/API/Broadcast_Channel_API)
