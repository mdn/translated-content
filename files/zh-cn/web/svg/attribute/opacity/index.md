---
title: opacity
slug: Web/SVG/Attribute/opacity
---

{{SVGRef}}

opacity 属性指定了一个对象或一组对象的透明度，也就是说，元素后面的背景的透过率。

作为一个外观属性，它可以直接用作 CSS 样式表内部的属性，请阅读 {{ cssxref("opacity","CSS opacity") }} 以了解更多信息。

## 用法

| 类别   | 外观属性                    |
| ------ | --------------------------- |
| 值     | \<opacity-value> \| inherit |
| 可变性 | Yes                         |

- \<opacity-value>
  - : 一致的不透明度设置，作为一个[\<number>](/zh-CN/SVG/Content_type#Number)被应用到整个对象上。任何超过范围 0.0 到 1.0 的值都会被压回这个范围。0.0 表示完全透明，1.0 表示完全不透明。

## 示例

## 元素

以下元素可以使用`opacity`属性：

- [图形元素](/zh-CN/SVG/Element#Graphics) »
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

- {{ cssxref("opacity","CSS opacity") }}
