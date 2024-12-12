---
title: filter
slug: Web/SVG/Attribute/filter
---

{{SVGRef}}

属性 `filter` 定义了由 {{ SVGElement("filter") }} 元素定义滤镜效果，该滤镜效果将应用到该元素上。

作为一个外观属性，它可以直接用作 CSS 样式表内部的属性。请阅读 {{ cssxref("filter","CSS filter") }} 以了解更多信息。

## 使用说明

| 类别     | 外观属性                                                                         |
| -------- | -------------------------------------------------------------------------------- |
| 值       | [\<funciri>](/zh-CN/docs/SVG/Content_type#funciri) \| **none** \| inherit        |
| 可变性   | Yes                                                                              |
| 规范文档 | [SVG 1.1 (2nd Edition)](https://www.w3.org/TR/SVG11/filters.html#FilterProperty) |

- [\<funciri>](/zh-CN/docs/SVG/Content_type#funciri)
  - : 元素的引用，它定义了将要应用到该元素的滤镜效果。
- none
  - : 不对该元素应用任何滤镜效果。

## 元素

下列元素可以使用`filter`属性：

- [图形元素](/zh-CN/docs/Web/SVG/Element#graphics_elements) »
- {{ SVGElement("a") }}
- {{ SVGElement("defs") }}
- {{ SVGElement("glyph") }}
- {{ SVGElement("g") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("missing-glyph") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("switch") }}
- {{ SVGElement("symbol") }}

## 规范

{{Specifications}}

## 参见

- {{ cssxref("filter","CSS filter") }}
