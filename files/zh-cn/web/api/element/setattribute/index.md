---
title: Element：setAttribute() 方法
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 674ac8f0b0c639967d29951b5e6f3f65c656f164
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`setAttribute()`** 方法用于设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。

要获取某个属性当前的值，请使用 {{domxref("Element.getAttribute", "getAttribute()")}}；要删除某个属性，请使用 {{domxref("Element.removeAttribute", "removeAttribute()")}}。

如果你想要在添加时使用 {{domxref("Attr")}} 节点（例如，从另一个元素克隆），你可以改用 {{domxref("Element.setAttributeNode", "setAttributeNode()")}} 方法。

## 语法

```js-nolint
setAttribute(name, value)
```

### 参数

- `name`
  - : 一个用于指定要设置的属性的名称的字符串。当在 HTML 文档中的 HTML 元素上调用 `setAttribute()` 方法时，该方法会将其属性名称自动转换为全小写形式。
- `value`
  - : 一个包含要赋给属性的值的字符串。任何指定的非字符串值都会自动转换为字符串。

对于布尔属性，只要它们出现在元素中，就会被视为是 `true`。你应该将 `value` 设置为空字符串（`""`）或属性的名称（不带前导或尾随空格）。请参阅下面的[示例](#示例)以获得实际演示。

由于指定的值（`value`）会被转换为字符串，所以指定 `null` 不一定能达到你预期的效果。请将属性的值设置为字符串 `"null"`，而不是删除属性或将其值设置为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。如果要删除属性，请调用 {{domxref("Element.removeAttribute", "removeAttribute()")}}。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 如果 [`name`](#name) 值不是有效的 [XML 名称](https://www.w3.org/TR/REC-xml/#dt-name)，则抛出此异常；例如，它以数字、连字符或句点开头，或包含除字母数字字符、下划线、连字符或句点之外的字符。

## 示例

在下面的示例中，`setAttribute()` 被用于设置 {{HTMLElement("button")}} 上的属性。

### HTML

```html
<button>你好，世界</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

### JavaScript

```js
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
```

{{ EmbedLiveSample('示例', '300', '50') }}

这说明了两件事：

- 上面对 `setAttribute()` 的第一次调用显示了将 `name` 属性的值更改为“helloButton”。你可以使用浏览器的页面检查器（[Chrome](https://developer.chrome.google.cn/docs/devtools/dom/properties)、[Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/inspect)、[Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)、[Safari](https://support.apple.com/zh-cn/guide/safari-developer/welcome/mac)）查看此内容。
- 要设置布尔属性的值（例如 `disabled`），可以指定任何值。建议使用空字符串或属性名称。重要的是，如果属性确实存在，_则不管其实际值如何_，都将视其值为 `true`。该属性的缺失表示其值是 `false`。我们通过把 `disabled` 属性的值设置为空字符串（`""`），以将 `disable` 设置为 `true`，这将导致按钮被禁用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
