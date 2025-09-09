---
title: <feMorphology>
slug: Web/SVG/Reference/Element/feMorphology
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

**`<feMorphology>`** [SVG](/zh-CN/docs/Web/SVG) 滤镜原语用于对输入图像进行腐蚀或膨胀。它的用途尤其体现在加粗或变细效果上。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("operator")}}
- {{SVGAttr("radius")}}

## DOM 接口

此元素实现了 {{domxref("SVGFEMorphologyElement")}} 接口。

## 示例

### 过滤 SVG 内容

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180">
  <filter id="erode">
    <feMorphology operator="erode" radius="1" />
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="2" />
  </filter>
  <text y="1em">普通文本</text>
  <text id="thin" y="2em">细文本</text>
  <text id="thick" y="3em">粗文本</text>
</svg>
```

#### CSS

```css
text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

#thin {
  filter: url(#erode);
}

#thick {
  filter: url(#dilate);
}
```

{{EmbedLiveSample("过滤 SVG 内容", 340, 180)}}

### 过滤 HTML 内容

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <filter id="erode">
    <feMorphology operator="erode" radius="1" />
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="2" />
  </filter>
</svg>

<p>普通文本</p>
<p id="thin">细文本</p>
<p id="thick">粗文本</p>
```

#### CSS

```css
p {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

#thin {
  filter: url(#erode);
}

#thick {
  filter: url(#dilate);
}
```

{{EmbedLiveSample("过滤 HTML 内容", 340, 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

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
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
