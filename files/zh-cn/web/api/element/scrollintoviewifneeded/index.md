---
title: Element.scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
---

{{APIRef("DOM")}}{{Non-standard_header}}

**`Element.scrollIntoViewIfNeeded()`**方法用来将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动。此方法是标准的[Element.scrollIntoView()](/zh-CN/docs/Web/API/Element/scrollIntoView)方法的专有变体。

## 语法

```plain
element.scrollIntoViewIfNeeded(); // 等同于 element.scrollIntoViewIfNeeded(true)
element.scrollIntoViewIfNeeded(true);
element.scrollIntoViewIfNeeded(false);
```

### 参数

- _`opt_center`_

  - : 一个 {{jsxref("Boolean")}} 类型的值，默认为`true`:

    - 如果为 true，则元素将在其所在滚动区的可视区域中居中对齐。
    - 如果为 false，则元素将与其所在滚动区的可视区域最近的边缘对齐。根据可见区域最靠近元素的哪个边缘，元素的顶部将与可见区域的顶部边缘对准，或者元素的底部边缘将与可见区域的底部边缘对准。

## 示例

```plain
var element = document.getElementById("child");

element.scrollIntoViewIfNeeded();
element.scrollIntoViewIfNeeded(true);
element.scrollIntoViewIfNeeded(false);
```

## 规范

不属于任何规范，是一种 WebKit 专有的方法。

## 浏览器兼容性

{{Compat}}

## 参见

- [W3C CSSOM bug 17152: Support centering an element when scrolling into view.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (一个等同于 scrollIntoViewIfNeeded 的标准功能特性)
