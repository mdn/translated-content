---
title: History.length
slug: Web/API/History/length
---

{{ APIRef("HTML DOM") }}

History.length 是一个只读属性，返回当前 session 中的 history 个数，包含当前页面在内。举个例子，对于新开一个 tab 加载的页面当前属性返回值 1。

## 语法

```plain
length = history.length;
```

## 例子

```js
var result = window.history.length; // 返回当前 session 中的 history 个数
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- The {{domxref("History")}} interface it belongs to.
