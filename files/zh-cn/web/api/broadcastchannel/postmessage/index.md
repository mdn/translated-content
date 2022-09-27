---
title: BroadcastChannel.postMessage()
slug: Web/API/BroadcastChannel/postMessage
---

{{APIRef("BroadCastChannel API")}}

可以使用 **`BroadcastChannel.postMessage()`** 发送一条任意 {{jsxref("Object")}} 类型的消息，给所有同{{glossary("origin", "源")}}下监听了该频道的所有{{glossary("browsing context", "浏览器上下文")}}。消息以 {{event("message")}} 事件的形式发送给每一个绑定到该频道的广播频道。

{{AvailableInWorkers}}

## 语法

```plain
var str = channel.postMessage(object);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 所属接口：{{domxref("BroadcastChannel")}}
