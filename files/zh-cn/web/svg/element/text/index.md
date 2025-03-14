---
title: text
slug: Web/SVG/Element/text
---

{{SVGRef}}

`text`元素定义了一个由文字组成的图形。注意：我们可以将渐变、图案、剪切路径、遮罩或者滤镜应用到 text 上。

## 使用上下文

{{svginfo}}

## 示例

```xml
<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="100px" height="30px" viewBox="0 0 1000 300">

  <text x="250" y="150"
        font-family="Verdana"
        font-size="55">
    Hello, out there
  </text>

  <!-- Show outline of canvas using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke="1" stroke-width="2" />
</svg>
```

\<text>元素用来绘制文本。下面这段代码展示了如何在坐标系中绘制一段文本。

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10" y="20">SVG Text Example</text>
</svg>
```

可以旋转 SVG 文本。下面的代码做了一个演示。

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10"  y="20"
        transform="rotate(30 20,40)">
    SVG Text Rotation example
  </text>
</svg>
```

SVG 文本还可以应用样式。

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10"  y="20"
        style="font-family: Times New Roman;
               font-size  : 24;
               stroke     : #00ff00;
               fill       : #0000ff;">
    SVG text styling
  </text>
</svg>
```

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/SVG/Attribute#conditionalproccessing) »
- [核心属性](/zh-CN/docs/SVG/Attribute#core) »
- [图形事件属性](/zh-CN/docs/SVG/Attribute#graphicalevent) »
- [外观属性](/zh-CN/docs/SVG/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 专有属性

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("dx") }}
- {{ SVGAttr("dy") }}
- {{ SVGAttr("text-anchor") }}
- {{ SVGAttr("rotate") }}
- {{ SVGAttr("textLength") }}
- {{ SVGAttr("lengthAdjust") }}

## DOM 接口

该元素实现了 [`SVGTextElement`](/zh-CN/docs/DOM/SVGTextElement) 接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("tspan") }}
- {{ SVGElement("tref") }}
