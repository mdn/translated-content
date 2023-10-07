---
title: URLSearchParams.toString()
slug: Web/API/URLSearchParams/toString
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} 接口的 **`toString()`** 方法返回适用在 URL 中的查询字符串。

## 语法

```plain
URLSearchParams.toString()
```

### 返回值

字符串

## 实例

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append("foo", 4);
console.log(params.toString());
//Prints 'foo=1&bar=2&foo=4'.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- Other URL-related interfaces: {{domxref("URL")}}, {{domxref("URLUtils")}}.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
