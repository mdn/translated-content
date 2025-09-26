---
title: HTMLAnchorElement：search 属性
slug: Web/API/HTMLAnchorElement/search
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.search`** 属性是一个搜索字符串，也称为*查询字符串*，它是一个包含 `'?'` 后跟 URL 参数的字符串。

现代浏览器提供了 [`URLSearchParams`](/zh-CN/docs/Web/API/URLSearchParams/get#examples) 和 [`URL.searchParams`](/zh-CN/docs/Web/API/URL/searchParams#examples)，以便轻松地从查询字符串中解析出参数。

## 值

一个字符串。

## 示例

### 从锚点链接中获取搜索字符串

```js
// 文档中有一个 <a id="myAnchor" href="/zh-CN/docs/HTMLAnchorElement?q=123"> 元素
const anchor = document.getElementById("myAnchor");
anchor.search; // 返回“?q=123”
```

### 使用 URLSearchParams 进行高级解析

另外，也可以使用 [`URLSearchParams`](/zh-CN/docs/Web/API/URLSearchParams/get#examples)：

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // 返回数字 123
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
