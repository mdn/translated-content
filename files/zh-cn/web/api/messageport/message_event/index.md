---
title: MessagePort：message 事件
slug: Web/API/MessagePort/message_event
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

当有消息到达该 channel 时，{{domxref('MessagePort')}} 对象上会触发 **`message`** 事件。

此事件不可取消，也不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## 事件类型

一个 {{domxref("MessageEvent")}}。继承于 {{domxref("Event")}}。

{{InheritanceDiagram("MessageEvent")}}

## 事件属性

_此接口还继承了其父接口 {{domxref("Event")}} 的属性。_

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : 由消息发送者发送的数据。
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 一个字符串，表示消息发送者的源。
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 一个字符串，表示事件的唯一 ID。
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : 一个 `MessageEventSource`（可以是 {{glossary("WindowProxy")}}、{{domxref("MessagePort")}} 或 {{domxref("ServiceWorker")}} 对象），表示消息发送者。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("MessagePort")}} 对象数组，表示与消息通过的 channel 关联的端口（在适当的情况下，例如在 channel 消息传递或向 shared worker 发送消息时）。

## 示例

假设脚本创建了一个 [`MessageChannel`](/zh-CN/docs/Web/API/MessageChannel)，并使用以下代码将其中一个端口发送到不同的浏览上下文，比如另一个 [`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe)：

```js
const channel = new MessageChannel();
const myPort = channel.port1;
const targetFrame = window.top.frames[1];
const targetOrigin = "https://example.org";

const messageControl = document.querySelector("#message");
const channelMessageButton = document.querySelector("#channel-message");

channelMessageButton.addEventListener("click", () => {
  myPort.postMessage(messageControl.value);
});

targetFrame.postMessage("启动", targetOrigin, [channel.port2]);
```

目标可以接收端口并开始监听消息，代码如下：

```js
window.addEventListener("message", (event) => {
  const myPort = event.ports[0];

  myPort.addEventListener("message", (event) => {
    received.textContent = event.data;
  });

  myPort.start();
});
```

注意，监听器必须先调用 [`MessagePort.start()`](/zh-CN/docs/Web/API/MessagePort/start) 方法，才能将任何消息传递到此端口。只有在使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法时才需要这样做：如果接收方改用 `onmessage` ，则会隐式调用 `start()` 方法：

```js
window.addEventListener("message", (event) => {
  const myPort = event.ports[0];

  myPort.onmessage = (event) => {
    received.textContent = event.data;
  };
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：[`messageerror`](/zh-CN/docs/Web/API/MessagePort/messageerror_event)
- [使用 channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
