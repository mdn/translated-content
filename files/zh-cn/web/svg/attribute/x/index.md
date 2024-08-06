---
title: x
slug: Web/SVG/Attribute/x
---

{{SVGRef}}

**`x`** 属性在用户坐标系统中标识了一个 x 轴坐标。

你可以在以下 SVG 元素中使用该属性：

- {{SVGElement("cursor")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- {{SVGElement("filter")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("glyphRef")}}
- {{SVGElement("image")}}
- {{SVGElement("mask")}}
- {{SVGElement("pattern")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="60" height="60" />
  <rect x="120" y="20" width="60" height="60" />
  <rect x="220" y="20" width="60" height="60" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

## use

对于 {{SVGElement('use')}} 元素，`x` 定义了引用元素的左上角的 x 坐标。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Content_type#长度"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Content_type#百分数"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 从 SVG2 开始，`x` 变为*几何属性*，这意味着该元素也可以用作使用的元素的 CSS 属性。

## 规范

{{Specifications}}
