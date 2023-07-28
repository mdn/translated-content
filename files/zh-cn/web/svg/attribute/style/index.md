---
title: style
slug: Web/SVG/Attribute/style
---

{{SVGRef}}

**`style`** 属性指定了指定其元素的样式信息。它的功能与 HTML 中的 [style](/zh-CN/docs/Web/HTML/Global_attributes/style) 属性相同。

## 使用环境

| Categories | Presentation attribute |
| ---------- | ---------------------- |
| Value      | \<style>               |
| Animatable | No                     |

- \<style>
  - : 样式数据的语法取决于样式表语言。默认情况下，如果未指定 {{ SVGAttr("contentStyleType") }}，样式表语言为 CSS。

## 示例

以下示例展示了使用 CSS 作为样式表语言来使用 style 属性，为一个矩形框添加样式。

```html
<svg version="1.1" viewbox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
  <rect
    height="300"
    width="600"
    x="200"
    y="100"
    style="fill: red; stroke: blue; stroke-width: 3" />
</svg>
```

## 元素

以下元素可以使用 style 属性

- [Container elements](/zh-CN/SVG/Element#Container) »
- [Filter primitive elements](/zh-CN/SVG/Element#FilterPrimitive) »
- [Gradient elements](/zh-CN/SVG/Element#Gradient) »
- [Graphics elements](/zh-CN/SVG/Element#Graphics) »
- [Structural elements](/zh-CN/SVG/Element#Structural) »
- [Text content elements](/zh-CN/SVG/Element#TextContent) »
- {{ SVGElement("clipPath") }}
- {{ SVGElement("filter") }}
- {{ SVGElement("font") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("stop") }}
- {{ SVGElement("glyph") }}

## 规范

{{Specifications}}

## 相关

- {{ SVGElement("style") }}
