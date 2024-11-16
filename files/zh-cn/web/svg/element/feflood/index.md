---
title: <feFlood>
slug: Web/SVG/Element/feFlood
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

**`<feFlood>`** SVG 滤镜原语使用由 {{SVGAttr("flood-color")}} 和 {{SVGAttr("flood-opacity")}} 定义的颜色和透明度填充滤镜子区域。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("flood-color")}}
- {{SVGAttr("flood-opacity")}}

## DOM 接口

该元素实现了 {{domxref("SVGFEFloodElement")}} 接口。

## 示例

### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <filter id="floodFilter" filterUnits="userSpaceOnUse">
      <feFlood
        x="50"
        y="50"
        width="100"
        height="100"
        flood-color="green"
        flood-opacity="0.5" />
    </filter>
  </defs>

  <use style="filter: url(#floodFilter);" />
</svg>
```

### 结果

{{EmbedLiveSample("示例", 200, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [SVG 滤镜原语属性](/zh-CN/docs/Web/SVG/Attribute#滤镜属性)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorial/Filter_effects)
