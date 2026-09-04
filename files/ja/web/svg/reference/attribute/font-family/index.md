---
title: font-family
slug: Web/SVG/Reference/Attribute/font-family
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`font-family`** 属性は、どのフォントファミリーを使用してテキストを描画するかを指定するもので、優先順位付きのフォントファミリー名や汎用ファミリー名のリストとして指定します。

> [!NOTE]
> プレゼンテーション属性であるため、 `font-family` には対応する CSS プロパティ {{cssxref("font-family")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

### SVG フォントファミリーを制御

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-family="Arial, Helvetica, sans-serif">Sans serif</text>
  <text x="100" y="20" font-family="monospace">Monospace</text>
</svg>
```

{{EmbedLiveSample}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>See {{cssxref("font-family", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>ユーザーエージェントによって異なる</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値の説明については、 [CSS の `font-family`](/ja/docs/Web/CSS/Reference/Properties/font-family#値) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("font-family")}} プロパティ
