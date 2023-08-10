---
title: URLSearchParams.has()
slug: Web/API/URLSearchParams/has
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} 的 **`has()`** 方法返回一个布尔值，表示一个指定的键名对应的值是否存在。

## 语法

```plain
var hasName = URLSearchParams.has(name)
```

### 参数

- 键名
  - : 要查找的参数的键名。

### 返回值

一个 {{jsxref("Boolean")}}.

## 示例

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search.slice(1));

params.has("bar") === true; //true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
