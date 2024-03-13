---
title: feImage
slug: Web/SVG/Element/feImage
---

{{SVGRef}}

`feImage 滤镜从外部来源取得图像数据，并提供像素数据作为输出（意味着如果外部来源是一个 SVG 图像，这个图像将被栅格化。）`

## 用法

{{svginfo}}

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- [滤镜属性](/zh-CN/SVG/Attribute#Filter) »
- [XLink 属性](/zh-CN/SVG/Attribute#XLink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("preserveAspectRatio") }}
- {{ SVGAttr("xlink:href") }}

## DOM 接口

该元素实现了{{domxref("SVGFEImageElement")}}接口。

## 示例

### SVG

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="image">
      <feImage xlink:href="/files/6457/mdn_logo_only_color.png" />
    </filter>
  </defs>

  <rect x="10%" y="10%" width="80%" height="80%" style="filter:url(#image);" />
</svg>
```

### 结果

{{EmbedLiveSample("示例", 200, 200)}}

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("animateTransform") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- [SVG 教程：滤镜效果](/zh-CN/SVG/Tutorial/Filter_effects)
