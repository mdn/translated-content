---
title: URL：search 属性
slug: Web/API/URL/search
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`search`** 属性是一个搜索字符串，也称为查询字符串，这是一个包含 `'?'` 且其后跟着 URL 的参数的字符串。

现代浏览器提供了 {{domxref("URL.searchParams")}} 属性，以便轻松解析查询字符串中的参数。

## 值

字符串。

## 示例

```js
const url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // 输出“?q=123”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
