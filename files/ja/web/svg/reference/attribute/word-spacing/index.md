---
title: word-spacing
slug: Web/SVG/Reference/Attribute/word-spacing
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`word-spacing`** 属性は、単語間の間隔を指定します。

単位識別子を付けずに {{cssxref("length")}} が指定された場合（例えば、128 のような単位のない数値）、ブラウザーはその \<length> を現在のユーザー座標系における幅の値として処理します。

\<length> に単位識別子を付けて指定した場合（例えば、.25em または 1%）、ブラウザーはその \<length> を現在のユーザー座標系に対応する値へ変換します。

> [!NOTE]
> プレゼンテーション属性であるため、`word-spacing` には対応する CSS プロパティ {{cssxref("word-spacing")}} があります。両方が指定された場合、CSS プロパティが優先されます。

## 要素

この属性は、次の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

この例には、異なる `word-spacing` の値を持つ 2 つの {{SVGElement("text")}} 要素があります。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" word-spacing="4">単語間隔を広くする</text>
  <text x="0" y="40" word-spacing="-0.5">単語間隔を狭くする</text>
</svg>
```

{{EmbedLiveSample("Examples", "250", "100")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>normal</code> | {{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>normal</code></td>
    </tr>
  </tbody>
</table>

値の説明については、[CSS の `letter-spacing`](/ja/docs/Web/CSS/Reference/Properties/letter-spacing#値) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("word-spacing")}} プロパティ
