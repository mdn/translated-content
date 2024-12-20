---
title: tref
slug: Web/SVG/Element/tref
---

{{SVGRef}}

{{ SVGElement("text") }} 的文本内容既可以是直接嵌入在 {{SVGElement("text")}} 元素中的字符数据，也可以是引用元素的字符数据内容，`tref` 元素用来指定的包含文本内容的引用元素。

## 使用上下文

{{svginfo}}

## 示例

```xml
<svg width="100%" height="100%" viewBox="0 0 1000 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <text id="ReferencedText">
      Referenced character data
    </text>
  </defs>

  <text x="100" y="100" font-size="45" >
    Inline character data
  </text>

  <text x="100" y="200" font-size="45" fill="red" >
    <tref xlink:href="#ReferencedText"/>
  </text>

  <!-- Show outline of canvas using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke-width="2" />
</svg>
```

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/SVG/Attribute#conditionalproccessing) »
- [核心属性](/zh-CN/docs/SVG/Attribute#core) »
- [图形事件属性](/zh-CN/docs/SVG/Attribute#graphicalevent) »
- [外观属性](/zh-CN/docs/SVG/Attribute#presentation) »
- [Xlink 属性](/zh-CN/docs/SVG/Attribute#xlink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("xlink:href") }}

## DOM 接口

该元素实现了 [`SVGTRefElement`](/zh-CN/docs/DOM/SVGTRefElement) 接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("text") }}
