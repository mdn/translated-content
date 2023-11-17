---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: 0387e3e9f49863cc1f8bba5164e1697778cba593
---

{{ APIRef("HTML DOM") }}

**`HTMLTableCellElement`** インターフェイスは、（継承によって利用できる通常の {{domxref("HTMLElement")}} インターフェイスに加えて）表のセル（見出しセル {{HTMLElement("th")}} またはデータセル {{HTMLElement("td")}}）のレイアウトを操作したり行を表したりするための特別なプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLTableCellElement.abbr")}}
  - : 文字列で、 `<th>` 要素上（{{HTMLElement("td")}} 上ではない）で使用可能であり、見出しセルの代替ラベルを指定します。この代替ラベルは、データセルに適用される見出しを記述するときなど、他のコンテキストで使用することができます。これは、特にスクリーンリーダーが使用するための短い用語を提供するために使用され、貴重なアクセシビリティツールとなります。通常、 `abbr` の値は省略形や頭字語ですが、文脈に応じて適切なテキストを指定することができます。
- {{domxref("HTMLTableCellElement.cellIndex")}} {{ReadOnlyInline}}
  - : 長整数値で、セルが含まれる {{HTMLElement("tr")}} の {{domxref("HTMLTableRowElement.cells", "cells")}} コレクション内での位置を表します。セルが `<tr>` に属さない場合は、 `-1` を返します。
- {{domxref("HTMLTableCellElement.colSpan")}}
  - : 符号なし整数で、このセルがまたがらなければならない列の数を示します。これは [`colspan`](/ja/docs/Web/HTML/Element/td#colspan) 属性を反映したものです。
- {{domxref("HTMLTableCellElement.headers")}} {{readonlyInline}}
  - : {{domxref("DOMTokenList")}} で、セルに関連する見出しを表す {{HTMLElement("th")}} 要素の `id` のリストです。これは [`headers`](/ja/docs/Web/HTML/Element/td#headers) 属性を反映したものです。
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : 符号なし整数で、このセルがまたがらなければならない行数を示します。これは [`rowspan`](/ja/docs/Web/HTML/Element/td#rowspan) 属性を反映したものです。
- {{domxref("HTMLTableCellElement.scope")}}

  - : {{HTMLElement("th")}} セルのスコープを示す文字列です。見出しセルは `scope` プロパティを用いて、指定された行または列、あるいは現在の行グループ内のまだスコープされていないセル（つまり、同じ祖先の {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} 要素）に適用するように設定することが可能です。もし `scope` に何も値が指定されなければ、見出しはこの方法で直接セルと関連付けられることはありません。 `scope` に指定可能な値は以下の通りです。

    - `col`
      - : 見出しセルは同じ列（`colspan`が使われている場合は列）の続くセルに適用され、列の終わりか列内の別の `<th>` が新しいスコープを確立するまで適用されます。
    - `colgroup`
      - : 見出しセルは、現在の列グループ内の、まだスコープが適用されていないすべてのセルに適用される。この値は、セルが列グループ内にある場合にのみ許可されます。
    - `row`
      - : 見出しセルは、同じ行（`rowspan`が使われている場合は行）の続くセルに適用され、行の終わりか同じ行の別の `<th>` が新しいスコープを確立するまで適用されます。
    - `rowgroup`
      - : 見出しセルは、現在の行グループ内の、まだスコープが適用されていない全てのセルに適用される。この値は、セルが行グループの中にある場合にのみ許可される。
    - The empty string (`""`)
      - : 見出しセルは事前に定義された範囲を持ちません。ユーザーエージェントは文脈の手がかりに基づいて範囲を確立します。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 非推奨のプロパティ

> **警告:** これらのプロパティは{{Glossary("deprecated", "非推奨")}}になっており、もう使用するべきではありません。これらは主に古いコードベースを理解しやすくすることを目的に文書化されています。

- {{domxref("HTMLTableCellElement.align")}} {{deprecated_inline}}
  - : 文字列で、 [`align`](/ja/docs/Web/HTML/Element/td#align) 属性を反映した列挙値です。これは、周囲のコンテキストに対する要素の内容の整列を示す。指定できる値は `"left"`, `"right"`, `"center"` です。
- {{domxref("HTMLTableCellElement.axis")}} {{deprecated_inline}}
  - : 仮想的にセルをグループ化する名前を含む文字列。これは、廃止された [`axis`](/ja/docs/Web/HTML/Element/td#axis) 属性を反映しています。
- {{domxref("HTMLTableCellElement.bgColor")}} {{deprecated_inline}}
  - : 文字列で、セルの背景色です。これは、廃止された [`bgColor`](/ja/docs/Web/HTML/Element/td#bgcolor) 属性を反映したものです。
- {{domxref("HTMLTableCellElement.ch")}} {{deprecated_inline}}
  - : 文字列で、 1 つの文字を含みます。この文字は、列の全てのセルを揃えるための文字です。これは [`char`](/ja/docs/Web/HTML/Element/td#char) を反映し、既定では言語に関連付けられた小数点の値、例えば英語なら `'.'`、フランス語なら `','` となります。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxref("HTMLTableCellElement.chOff")}} {{deprecated_inline}}
  - : 文字列で、`HTMLTableCellElement.ch` で定義された文字の右側（左書きの場合。右書きの場合は左側）に何文字残さなければならないかを示す整数です。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxref("HTMLTableCellElement.height")}} {{deprecated_inline}}
  - : 文字列で、セルのヒントとなる高さのピクセル数が入ります。これは、廃止された [`height`](/ja/docs/Web/HTML/Element/td#height) 属性を反映します。
- {{domxref("HTMLTableCellElement.noWrap")}} {{deprecated_inline}}
  - : 論理値で、 [`nowrap`](/ja/docs/Web/HTML/Element/td#nowrap) 属性を反映します。セルの内容が複数の行に分割できるかどうかを示します。
- {{domxref("HTMLTableCellElement.vAlign")}} {{deprecated_inline}}
  - : 文字列で、セルの内容がどのように垂直方向に配置されるかを示す列挙値です。これは [`valign`](/ja/docs/Web/HTML/Element/td#valign) 属性を反映しており、 `"top"`, `"middle"`, `"bottom"`, `"baseline"` のいずれかになります。
- {{domxref("HTMLTableCellElement.width")}} {{deprecated_inline}}
  - : 文字列で、可能であればセルが描画されるべきピクセル幅の数を指定します。このプロパティは、廃止された [`width`](/ja/docs/Web/HTML/Element/td#width) 属性を反映します。代わりに CSS の {{cssxref("width")}} プロパティを使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("th")}} および {{HTMLElement("td")}}
