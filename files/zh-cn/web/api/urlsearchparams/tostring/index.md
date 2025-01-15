---
title: URLSearchParams：toString() 方法
slug: Web/API/URLSearchParams/toString
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`toString()`** 方法返回适用于 URL 中的查询字符串。

> [!NOTE]
> 方法返回不带问号的查询字符串。这与 [`Location.search`](/zh-CN/docs/Web/API/Location/search)、[`HTMLAnchorElement.search`](/zh-CN/docs/Web/API/HTMLAnchorElement/search) 和 [`URL.search`](/zh-CN/docs/Web/API/URL/search) 都不同，它们均带有问号。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

一个不带问号的字符串（如果未设置查询参数，则返回空字符串）。

## 示例

```js
const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);

// 添加第二个参数。
params.append("foo", 4);
console.log(params.toString()); // 输出“foo=1&bar=2&foo=4”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL")}} 接口。
- [谷歌开发者：使用 URLSearchParams 轻松操作 URL](https://developer.chrome.google.cn/blog/urlsearchparams)
