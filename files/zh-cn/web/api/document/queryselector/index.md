---
title: document.querySelector()
slug: Web/API/Document/querySelector
---

{{ ApiRef("DOM") }}

文档对象模型{{domxref("Document")}}引用的 **`querySelector()`** 方法返回文档中与指定选择器或选择器组匹配的第一个 {{domxref("Element")}}对象。如果找不到匹配项，则返回`null`。

> **备注：** 匹配是使用深度优先先序遍历，从文档标记中的第一个元素开始，并按子节点的顺序依次遍历。

## 语法

```js
element = document.querySelector(selectors);
```

### 参数

- `selectors`
  - : 包含一个或多个要匹配的选择器的 DOM 字符串{{domxref("DOMString")}}。该字符串必须是有效的 CSS 选择器字符串；如果不是，则引发`SYNTAX_ERR`异常。请参阅[使用选择器定位 DOM 元素](/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)以获取有关选择器以及如何管理它们的更多信息。

> **备注：** 必须使用反斜杠字符转义不属于标准 CSS 语法的字符。由于 JavaScript 也使用退格转义，因此在使用这些字符编写字符串文字时必须特别小心。有关详细信息，请参阅[转义特殊字符](#转义特殊字符)。

### 返回值

表示文档中与指定的一组 CSS 选择器匹配的第一个元素，一个 {{domxref("Element")}}对象。如果没有匹配到，则返回 null。

如果您需要与指定选择器匹配的所有元素的列表，则应该使用{{domxref("Document.querySelectorAll", "querySelectorAll()")}} 。

### 异常

- `SYNTAX_ERR`
  - : 指定`selectors`的语法无效。

## 注意

如果选择器是一个 ID，并且这个 ID 在文档中错误地使用了多次，那么返回第一个匹配该 ID 的元素。

CSS 伪类不会返回任何元素，见 [Selectors API](https://www.w3.org/TR/selectors-api/#grammar) 中的相关规定。

### 转义特殊字符

如果要匹配的 ID 或选择器不符合 CSS 语法（比如不恰当地使用了冒号或者空格），你必须用反斜杠将这些字符转义。由于 JavaScript 中，反斜杠是转义字符，所以当你输入一个文本串时，你必须将它转义两次（一次是为 JavaScript 字符串转义，另一次是为 `querySelector` 转义）：

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log("#foo\bar"); // "#fooar"
  document.querySelector("#foo\bar"); // 不匹配任何元素

  console.log("#foo\\bar"); // "#foo\bar"
  console.log("#foo\\\\bar"); // "#foo\\bar"
  document.querySelector("#foo\\\\bar"); // 匹配第一个 div

  document.querySelector("#foo:bar"); // 不匹配任何元素
  document.querySelector("#foo\\:bar"); // 匹配第二个 div
</script>
```

## 示例

### 查找第一个匹配 class 属性的 html 元素

这个例子中，会返回当前文档中第一个类名为 "`myclass`" 的元素：

```js
var el = document.querySelector(".myclass");
```

### 一个更复杂的选择器

_选择器也可以非常强大，如以下示例所示_.

这里，一个 class 属性为"user-panel main"的 div 元素{{HTMLElement("div")}}(`<div class="user-panel main">`) 内包含一个 name 属性为"login"的 input 元素{{HTMLElement("input")}} (`<input name="login"/>`) ，如何选择，如下所示：

```js
var el = document.querySelector("div.user-panel.main input[name='login']");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Locating DOM elements using selectors](/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
- {{domxref("Element.querySelectorAll()")}}
