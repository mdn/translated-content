---
title: style
slug: Web/SVG/Reference/Attribute/style
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`style`** 属性を使用すると、{{Glossary("CSS")}} の宣言を用いて要素のスタイルを設定することができます。この属性は、[HTML の `style` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/style)とまったく同じように機能します。

この属性は、どの SVG 要素でも使用することができます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="80"
    height="40"
    x="10"
    y="10"
    style="fill: skyblue; stroke: cadetblue; stroke-width: 2;" />
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;style></code></td>
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

- `<style>`
  - : スタイルデータの構文は、スタイルシート言語によって異なります。デフォルトで、スタイルシート言語は [CSS](/ja/docs/Web/CSS) です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("style")}}
- [HTML `style` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/style)
