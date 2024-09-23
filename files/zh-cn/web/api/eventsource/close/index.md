---
title: EventSource.close()
slug: Web/API/EventSource/close
---

{{APIRef('WebSockets API')}}

{{domxref("EventSource")}} 的方法 **`close()`** 用于关闭当前的连接，如果调用了此方法，则会将{{domxref("EventSource.readyState")}}这个属性值设置为 2 (closed)

> [!NOTE]
> 如果连接已经被关闭，此方法不会做任何事情

## 语法

```js-nolint
close()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
var button = document.querySelector("button");
var evtSource = new EventSource("sse.php");

button.onclick = function () {
  console.log("Connection closed");
  evtSource.close();
};
```

> [!NOTE]
> 你可以在 Github 上查看这整个例子： [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("EventSource")}}
