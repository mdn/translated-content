---
title: URL()
slug: Web/API/URL/URL
---

{{APIRef("URL API")}}

**`URL()`** 构造函数返回一个新创建的 {{domxref("URL")}} 对象，该对象表示由参数定义的 URL。

如果给定的基本 URL 或生成的 URL 不是有效的 URL，则会抛出 JavaScript {{jsxref("TypeError")}} 异常。

{{AvailableInWorkers}}

## 语法

```js-nolint
new URL(url)
new URL(url, base)
```

### 参数

- `url`
  - : 一个表示绝对或相对 URL 的 {{domxref("DOMString")}} 或任何具有字符串化方法的对象，例如 {{htmlelement("a")}} 或 {{htmlelement("area")}} 元素。如果 `url` 是相对 URL，则会将 `base` 用作基准 URL。如果 `url` 是绝对 URL，则无论参数 `base` 是否存在，都将被忽略。
- `base` {{optional_inline}}
  - : 一个表示基准 URL 的字符串，当 `url` 为相对 URL 时，它才会生效。如果未指定，它默认为 `undefined`。

> **备注：** `url` 和 `base` 参数将从任意对象转换为字符串，就像其他接受字符串的 Web API 一样。特别地，你可以为任一参数使用现有的 {{domxref("URL")}} 对象，它将被转换为该对象的 {{domxref("URL.href", "href")}} 属性。

### 异常

| 异常                    | 解释                                                                          |
| ----------------------- | ----------------------------------------------------------------------------- |
| {{jsxref("TypeError")}} | `url`（若为绝对 URL）或 `base` + `url`（若为相对 URL）是一个无效的 URL 链接。 |

## 示例

```js
// 基准 URL：
let baseUrl = "https://developer.mozilla.org";

let A = new URL("/", baseUrl);
// => 'https://developer.mozilla.org/'

let B = new URL(baseUrl);
// => 'https://developer.mozilla.org/'

new URL("en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'

let D = new URL("/en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", D);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", A);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", "https://developer.mozilla.org/fr-FR/toto");
// => 'https://developer.mozilla.org/en-US/docs'

// 无效 URL：

new URL("/en-US/docs", "");
// 抛出 TypeError 异常：'' is not a valid URL

new URL("/en-US/docs");
// 抛出 TypeError 异常：'/en-US/docs' is not a valid URL

// 其他示例：

new URL("http://www.example.com");
// => 'http://www.example.com/'

new URL("http://www.example.com", B);
// => 'http://www.example.com/'

new URL("", "https://example.com/?query=1");
// => 'https://example.com/?query=1'（Edge 早于 79 的版本会移除查询参数）

new URL("/a", "https://example.com/?query=1");
// => 'https://example.com/a'（见相对 URL）

new URL("//foo.com", "https://example.com");
// => 'https://foo.com/'（见相对 URL）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `URL` 的 polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- 接口：{{domxref("URL")}}
