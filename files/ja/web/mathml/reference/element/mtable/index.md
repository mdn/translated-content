---
title: <mtable>
slug: Web/MathML/Reference/Element/mtable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`<mtable>`** は [MathML](/en-US/docs/Web/MathML) の要素で、表や行列を作ることができます。子には {{ MathMLElement("mtr") }} 要素（行を表す）であり、それぞれに子として {{ MathMLElement("mtd") }} 要素（セルを表す）を置くことができます。これらの要素の関係は、[HTML](/ja/docs/Web/HTML) の {{ HTMLElement("table") }}、{{ HTMLElement("tr") }}、{{ HTMLElement("td") }} の関係に似ています。

## 属性

この要素の属性には[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)があります。一部のブラウザーは以下の属性にも対応していることがあります。

- `align` {{Non-standard_Inline}}
  - : 環境に対する表の**垂直**の配置を指定します。
    使用可能な値は以下の通りです。
    - `axis` （デフォルト値）: 表の垂直方向の中心が環境の軸（通常はマイナス記号）に配置される。
    - `baseline`: 表の垂直方向の中心が、環境のベースライン上に配置されます。
    - `bottom`: 表の下端が、環境のベースライン上に配置されます。
    - `center`: baseline を参照。
    - `top`: 表の上端が、環境のベースライン上に配置されます。

    さらに、 `align` 属性の値は*行番号*で終えることができます（例: `align="center 3"`）。 これにより、表全体ではなく、指定した行の位置を揃えることができます。負の整数値にすると、表の下端から行数を数えます。

- `columnalign` {{Non-standard_Inline}}
  - : セル内の水平方向の揃えを指定します。空白区切りで複数の値を書くこともでき，その場合，対応する列に適用されます（例: `columnalign="left right center"`）。使用可能な値は `left`、`center`（デフォルト値）、`right` です。
- `columnlines` {{Non-standard_Inline}}
  - : 列間罫線を指定します。空白区切りで複数の値を書くこともでき，その場合、対応する列の間に適用されます（例: `columnlines="none none solid"`）。使用可能な値は `none`（デフォルト値）、`solid`、`dashed` です。
- `columnspacing` {{Non-standard_Inline}}
  - : 表の列の間の空間を指定します。スペースで区切られた複数の値を指定することができ、対応する列に適用されます（例: `columnspacing="1em 2em"`）。使用可能な値は {{cssxref("length-percentage")}} です。
- `frame` {{Non-standard_Inline}}
  - : 表全体の枠線を指定します。使用可能な値は、 `none`（デフォルト値）、`solid`、`dashed` です。
- `framespacing` {{Non-standard_Inline}}
  - : 表とフレームの間に追加される空間を指定します。 1 つ目の値は、右と左の空間を指定し、 2 つ目の値は、上と下の空間を指定します。使用可能な値は {{cssxref("length-percentage")}} です。
- `rowalign` {{Non-standard_Inline}}
  - : セルの垂直方向の揃えを指定します。空白区切りで複数の値を書くこともでき、その場合、対応する行に適用されます（例: `rowalign="top bottom axis"`）。使用可能な値は `axis`、`baseline`（デフォルト値）、`bottom，center`、`top` です。
- `rowlines` {{Non-standard_Inline}}
  - : 行間罫線を指定します。空白区切りで複数の値を書くこともでき，その場合、対応する列の間に適用されます。（例: `rowlines="none none solid"`）。使用可能な値は `none`（デフォルト値）、`solid`、`dashed` です。
- `rowspacing` {{Non-standard_Inline}}
  - : 表の行間の空間を指定します。スペースで区切られた複数の値を指定でき、対応する行に適用されます（例: `rowspacing="1em 2em"`）。使用可能な値は {{cssxref("length-percentage")}} です。
- `width` {{Non-standard_Inline}}
  - : 表全体の幅を示す {{cssxref("length-percentage")}} を指定します。

> [!NOTE]
> `width` 属性については、ブラウザーによっては[古い MathML の長さ](/ja/docs/Web/MathML/Reference/Values#古い_mathml_における長さ)も受け入れられるかもしれません。

## 例

### 行番号で揃える

```html
<math display="block">
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

{{EmbedLiveSample('Alignment with row number')}}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      なし
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("mtd") }} （表のセル）
- {{ MathMLElement("mtr") }} （表の行）
