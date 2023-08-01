---
title: <mover>
slug: Web/MathML/Element/mover
---

{{MathMLRef}}

MathML の `<mover>` 要素はアクセントかリミットを上に載せるために使われます。構文は次の通りです： `<mover> base overscript </mover>`
訳注：アクセントは例えばドットやハットなどの記号です。リミットとは，定積分の区間の端点などのことです。
overscript には定着した訳語がないようです。superscript（上付き）が肩に付く添字であるのに対し，overscript は真上に付く添字です。そのまま「オーバースクリプト」と書くことにします。

## 属性

- accent
  - : これが `true` の場合，オーバースクリプトはアクセントであり，本体に近く表示されます。
    `false`（既定値）の場合，オーバースクリプトは本体の上に載せるリミットです。
    訳注：既定値は実際にはもう少し複雑で，オーバースクリプトが `<mo>` 要素の場合，その `accent` 属性が既定値となるというルールがあります。詳細は仕様書を参照。また，`accent` 属性の値によって大きさが違って表示される場合もあります。
- align
  - : オーバースクリプトの揃え位置。取り得る値は：`left`, `center` および `right`.
- class, id, style
  - : Provided for use with [stylesheets](/ja/docs/CSS).
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).

## 例

Sample rendering: ![x+y+z](mover.png)

Rendering in your browser: <math><mover accent="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏞</mo></mover></math>

```html
<math>
  <mover accent="true">
    <mrow>
      <mi> x </mi>
      <mo> + </mo>
      <mi> y </mi>
      <mo> + </mo>
      <mi> z </mi>
    </mrow>
    <mo>
      &#x23DE;
      <!--TOP CURLY BRACKET-->
    </mo>
  </mover>
</math>
```

## 仕様書

{{Specifications}}

## ブラウザ実装状況

{{Compat("mathml.elements.mover")}}

## 関連情報

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
