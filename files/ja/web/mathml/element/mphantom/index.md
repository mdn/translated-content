---
title: <mphantom>
slug: Web/MathML/Element/mphantom
---

{{MathMLRef}}

MathML の `<mphantom>` 要素は、表示上は不可視だが一定の広がり（高さ、幅、ベースライン位置）を維持した要素です。

## 属性

- class, id, style
  - : Provided for use with [stylesheets](/ja/docs/CSS).
- mathbackground
  - : 背景色。`#rgb`, `#rrggbb` および [HTML color names](/ja/docs/CSS/color_value#Color_Keywords) を用いることができる。

## 例

Sample rendering: ![x+ z](mphantom.png)

Rendering in your browser: <math><mrow><mi>x </mi><mo>+ </mo><mphantom><mi>y </mi><mo>+ </mo></mphantom><mi>z</mi></mrow></math>

```html
<math>
  <mrow>
    <mi> x </mi>
    <mo> + </mo>
    <mphantom>
      <mi> y </mi>
      <mo> + </mo>
    </mphantom>
    <mi> z </mi>
  </mrow>
</math>
```

## 仕様

{{Specifications}}

## ブラウザーごとの互換性

{{Compat("mathml.elements.mphantom")}}

## See also

- {{ MathMLElement("mspace") }}
- {{ MathMLElement("mpadded") }}
