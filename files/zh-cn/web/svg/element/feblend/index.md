---
title: <feBlend>
slug: Web/SVG/Element/feBlend
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

**`<feBlend>`** [SVG](/zh-CN/docs/Web/SVG) 滤镜原语根据特定的混合模式将两个对象组合在一起。这类似于图像编辑软件中混合两个图层。该模式由 {{SVGAttr("mode")}} 属性定义。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("in2")}}
- {{SVGAttr("mode")}}

## DOM 接口

该元素实现了 {{domxref("SVGFEBlendElement")}} 接口。

## 示例

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feFlood
        result="floodFill"
        x="0"
        y="0"
        width="100%"
        height="100%"
        flood-color="green"
        flood-opacity="1" />
      <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
    </filter>
  </defs>

  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    style="filter:url(#spotlight);" />
</svg>
```

### 结果

{{EmbedLiveSample("示例", 200, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [SVG 滤镜原语属性](/zh-CN/docs/Web/SVG/Attribute#滤镜原语属性)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorial/Filter_effects)
