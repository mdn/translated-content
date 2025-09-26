---
title: Element：scrollIntoViewIfNeeded() 方法
slug: Web/API/Element/scrollIntoViewIfNeeded
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{Non-standard_header}}

**`Element.scrollIntoViewIfNeeded()`** 方法将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动。此方法是标准的 [`Element.scrollIntoView()`](/zh-CN/docs/Web/API/Element/scrollIntoView) 方法的专有变体。

## 语法

```js-nolint
scrollIntoViewIfNeeded()
scrollIntoViewIfNeeded(centerIfNeeded)
```

### 参数

- `centerIfNeeded` {{optional_inline}}
  - : 一个可选的布尔值，默认为`true`：
    - 如果为 `true`，则元素将在其所在滚动区的可视区域中居中对齐。
    - 如果为 `false`，则元素将与其所在滚动区的可视区域最近的边缘对齐。根据可见区域最靠近元素的哪个边缘，元素的顶部将与可见区域的顶部边缘对准，或者元素的底部边缘将与可见区域的底部边缘对准。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const element = document.getElementById("my-el");

element.scrollIntoViewIfNeeded(); // 将元素置于可见区域的中心
element.scrollIntoViewIfNeeded(false); // 将元素与可见区域中最近的边缘对齐
```

## 规范

不属于任何规范。这是一种 WebKit 专有的方法。

## 浏览器兼容性

{{Compat}}

## 参见

- [W3C CSSOM bug 17152：支持在元素滚动入视图时将其居中。](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152)（等同于 `scrollIntoViewIfNeeded` 的标准特性的请求）
