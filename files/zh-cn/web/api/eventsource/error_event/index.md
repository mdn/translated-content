---
title: EventSource.onerror
slug: Web/API/EventSource/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef('WebSockets API')}}

当与事件源的连接无法打开时，会触发 {{domxref("EventSource")}} API 的（[`error`](/zh-CN/docs/Web/API/HTMLElement/error_event)）事件。

该事件不可取消，也不会冒泡。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js-nolint
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## 事件类型
{{domxref("Event")}} 范型。

## 示例

```js
const evtSource = new EventSource("sse.php");
// addEventListener 版本
evtSource.addEventListener("error", (e) => {
  console.log("尝试连接时发生错误。");
});
// onerror 版本
evtSource.onerror = (e) => {
  console.log("尝试连接时发生错误。");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用服务器发送事件](https://github.com/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](https://github.com/zh-CN/docs/Web/API/EventSource/open_event)
- [`message`](https://github.com/zh-CN/docs/Web/API/EventSource/message_event)
