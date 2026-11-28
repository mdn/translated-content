---
title: "Element: tagName 属性"
short-title: tagName
slug: Web/API/Element/tagName
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ApiRef("DOM")}}

{{domxref("Element")}} 接口的只读属性 **`tagName`** 会返回调用该属性的元素的标签名。

例如，如果元素是 {{HTMLElement("img")}}，那么它的 `tagName` 属性值为 `IMG`（对于 HTML 文档而言；对于 XML/XHTML 文档，大小写可能不同）。注意：你可以使用 {{domxref("Element.localName", "localName")}} 属性访问元素的本地名称；在本例中，该名称为小写的 `img`。

## 值

一个表示元素标签名的字符串。该字符串的大小写取决于文档类型：

- 对于表示 HTML 文档的 DOM 树，返回的标签名始终为规范的大写形式。例如，在 {{HTMLElement("div")}} 元素上调用 `tagName` 会返回 `"DIV"`。
- XML DOM 树中元素的标签名会按照其在原始 XML 文件中的大小写形式返回。如果 XML 文档包含标签 `"<SomeTag>"`，那么 `tagName` 属性值就是 `"SomeTag"`。

对于 {{domxref("Element")}} 对象，`tagName` 的值与该元素对象从 {{domxref("Node")}} 继承的 {{domxref("Node.nodeName", "nodeName")}} 属性值相同。

## 示例

### HTML 示例

```html
<span id="born">When I was born…</span>
```

### JavaScript 示例

```js
const span = document.getElementById("born");
console.log(span.tagName);
```

在 XHTML（或任何其他 XML 格式）中，会保留原始大小写；因此，如果原始标签名使用小写形式，输出结果就是 `"span"`。而在 HTML 中，无论创建原始文档时使用何种大小写，输出结果都会是 `"SPAN"`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.localName")}}
