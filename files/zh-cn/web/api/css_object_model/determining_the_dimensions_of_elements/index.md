---
title: 确定元素的尺寸
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
---

{{APIRef("CSSOM View")}}

当想要确认元素的宽高时有几种属性可以选择，但是我们很难确认使用哪个属性才是最适合的。本文将帮助你做出正确的选择。

## 元素占用了多少空间？

如果你需要知道元素总共占用了多少空间，包括可视内容、滚动条（如果有的话）、内边距和边框的宽度，你会使用 [`offsetWidth`](/zh-CN/docs/Web/API/HTMLElement/offsetWidth) 和 [offsetHeight](/zh-CN/docs/Web/API/HTMLElement/offsetHeight) 属性，大多数情况下，当元素没有什么形状上的变化时，他们与 [getBoundingClientRect()](/zh-CN/docs/Web/API/Element/getBoundingClientRect)的宽高一致。但是如果发生变化，offsetWidth 和 offsetHeight 将返回元素的布局宽高，而 getBoundingClientRect() 将返回实际渲染的宽高。例如：如果元素的宽 width:100px，变化 transform:scale(0.5)，此时 getBoundingClientRect() 将返回宽 50，而 offsetWidth 将返回宽 100.

![Image:Dimensions-offset.png](dimensions-offset.png)

## 显示内容尺寸是多少？

如果你需要知道展示区域内容占用了多少空间，包括内边距但是不包括边框、外边距或者滚动条，你会使用[clientWidth](/zh-CN/docs/Web/API/Element/clientWidth)和[clientHeight](/zh-CN/docs/Web/API/Element/clientHeight)属性：

![Image:Dimensions-client.png](dimensions-client.png)

## 内容有多大？

如果你想要知道内容区域的实际大小，而不局限于可见区域的话，你会使用 [`scrollWidth`](/zh-CN/docs/Web/API/Element/scrollWidth)和[scrollHeight](/zh-CN/docs/Web/API/Element/scrollHeight)属性。即使使用了滚动条仅有部分内容可见，这两个属性仍会返回元素的完整内容宽高

例如，一个 300x300 像素的滚动盒子里放置了一个 600x400 像素的元素，`scrollWidth` 将会返回 600，`scrooHeight` 返回 400。

## 参见

- <https://www.w3.org/TR/cssom-view-1/>
- [MSDN：测量元素尺寸和位置](<https://learn.microsoft.com/zh-cn/previous-versions/hh781509(v=vs.85)>)
