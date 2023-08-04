---
title: "Location: search"
slug: Web/API/Location/search
---

{{ApiRef("Location")}}

{{domxref("Location")}} 接口的 **`search`** 属性会返回一段 {{domxref("USVString")}}，其中包含一个 URL 标识中的 `'?'` 以及跟随其后的一串 URL 查询参数。

现代浏览器提供 [`URLSearchParams`](/zh-CN/docs/Web/API/URLSearchParams/get#Examples) 和 [`URL.searchParams`](/zh-CN/docs/Web/API/URL/searchParams#Examples) 两个接口，使得从查询字符串中解析出查询参数变得更加容易。

## Syntax

```plain
string = object.search;
object.search = string;
```

## Examples

```js
// 声明了一个 <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/docs/Location.search?q=123"> 元素在文档流中
var anchor = document.getElementById("myAnchor");
var queryString = anchor.search; // Returns:'?q=123'

// 进一步解析：
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // is the number 123
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
