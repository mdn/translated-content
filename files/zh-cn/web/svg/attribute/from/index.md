---
title: from
slug: Web/SVG/Attribute/From
---

{{SVGRef}}

这个属性是在 svg 动画发生过程中被修改的属性的初始值。当同时使用了这个属性和 [to](/zh-CN/docs/Web/SVG/Attribute/To) 属性，animation 将会修改这个这个设定的动画属性的值从 from 属性的值到 to 属性的值。

## 用法

| 类别       | 动画属性值                                                                   |
| ---------- | ---------------------------------------------------------------------------- |
| 值         | \<value>                                                                     |
| 动画特征   | No                                                                           |
| 标准化文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/animate.html#FromAttribute) |

这个属性的准确的值类型取决于这个属性将要被用作动画的属性的值。

## 例子

这个例子给 from 属性了一个 100 的值，让动画从 100 的宽度开始运行。

```xml
<?xml version="1.0"?>
<svg width="200" height="200"
  viewPort="0 0 200 200" version="1.1"
  xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100">
    <animate attributeType="XML"
      attributeName="width"
      from="100" to="150"
      dur="3s"
      fill="freeze"/>
  </rect>

</svg>
```

## 元素

如下的元素能使用 from 属性

- {{ SVGElement("animate") }}
- {{ SVGElement("animateColor") }}
- {{ SVGElement("animateMotion") }}
- {{ SVGElement("animateTransform") }}

## 规范

{{Specifications}}
