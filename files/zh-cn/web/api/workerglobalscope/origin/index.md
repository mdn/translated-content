---
title: WorkerGlobalScope：origin 属性
slug: Web/API/WorkerGlobalScope/origin
l10n:
  sourceCommit: 3fd9ed857a7d87a5ecc539a9835dbd107178bb6c
---

{{APIRef("Web Workers API")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`origin`** 只读属性返回全局作用域的来源（序列化为字符串）。

## 值

一个字符串。

## 示例

在 worker 作用域中执行以下代码片段，则会在每次接收到消息时将 worker 的全局作用域的来源记录到控制台。

```js
console.log(window.origin);
```

如果来源不是方案/主机/端口元组（例如试图在本地，即通过 `file://` URL 运行脚本），`origin` 将返回字符串 `"null"`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
