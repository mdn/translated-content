---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

**`HTMLTableCellElement`** インターフェイスは、（継承によって利用できる通常の {{domxref("HTMLElement")}} インターフェイスに加えて）表のセル（見出しセル {{HTMLElement("th")}} またはデータセル {{HTMLElement("td")}}）のレイアウトを操作したり行を表したりするための特別なプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLTableCellElement.abbr")}}
  - : 文字列で、 `<th>` 要素上（{{HTMLElement("td")}} 上ではない）で使用可能であり、見出しセルの代替ラベルを指定します。この代替ラベルは、データセルに適用される見出しを記述するときなど、他のコンテキストで使用することができます。これは、特にスクリーンリーダーが使用するための短い用語を提供するために使用され、貴重なアクセシビリティツールとなります。通常、 `abbr` の値は省略形や頭字語ですが、文脈に応じて適切なテキストを指定することができます。
- {{domxref("HTMLTableCellElement.cellIndex")}} {{ReadOnlyInline}}
  - : 数値で、セルが含まれる {{HTMLElement("tr")}} の {{domxref("HTMLTableRowElement.cells", "cells")}} コレクション内での位置を表します。セルが `<tr>` に属さない場合は、 `-1` を返します。
- {{domxref("HTMLTableCellElement.colSpan")}}
  - : 正の数値で、このセルがまたがなければならない列の数を示します。これにより、セルが表の複数の列を占めるようになります。これは [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を反映したものです。
- {{domxref("HTMLTableCellElement.headers")}} {{ReadOnlyInline}}
  - : {{domxref("DOMTokenList")}} で、セルに関連する見出しを表す {{HTMLElement("th")}} 要素の `id` のリストです。これは [`headers`](/ja/docs/Web/HTML/Reference/Elements/td#headers) 属性を反映したものです。
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : 正の数値で、このセルがまたがなければならない行の数を示します。これにより、セルが表の複数の行を占めるようになります。これは [`rowspan`](/ja/docs/Web/HTML/Reference/Elements/td#rowspan) 属性を反映したものです。
- {{domxref("HTMLTableCellElement.scope")}}
  - : {{HTMLElement("th")}} セルのスコープを示す文字列です。`scope` に指定できる値は、`col`、`colgroup`、`row`、`rowgroup`、または空文字列 (`""`) です。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 非推奨のプロパティ

> [!WARNING]
> これらのプロパティは非推奨になっており、もう使用するべきではありません。これらは主に古いコードベースを理解しやすくすることを目的に文書化されています。

- {{domxref("HTMLTableCellElement.align")}} {{deprecated_inline}}
  - : 文字列で、[`align`](/ja/docs/Web/HTML/Reference/Elements/td#align) 属性の値が（もしあれば）入ります。設定されていない場合は空文字列となります。これを使用することで、要素の内容の配置を、`"left"`、`"right"`、`"center"` のいずれかに設定することができます。代わりに、CSS の {{cssxref("text-align")}} プロパティを使用してください。
- {{domxref("HTMLTableCellElement.axis")}} {{deprecated_inline}}
  - : 仮想的にセルをグループ化する名前を含む文字列。これは、廃止された [`axis`](/ja/docs/Web/HTML/Reference/Elements/td#axis) 属性を反映しています。
- {{domxref("HTMLTableCellElement.bgColor")}} {{deprecated_inline}}
  - : 文字列で、セルの背景色です。これは、廃止された [`bgColor`](/ja/docs/Web/HTML/Reference/Elements/td#bgcolor) 属性を反映したものです。
- {{domxref("HTMLTableCellElement.ch")}} {{deprecated_inline}}
  - : 文字列で、 1 つの文字を含みます。この文字は、列の全てのセルを揃えるための文字です。これは [`char`](/ja/docs/Web/HTML/Reference/Elements/td#char) を反映し、既定では言語に関連付けられた小数点の値、例えば英語なら `'.'`、フランス語なら `','` となります。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxref("HTMLTableCellElement.chOff")}} {{deprecated_inline}}
  - : 文字列で、`HTMLTableCellElement.ch` で定義された文字の右側（左書きの場合。右書きの場合は左側）に何文字残さなければならないかを示す整数です。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxref("HTMLTableCellElement.height")}} {{deprecated_inline}}
  - : 文字列で、セルのヒントとなる高さのピクセル数が入ります。これは、廃止された [`height`](/ja/docs/Web/HTML/Reference/Elements/td#height) 属性を反映します。
- {{domxref("HTMLTableCellElement.noWrap")}} {{deprecated_inline}}
  - : 論理値で、`nowrap` 属性を反映します。セルの内容が複数の行に分割できるかどうかを示します。
- {{domxref("HTMLTableCellElement.vAlign")}} {{deprecated_inline}}
  - : 文字列で、セルの内容がどのように垂直方向に配置されるかを示す列挙値です。これは [`valign`](/ja/docs/Web/HTML/Reference/Elements/td#valign) 属性を反映しており、`"top"`, `"middle"`, `"bottom"`, `"baseline"` のいずれかになります。代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。
- {{domxref("HTMLTableCellElement.width")}} {{deprecated_inline}}
  - : 文字列で、可能であればセルが描画されるべきピクセル幅の数を指定します。このプロパティは、廃止された [`width`](/ja/docs/Web/HTML/Reference/Elements/td#width) 属性を反映します。代わりに CSS の {{cssxref("width")}} プロパティを使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("th")}} および {{HTMLElement("td")}}
