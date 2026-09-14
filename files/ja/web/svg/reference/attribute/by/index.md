---
title: by
slug: Web/SVG/Reference/Attribute/by
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`by`** 属性は、アニメーション中に変化する属性の相対的なオフセット値を指定します。

この属性の初期値は、{{SVGAttr("attributeName")}} または {{SVGAttr("from")}} 属性の値として指定することで示されます。

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
  <rect x="10" y="10" width="100" height="100">
    <animate attributeName="width" fill="freeze" by="50" dur="3s" />
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

{{SVGAttr("values")}} 属性を使用して値のリストが定義されている場合、`by` 属性は無視されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
