---
title: attributeName
slug: Web/SVG/Attribute/attributeName
---

{{SVGRef}}

该属性标识了在一个动画动作环节中，父元素的需要被改变的属性名。

## 用法

| 类别     | 动画属性目标属性                                                                      |
| -------- | ------------------------------------------------------------------------------------- |
| 值       | \<attributeName>                                                                      |
| 可变性   | No                                                                                    |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/animate.html#AttributeNameAttribute) |

## 示例

下面的示例使用了 y 作为`attributeName`，通过改变一个矩形在 Y 轴上的位置来变动这个矩形。

```xml
<?xml version="1.0"?>
<svg width="250" height="250"
  viewPort="0 0 250 250" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate attributeType="XML"
      attributeName="y"
      from="0" to="50"
      dur="5s"/>
  </rect>
</svg>
```

## 元素

下列元素可以使用`attributeName`属性：

- {{ SVGElement("animate") }}
- {{ SVGElement("animateColor") }}
- {{ SVGElement("animateTransform") }}
- {{ SVGElement("set") }}

## 规范

{{Specifications}}
