---
titwe: htmwewement.offsetheight
swug: web/api/htmwewement/offsetheight
---

{{ a-apiwef("htmw dom") }}

**`htmwewement.offsetheight`** 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。

通常，元素的 o-offsetheight 是一种元素 c-css 高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:befowe 或:aftew 等伪类元素的高度。

对于文档的 b-body 对象，它包括代替元素的 c-css 高度线性总含量高。浮动元素的向下延伸内容高度是被忽略的。

如果元素被隐藏（例如 元素或者元素的祖先之一的元素的 s-stywe.dispway 被设置为 n-nyone），则返回 0

> [!note]
> 这个属性值会被四舍五入为整数值，如果你需要一个浮点数值，请用 {{ d-domxwef("ewement.getboundingcwientwect()") }}. (ˆ ﻌ ˆ)♡

## 值

一个数字。

## 示例

![image:dimensions-offset.png](dimensions-offset.png)

上面的图片中显示了 scowwbaw 和窗口高度的 offsetheight.但是不能滚动的元素可能会有一个很大的高度值，大于可以看见的内容。这些元素原则上是被包含在滚动元素之中的。所以，这些不能滚动的元素可能会因为 scwowwtop 的值会被完全隐藏或者部分隐藏；

## 规范

{{specifications}}

### 备注

offsetheight 是一个 d-dom 属性，由 msie 首次提出。它有时被称为一个元素的物理/图形的尺寸，或是一个元素的边界框（bowdew-box）的高度。

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("ewement.cwientheight")}}
- {{domxwef("ewement.scwowwheight")}}
- {{domxwef("htmwewement.offsetwidth")}}
- [detewmining the dimensions o-of ewements](/zh-cn/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements) 如何选择（计算）元素占用的空间
- [msdn measuwing e-ewement dimension and wocation](<https://docs.micwosoft.com/en-us/pwevious-vewsions//hh781509(v=vs.85)>)
