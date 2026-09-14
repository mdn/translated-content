---
title: id
slug: Web/HTML/Reference/Global_attributes/id
---

**`id`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)定义了一个全文档唯一的标识符（ID）。

{{InteractiveExample("HTML Demo: id", "tabbed-shorter")}}

```html interactive-example
<p>A normal, boring paragraph. Try not to fall asleep.</p>

<p id="exciting">The most exciting paragraph on the page. One of a kind!</p>
```

```css interactive-example
#exciting {
  background: linear-gradient(to bottom, #ffe8d4, #f69d3c);
  border: 1px solid #696969;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px black;
}

#exciting:before {
  content: "ℹ️";
  margin-right: 5px;
}
```

## 描述

它用于在链接（使用[片段](/zh-CN/docs/Web/URI#片段)）、脚本和样式（通过 {{glossary("CSS")}}）中辨识元素。

> [!WARNING]
> 该属性的值是一个不透明（opaque）字符串，这意味着网页开发者不能使用它来传递人类可读的信息。然而，具有一定可读性的 ID（如使用 `ticket-18659` 而不是 `r45tgfe-freds&$@`）可以有助于理解代码。

`id` 的值不得包含空格和制表符等{{glossary("whitespace","空白字符")}}。浏览器会将不符合规范的 ID 中的空白字符视为 ID 的一部分。与允许以空格分隔值的 [`class`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#class) 属性不同，元素只能拥有一个 ID 值。

> [!NOTE]
> 从技术上讲，`id` 属性的值可以包含除了{{glossary("whitespace","空白")}}字符的任何字符。然而，为了避免无意中的错误，只能使用 {{glossary("ASCII")}} 字母、数字、`'_'` 和 `'-'`，并且`id` 属性的值应该以字母开头。例如，`.` 在 CSS 中具有特殊的意义（它作为一个[类选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Class_selectors)）。除非你注意在 CSS 中转义它，否则它不会被识别为 `id` 属性值的一部分。很容易忘记这样做，导致你的代码中出现难以检测的错误。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有的[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。
- 反映该属性的 {{domxref("Element.id")}}。
- {{domxref("Document.getElementById")}} 方法。
- CSS [ID 选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/ID_selectors)。
