---
title: Element：insertAdjacentElement() 方法
slug: Web/API/Element/insertAdjacentElement
l10n:
  sourceCommit: 1e2e601d0d05dca2ab93e0e28f904aa92e4102e1
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`insertAdjacentElement()`** 方法将一个给定的元素节点插入到相对于当前元素的指定位置。

## 语法

```js-nolint
insertAdjacentElement(position, element)
```

- `position`
  - : 表示相对于 `targetElement` 的位置的字符串；必须是以下字符串之一（大小写不敏感）：
    - `'beforebegin'`：`targetElement` 之前。
    - `'afterbegin'`：`targetElement` 内部的第一个子节点之前。
    - `'beforeend'`：`targetElement` 内部的最后一个子节点之后。
    - `'afterend'`：`targetElement` 之后。

- `element`
  - : 要插入到树中的元素。

### 返回值

插入的元素，插入失败则返回 `null`。

### 异常

- `SyntaxError` {{domxref("DOMException")}}
  - : 如果指定的 `position` 不是可识别的值，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 如果指定的 `element` 不是有效的元素，则抛出该异常。

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

> [!NOTE]
> 只有当节点处于 DOM 树中且有一个父元素时 `beforebegin` 和 `afterend` 才会生效。

## 示例

```js
beforeBtn.addEventListener("click", () => {
  const tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("beforebegin", tempDiv);
  }
  setListener(tempDiv);
});

afterBtn.addEventListener("click", () => {
  const tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("afterend", tempDiv);
  }
  setListener(tempDiv);
});
```

看看我们在 Github（也可以参考[源码](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentElement.html)）上的 [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html) 演示。在一个容器中我们有一组 {{htmlelement("div")}} 元素。点击其中一个 `div` 时，这个容器会处于选中状态，然后你就可以按下 `Insert before` 或 `Insert after` 按钮，通过 `insertAdjacentElement()` 方法来把一个新的 `div` 插入到选中的元素前面或者后面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}}（与 `beforebegin` 类似，但参数不同）
- {{domxref("Node.appendChild()")}}（与 `beforeend` 效果相同）
