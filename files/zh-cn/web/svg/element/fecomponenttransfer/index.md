---
title: feComponentTransfer
slug: Web/SVG/Element/feComponentTransfer
---

{{SVGRef}}

**`<feComponentTransfer>`** [SVG](/zh-CN/docs/Web/SVG)滤镜基元对每个像素执行颜色分量的数据重映射。它允许进行像亮度调整，对比度调整，色彩平衡或阈值的操作。

计算是使用非预乘色值进行执行的.(译者：什么是非预乘数据：非预乘数据可以理解为例如 rgba(180,160,130,0.8)) 中的 180,160,130，它们没有被除以 255 以及乘以透明度 0.8 而转化为 0\~1 范围的值，当被除以 255 并且乘以 0.8 而转化为 0\~1 范围中的值的预处理被称为 premultiplied color value(预乘数据)).颜色值在每一个通道 (R,G,B,A) 中被分别修改然后输出，这些通道分别是 {{SVGElement("feFuncR")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncG")}}, and {{SVGElement("feFuncA")}}.

## 用法

{{svginfo}}

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- [滤镜属性](/zh-CN/SVG/Attribute#Filter) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### 专有属性

- {{ SVGAttr("in") }}

## DOM 接口

该元素实现了[`SVGFEComponentTransferElement`](/zh-CN/DOM/SVGFEComponentTransferElement)接口。

## 示例

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
  <defs>
    <linearGradient
      id="rainbow"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="0"
      x2="100%"
      y2="0">
      <stop offset="0" stop-color="#ff0000"></stop>
      <stop offset="0.2" stop-color="#ffff00"></stop>
      <stop offset="0.4" stop-color="#00ff00"></stop>
      <stop offset="0.6" stop-color="#00ffff"></stop>
      <stop offset="0.8" stop-color="#0000ff"></stop>
      <stop offset="1" stop-color="#800080"></stop>
    </linearGradient>
    <filter id="identity" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="identity"></feFuncR>
        <feFuncG type="identity"></feFuncG>
        <feFuncB type="identity"></feFuncB>
        <feFuncA type="identity"></feFuncA>
      </feComponentTransfer>
    </filter>
    <filter id="table" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="table" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="table" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="table" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="linear" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.5" intercept="0"></feFuncR>
        <feFuncG type="linear" slope="0.5" intercept="0.25"></feFuncG>
        <feFuncB type="linear" slope="0.5" intercept="0.5"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="gamma" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="4" exponent="7" offset="0"></feFuncR>
        <feFuncG type="gamma" amplitude="4" exponent="4" offset="0"></feFuncG>
        <feFuncB type="gamma" amplitude="4" exponent="1" offset="0"></feFuncB>
      </feComponentTransfer>
    </filter>
  </defs>

  <g font-weight="bold">
    <text x="0" y="5%">Default</text>
    <rect x="0" y="8%" width="100%" height="20"></rect>
    <text x="0" y="26%">Identity</text>
    <rect
      x="0"
      y="29%"
      width="100%"
      height="20"
      style="filter:url(#identity)"></rect>
    <text x="0" y="47%">Table lookup</text>
    <rect
      x="0"
      y="50%"
      width="100%"
      height="20"
      style="filter:url(#table)"></rect>
    <text x="0" y="68%">Linear function</text>
    <rect
      x="0"
      y="71%"
      width="100%"
      height="20"
      style="filter:url(#linear)"></rect>
    <text x="0" y="89%">Gamma function</text>
    <rect
      x="0"
      y="92%"
      width="100%"
      height="20"
      style="filter:url(#gamma)"></rect>
  </g>
</svg>
```

### CSS

```css
rect {
  fill: url(#rainbow);
}
```

### 结果

{{EmbedLiveSample("示例", "100%", 340)}}

## 参见

- {{ SVGElement("filter") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feFuncA") }}
- {{ SVGElement("feFuncB") }}
- {{ SVGElement("feFuncG") }}
- {{ SVGElement("feFuncR") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- [SVG 教程：滤镜效果](/zh-CN/SVG/Tutorial/Filter_effects)
