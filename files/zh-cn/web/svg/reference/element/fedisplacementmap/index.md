---
title: <feDisplacementMap>
slug: Web/SVG/Reference/Element/feDisplacementMap
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feDisplacementMap>`** [SVG](/zh-CN/docs/Web/SVG) 滤镜原语使用来自 {{SVGAttr("in2")}} 图像的像素值，对来自 {{SVGAttr("in")}} 的图像进行空间位移。

变换公式如下：

`P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))`

其中 `P(x,y)` 是输入图像 {{SVGAttr("in")}}，`P'(x,y)` 是目标图像。`XC(x,y)` 和 `YC(x,y)` 分别是由 {{SVGAttr("xChannelSelector")}} 和 {{SVGAttr("yChannelSelector")}} 指定通道的分量值。

与其他滤镜原语一样，它默认在 `linearRGB` {{glossary("color space", "颜色空间")}}中处理颜色分量。你可以使用 {{svgattr("color-interpolation-filters")}} 改为使用 `sRGB`。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("in2")}}
- {{SVGAttr("scale")}}
- {{SVGAttr("xChannelSelector")}}
- {{SVGAttr("yChannelSelector")}}
- [滤镜原语属性](/zh-CN/docs/Web/SVG/Reference/Attribute#滤镜原语属性)：{{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}}、{{SVGAttr("height")}}、{{SVGAttr("result")}}

## DOM 接口

该元素实现了 {{domxref("SVGFEDisplacementMapElement")}} 接口。

## 示例

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("示例", 220, 220)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [SVG 滤镜原语属性](/zh-CN/docs/Web/SVG/Reference/Attribute#滤镜原语属性)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
