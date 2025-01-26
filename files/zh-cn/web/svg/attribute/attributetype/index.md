---
title: attributeType
slug: Web/SVG/Attribute/attributeType
---

{{SVGRef}}

该属性指定目标属性和它相对应的值处于哪个命名空间里。

## 使用说明

| 类别     | 动画属性目标属性                                                                       |
| -------- | -------------------------------------------------------------------------------------- |
| 值       | CSS \| XML \| **auto**                                                                 |
| 可变性   | No                                                                                     |
| 规范文档 | [SVG 1.1 (2nd Edition)](https://www.w3.org/TR/SVG/animate.html#AttributeTypeAttribute) |

这个属性可取下列值之一：

- CSS
  - : 指定{{ SVGAttr("attributeName") }}的值是一个 CSS 属性名。
- XML

  - : 指定{{ SVGAttr("attributeName") }}的值是一个 XML 属性名，在目标元素的默认 XML 命名空间里。

- auto
  - : 编译器将把{{ SVGAttr("attributeName") }}匹配到目标元素的一个属性。用户代理先搜索 CSS 属性列表以找出一个匹配的属性名，如果找不到，再为这个元素搜索默认 XML 命名空间。

## 示例

## 元素

下列元素可以使用`attributeType`属性：

- {{ SVGElement("animate") }}
- {{ SVGElement("animateColor") }}
- {{ SVGElement("animateTransform") }}
- {{ SVGElement("set") }}

## 规范

{{Specifications}}
