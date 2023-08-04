---
title: Document.querySelectorAll
slug: Web/API/Document/querySelectorAll
---

{{ ApiRef("DOM") }}

## 概述

返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 {{domxref("NodeList")}} 。

> **备注：** 此方法基于{{domxref("ParentNode")}} mixin 的{{domxref("ParentNode.querySelectorAll", "querySelectorAll()")}} 实现。

## 语法

```js-nolint
querySelectorAll(selectors)
```

### 参数

- `selectors`
  - : 一个包含一个或多个匹配的选择器的字符串。其必须是一个有效的 [CSS 选择器](/zh-CN/docs/Web/CSS/CSS_selectors)字符串，如果不是，会抛出 `SyntaxError` 异常。有关使用选择器标识元素的更多信息，请参阅[使用选择器定位 DOM 元素](/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)，可以通过使用逗号分隔多个选择器来指定它们。

> **备注：** 必须使用反斜杠字符转义不属于标准 CSS 语法的字符。由于 JavaScript 也使用反斜杠转义，因此在使用这些字符编写字符串文字时必须特别小心。有关详细信息，请参阅[转义特殊字符](/zh-CN/docs/Web/API/Document/querySelector#转义特殊字符)

### 返回值

一个静态 {{domxref("NodeList")}}，包含一个与至少一个指定选择器匹配的元素的{{domxref("Element")}}对象，或者在没有匹配的情况下为空{{domxref("NodeList")}}

> **备注：** 如果 `selectors` 参数中包含 [CSS 伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)，则返回的列表始终为空。

### 异常

- `SyntaxError`
  - : 如果指定的 `选择器` 不合法，会抛出错误。如$("##div")

## 示例

### 获取匹配列表

要获取文档中所有{{HTMLElement("p")}}元素的{{domxref("NodeList")}}。

```js
var matches = document.querySelectorAll("p");
```

此示例返回文档中所有{{HTMLElement("div")}}元素的列表，其中 class 包含"`note`"或"`alert`"：

```js
var matches = document.querySelectorAll("div.note, div.alert");
```

在这里，我们得到一个`<p>`元素的列表，其直接父元素是一个 class 为`"highlighted"`的{{domxref("div")}}，并且位于 ID 为`"test"`的容器内。

```js
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

此示例使用[属性选择器](/zh-CN/docs/Web/CSS/Attribute_selectors)返回文档中属性名为`"data-src"`的{{domxref("iframe")}}元素列表：

```js
var matches = document.querySelectorAll("iframe[data-src]");
```

这里，属性选择器用于返回 ID 为`"userlist"`的列表中包含值为`"1"`的`"data-active"`属性的元素

```js
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");
```

### 访问匹配项

一旦返回匹配元素的{{domxref("NodeList")}}，就可以像任何数组一样检查它。如果数组为空（即，其`length`属性为 0），则找不到匹配项。

否则，您只需使用标准数组方法来访问列表的内容。您可以使用任何常见的循环语句，例如：

```js
var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function (userItem) {
  deleteUser(userItem);
});
```

## 用户备注

`querySelectorAll()` 的行为与大多数常见的 JavaScript DOM 库不同，这可能会导致意外结果。

### HTML

考虑这个 HTML 及其三个嵌套的{{HTMLElement("div")}}块

```html
<div class="outer">
  <div class="select">
    <div class="inner"></div>
  </div>
</div>
```

### JavaScript

```js
var select = document.querySelector(".select");
var inner = select.querySelectorAll(".outer .inner");
inner.length; // 1, not 0!
```

在这个例子中，当在`<div>`上下文中选择带有`"select"`类的`".outer .inner"`时，仍然会找到类`".inner"`的元素，即使`.outer`不是基类的后代 执行搜索的元素（`".select"`）。默认情况下，`querySelectorAll()`仅验证选择器中的最后一个元素是否在搜索范围内。

{{cssxref(":scope")}} 伪类符合预期的行为，只匹配基本元素后代的选择器：

```js
var select = document.querySelector(".select");
var inner = select.querySelectorAll(":scope .outer .inner");
inner.length; // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Locating DOM elements using selectors](/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [Attribute selectors](/zh-CN/docs/Web/CSS/Attribute_selectors) in the CSS Guide
- [Attribute selectors](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors) in the MDN Learning Area
- {{domxref("Element.querySelector()")}} and {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} and {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} and {{domxref("ParentNode.querySelectorAll()")}}
- [Code snippets for `querySelector()`](/zh-CN/docs/Code_snippets/QuerySelector)
