---
title: result
slug: Web/SVG/Attribute/result
---

{{SVGRef}}

属性 `result` 定义了滤镜的分配名。如果提供了它，则经过滤镜处理的结果即图形可以再次滤镜处理，在后继滤镜（即另一个 {{ SVGElement("filter") }} 元素）上通过一个 {{ SVGAttr("in") }} 属性引用之前的结果。如果没有提供 `result` 值，而且如果下一个滤镜也没有提供 {{ SVGAttr("in") }} 属性值，则输出只可作为下一个滤镜的隐式输入。

## 用法

| 类别   | 无                            |
| ------ | ----------------------------- |
| 值     | \<filter-primitive-reference> |
| 可变性 | Yes                           |

注意`<filter-primitive-reference>`不是一个 XML ID，换句话说，`<filter-primitive-reference>`只在给定的{{ SVGElement("filter") }}元素内部有意义，因此只有局部范围。在同一个{{ SVGElement("filter") }}元素内部，同一个`<filter-primitive-reference>`出现多次也是合法的。如果引用了，`<filter-primitive-reference>`将使用在给定结果前面、离给定结果最近的滤镜。

## 元素

下列元素可以使用`result`属性：

- [滤镜元素](/zh-CN/SVG/Element#FilterPrimitive) »

## 规范

{{Specifications}}
