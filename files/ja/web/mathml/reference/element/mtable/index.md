---
title: <mtable>
slug: Web/MathML/Reference/Element/mtable
original_slug: Web/MathML/Element/mtable
l10n:
  sourceCommit: 802049f9c94f21038426fa10c91209a442d164cb
---

{{MathMLRef}}

MathML の `<mtable>` 要素は表や行列を作るのに使えます。`<mtable>` の中には {{ MathMLElement("mtr") }} と {{ MathMLElement("mtd") }} のみが書けます。これらの要素の関係は，[HTML](/ja/docs/Web/HTML) の{{ HTMLElement("table") }}，{{ HTMLElement("tr") }} と {{ HTMLElement("td") }} の関係に似ています。

## 属性

この要素の属性には[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)があります。一部のブラウザーは以下の属性にも対応していることがあります。

- `align` {{Non-standard_Inline}}
  - : 環境に対する表の**垂直**の配置を指定します。
    使用可能な値は以下の通りです。
    - `axis` （既定値）: 表の垂直方向の中心が環境の軸（通常はマイナス記号）に配置される。
    - `baseline`: 表の垂直方向の中心が、環境のベースライン上に配置されます。
    - `bottom`: 表の下端が、環境のベースライン上に配置されます。
    - `center`: baseline を参照。
    - `top`: 表の上端が、環境のベースライン上に配置されます。

    さらに、 `align` 属性の値は*行番号*で終えることができます（例: `align="center 3"`）。 これにより、表全体ではなく、指定した行の位置を揃えることができます。負の整数値にすると、表の下端から行数を数えます。

- `columnalign` {{Non-standard_Inline}}
  - : セル内の水平方向の揃えを指定します。スペース区切りで複数の値を書くこともでき，その場合，対応する列に適用されます（例: `columnalign="left right center"`）。使用可能な値は `left`、`center`（既定値）、`right` です。
- `columnlines` {{Non-standard_Inline}}
  - : 列間罫線を指定します。スペース区切りで複数の値を書くこともでき，その場合、対応する列の間に適用されます（例: `columnlines="none none solid"`）。使用可能な値は `none`（既定値）、`solid`、`dashed` です。
- `columnspacing` {{Non-standard_Inline}}
  - : 表の列の間の空間を指定します。スペースで区切られた複数の値を指定することができ、対応する列に適用されます（例: `columnspacing="1em 2em"`）。使用可能な値は [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) です。
- `frame` {{Non-standard_Inline}}
  - : 表全体の枠線を指定します。使用可能な値は、 `none`（既定値）、`solid`、`dashed` です。
- `framespacing` {{Non-standard_Inline}}
  - : 表とフレームの間に追加される空間を指定します。 1 つ目の値は、右と左の空間を指定し、 2 つ目の値は、上と下の空間を指定します。使用可能な値は [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) です。
- `rowalign` {{Non-standard_Inline}}
  - : セルの垂直方向の揃えを指定します。スペース区切りで複数の値を書くこともでき、その場合、対応する行に適用されます（例: `rowalign="top bottom axis"`）。使用可能な値は `axis`、`baseline`（既定値）、`bottom，center`、`top` です。
- `rowlines` {{Non-standard_Inline}}
  - : 行間罫線を指定します。スペース区切りで複数の値を書くこともでき，その場合、対応する列の間に適用されます。（例: `rowlines="none none solid"`）。使用可能な値は `none`（既定値）、`solid`、`dashed` です。
- `rowspacing` {{Non-standard_Inline}}
  - : 表の行間の空間を指定します。スペースで区切られた複数の値を指定でき、対応する行に適用されます（例: `rowspacing="1em 2em"`）。使用可能な値は [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) です。
- `width` {{Non-standard_Inline}}
  - : 表全体の幅を示す [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) を指定します。

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

{{ EmbedLiveSample('mtable_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("mtd") }} （表のセル）
- {{ MathMLElement("mtr") }} （表の行）
