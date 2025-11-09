---
title: <msqrt>
slug: Web/MathML/Reference/Element/msqrt
original_slug: Web/MathML/Element/msqrt
---

{{MathMLRef()}}

MathML の `<msqrt>` 要素は平方根（根指数のついていない累乗根）を表示するために用いられます。 引数は一つだけで、構文は `<msqrt> base </msqrt>` となります。

## 属性

- class, id, style
  - : [CSS](/ja/docs/Web/CSS)を用いて修飾を行なう際に使われます。
- href
  - : ハイパーリンクを設定する際に用いられます。
- mathbackground
  - : 数式の背景色を指定するために使われます。`#rgb`、`#rrggbb`のような 16 進表現のほか、HTML で定められた[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)を用いることができます。
- mathcolor
  - : 根号を含んだ数式の文字の色を指定するために使われます。`#rgb`、`#rrggbb`のような 16 進表現のほか、HTML で定められた[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)を用いることができます。

## 例

レンダリングのサンプル(画像): ![root-x](msqrt.png)

ブラウザーのレンダリング結果: <math><msqrt><mi>x</mi></msqrt></math>

```html
<math>
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math>
```

## ブラウザーの互換性

{{Compat}}

## 仕様書

{{Specifications}}

## 関連情報

- {{ MathMLElement("mroot") }} (Radical with an index)
