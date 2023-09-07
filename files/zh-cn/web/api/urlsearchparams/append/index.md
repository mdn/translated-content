---
title: URLSearchParams.append()
slug: Web/API/URLSearchParams/append
---

{{ApiRef("URL API")}}

**append()** 是 {{domxref("URLSearchParams")}} 接口的一个方法。可以插入一个新搜索参数。

## 语法

```plain
URLSearchParams.append(name, value)
```

### 参数

- name
  - : 需要插入搜索参数的键名。
- value
  - : 需要插入搜索参数的值。

### 返回

无

## 例子

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search.slice(1));

//添加第二个 foo 搜索参数。
params.append("foo", 4);
//查询字符串变成：'foo=1&bar=2&foo=4'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他 URL 相关的接口：{{domxref("URL")}}, {{domxref("URLUtils")}}.
- [谷歌开发者：简单 URL 与 URLSearchParams 操纵](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
