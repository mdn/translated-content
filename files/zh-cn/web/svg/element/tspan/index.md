---
title: tspan
slug: Web/SVG/Element/tspan
---

{{SVGRef}}

在 {{SVGElement("text")}}元素中，利用内含的`tspan`元素，可以调整文本和字体的属性以及当前文本的位置、绝对或相对坐标值。

## 使用上下文

{{svginfo}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
  <style>
    text {
      font: italic 12px serif;
    }
    tspan {
      font: bold 10px sans-serif;
      fill: red;
    }
  </style>

  <text x="10" y="30" class="small">
    你
    <tspan>不是</tspan>
    香蕉！
  </text>
</svg>
```

{{EmbedLiveSample('示例', 100, '100%')}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/SVG/Attribute#conditionalproccessing) »
- [核心属性](/zh-CN/docs/SVG/Attribute#core) »
- [图形事件属性](/zh-CN/docs/SVG/Attribute#graphicalevent) »
- [外观属性](/zh-CN/docs/SVG/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("dx") }}
- {{ SVGAttr("dy") }}
- {{ SVGAttr("rotate") }}
- {{ SVGAttr("textLength") }}
- {{ SVGAttr("lengthAdjust") }}

## DOM 接口

该元素实现了 [`SVGTSpanElement`](/zh-CN/docs/DOM/SVGTSpanElement) 接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("text") }}
