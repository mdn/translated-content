---
title: ErrorEvent：lineno 属性
slug: Web/API/ErrorEvent/lineno
l10n:
  sourceCommit: c51a68c737afbd68787f4450f0c00da2dbdd5317
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

{{domxref("ErrorEvent")}} 接口的 **`lineno`** 只读属性返回一个整数，表示发生的错误在脚本文件中所位于的行号。

## 值

整数。

## 示例

```js
window.addEventListener("error", (ev) => {
  console.log("错误发生在第 " + ev.lineno + " 行");
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
