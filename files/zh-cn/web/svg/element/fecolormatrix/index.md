---
title: feColorMatrix
slug: Web/SVG/Element/feColorMatrix
---

{{SVGRef}}

该滤镜基于转换矩阵对颜色进行变换。每一像素的颜色值 (一个表示为 \[红，绿，蓝，透明度] 的矢量) 都经过[矩阵乘法 (matrix multiplated](http://en.wikipedia.org/wiki/Matrix_multiplication)) 计算出的新颜色。

## 用法

{{svginfo}}

## 示例

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 150 360"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <text x="70" y="50">Reference</text>
  <g>
    <circle cx="30" cy="30" r="20" fill="blue" fill-opacity="0.5" />
    <circle cx="20" cy="50" r="20" fill="green" fill-opacity="0.5" />
    <circle cx="40" cy="50" r="20" fill="red" fill-opacity="0.5" />
  </g>

  <text x="70" y="120">matrix</text>

  <filter id="colorMeMatrix">
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="0 0 0 0 0
              1 1 1 1 0
              0 0 0 0 0
              0 0 0 1 0" />
  </filter>

  <g filter="url(#colorMeMatrix)">
    <circle cx="30" cy="100" r="20" fill="blue" fill-opacity="0.5" />
    <circle cx="20" cy="120" r="20" fill="green" fill-opacity="0.5" />
    <circle cx="40" cy="120" r="20" fill="red" fill-opacity="0.5" />
  </g>

  <text x="70" y="190">saturate</text>

  <filter id="colorMeSaturate">
    <feColorMatrix in="SourceGraphic" type="saturate" values="0.2" />
  </filter>

  <g filter="url(#colorMeSaturate)">
    <circle cx="30" cy="170" r="20" fill="blue" fill-opacity="0.5" />
    <circle cx="20" cy="190" r="20" fill="green" fill-opacity="0.5" />
    <circle cx="40" cy="190" r="20" fill="red" fill-opacity="0.5" />
  </g>

  <text x="70" y="260">hueRotate</text>

  <filter id="colorMeHueRotate">
    <feColorMatrix in="SourceGraphic" type="hueRotate" values="180" />
  </filter>

  <g filter="url(#colorMeHueRotate)">
    <circle cx="30" cy="240" r="20" fill="blue" fill-opacity="0.5" />
    <circle cx="20" cy="260" r="20" fill="green" fill-opacity="0.5" />
    <circle cx="40" cy="260" r="20" fill="red" fill-opacity="0.5" />
  </g>

  <text x="70" y="320">luminanceToAlpha</text>

  <filter id="colorMeLTA">
    <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" />
  </filter>

  <g filter="url(#colorMeLTA)">
    <circle cx="30" cy="310" r="20" fill="blue" fill-opacity="0.5" />
    <circle cx="20" cy="330" r="20" fill="green" fill-opacity="0.5" />
    <circle cx="40" cy="330" r="20" fill="red" fill-opacity="0.5" />
  </g>
</svg>
```

该示例渲染效果如下所示：

{{EmbedLiveSample("示例",300,700)}}

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- [滤镜属性](/zh-CN/SVG/Attribute#Filter) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### 专有属性

- {{ SVGAttr("in") }}
- {{ SVGAttr("type") }}
- {{ SVGAttr("values") }}

## DOM 接口

该元素实现 [`SVGFEColorMatrixElement`](/zh-CN/DOM/SVGFEColorMatrixElement) 接口。

## 参见

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- [SVG 教程：滤镜效果](/zh-CN/SVG/Tutorial/Filter_effects)
