---
title: Element.scrollIntoView()
slug: Web/API/Element/scrollIntoView
---

{{APIRef("DOM")}}{{domxref("Element")}} 接口的 scrollIntoView() 方法会滚动元素的父容器，使被调用 scrollIntoView() 的元素对用户可见。

## 语法

```
element.scrollIntoView(); // 等同于 element.scrollIntoView(true)
element.scrollIntoView(alignToTop); // Boolean 型参数
element.scrollIntoView(scrollIntoViewOptions); // Object 型参数
```

### 参数

- `alignToTop`{{optional_inline}}

  - : 一个{{jsxref("Boolean")}}值：

    - 如果为`true`，元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的 `scrollIntoViewOptions: {block: "start", inline: "nearest"}`。这是这个参数的默认值。
    - 如果为`false`，元素的底端将和其所在滚动区的可视区域的底端对齐。相应的`scrollIntoViewOptions: {block: "end", inline: "nearest"}`。

- `scrollIntoViewOptions` {{optional_inline}} {{experimental_inline}}

  - : 一个包含下列属性的对象：

    - `behavior` {{optional_inline}}
      - : 定义动画过渡效果， `"auto"`或 `"smooth"` 之一。默认为 `"auto"`。
    - `block` {{optional_inline}}
      - : 定义垂直方向的对齐， `"start"`, `"center"`, `"end"`, 或 `"nearest"`之一。默认为 `"start"`。
    - `inline` {{optional_inline}}
      - : 定义水平方向的对齐， `"start"`, `"center"`, `"end"`, 或 `"nearest"`之一。默认为 `"nearest"`。

## 示例

```
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
```

## 注意

取决于其它元素的布局情况，此元素可能不会完全滚动到顶端或底端。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
