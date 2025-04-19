---
title: glyph
slug: conflicting/Web/CSS/@font-face_de2fde5974aace95a036dc7c0db8e5ed4bd3af394decbb94be7ede73ea860409
original_slug: Web/SVG/Reference/Element/glyph
---

一个`glyph`元素定义了 SVG 字体中的一个独立的字形。

## 使用上下文

{{svginfo}}

## 示例

```xml
<?xml version="1.0" standalone="yes"?>
<svg width="400px" height="300px" version="1.1"
  xmlns = 'http://www.w3.org/2000/svg'>
<!-- Example copied from http://www.w3.org/TR/SVG/fonts.html#GlyphElement -->
  <defs>

    <font id="Font1" horiz-adv-x="1000">
      <font-face font-family="Super Sans" font-weight="bold" font-style="normal"
          units-per-em="1000" cap-height="600" x-height="400"
          ascent="700" descent="300"
          alphabetic="0" mathematical="350" ideographic="400" hanging="500">
        <font-face-src>
          <font-face-name name="Super Sans Bold"/>
        </font-face-src>
      </font-face>

      <missing-glyph><path d="M0,0h200v200h-200z"/></missing-glyph>
      <glyph unicode="!" horiz-adv-x="80" d="M0,0h200v200h-200z"></glyph>
      <glyph unicode="@" d="M0,50l100,300l400,100z"></glyph>

    </font>
  </defs>
  <text x="100" y="100"
           style="font-family: 'Super Sans', Helvetica, sans-serif;
                  font-weight: bold; font-style: normal">Text
    using embe@dded font!</text>
</svg>
```

## 属性

### 全局属性

- [核心属性](/zh-CN/docs/Web/SVG/Reference/Attribute#core) »
- [外观属性](/zh-CN/docs/Web/SVG/Reference/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### 专有属性

- {{ SVGAttr("d") }}
- {{ SVGAttr("horiz-adv-x") }}
- {{ SVGAttr("vert-origin-x") }}
- {{ SVGAttr("vert-origin-y") }}
- {{ SVGAttr("vert-adv-y") }}
- {{ SVGAttr("unicode") }}
- {{ SVGAttr("glyph-name") }}
- {{ SVGAttr("orientation") }}
- {{ SVGAttr("arabic-form") }}
- {{ SVGAttr("lang") }}

## DOM 接口

该元素实现了 `SVGGlyphElement` 接口。

## 相关内容

- {{ SVGElement("font") }}
- {{ SVGElement("missing-glyph") }}
- [SVG 教程：SVG 字体](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts)
