---
title: <mtable>
slug: Web/MathML/Element/mtable
---

{{MathMLRef()}}

MathML の `<mtable>` 要素は表や行列を作るのに使えます。`<mtable>` の中には {{ MathMLElement("mtr") }} と {{ MathMLElement("mtd") }} のみが書けます。これらの要素の関係は，[HTML](/ja/docs/HTML) の{{ HTMLElement("table") }}，{{ HTMLElement("tr") }} と {{ HTMLElement("td") }} の関係に似ています。

## 属性

- align

  - : Specifies the **vertical** alignment of the table with respect to its environment.
    Possible values are:

    - `axis` (default): The vertical center of the table aligns on the environment's axis (typically the minus sign).
    - `baseline`: The vertical center of the table aligns on the environment's baseline.
    - `bottom`: The bottom of the table aligns on the environments baseline.
    - `center`: See baseline.
    - `top`: The top of the table aligns on the environments baseline.

    In addition, values of the `align` attribute can end with a _rownumber_ (e.g. `align="center 3"`). This allows you to align the specified row of the table rather than the whole table. A negative Integer value counts rows from the bottom of the table. Starting with Gecko 8.0 {{ geckoRelease("8.0") }} the interpretation of _negative_ values has been corrected ({{ bug(601436) }}). In Gecko 17.0 {{geckoRelease("17.0")}} the parsing has been updated to treat whitespace correctly.

- alignmentscope

  class, id, style

  - : Provided for use with [stylesheets](/ja/docs/CSS).

- columnalign
  - : セル内の水平方向の揃えを指定します。スペース区切りで複数の値を書くこともでき，その場合，対応する列に適用されます（例：`columnalign="left right center"`）取り得る値は `left，center`（既定値）と `right` です。
- columnlines
  - : 列間罫線を指定します。スペース区切りで複数の値を書くこともでき，その場合，対応する列の間に適用されます（例：`columnlines="none none solid"`）。取り得る値は `none`（既定値），`solid` と `dashed` です。
- columnspacing
  - : 列間スペースを指定します。
- columnwidth
  - : 列幅を指定します。
- displaystyle
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`.
- equalcolumns
  - : 全列の幅（訳注：原文は total height とあるが total width の誤りだろう）を強制的に同じにするか否かを示す真偽値。既定値は `false`。
- equalrows
  - : 全行の高さを強制的に同じにするか否かを示す真偽値。既定値は `false。`
- frame
  - : Specifies borders of the entire table. Possible values are: `none` (default), `solid` and `dashed`.
- framespacing
  - : Specifies additional space added between the table and frame.
- groupalign

  href

  - : Used to set a hyperlink to a specified URI.

- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/ja/docs/CSS/color_value#Color_Keywords).
- minlabelspacing
  - : A length value specifing the minimum space between a [label](/ja/docs/MathML/Element/mlabeledtr) and the adjacent cell in the row.
- rowalign
  - : セルの垂直方向の揃えを指定します。スペース区切りで複数の値を書くこともでき，その場合，対応する行に適用されます（例：`rowalign="top bottom axis"`）。取り得る値は `axis，baseline`（既定値），`bottom，center` と `top` です。
- rowlines
  - : 行間罫線を指定します。スペース区切りで複数の値を書くこともでき，その場合，対応する列の間に適用されます。（例：`rowlines="none none solid"`）。取り得る値は `none`（既定値），`solid` と `dashed` です。
- rowspacing
  - : 行間スペースを指定します。
- side
  - : {{ MathMLElement("mlabeledtr") }} ラベル要素を置く場所を指定します。 取り得る値は `left`，`right`（既定値），`leftoverlap` と `rightoverlap` です。
- width
  - : Specifies the width of the entire table. Accepts [length values](/ja/docs/MathML/Attributes/Values#Lengths).

## 例

#### Example 1: 揃える位置を行番号で指定する

Rendering: ![](mtable-1.png)

```html
<math>

    <mi>X</mi>
    <mo>=</mo>
    <mtable frame="solid" rowlines="solid" align="axis 3">
        <mtr>
             <mtd><mi>A</mi></mtd>
             <mtd><mi>B</mi></mtd>
        </mtr>
        <mtr>
             <mtd><mi>C</mi></mtd>
             <mtd><mi>D</mi></mtd>
        </mtr>
        <mtr>
             <mtd><mi>E</mi></mtd>
             <mtd><mi>F</mi></mtd>
        </mtr>
    </mtable>

</math>
```

## 仕様

| Specification                                                                            | Status                       | Comment               |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mtable', 'mtable') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mtable', 'mtable') }} | {{ Spec2('MathML2') }} | Initial specification |

## ブラウザーの互換性

{{Compat("mathml.elements.mtable")}}

## See also

- {{ MathMLElement("mtd") }} (Table cell)
- {{ MathMLElement("mtr") }} (Table row)
