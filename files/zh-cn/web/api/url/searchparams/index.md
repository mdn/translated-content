---
title: URL.searchParams
slug: Web/API/URL/searchParams
---

{{APIRef("URL API")}}

{{domxref("URL")}} 接口的 **`searchParams`** 属性返回一个 {{domxref("URLSearchParams")}} 对象，这个对象包含当前 URL 中解码后的 {{httpmethod("GET")}} 查询参数。

{{AvailableInWorkers}}

## 值

一个 {{domxref("URLSearchParams")}} 对象。

## 示例

如果你的 URL 是 `https://example.com/?name=Jonathan%20Smith&age=18`，你可以这样解析 URL，然后得到 `name` 和 `age` 的值。

```js
let params = new URL(document.location).searchParams;
let name = params.get("name"); // is the string "Jonathan Smith".
let age = parseInt(params.get("age")); // is the number 18
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
