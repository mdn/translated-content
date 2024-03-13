---
title: <munder>
slug: Web/MathML/Element/munder
---

{{MathMLRef}}

MathML の `<munder>` 要素は式の下にアクセントや範囲を付けるために使用します。これは `<munder> base underscript </munder>` のように使用します。

## 属性

- accentunder
  - : `true` の場合、その要素は*アクセント*となり、ベース式により近く描画されます。
    `false` （既定値）の場合、この要素はベース式の下の*範囲*になります。
- align {{deprecated_inline}}
  - : 下に付ける文字の配置です。指定可能な値は `left`, `center`, `right` です。
    この属性は非推奨であり、将来削除される予定です。代わりに CSS の [`text-align`](/ja/docs/Web/CSS/text-align) を使用してください。
- class, id, style
  - : [スタイルシート](/ja/docs/Web/CSS)を使用するために提供されています。
- `displaystyle`
  - : 論理値で、表示される数式にもっと縦の空間を使うかどうかを指定します。 `false` に設定すると、よりコンパクトなレイアウトで数式が表示されます。主な効果は、 `displaystyle` が `true` に設定されている場合、演算子をより大きく表示することです。 {{ MathMLElement("mo") }} の `movablelimits` も参照してください。
- href
  - : 指定された URI へのハイパーリンクを設定するために使用します。
- mathbackground
  - : 背景色です。 `#rgb` や `#rrggbb`、 [HTML 色名](/ja/docs/Web/CSS/color_value#色キーワード)を使用することができます。
- mathcolor
  - : テキスト色です。 `#rgb` や `#rrggbb`、 [HTML 色名](/ja/docs/Web/CSS/color_value#色キーワード)を使用することができます。

## 例

レンダリング例: ![x+y+z](munder.png)

このブラウザーでのレンダリング: <math><munder accentunder="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏟</mo></munder></math>

```html
<math>
  <munder accentunder="true">
    <mrow>
      <mi> x </mi>
      <mo> + </mo>
      <mi> y </mi>
      <mo> + </mo>
      <mi> z </mi>
    </mrow>
    <mo>
      &#x23DF;
      <!--BOTTOM CURLY BRACKET-->
    </mo>
  </munder>
</math>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("mover") }} (上の表記)
- {{ MathMLElement("munderover") }} (下の表記と上の表記の組)
