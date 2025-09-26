---
title: URL：pathname 属性
slug: Web/API/URL/pathname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`pathname`** 属性表示层次结构中的位置。它是一个由一系列路径段构成的字符串，每个路径段都以 `/` 字符作为前缀。如果 URL 没有路径段，其 `pathname` 属性的值将为空字符串。

像 `https` 和 `http` 这样的 URL，具备[层次结构](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3)（URL 标准中称为“[特殊方案](https://url.spec.whatwg.org/#special-scheme)”），总是至少有一个（不可见的）路径段：空字符串。因此，对于这类“特殊方案”的 URL，`pathname` 的值永远不会是空字符串，而是总会至少包含一个 `/` 字符。

例如，`https://developer.mozilla.org` 的 URL 有一个路径段：空字符串，因此，其 `pathname` 值是通过在空字符串前添加 `/` 字符来构成的。

某些系统中，术语*别名*（slug）特指非空路径的最后一段，当这一段使用人类可读的关键词标识一个页面时。例如，URL `https://example.org/articles/this-that-other-outre-collection` 的别名部分为 `this-that-other-outre-collection`。

某些系统使用 `;` 和 `=` 字符来分隔适用于路径段的参数和参数值。例如，对于 `https://example.org/users;id=42/tasks;state=open?sort=modified` 的 URL，系统可能会从路径段 `users;id=42` 和 `tasks;state=open` 中提取并使用路径段参数 `id=42` 和 `state=open`。

## 值

字符串。

## 示例

```js
const url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // 输出“/zh-CN/docs/Web/API/URL/pathname”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
