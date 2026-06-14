---
title: font-variant
slug: Web/SVG/Reference/Attribute/font-variant
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`font-variant`** 属性は、テキストをフォントの{{Glossary("glyph", "自体")}}のバリエーションを使用してレンダリングするかどうかを指定します。

> [!NOTE]
> プレゼンテーション属性であるため、 `font-variant` には対応する CSS プロパティ {{cssxref("font-variant")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

### SVG のフォントバリエーションの制御

```html
<svg viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-variant="normal">Normal テキスト</text>
  <text y="45" font-variant="small-caps">Small-caps テキスト</text>
</svg>
```

{{EmbedLiveSample}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <p>
          <code>normal</code> | <code>none</code> | [
          <code>&#x3C;common-lig-values></code> ||
          <code>&#x3C;discretionary-lig-values></code> ||
          <code>&#x3C;historical-lig-values></code> ||
          <code>&#x3C;contextual-alt-values></code> ||
          <code>stylistic( &#x3C;feature-value-name> )</code> ||
          <code>historical-forms</code> ||
          <code>styleset( &#x3C;feature-value-name># )</code> ||
          <code>character-variant( &#x3C;feature-value-name># )</code> ||
          <code>swash( &#x3C;feature-value-name> )</code> ||
          <code>ornaments( &#x3C;feature-value-name> )</code> ||
          <code>annotation( &#x3C;feature-value-name> )</code> || [
          <code>small-caps</code> | <code>all-small-caps</code> |
          <code>petite-caps</code> | <code>all-petite-caps</code> |
          <code>unicase</code> | <code>titling-caps</code> ] ||
          <code>&#x3C;numeric-figure-values></code> ||
          <code>&#x3C;numeric-spacing-values></code> ||
          <code>&#x3C;numeric-fraction-values></code> || <code>ordinal</code> ||
          <code>slashed-zero</code> ||
          <code>&#x3C;east-asian-variant-values></code> ||
          <code>&#x3C;east-asian-width-values></code> || <code>ruby</code> ]
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値の説明については、 [CSS の `font-variant`](/ja/docs/Web/CSS/Reference/Properties/font-variant#値) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("font-variant")}} プロパティ
