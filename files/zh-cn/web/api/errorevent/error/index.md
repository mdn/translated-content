---
title: ErrorEvent：error 属性
slug: Web/API/ErrorEvent/error
l10n:
  sourceCommit: 1442d92e737ee5ab7a5041abc292f9d61da94a73
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

{{domxref("ErrorEvent")}} 接口的 **`error`** 只读属性返回一个表示与事件关联错误的 JavaScript 值，例如 {{jsxref("Error")}} 或 {{domxref("DOMException")}}。

## 值

任何有效的 JavaScript 值。

## 示例

```js
window.addEventListener("error", (ev) => {
  console.log("错误实例：" + ev.error);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
