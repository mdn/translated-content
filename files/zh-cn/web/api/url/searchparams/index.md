---
title: URL：searchParams 属性
slug: Web/API/URL/searchParams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`searchParams`** 属性返回一个 {{domxref("URLSearchParams")}} 对象，这个对象包含当前 URL 中解码后的 {{httpmethod("GET")}} 查询参数。

## 值

{{domxref("URLSearchParams")}} 对象。

## 示例

如果你的 URL 是 `https://example.com/?name=Jonathan%20Smith&age=18`，你可以这样解析 URL，然后得到 `name` 和 `age` 的值。

```js
let params = new URL(document.location).searchParams;
let name = params.get("name"); // 是字符串“Jonathan Smith”。
let age = parseInt(params.get("age")); // 是数字 18
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
