---
title: Element.insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`insertAdjacentElement()`** 方法将一个给定的元素节点插入到相对于当前元素的指定位置。

## 语法

```js-nolint
insertAdjacentElement(position, element)
```

- position

  - : 表示相对于 `targetElement` 的位置的字符串；必须是以下字符串之一（大小写不敏感）：

    - `'beforebegin'`：`targetElement` 之前。
    - `'afterbegin'`：`targetElement` 内部的第一个子节点之前。
    - `'beforeend'`：`targetElement` 内部的最后一个子节点之后。
    - `'afterend'`：`targetElement` 之后。

- element
  - : 要插入到树中的元素。

### 返回值

插入的元素，插入失败则返回 `null`。

### 异常

- `SyntaxError` {{domxref("DOMException")}}
  - 如果指定的 `position` 不是可识别的值，则抛出该异常。
- {{jsxref("TypeError")}}
  - 如果指定的 `element` 不是有效的元素，则抛出该异常。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.appendChild()")}}（与 `beforeend` 效果相同）
