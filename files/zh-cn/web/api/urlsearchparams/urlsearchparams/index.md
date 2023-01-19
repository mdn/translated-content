---
title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
---

{{ApiRef("URL API")}}{{SeeCompatTable}}

**`URLSearchParams()`** 构造器创建并返回一个新的{{domxref("URLSearchParams")}} 对象。开头的`'?'` 字符会被忽略。

## 语法

```plain
var URLSearchParams = new URLSearchParams(init);
```

### 参数

- _`init`_ {{optional_inline}}
  - : 一个 {{domxref("USVString")}} 实例，一个 {{domxref("URLSearchParams")}} 实例，一个 {{domxref("USVString")}}，或者一个包含 {{domxref("USVString")}} 的记录。注意使用一个 `URLSearchParams` 实例作为参数已经被弃用了，以后的浏览器将会只使用一个 `USVString` 作为参数。

### 返回值

一个 {{domxref("URLSearchParams")}} 实例。

## 例子

下面的例子展示了用一个 URL 字符串创建一个 {{domxref("URLSearchParams")}} 对象。

```js
// Pass in a string literal
var url = new URL('https://example.com?foo=1&bar=2');
// Retrieve from window.location
var url2 = new URL(window.location);

// Retrieve params via url.search, passed into ctor
var params = new URLSearchParams(url.search);
var params2 = new URLSearchParams(url2.search);

// Pass in a sequence
var params3 = new URLSearchParams([["foo", 1],["bar", 2]]);

// Pass in a record
var params4 = new URLSearchParams({"foo" : 1 , "bar" : 2});
```

## 浏览器兼容性

{{Compat}}
