---
title: URL.search
slug: Web/API/URL/search
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 接口的 **`search`** 属性是一个搜索字符串，也称为查询字符串，这是一个字符串包含一个 `'?'` 后面跟着 URL 的参数。

现代浏览器提供{{domxref("URL.searchParams")}}属性，以便轻松解析查询字符串中的参数。

{{AvailableInWorkers}}

## 语法

```plain
string = object.search;
object.search = string;
```

### 值

一个 {{domxref("USVString")}}.

## 例子

```js
var url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/search?q=123",
);
var queryString = url.search; // Returns:"?q=123"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 它所属的{{domxref("URL")}}接口。
