---
title: z
slug: Web/SVG/Reference/Attribute/z
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

**`z`** 属性定义光源沿 z 轴的位置，坐标系由 {{SVGElement("filter")}} 元素上的 {{SVGAttr("primitiveUnits")}} 属性建立。在初始坐标系中，正 z 轴朝向观看内容的人，且 z 轴上的一个单位等于 x 和 y 方向上的一个单位。

## 元素

你可以将此属性与以下各节所述的 SVG 元素一起使用。

### `<fePointLight>`

对于 {{SVGElement("fePointLight")}}，`z` 定义光源沿 z 轴的位置，坐标系由 {{SVGElement("filter")}} 元素上的 {{SVGAttr("primitiveUnits")}} 属性建立。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

### `<feSpotLight>`

对于 {{SVGElement("feSpotLight")}}，`z` 定义光源沿 z 轴的位置，坐标系由 {{SVGElement("filter")}} 元素上的 {{SVGAttr("primitiveUnits")}} 属性建立。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="diffuseLighting1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <fePointLight x="60" y="60" z="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <fePointLight x="340" y="60" z="50" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#diffuseLighting1)" />
  <rect
    x="200"
    y="0"
    width="200"
    height="200"
    filter="url(#diffuseLighting2)" />
</svg>
```

{{EmbedLiveSample("示例", "420", "200")}}

## 规范

{{Specifications}}
