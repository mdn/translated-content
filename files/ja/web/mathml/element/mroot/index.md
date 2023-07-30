---
title: <mroot>
slug: Web/MathML/Element/mroot
---

{{MathMLRef}}

MathML の `<mroot>` 要素は根指数の付いた累乗根を表示するのに用いられます。引数は二つあり，構文は `<mroot> 基数 根指数 </mroot>` となります。

## 属性

- class, id, style
  - : [スタイルシート](/ja/docs/Web/CSS)で使用するために使います。
- `displaystyle`
  - : 論理値で、数式を表示する際に上下に余白を追加するかどうかを指定します。 `false` に設定すると、数式を表示するのによりコンパクトなレイアウトを使用します。 `displaystyle` を `true` に設定する主な効果は、演算子をより大きく表示することです。 {{ MathMLElement("mo") }} の `largeop` および `movablelimits` も参照してください。
- href
  - : 指定された URL へのハイパーリンクを設定するために使われます。
- mathbackground
  - : 背景色を指定します。 `#rgb` や `#rrggbb` のような 16 進表現や[HTML 色名](/ja/docs/CSS/color_value#Color_Keywords)を用いることができます
- mathcolor
  - : 文字や記号自体の色を指定します。 `#rgb` や `#rrggbb` のような 16 進表現や [HTML color 色名](/ja/docs/CSS/color_value#Color_Keywords)を用いることができます

## 例

レンダリングのサンプル(画像): ![x](mroot.png)

ブラウザのレンダリング結果: <math><mroot><mi>x</mi> <mn>3</mn></mroot></math>

```html
<math>
  <mroot>
    <mi>x</mi>
    <mn>3</mn>
  </mroot>
</math>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("mathml.elements.mroot")}}

## 関連情報

- {{ MathMLElement("msqrt") }} (根指数のない平方根)
