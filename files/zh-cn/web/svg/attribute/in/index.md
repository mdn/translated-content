---
title: in
slug: Web/SVG/Attribute/in
---

{{SVGRef}}

in 属性标识输入的原语。

其值可以是下面六种关键词中的一种，或者是一个字符串匹配在同一个{{SVGElement("filter")}}元素中前面的原语的{{SVGAttr("result")}} 属性值。如果没有提供值并且这是 filter 中第一个原语，那么原语将相当于使用 SourceGraphic 作为输入值。如果没有提供值并且这不是第一个原语，那么原语将使用前面原语的 result 属性值作为输入。

如果{{SVGAttr("result")}}的值在同一个{{SVGElement("filter")}}中出现多次，那么将使用前面的距离使用该{{SVGAttr("result")}}值的原语最近的该 result 值的原语作为输入。

除了 SourceGraphic 和**\<filter-primitive-reference> (引用原语)** , 关键词都没有在现代浏览器中实现.(译者注:SourceAlpha 也被现代浏览器支持)

## Usage context

| Categories | None                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Value      | `SourceGraphic` \| `SourceAlpha` \| `BackgroundImage` \| `BackgroundAlpha` \| `FillPaint` \| `StrokePaint` \| \<filter-primitive-reference> |
| Animatable | Yes                                                                                                                                         |

- SourceGraphic
  - : 该关键词表示图形元素自身将作为{{SVGElement("filter")}}原语的原始输入。
- SourceAlpha
  - : 该关键词表示图形元素自身将作为{{SVGElement("filter")}}原语的原始输入。SourceAlpha 与 SourceGraphic 具有相同的规则除了 SourceAlpha 只使用元素的透明度。
- BackgroundImage
  - : 该关键词表示 filter 元素当前底下的区域的图形快照将被调用。
- BackgroundAlpha
  - : 跟 BackgroundImage 相同除了只使用透明度。
- FillPaint
  - : This keyword represents the value of the {{SVGAttr("fill")}} property on the target element for the filter effect. In many cases, the `FillPaint` is opaque everywhere, but it might not be the case if a shape is paint with a gradient or pattern which itself includes transparent or semi-transparent parts.
- StrokePaint
  - : This keyword represents the value of the {{SVGAttr("stroke")}} property on the target element for the filter effect. In many cases, the `StrokePaint` is opaque everywhere, but it might not be the case if a shape is paint with a gradient or pattern which itself includes transparent or semi-transparent parts.

## BackgroundImage 的解决方案

我们需要使用 `<feimage>` 原语引入一个图像混合到过滤器本身内来替代使用"BackgroundImage".

### HTML

```html
<div style="width: 420px; height: 220px;">
  <svg
    style="width:200px; height:200px; display: inline;"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="backgroundMultiply">
        <!-- This will not work. -->
        <feBlend in="BackgroundImage" in2="SourceGraphic" mode="multiply" />
      </filter>
    </defs>
    <image
      xlink:href="https://developer.mozilla.org/files/6457/mdn_logo_only_color.png"
      x="10%"
      y="10%"
      width="80%"
      height="80%" />
    <circle
      cx="50%"
      cy="40%"
      r="40%"
      fill="#c00"
      style="filter:url(#backgroundMultiply);" />
  </svg>

  <svg
    style="width:200px; height:200px; display: inline;"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="imageMultiply">
        <!-- This is a workaround. -->
        <feImage
          xlink:href="https://developer.mozilla.org/files/6457/mdn_logo_only_color.png"
          x="10%"
          y="10%"
          width="80%"
          height="80%" />
        <feBlend in2="SourceGraphic" mode="multiply" />
      </filter>
    </defs>
    <circle
      cx="50%"
      cy="40%"
      r="40%"
      fill="#c00"
      style="filter:url(#imageMultiply);" />
  </svg>
</div>
```

### 效果

{{ EmbedLiveSample('BackgroundImage 的解决方案') }}

## 元素

下列元素可以使用该属性

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}

## 规范

{{Specifications}}
