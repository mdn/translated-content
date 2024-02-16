---
title: Element.insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
---

{{APIRef("DOM")}}

**`insertAdjacentElement()`** 方法将一个给定的 {{domxref("Element")}} 元素插入到 DOM 树中的指定位置。

## 语法

```
element.insertAdjacentElement(position, element);
```

- position

  - : 一个 {{domxref("DOMString")}}，表示插入内容相对于元素的位置，并且必须是以下字符串之一：

    - `'beforebegin'`：元素自身的前面。
    - `'afterbegin'`：插入元素内部的第一个子节点之前。
    - `'beforeend'`：插入元素内部的最后一个子节点之后。
    - `'afterend'`：元素自身的后面。

- element
  - : 要被插入到 DOM 树中的 {{domxref("Element")}} 元素。

### 返回值

插入的元素，插入失败则返回 `null`。

### 异常

- `SyntaxError` {{domxref("DOMException")}}
  - 无法识别 `position` 的值。
- {{jsxref("TypeError")}}
  - 插入的 `element` 不是一个有效元素。

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

> **备注：** 只有当节点处于 DOM 树中且有一个父元素时 `beforebegin` 和 `afterend` 才会生效。

## 例子

```js
// 原为 <div id="one">one</div>
const one = document.getElementById("one");
const two = document.createElement("div");
two.innerText = "two";
one.insertAdjacentHTML("afterend", two);

// 此时，新结构变为：
// <div id="one">one</div><div id="two">two</div>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.appendChild()")}}（与 `beforeend` 效果相同）
