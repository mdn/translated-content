---
title: in
slug: Web/SVG/Attribute/in
l10n:
  sourceCommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

{{SVGRef}}

**`in`** 属性标识滤镜原语的输入。

其值可以是下面的六种关键字中的一种，也可以是一个匹配同一个 {{SVGElement("filter")}} 元素中前面的滤镜原语的 {{SVGAttr("result")}} 属性值的字符串。如果没有提供值并且这是第一个滤镜原语，那么将相当于使用 `SourceGraphic` 作为滤镜原语的输入值。如果没有提供值并且这不是第一个原语，那么将使用前一个原语的结果作为它的输入。

如果 {{SVGAttr("result")}} 的值在给定的 {{SVGElement("filter")}} 元素中多次出现，那么对该值的引用将使用前面最近的、具有给定 {{SVGAttr("result")}} 属性值的滤镜原语。

你可以在以下 SVG 元素中使用这个属性：

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}

## 使用上下文

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td>
        第一个滤镜原语为 <code>SourceGraphic</code>，否则为前一个滤镜原语的结果。
      </td>
    </tr>
    <tr>
      <th scope="row">可动性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

- `SourceGraphic`
  - : 该关键字表示图形元素自身将作为 {{SVGElement("filter")}} 元素的原始输入。
- `SourceAlpha`
  - : 该关键字表示图形元素自身将作为 `<filter>` 元素的原始输入。`SourceAlpha` 与 `SourceGraphic` 具有相同的规则，除了前者只使用元素的 alpha 通道。
- `BackgroundImage`
  - : 该关键字表示调用 `<filter>` 元素时，滤镜区域下方的 SVG 文档的图形快照。
- `BackgroundAlpha`
  - : 与 `BackgroundImage` 相同，除了只使用 alpha 通道。
- `FillPaint`
  - : 该关键字表示应用滤镜效果的目标元素的 {{SVGAttr("fill")}} 属性值。在许多情况下，`FillPaint` 在任何地方都是不透明的，但如果形状使用包含透明或半透明部分的渐变或图案进行绘制，那么情况可能不同。
- `StrokePaint`
  - : 该关键字表示应用滤镜效果的目标元素的 {{SVGAttr("stroke")}} 属性值。在许多情况下，`StrokePaint` 在任何地方都是不透明的，但如果形状使用包含透明或半透明部分的渐变或图案进行绘制，那么情况可能不同。
- `<filter-primitive-reference>`
  - : 该值是用于为 {{cssxref("custom-ident")}} 形式的滤镜原语赋予名称。如果提供了该值，那么处理该滤镜原语的图形可以被同一个滤镜元素中的后续的滤镜原语的 in 属性引用。如果没有提供任何值，且下一个滤镜原语未给其 in 属性提供值，那么输出将只能作为下一个滤镜原语的隐式输入。

## BackgroundImage 的解决方案

在现代浏览器中，`BackgroundImage` 不支持作为滤镜源（请参见 [feComposite 兼容性表](/zh-CN/docs/Web/SVG/Element/feComposite#浏览器兼容性)）。因此，我们需要在滤镜内部使用 `<feImage>` 元素导入一个图像进行混合。

> [!NOTE]
> Firefox [Bug 455986](https://bugzil.la/455986) 表明了 `feImage` 无法加载图像的一部分（包括在文档中定义的圆圈、矩形、路径或其他片段）。因此，为了使此示例在更多浏览器上工作，我们加载了完整的外部标志图像。

### HTML

```html
<div style="width: 420px; height: 220px;">
  <svg
    style="width:200px; height:200px; display: inline;"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="backgroundMultiply">
        <!-- 这不会生效。 -->
        <feBlend in="BackgroundImage" in2="SourceGraphic" mode="multiply" />
      </filter>
    </defs>
    <image
      href="mdn_logo_only_color.png"
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
        <!-- 这是一种解决方案。 -->
        <feImage
          href="mdn_logo_only_color.png"
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

### 结果

{{EmbedLiveSample('BackgroundImage 的解决方案')}}

## 规范

{{Specifications}}
