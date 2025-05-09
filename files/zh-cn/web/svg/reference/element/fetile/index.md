---
title: <feTile>
slug: Web/SVG/Reference/Element/feTile
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

**`<feTile>`** [SVG](/zh-CN/docs/Web/SVG) 滤镜原语允许使用输入图像的重复、平铺模式来填充目标矩形。此效果类似于 {{SVGElement("pattern")}} 元素的效果。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("in")}}

## DOM 接口

此元素实现了 {{domxref("SVGFETileElement")}} 接口。

## 示例

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>
    使用 Mozilla 品牌吉祥物的头部（该头部出现在徽标上）平铺 MDN 徽标
  </title>
  <defs>
    <!-- 定义滤镜的作用区域为 MDN 徽标（应用滤镜的图像）的边框。这些参数将创建一个与图像覆盖相同区域的输出。 -->
    <filter id="tile" x="0" y="0" width="100%" height="100%">
      <!-- 从图像中央区域创建一个图块，该区域从（50，50）到（150，150）。这个区域实质上是 Mozilla 吉祥物的头部。 -->
      <feTile in="SourceGraphic" x="50" y="50" width="100" height="100" />

      <!-- 如果不指定区域，默认情况下，feTile 会使用滤镜的整个区域。如果不指定“in”参数，那么默认值就是前一个滤镜原语的结果。因此，这第二个 feTile 会将吉祥物头部的图案在整个滤镜区域内进行平铺。 -->
      <feTile />
    </filter>
  </defs>

  <!-- 将 MDN 徽标作为输入传递给滤镜 -->
  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    style="filter:url(#tile);" />
</svg>
```

### 结果

{{EmbedLiveSample("示例", 200, 200)}}

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
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTurbulence")}}
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
