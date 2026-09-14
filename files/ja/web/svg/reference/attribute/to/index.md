---
title: to
slug: Web/SVG/Reference/Attribute/to
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

**`to`** 属性は、アニメーション中に変化する属性の最終値を示します。

この属性の値は、{{SVGAttr("from")}} の属性値とこの値の間で変化します。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="width"
      fill="freeze"
      from="100"
      to="150"
      dur="3s" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## animate, animateMotion, animateTransform

{{SVGElement("animate")}}、{{SVGElement("animateMotion")}}、{{SVGElement("animateTransform")}} において、`to` はアニメーションの終了値を指定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;value></code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

この属性の具体的なデータ型は、アニメーションの対象となる属性の値によって異なります。

{{SVGAttr("values")}} 属性によって値のリストが定義されている場合、`to` 属性は無視されます。

## set

{{SVGElement("set")}} 要素の場合、`to` は、その要素の存続期間中の属性の値を指定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;value></code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

この属性の具体的なデータ型は、アニメーションの対象となる属性の値によって異なります。

## 仕様書

{{Specifications}}
