---
title: <mtd>
slug: Web/MathML/Reference/Element/mtd
original_slug: Web/MathML/Element/mtd
---

{{MathMLRef()}}

MathML の `<mtd>` 要素は表組み・行列のセルを表します。{{ MathMLElement("mtr") }} 要素の中にしか現れません。この要素は [HTML](/ja/docs/Web/HTML) の {{ HTMLElement("td") }} 要素に似ています。

## 属性

- class, id, style
  - : Provided for use with [stylesheets](/ja/docs/Web/CSS).
- columnalign
  - : セル内の水平方向の揃えを指定します。{{ MathMLElement("mtable") }} や {{ MathMLElement("mtr") }} で指定された値を上書きします。
    取り得る値は `left，`center`，`right` です。
- columnspan
  - : セルが何列分を占めるかを非負整数で指定します。
- groupalign
  - : ...
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/Web/CSS/Reference/Values/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/Web/CSS/Reference/Values/color_value#color_keywords).
- rowalign
  - : セル内の垂直方向の揃えを指定します。{{ MathMLElement("mtable") }} や {{ MathMLElement("mtr") }} で指定された値を上書きします。
    取り得る値は `axis`，`baseline`，`bottom，center，top` です。
- rowspan
  - : セルが何行分を占めるかを非負整数で指定します。

## ブラウザーの互換性

{{Compat}}

## 仕様書

{{Specifications}}

## 関連情報

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtr") }}
