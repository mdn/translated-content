---
title: <feComponentTransfer>
slug: Web/SVG/Element/feComponentTransfer
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

**`<feComponentTransfer>`** [SVG](/zh-CN/docs/Web/SVG) 滤镜原语对每个像素的数据进行颜色分量级别的重新映射。它允许执行亮度调整、对比度调整、颜色平衡或阈值处理等操作。

计算是在非预乘的颜色值上进行的。通过将每个通道（R、G、B 和 A）修改为子元素 {{SVGElement("feFuncR")}}、{{SVGElement("feFuncB")}}、{{SVGElement("feFuncG")}} 和 {{SVGElement("feFuncA")}} 的返回结果，来对颜色进行调整。如果提供了多个相同的元素，则使用最后指定的元素；如果没有提供用于修改某个通道的元素，则效果与对该通道应用恒等变换相同。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("in")}}

## DOM 接口

该元素实现了 {{domxref("SVGFEComponentTransferElement")}} 接口。

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
    <filter id="discrete" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="discrete" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="discrete" tableValues="0 1 1 0"></feFuncB>
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
    <text x="0" y="20">默认</text>
    <rect x="0" y="30" width="100%" height="20"></rect>
    <text x="0" y="70">恒等</text>
    <rect
      x="0"
      y="80"
      width="100%"
      height="20"
      style="filter:url(#identity)"></rect>
    <text x="0" y="120">表查找</text>
    <rect
      x="0"
      y="130"
      width="100%"
      height="20"
      style="filter:url(#table)"></rect>
    <text x="0" y="170">离散表查找</text>
    <rect
      x="0"
      y="180"
      width="100%"
      height="20"
      style="filter:url(#discrete)"></rect>
    <text x="0" y="220">线性函数</text>
    <rect
      x="0"
      y="230"
      width="100%"
      height="20"
      style="filter:url(#linear)"></rect>
    <text x="0" y="270">伽马函数</text>
    <rect
      x="0"
      y="280"
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [SVG 滤镜原语属性](/zh-CN/docs/Web/SVG/Attribute#滤镜原语属性)
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorial/Filter_effects)
