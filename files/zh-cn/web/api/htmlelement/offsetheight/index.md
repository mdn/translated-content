---
title: HTMLElement.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetHeight`** 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。

通常，元素的 offsetHeight 是一种元素 CSS 高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:before 或:after 等伪类元素的高度。

对于文档的 body 对象，它包括代替元素的 CSS 高度线性总含量高。浮动元素的向下延伸内容高度是被忽略的。

如果元素被隐藏（例如 元素或者元素的祖先之一的元素的 style.display 被设置为 none），则返回 0

> [!NOTE]
> 这个属性值会被四舍五入为整数值，如果你需要一个浮点数值，请用 {{ domxref("element.getBoundingClientRect()") }}.

## 值

一个数字。

## 示例

![Image:Dimensions-offset.png](dimensions-offset.png)

上面的图片中显示了 scollbar 和窗口高度的 offsetHeight.但是不能滚动的元素可能会有一个很大的高度值，大于可以看见的内容。这些元素原则上是被包含在滚动元素之中的。所以，这些不能滚动的元素可能会因为 scrollTop 的值会被完全隐藏或者部分隐藏；

## 规范

{{Specifications}}

### 备注

offsetHeight 是一个 DOM 属性，由 MSIE 首次提出。它有时被称为一个元素的物理/图形的尺寸，或是一个元素的边界框（border-box）的高度。

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determining the dimensions of elements](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements) 如何选择（计算）元素占用的空间
- [MSDN Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
