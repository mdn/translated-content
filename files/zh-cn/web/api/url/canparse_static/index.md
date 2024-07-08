---
title: URL：canParse() 静态方法
slug: Web/API/URL/canParse_static
l10n:
  sourceCommit: 7c7a078585a36eef960de1d93d28b20691486b99
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 接口的 **`URL.canParse()`** 静态方法返回一个布尔值，表示绝对地址或与基本地址结合的相对地址是否可解析和有效。

这是在 [try...catch](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 代码块中构造 `URL` 的快速而简单的替代方法。对于与 [URL() 构造函数](/zh-CN/docs/Web/API/URL/URL)返回成功的值相同，它将返回 `true`，而对于会导致构造函数抛出的错误的值，它返回 `false`。

## 语法

```js-nolint
URL.canParse(url)
URL.canParse(url, base)
```

### 参数

- `url`
  - : 字符串或其他任何带有 {{Glossary("stringifier")}} 的对象（例如，包括 {{htmlelement("a")}} 或 {{htmlelement("area")}} 元素），表示绝对或相对地址。如果 `url` 是相对地址，则 `base` 为必填项，并将用作基本地址。如果 `url` 是绝对地址，给定的 `base` 将被忽略。
- `base` {{optional_inline}}
  - : 字符串，表示在 `url` 是相对 URL 的情况下使用的基本地址。如果未指定，则默认为 `undefined`。

> **备注：** `url` 和 `base` 参数将根据你传递的任何值进行字符串化，就像其他接受字符串的 Web API 一样。特别是，你可以使用一个现有的 {{domxref("URL")}} 对象作为任一参数，它将被字符串化为该对象的 {{domxref("URL.href", "href")}} 属性。

### 返回值

如果 URL 可以解析且有效，则为 `true`；否则为 `false`。

## 示例

本示例演示了如何使用 `URL.canParse()` 静态方法来处理一些不同的绝对地址和相对地址的值。

示例的第一部分定义了记录日志的 HTML `<pre>` 元素和日志方法 `log()`。

```html
<pre id="log"></pre>
```

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

接下来，我们使用 `URL` 中的 `canParse` 条件检查是否支持 `URL.canParse()` 方法。如果支持该方法，我们会记录检查绝对地址、无基本地址的相对地址和有效基本地址的相对地址的结果。我们还记录了不支持 `URL.canParse()` 的情况。

```js
if ("canParse" in URL) {
  log("Test valid absolute URL");
  let url = "https://developer.mozilla.org/";
  let result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTest relative URL with no base URL");
  url = "/zh-CN/docs";
  result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTest relative URL with valid base URL");
  let baseUrl = "https://developer.mozilla.org/";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
} else {
  log("URL.canParse() not supported");
}
```

最后，下面的代码表明，`baseUrl` 不一定是字符串。这里我们传递的是一个 `URL` 对象。

```js
if ("canParse" in URL) {
  log("\nTest relative URL with base URL supplied as a URL object");
  let baseUrl = new URL("https://developer.mozilla.org/");
  let url = "/zh-CN/docs";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
}
```

各项检查结果如下。

{{EmbedLiveSample('Examples', '100%', '200')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL.URL", "URL()")}}
- [`URL.canParse()` 的 polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams) 可在 [`core-js`](https://github.com/zloirock/core-js) 中使用
