---
title: font-weight
slug: Web/SVG/Reference/Attribute/font-weight
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`font-weight`** 属性は、同じフォントファミリーの他のフォントから相対的に、テキストの描画に使用される角の太さや細さを指します。

> [!NOTE]
> プレゼンテーション属性であるため、 `font-weight` には対応する CSS プロパティ {{cssxref("font-weight")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

### SVG のフォントの太さの制御

```html
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-weight="normal">Normal テキスト</text>
  <text y="45" font-weight="bold">Bold テキスト</text>
</svg>
```

{{EmbedLiveSample}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>normal</code> | <code>bold</code> | <code>bolder</code> |
        <code>lighter</code> | {{cssxref("number")}}
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

値の説明については、 [CSS の `font-weight`](/ja/docs/Web/CSS/Reference/Properties/font-weight#値) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("font-weight")}} プロパティ
