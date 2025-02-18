---
title: ErrorEvent：filename 属性
slug: Web/API/ErrorEvent/filename
l10n:
  sourceCommit: 7d6ffd01f66c97c089dc559a636516b932af5ad5
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

{{domxref("ErrorEvent")}} 接口的 **`filename`** 只读属性返回包含发生错误的脚本文件的名称的字符串。

## 值

字符串

## 示例

```js
window.addEventListener("error", (ev) => {
  console.log("文件 " + ev.filename + " 中出现错误");
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
