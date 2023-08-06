---
title: element.insertAdjacentHTML
slug: Web/API/Element/insertAdjacentHTML
---

{{APIRef("DOM")}}

**`insertAdjacentHTML()`** 方法将指定的文本解析为 {{domxref("Element")}} 元素，并将结果节点插入到 DOM 树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用 innerHTML 操作更快。

## 语法

```
element.insertAdjacentHTML(position, text);
```

- `position`

  - : 一个 {{domxref("DOMString")}}，表示插入内容相对于元素的位置，并且必须是以下字符串之一：

    - `'beforebegin'`：元素自身的前面。
    - `'afterbegin'`：插入元素内部的第一个子节点之前。
    - `'beforeend'`：插入元素内部的最后一个子节点之后。
    - `'afterend'`：元素自身的后面。

- `text`
  - : 是要被解析为 HTML 或 XML 元素，并插入到 DOM 树中的 {{domxref("DOMString")}}。

### 位置名称的可视化

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **备注：** beforebegin 和 afterend 位置，仅在节点在树中且节点具有一个 parent 元素时工作。

## 示例

```js
// 原为 <div id="one">one</div>
var d1 = document.getElementById("one");
d1.insertAdjacentHTML("afterend", '<div id="two">two</div>');

// 此时，新结构变成：
// <div id="one">one</div><div id="two">two</div>
```

## 注意

### 安全问题

使用 `insertAdjacentHTML` 插入用户输入的 HTML 内容的时候，需要转义之后才能使用。

如果只是为了插入文本内容（而不是 HTML 节点），不建议使用这个方法，建议使用[`node.textContent`](/zh-CN/docs/Web/API/Node/textContent) 或者 [`node.insertAdjacentText()`](/zh-CN/docs/Web/API/Element/insertAdjacentText)。因为这样不需要经过 HTML 解释器的转换，性能会好一点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 包括 Henri Sivonen 在内的某些 [hacks.mozilla.org 客座文章](http://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) 显示，`insertAdjacentHTML` 在某些情况下可以更快。
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
