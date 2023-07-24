---
title: <mfrac>
slug: Web/MathML/Element/mfrac
---

{{MathMLRef()}}

MathML の `<mfrac>` 要素は分数を表示するのに使います。

## 構文

```
<mfrac>numerator denominator</mfrac>
```

## 属性

- `bevelled` {{deprecated_inline}}
  - : 分数を表示する方法を指定します。`true` のとき分数線は斜線になります。つまりこの場合、分子・分母がスラッシュ (/) を挟んで左右に並ぶことになります。既定値の `false` の場合、分子は分母の上に載ります。
    この属性は、非推奨で将来削除される予定です。代わりに U+2044 (fraction slash) を使用してください。
- `class`, `id`, `style`
  - : [スタイルシート](/ja/docs/CSS) で装飾を行なう際に使われます。
- `denomalign` {{deprecated_inline}}
  - : 分数の下に分母をどう揃えるかを指定します。取り得る値は `left`、`center` (既定値) と `right` です。
    この属性は、非推奨で近日中に廃止されます。代わりに CSS を用いて [`text-align`](/ja/docs/Web/CSS/text-align) を指定してください。
- `href`
  - : 特定の URI へのハイパーリンクを設定するのに使われます。
- `linethickness`
  - : 分数の水平線の太さ。既定値は `medium` で、`thin`、`thick` や、それ以外の [length 値](/ja/docs/CSS/length) が取り得ます。
- `mathbackground`
  - : 数式の背景色を指定するために使われます。`#rgb`、`#rrggbb`のような 16 進表現のほか、HTML で定められた[色キーワード](/ja/docs/Web/CSS/named-color)を使用できます。
- `mathcolor`
  - : 数式自体 (テキストと分数線) の色を設定するために使われます。`#rgb`、`#rrggbb` のような 16 進表現のほか、HTML で定められた[色キーワード](/ja/docs/Web/CSS/named-color)を使用できます。
- `numalign` {{deprecated_inline}}
  - : 分数の上に分子をどう揃えるかを指定します。取り得る値は `left`、`center` (既定値) と `right` です。
    この属性は、非推奨で将来削除される予定です。代わりに CSS の [`text-align`](/ja/docs/Web/CSS/text-align) を使用してください。

## 例

レンダリングのサンプル (画像): ![(a/b)/(c/d)](mfrac.png)

ブラウザーのレンダリング結果: <math><mfrac bevelled="true"><mfrac><mi>a </mi><mi>b </mi></mfrac><mfrac><mi>c </mi><mi>d</mi></mfrac></mfrac></math>

```html
<math>
  <mfrac bevelled="true">
    <mfrac>
      <mi> a </mi>
      <mi> b </mi>
    </mfrac>
    <mfrac>
      <mi> c </mi>
      <mi> d </mi>
    </mfrac>
  </mfrac>
</math>
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("mathml.elements.mfrac")}}
