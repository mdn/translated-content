---
title: HTMLElement.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetWidth`** 是一个只读属性，返回一个元素的布局宽度。一个典型的（译者注：各浏览器的 offsetWidth 可能有所不同）offsetWidth 是测量包含元素的边框 (border)、水平线上的内边距 (padding)、竖直方向滚动条 (scrollbar)（如果存在的话）、以及 CSS 设置的宽度 (width) 的值。

## 语法

```plain
var offsetWidth =element.offsetWidth;
```

`intElemOffsetWidth` is a variable storing an integer corresponding to the `offsetWidth` pixel value of the element. `offsetWidth` 是一个只读属性。

> [!NOTE]
> 这个属性将会 round(四舍五入) 为一个整数。如果你想要一个 fractional(小数) 值，请使用{{ domxref("element.getBoundingClientRect()") }}.

## 示例

![Image:Dimensions-offset.png](dimensions-offset.png)

## 规范

{{Specifications}}

### 备注

`offsetWidth` 是一个 DHTML 对象模型中的属性，由微软 IE 浏览器首次引入。有时候它也可以称为一个元素的物理或图形尺寸，或者 border-box（译者注：即 CSS3 中的 border-box 模型）的宽度。

## 参见

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining the dimensions of elements](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
