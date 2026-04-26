---
title: from
slug: Web/SVG/Reference/Attribute/from
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

**`from`** 属性は、アニメーション中に変更される属性の初期値を示します。

{{SVGAttr("to")}} 属性と組み合わせて使用すると、アニメーションは対象の属性を `from` の値から `to` の値へと変化します。{{SVGAttr("by")}} 属性と組み合わせて使用すると、アニメーションは属性を `from` の値から、`by` で指定された値分だけ相対的に変化します。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

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
  <rect x="10" y="10" height="100">
    <animate attributeName="width" fill="freeze" from="100" to="150" dur="3s" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><em>下記参照</em></td>
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

{{SVGAttr("values")}} 属性を使用して値のリストが定義されている場合、`from` 属性は無視されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
