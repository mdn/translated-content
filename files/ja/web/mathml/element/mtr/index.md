---
title: <mtr>
slug: Web/MathML/Element/mtr
---

{{MathMLRef()}}

MathML の `<mtr>` 要素は表組・行列の行を表します。{{ MathMLElement("mtable") }} 要素の中にしか現れません。この要素は [HTML](/ja/docs/HTML) の {{ HTMLElement("tr") }} 要素に似ています。

## 属性

- class, id, style
  - : Provided for use with [stylesheets](/ja/docs/CSS).
- columnalign
  - : {{ MathMLElement("mtable") }} で指定された、セルの水平方向の揃えの値をこの行について上書きします。
    取り得る値は `left`, `center`, `right` です。
- groupalign

  href

  - : Used to set a hyperlink to a specified URI.

- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- rowalign
  - : {{ MathMLElement("mtable") }} で指定された、セルの垂直方向の揃えをこの行について上書きします。
    取り得る値は `axis`, `baseline`, `bottom`, `center`, `top` です。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtd") }}
