---
title: color
slug: Web/SVG/Attribute/color
---

{{SVGRef}}

`color` 属性用来为 {{ SVGAttr("fill") }} 属性、{{ SVGAttr("stroke") }} 属性、{{ SvgAttr("stop-color") }} 属性、{{ SVGAttr("flood-color") }} 属性和 {{ SVGAttr("lighting-color") }} 属性提供一个潜在的间接值（`currentColor`）。

作为一个外观属性，它还可以直接用作 CSS 样式表的属性。请阅读 {{ cssxref("color","CSS color") }} 以了解更多信息。

## 用法

| 类别     | 外观属性                                                                     |
| -------- | ---------------------------------------------------------------------------- |
| 值       | [\<color>](/zh-CN/SVG/Content_type#Color) \| inherit                         |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/color.html#ColorProperty) |

## 示例

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <g color="green">
    <rect width="50" height="50" fill="currentColor" />
    <circle
      r="25"
      cx="70"
      cy="70"
      stroke="currentColor"
      fill="none"
      stroke-width="5" />
  </g>
</svg>
```

{{ EmbedLiveSample('示例', '100%', '110') }}

## 元素

下列元素可以使用`color`属性：

- [文本内容元素](/zh-CN/SVG/Element#Text_content_elements) »
- [形状元素](/zh-CN/SVG/Element#Shape_elements) »
- {{ SVGElement("stop") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feSpecularLighting") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
