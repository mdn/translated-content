---
title: IntersectionObserver.rootMargin
slug: Web/API/IntersectionObserver/rootMargin
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} 接口的只读属性 **`rootMargin`** 是与 CSS 属性{{cssxref("margin")}}语法相似的字符串 (string) 对象。在交叉检测开始之前，由`rootMargin 规定的矩形的每一边都会被添加至`{{domxref("IntersectionObserver.root", "root")}}元素的边框盒 ({{Glossary("bounding box")}}) 的相应边。例如，这可以让你向外调整边界，使得目标元素被认为是 100% 可见的，即使此元素得一部分长或宽被裁剪，或者在边缘过于靠近根边框盒边界的情况下，将目标视为部分隐藏。

可参考[交集的计算](/zh-CN/docs/Web/API/Intersection_Observer_API#交集的计算)来深入了解 root margin 的工作原理或如何使其与根的边框盒进行协同工作。

## 语法

```plain
var marginString = IntersectionObserver.rootMargin;
```

### 值

一个字符串，形式与 CSS {{cssxref("margin")}}属性相似，包含了一条或一组根边框盒边的偏移量。这些偏移量会被添加至根边界盒与目标元素边界的交叉区域之前。

这个属性返回的字符串也许会与{{domxref("IntersectionObserver")}}被配置时所指定的值有所差别。浏览器可以改变这些值。

如果 rootMargin 在对象初始化的时候未被指定，它将被设置成默认值 `"0px 0px 0px 0px"`，这将意味着在原根节点边界框与目标边界之间计算交叉值。[交集的计算](/zh-CN/docs/Web/API/Intersection_Observer_API#交集的计算)描述了 rootMargin 的更加深入的使用方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
