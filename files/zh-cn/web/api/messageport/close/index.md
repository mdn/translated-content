---
title: MessagePort：close() 方法
slug: Web/API/MessagePort/close
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

{{domxref("MessagePort")}} 接口的 **`close()`** 方法断开端口连接，使其不再处于活动状态。这将停止向该端口发送消息。

## 语法

```js-nolint
close()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在以下代码块中，你可以看到一个名为 `handleMessage` 的处理函数，当使用 {{domxref("EventTarget.addEventListener")}} 向此文档发送回一条消息时运行。

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

你可以随时通过以下方式停止发送信息：

```js
channel.port1.close();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
