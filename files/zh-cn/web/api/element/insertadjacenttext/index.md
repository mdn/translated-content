---
title: Element.insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
---

{{APIRef("DOM")}}

**`insertAdjacentText()`** 方法将一个给定的文本节点插入在相对于被调用的元素给定的位置。

## 句法

```
element.insertAdjacentText(position, element);
```

### 参数

- position

  - : A {{domxref("DOMString")}} representing the position relative to the `element`; must be one of the following strings:

    - `'beforebegin'`: Before the `element` itself.
    - `'afterbegin'`: Just inside the `element`, before its first child.
    - `'beforeend'`: Just inside the `element`, after its last child.
    - `'afterend'`: After the `element` itself.

- element
  - : A {{domxref("DOMString")}} representing the text to be inserted into the tree.

### 返回值

Void.

### 例外

| Exception     | Explanation                                         |
| ------------- | --------------------------------------------------- |
| `SyntaxError` | The `position` specified is not a recognised value. |

### Visualization of position names

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **备注：** 只有当节点位于树中并具有元素父元素时，beforebegin 和 afterend 位置才能工作。

## 范例

```js
beforeBtn.addEventListener("click", function () {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", function () {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

Have a look at our [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html) demo on GitHub (see the [source code](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentText.html) too.) Here we have a simple paragraph. You can enter some text into the form element, then press the _Insert before_ and _Insert after_ buttons to insert it before or after the existing paragraph text using `insertAdjacentText()`. Note that the existing text node is not added to — further text nodes are created containing the new additions.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentHTML()")}}
