---
title: location：search 属性
slug: Web/API/Location/search
---

{{ApiRef("Location")}}

{{domxref("Location")}} 接口的 **`search`** 属性会返回一段*查询字符串*，其中包含 `'?'` 以及跟随其后的一串 URL 查询参数。

现代浏览器提供 [`URLSearchParams`](/zh-CN/docs/Web/API/URLSearchParams/get#示例) 和 [`URL.searchParams`](/zh-CN/docs/Web/API/URL/searchParams#示例) 两个接口，使得从查询字符串中解析出查询参数变得更加容易。

## 值

一个字符串。

## 示例

```js
// 假设文档中有一个 <a id="myAnchor" href="/en-US/docs/Location.search?q=123"> 元素
const anchor = document.getElementById("myAnchor");
const queryString = anchor.search; // 返回：'?q=123'

// 进一步解析：
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q")); // 是数字 123
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
