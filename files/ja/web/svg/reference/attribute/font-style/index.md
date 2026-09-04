---
title: font-style
slug: Web/SVG/Reference/Attribute/font-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`font-style`** 属性は、テキストを通常体、イタリック体、斜体のどれを用いて表示するかどうかを指定します。

> [!NOTE]
> プレゼンテーション属性であるため、 `font-style` には対応する CSS プロパティ {{cssxref("font-style")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

### SVG のフォントスタイルの制御

```html
<svg viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-style="normal">Normal フォントスタイル</text>
  <text y="45" font-style="italic">Italic フォントスタイル</text>
</svg>
```

{{EmbedLiveSample}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>normal</code> | <code>italic</code> | <code>oblique</code></td>
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

値の説明については、 [CSS の `font-style`](/ja/docs/Web/CSS/Reference/Properties/font-style#値) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("font-style")}} プロパティ
