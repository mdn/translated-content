---
title: EventSource()
slug: Web/API/EventSource/EventSource
---

{{APIRef('WebSockets API')}}

**`EventSource()`** 构造函数返回一个新建的{{domxref("EventSource")}}，它代表了一个远程资源。

## 语法

```plain
pc = new EventSource(url, configuration);
```

### 参数

- `url`
  - : 一个{{domxref("USVString")}} ，它代表远程资源的位置
- `configuration` {{optional_inline}}

  - : 为配置新连接提供选项。可选项是：

    - `withCredentials`，默认为 `false`，指示 CORS 是否应包含凭据 ( credentials )。

### 返回值

一个新建的 {{domxref("EventSource")}} 对象，如果指定了`configuration`，则按其配置；否则，配置为合适的基本默认值。

## 示例

```js
var evtSource = new EventSource("sse.php");
var eventList = document.querySelector("ul");

evtSource.onmessage = function (e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
};
```

> **备注：** 你可以在 GitHub 查看完整示例 — 请查看 [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("EventSource")}}
