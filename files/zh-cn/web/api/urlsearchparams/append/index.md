---
title: URLSearchParams：append() 方法
slug: Web/API/URLSearchParams/append
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URLSearchParams")}} 接口的 **`append()`** 方法将指定的键/值对附加为新的查询参数。

如下面的示例所示，如果同一个键被多次附加，则它将为每个值多次出现在参数字符串中。

## 语法

```js-nolint
append(name, value)
```

### 参数

- `name`
  - : 要附加的参数的键名。
- `value`
  - : 要附加的参数的值。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 添加第二个 foo 查询参数。
params.append("foo", 4);
// 查询字符串变成：“foo=1&bar=2&foo=4”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL")}}
- [谷歌开发者：使用 URLSearchParams 轻松操作 URL](https://developer.chrome.google.cn/blog/urlsearchparams)
