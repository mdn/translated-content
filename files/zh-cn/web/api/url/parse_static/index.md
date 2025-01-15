---
title: URL：parse() 静态方法
slug: Web/API/URL/parse_static
l10n:
  sourceCommit: 6592d9b17990c03bffe810c4696f6161f9c49063
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 接口的 `URL.parse()` 静态方法返回一个根据参数定义的新创建的 {{domxref("URL")}} 对象。

如果给定的基础 URL 或结果 URL 无法解析为有效的 URL，则返回 `null`。这是使用 {{domxref("URL.URL", "URL()")}} 构造函数在 [try...catch](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 块中构造 `URL` 的一种替代方法，或者使用 {{domxref("URL.canParse_static", "canParse()")}} 检查参数，如果方法返回 `false`，则返回 `null`。

## 语法

```js-nolint
URL.parse(url)
URL.parse(url, base)
```

### 参数

- `url`
  - : 一个字符串或任何其他具有{{Glossary("stringifier", "字符串化器")}}的对象，表示绝对 URL 或 URL 的相对引用。如果 `url` 是相对引用，则 `base` 是必需的，并用于解析最终的 URL。如果 `url` 是绝对 URL，则不会使用给定的 `base` 来创建结果 URL。
- `base` {{optional_inline}}

  - : 一个字符串，表示在 `url` 为相对 URL 时使用的基础 URL。如果未指定，则默认为 `undefined`。

    当你指定一个 `base` URL 时，解析后的 URL 并不是简单地将 `url` 和 `base` 拼接起来。对父目录和当前目录的相对引用是相对于 `base` URL 的当前目录解析的，当前目录仅包含直到最后一个斜杠的路径段，但不包括之后的任何内容。对根目录的相对引用是相对于基础 URL 的源解析的。更多信息请参见 [解析 URL 的相对引用](/zh-CN/docs/Web/API/URL_API/Resolving_relative_references)。

> **备注：** `url` 和 `base` 参数会将你传递的任何值字符串化，例如 {{domxref("HTMLAnchorElement")}} 或 {{domxref("HTMLAreaElement")}} 元素，就像其他接受字符串的 Web API 一样。特别是，你可以为任一参数使用现有的 {{domxref("URL")}} 对象，它将从对象的 {{domxref("URL.href", "href")}} 属性中字符串化。

### 返回值

如果参数可以解析为有效的 URL，则返回一个 `URL` 对象；否则返回 `null`。

## 示例

[解析 URL 的相对引用](/zh-CN/docs/Web/API/URL_API/Resolving_relative_references)和 [`URL()` 构造函数](/zh-CN/docs/Web/API/URL/URL#示例)提供了更多示例，演示了不同的 `url` 和 `base` 值如何解析为最终的绝对 URL（尽管主要使用 `URL()`）。

### 使用 URL.parse()

这个实时示例演示了如何使用 `URL.parse()` 静态方法处理一些不同的绝对和相对引用值。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

首先，我们使用条件 `"parse" in URL` 检查是否支持 `URL.parse()` 方法。如果该方法受支持，我们会记录检查绝对 URL 的结果、相对引用和基础 URL 的结果、具有更[复杂基础 URL](/zh-CN/docs/Web/API/URL_API/Resolving_relative_references)的相对引用的结果、具有有效基础 URL 的有效绝对 URL（基础 URL 未使用）的结果，以及导致方法返回 `null` 的无效基础 URL 的结果。

我们还会记录 `URL.parse()` 不支持的情况。

```js
if ("parse" in URL) {
  // 绝对 URL
  let result = URL.parse("https://developer.mozilla.org/zh-CN/docs");
  log(`[1]: ${result.href}`);

  // 相对引用到有效基础 URL
  result = URL.parse("zh-CN/docs", "https://developer.mozilla.org");
  log(`[2]: ${result.href}`);

  // 相对引用到更复杂的有效基础 URL
  //（仅使用协议和域名来解析 URL）
  result = URL.parse(
    "/different/place",
    "https://developer.mozilla.org:443/some/path?id=4",
  );
  log(`[3]: ${result.href}`);

  // 绝对 URL（基础 URL 被忽略）
  result = URL.parse(
    "https://example.org/some/docs",
    "https://developer.mozilla.org",
  );
  log(`[4]: ${result.href}`);

  // 无效基础 URL（缺少冒号）
  result = URL.parse("zh-CN/docs", "https//developer.mozilla.org");
  log(`[5]: ${result}`);
} else {
  log("URL.parse() 不支持");
}
```

最后，下面的代码演示了参数不必是字符串，可以传递一个 `URL` 对象作为 `base` 参数。

```js
if ("parse" in URL) {
  // 使用作为 URL 对象提供的基础 URL 来解析相对引用
  result = URL.parse("/zh-CN/docs", new URL("https://developer.mozilla.org/"));
  log(`[6]: ${result.href}`);
}
```

下面显示了每个检查结果。

{{EmbedLiveSample('使用 URL.parse()', '100%')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`URL()` 构造函数](/zh-CN/docs/Web/API/URL/URL)，如果传递的参数定义了无效的 URL，则会抛出错误
- [`core-js`](https://github.com/zloirock/core-js) 中 [`URL.parse()` 的 polyfill](https://github.com/zloirock/core-js#url-and-urlsearchparams)
