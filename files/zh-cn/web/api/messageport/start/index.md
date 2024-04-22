---
title: MessagePort：start() 方法
slug: Web/API/MessagePort/start
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

{{domxref("MessagePort")}} 接口的 **`start()`** 方法开始发送该端口中的消息队列。只有在使用 {{domxref("EventTarget.addEventListener")}} 时才需要此方法；使用 {{domxref("MessagePort.message_event", "onmessage")}} 事件时已隐含调用该方法。

## 语法

```js-nolint
start()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在以下代码块中，你可以看到一个名为 `handleMessage` 的处理函数，当使用 `onmessage` 向本文档发回信息时运行：

```js
channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

另一种选择是使用 {{domxref("EventTarget.addEventListener")}}，但是使用这种方法时，需要显式调用 `start()` 来开始向此文档发送消息：

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
