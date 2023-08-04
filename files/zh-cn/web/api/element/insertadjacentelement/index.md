---
title: Element.insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
---

{{APIRef("DOM")}}

**`insertAdjacentElement()`** 方法将一个给定的元素节点插入到相对于被调用的元素的给定的一个位置。

## 语法

```
element.insertAdjacentElement(position, element);
```

### 参数

- position

  - : A {{domxref("DOMString")}} 表示相对于该元素的位置；必须是以下字符串之一：

    - `'beforebegin'`: 在该元素本身的前面。
    - `'afterbegin'`:只在该元素当中，在该元素第一个子孩子前面。
    - `'beforeend'`:只在该元素当中，在该元素最后一个子孩子后面。
    - `'afterend'`: 在该元素本身的后面。

- element
  - : 要插入到树中的元素。

### 返回值

插入的元素，插入失败则返回 null.

### 异常

| 异常          | 说明                           |
| ------------- | ------------------------------ |
| `SyntaxError` | 插入的位置是一个无法识别的值。 |
| `TypeError`   | 插入的元素不是一个有效元素。   |

### 位置命名的可视化展示

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **备注：** 当节点处于 DOM 树中而且有一个父元素的时候 `beforebegin` 和 `afterend` 操作才能起作用。

## 例子

```js
beforeBtn.addEventListener("click", function () {
  var tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  activeElem.insertAdjacentElement("beforebegin", tempDiv);
  setListener(tempDiv);
});

afterBtn.addEventListener("click", function () {
  var tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  activeElem.insertAdjacentElement("afterend", tempDiv);
  setListener(tempDiv);
});
```

看看我们在 Github（也可以参考 [源码](https://github.com/mdn/insert-adjacent/blob/master/insertAdjacentElement.html)）上的 [insertAdjacentElement.html](http://mdn.github.io/insert-adjacent/insertAdjacentElement.html) 演示。在一个容器当中我们有一组{{htmlelement("div")}} 元素。点击其中一个 div 时，这个容器会处于选中状态，然后你就可以按下*Insert before* 或*Insert after* 按钮通过 `insertAdjacentElement() 方法`来把一个新的 divs 插入到选中的元素前面或者后面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.appendChild()")}} (same effect as `beforeend`)
