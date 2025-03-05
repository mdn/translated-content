---
title: width
slug: Web/SVG/Attribute/width
---

{{SVGRef}}

**`width`** 属性在用户坐标系统中定义了元素的一个水平长度。

你可以在以下 SVG 元素中使用该属性：

- {{SVGElement('feBlend')}}
- {{SVGElement('feColorMatrix')}}
- {{SVGElement('feComponentTransfer')}}
- {{SVGElement('feComposite')}}
- {{SVGElement('feConvolveMatrix')}}
- {{SVGElement('feDiffuseLighting')}}
- {{SVGElement('feDisplacementMap')}}
- {{SVGElement('feDropShadow')}}
- {{SVGElement('feFlood')}}
- {{SVGElement('feGaussianBlur')}}
- {{SVGElement('feImage')}}
- {{SVGElement('feMerge')}}
- {{SVGElement('feMorphology')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('feSpecularLighting')}}
- {{SVGElement('feTile')}}
- {{SVGElement('feTurbulence')}}
- {{SVGElement('filter')}}
- {{SVGElement('foreignObject')}}
- {{SVGElement('image')}}
- {{SVGElement('mask')}}
- {{SVGElement('pattern')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('use')}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <!-- With a width of 0 or less, nothing will be rendered -->
  <rect x="0" y="0" width="0" height="90" />
  <rect x="0" y="100" width="60" height="90" />
  <rect x="0" y="200" width="100%" height="90" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

## use

对于 {{SVGElement('use')}} 元素，`width` 定义了引用元素的水平长度。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>auto</code> |
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
      <td><code>auto</code>（视为 <code>0</code>）</td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

> **备注：** `width` 对 `use` 元素没有影响，除非引用的元素具有 [viewBox](/zh-CN/docs/Web/SVG/Attribute/viewBox)。例如，该属性仅在 `use` 引用的元素是 `svg` 或 `symbol` 元素时才有意义。

> [!NOTE]
> 从 SVG2 开始，`width` 变为*几何属性*，这意味着该元素也可以用作使用的元素的 CSS 属性。

## 规范

{{Specifications}}
