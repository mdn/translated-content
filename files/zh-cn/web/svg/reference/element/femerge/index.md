---
title: <feMerge>
slug: Web/SVG/Reference/Element/feMerge
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feMerge>`** [SVG](/zh-CN/docs/Web/SVG) 元素允许滤镜效果并发应用，而不是依次应用。实现方式是由其他滤镜通过 {{SVGAttr("result")}} 属性存储其输出，然后在 {{SVGElement("feMergeNode")}} 子元素中访问该输出。

与其他滤镜原语一样，它默认在 `linearRGB` {{glossary("color space", "颜色空间")}}中处理颜色分量。你可以使用 {{svgattr("color-interpolation-filters")}} 改为使用 `sRGB`。

## 使用上下文

{{svginfo}}

## 属性

- [滤镜原语属性](/zh-CN/docs/Web/SVG/Reference/Attribute#滤镜原语属性)：{{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}}、{{SVGAttr("height")}}、{{SVGAttr("result")}}

## DOM 接口

该元素实现了 {{domxref("SVGFEMergeElement")}} 接口。

## 示例

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <filter id="feOffset" x="-40" y="-20" width="100" height="200">
    <feOffset in="SourceGraphic" dx="60" dy="60" />
    <feGaussianBlur stdDeviation="5" result="blur2" />
    <feMerge>
      <feMergeNode in="blur2" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <rect
    x="40"
    y="40"
    width="100"
    height="100"
    stroke="black"
    fill="green"
    filter="url(#feOffset)" />
</svg>
```

### 结果

{{EmbedLiveSample("示例", 200, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [SVG 滤镜原语属性](/zh-CN/docs/Web/SVG/Reference/Attribute#滤镜属性)
- {{SVGAttr("flood-color")}} 属性
- {{SVGAttr("flood-opacity")}} 属性
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
