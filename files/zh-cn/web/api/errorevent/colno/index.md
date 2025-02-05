---
title: ErrorEvent：colno 属性
slug: Web/API/ErrorEvent/colno
l10n:
  sourceCommit: 5021b506f3879b6f3131b763c4bc76b6d39baafa
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

{{domxref("ErrorEvent")}} 接口的 **`colno`** 只读属性返回一个发生错误脚本文件列号的整数。

## 值

整数。

## 示例

```js
window.addEventListener("error", (ev) => {
  console.log("错误发生在第 " + ev.colno + " 列");
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
