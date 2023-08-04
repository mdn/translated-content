---
title: Element.setAttribute()
slug: Web/API/Element/setAttribute
---

{{APIRef("DOM")}}

设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。

要获取某个属性当前的值，可使用 {{domxref("Element.getAttribute", "getAttribute()")}}；要删除某个属性，可使用 {{domxref("Element.removeAttribute", "removeAttribute()")}}。

## 语法

```plain
element.setAttribute(name, value);
```

### 参数

- `name`
  - : 表示属性名称的字符串。A {{domxref("DOMString")}} specifying the name of the attribute whose value is to be set. The attribute name is automatically converted to all lower-case when `setAttribute()` is called on an HTML element in an HTML document.
- `value`
  - : 属性的值/新值。A {{domxref("DOMString")}} 包含了分配给这个属性的值。任何非字符串的值都会被自动转换为字符串。

当在 HTML 文档中的 HTML 元素上调用 `setAttribute()` 方法时，该方法会将其属性名称（attribute name）参数小写化。

如果指定的属性已经存在，则其值变为传递的值。如果不存在，则创建指定的属性。

尽管对于不存在的属性，[`getAttribute()`](/zh-CN/docs/DOM/element.getAttribute) 返回 `null`，你还是应该使用 [`removeAttribute()`](/zh-CN/docs/DOM/element.removeAttribute) 代替 `elt.setAttribute(attr, null)` 来删除属性。

布尔属性（原文是 Boolean attributes）只要出现在元素上就会被认为是 `true` ，无论它的值是什么; 一般来说，你应该将 `value` 设置为空字符串 (`""`) 。(一些人使用这个属性的名称作为值; 这不会出现什么问题，但这是不规范的). See the [example](#示例) below for a practical demonstration.

由于将指定的值转换为字符串，因此指定 null 不一定能达到您的期望。而不是删除属性或将其值设置为{{jsxref("null")}}，而是将属性的值设置为字符串“null”。如果要删除属性，请调用{{domxref("Element.removeAttribute", "removeAttribute()")}}}。

### 返回值

{{jsxref("undefined")}}

### 例外

- `无效字符错误`
  - : 指定的属性名称包含一个或多个在属性名称中无效的字符。

## 示例

在下面的例子中，`setAttribute()` 被用于设置 {{HTMLElement("button")}} 上的属性。

### HTML

```html
<button>Hello World</button>
```

### JavaScript

```js
var b = document.querySelector("button");

b.setAttribute("name", "helloButton");
b.setAttribute("disabled", "");
```

这说明了两件事：

- 上面对 setAttribute() 的第一次调用显示了将 name 属性的值更改为“helloButton”。您可以使用浏览器的页面检查器（Chrome，Edge，Firefox，Safari）查看此内容。
- 要设置布尔属性的值（例如禁用），可以指定任何值。建议使用空字符串或属性名称。重要的是，如果根本不存在该属性，则不管其实际值如何，都将其值视为真实。该属性的缺失表示其值是 false。通过将 Disabled 属性的值设置为空字符串（“”），我们将 disable 设置为 true，这将导致按钮被禁用。

{{ EmbedLiveSample('示例', '300', '50') }}

{{DOMAttributeMethods}}

## 规范

- [DOM Level 2 Core: setAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68F082) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute))
- [HTML5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/#apis-in-html-documents)

## 浏览器兼容性

{{Compat}}

### Gecko 备注

使用 `setAttribute()` 修改某些属性值时，尤其是 XUL 中的 `value`，可能得不到期望结果。这是由于 `attribute` 指定的是默认值。要访问或修改当前值，应该使用 `property` 属性。例如，使用 `Element.value` 代替 `Element.setAttribute()`。
