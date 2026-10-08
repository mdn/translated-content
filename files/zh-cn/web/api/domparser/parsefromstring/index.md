---
title: DOMParser：parseFromString() 方法
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: 4815929582d81825115987b2806087fd14662c50
---

{{APIRef("DOMParser")}}

> [!WARNING]
> 此方法将它的输入当做 HTML 解析，将结果写入 DOM。
> 此类 API 也被称为 [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage)，并且如果其输入来自一个攻击者，可能会导致[跨站点脚本（XSS）](/en-US/docs/Web/Security/Attacks/XSS)攻击。
>
> 你可以通过始终传递 `TrustedHTML` 而不是字符串，并且[强制执行可信类型](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)来缓解这种风险。参见[安全考量](#security_considerations)以获得更多信息。

{{domxref("DOMParser")}} 接口的 **`parseFromString()`** 方法解析一段包含 HTML 或者 XML 的输入，返回一个具有 {{domxref("Document/contentType","contentType")}} 属性规定的类型的 {{domxref("Document")}}。

> [!NOTE]
> [`Document.parseHTMLUnsafe()`](/en-US/docs/Web/API/Document/parseHTMLUnsafe_static) 静态方法提供了另一种便捷的、将 HTML 标记解析至 {{domxref("Document")}} 的方法。

## 语法

```js-nolint
parseFromString(input, mimeType)
```

### 参数

- `input`
  - : 一个 {{domxref("TrustedHTML")}} 实例或者一个定义了待解析 HTML 的字符串。
    此标记必须为 {{Glossary("HTML")}}、{{Glossary("XML")}}、{{Glossary("XHTML")}} 或者 {{Glossary("SVG")}} 文档之一。
- `mimeType`
  - : 一个字符串，指定了应使用 XML 解析器或者 HTML 解析器来解析字符串。

    允许的值包括：
    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

### 返回值

一个 {{domxref("Document/contentType","contentType")}} 符合提供的 `mimeType` 的 {{domxref("Document")}}。

> [!NOTE]
> 浏览器可能实际上会返回一个 {{domxref("HTMLDocument")}} 或者 {{domxref("XMLDocument")}} 对象。
> 这些对象衍生自 {{domxref("Document")}} 且没有添加属性：它们本质上是等价的。

### 异常

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : 可以由以下原因引起：
    - `mimeType` 提供了一个[不被允许的](#mimetype)值。
    - `input` 提供了一个字符串类型的值，同时[可信类型](/en-US/docs/Web/API/Trusted_Types_API)正在[由 CSP 强制执行](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)且没有默认策略被定义。

## 描述

**`parseFromString()`** 方法解析一个包含 HTML 或者 XML 的输入，返回一个 {{domxref("Document/contentType","contentType")}} 符合 `mimeType` 的 {{domxref("Document")}}。这个 `Document` 包含一个完全在内存中的 DOM，与相关页面的主 DOM 隔离。

如果 `mimeType` 是 `text/html`，输入将被解析为 HTML 文档，且 {{htmlelement("script")}} 元素被标记为不可执行、事件不被触发、事件处理器也不会被激活来运行行内脚本。
尽管该文档可以加载在 {{htmlelement("iframe")}} 和 {{htmlelement("img")}} 元素中指定的资源，它本质上是惰性的。
这允许你解析包含{{glossary("Shadow tree","影子树")}}的 HTML 输入，然后对文档进行操作，同时不影响用户可见的页面。
例如，你可以使用它来序列化输入的树，然后在需要时将一部分注入到用户可见的页面中。

对于其他允许的值（`text/xml`、`application/xml`、`application/xhtml+xml` 和 `image/svg+xml`），输入会被解析为 XML。
这允许你导入 XML 文件，验证其结构，然后导出数据。
如果输入不是格式良好的 XML，返回文档中会包含一个描述了解析错误的 `<parsererror>` 节点。

不允许的 `mimeType` 值会导致抛出 [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)。

### 安全考量

此方法将其输入解析为隔离的内存中的 DOM，禁止 {{htmlelement("script")}} 且停止事件监听器。
尽管返回的文档本质上是惰性的，在该文档中的事件监听器和脚本会在被插入到可见 DOM 后被允许工作。
因此，如果潜在的危险输入没有经过清洗就被解析为 `Document`，然后被注入到可见的/活动的 DOM 中（代码可在这里运行）的话，此方法会导致[跨站点脚本攻击（XSS）](/en-US/docs/Web/Security/Attacks/XSS)。

你应该通过始终传递 {{domxref("TrustedHTML")}} 对象而不是字符串、使用 [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) 指令以[强制执行可信类型](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)来缓解这种威胁。
这确保了输入经过转换函数处理，因为转换函数有机会在其被注入前[清洗](/en-US/docs/Web/Security/Attacks/XSS#sanitization)输入以移除潜在的危险标签（例如 {{htmlelement("script")}} 和事件处理器属性）。

使用 `TrustedHTML` 让只在几处审核和检查清洗过的代码成为可能，而不是将清洗函数分散在每一个注入点。
在使用 `TrustedHTML` 时，你应该不需要额外传入清洗函数。

请注意即使你清洗了可以执行代码的元素和属性，在采用用户的输入时你仍然需要小心。
例如，你的页面可能使用存储在 XML 文档中的数据来获取文件，然后执行这些文件。

## 示例

### 使用可信类型解析输入

在此案例中我们会安全地解析一个潜在的危险 HTML 输入，然后将其注入到可见页面的 DOM 中。

为了缓解 XSS 风险，我们会从包含 HTML 的字符串创建一个 `TrustedHTML` 对象。
可信类型仍未被所有浏览器支持，所以第一步我们定义一个[可信类型 tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill)，
作为该 JavaScript API 的透明替换。

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

然后我们创建一个定义了 {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} 的 {{domxref("TrustedTypePolicy")}}，以将一个输入字符串转换为 {{domxref("TrustedHTML")}} 实例。
一般来说，`createHTML()` 使用一个库来清洗输入，比如 [DOMPurify](https://github.com/cure53/DOMPurify)，就像下面这样：

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

然后我们使用这个 `policy` 对象来从潜在的危险输入字符串创建一个 `TrustedHTML` 对象，并将其解析为 `Document`。
注意作为结果的 `Document` 是一个带有 `<html>`、`<head>` 和 `<body>` 的完整 HTML 文档，哪怕输入并不包含这些元素：

```js
// 潜在恶意字符串
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// 使用 policy 创建 TrustedHTML
const trustedHTML = policy.createHTML(untrustedString);

// 解析 TrustedHTML（包含的是可信字符串）
const safeDocument = parser.parseFromString(trustedHTML, "text/html");
```

`safeDocument` 现在包含根据我们的 policy 移除了有害元素的 DOM。
下面我们使用 {{domxref("Element.replaceWith()")}} 来将可视 DOM 的 `body` 标签替换成这个文档的 body：新的 body 中的脚本会运行、事件监听器也会如期触发。

```js
document.body.replaceWith(safeDocument.body);
```

### 解析 XML、SVG 和 HTML

下面的代码演示了你可以如何使用这个方法来解析每一种内容类型。
虽然这里出于简洁原因省略了可信类型解析，在实际代码中你不应该省略它们。

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
console.log(doc1.contentType); // "application/xml"

const svgString = '<circle cx="50" cy="50" r="50"/>';
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
console.log(doc2.contentType); // "image/svg+xml"

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
console.log(doc3.contentType); // "text/html"

console.log(doc1.documentElement.textContent);
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"
```

注意上面的 `application/xml` 和 `image/svg+xml` MIME 类型是功能独立的——后者并不包含 SVG 特有的解析规则。

### 错误处理

当使用 XML 解析器处理一段格式并不良好的 XML 时，`parseFromString` 返回的 {{domxref("XMLDocument")}} 会包含一个 `<parsererror>` 节点，描述解析错误的性质。

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the missing closing tag";
const doc = parser.parseFromString(xmlString, "application/xml");
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  // 解析失败
} else {
  // 解析成功
}
```

另外，解析错误可能会在浏览器的 JavaScript 控制台被汇报。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - counterpart for {{jsxref("JSON")}} documents.
