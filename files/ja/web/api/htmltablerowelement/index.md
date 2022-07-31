---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - インターフェイス
  - リファレンス
browser-compat: api.HTMLTableRowElement
translation_of: Web/API/HTMLTableRowElement
---
{{ APIRef("HTML DOM") }}

**`HTMLTableRowElement`** インターフェイスは、（継承によって利用できる通常の {{domxref("HTMLElement")}} インターフェイスに加えて） HTML の表の行のレイアウトを操作したり行を表したりするための特別なプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLTableRowElement.cells")}} {{readonlyInline}}
  - : 行のセルを表す生きた {{domxref("HTMLCollection")}} を返します。 `HTMLCollection` は生きており、セルが追加・削除された際に自動的に更新されます。
- {{domxref("HTMLTableRowElement.rowIndex")}} {{readonlyInline}}
  - : 表全体におけるこの行の論理的な位置を表す `long` 値を返します。この行が表の中になかった場合は、 `-1` を返します。
- {{domxref("HTMLTableRowElement.sectionRowIndex")}} {{readonlyInline}}
  - : 所属する表の区間におけるこの行の論理的な位置を表す `long` 値を返します。この行が区間の中になかった場合は、 `-1` を返します。

## メソッド

_親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- {{domxref("HTMLTableRowElement.deleteCell()", "deleteCell(index)")}}
  - : `index` の位置に対応するセルを取り除きます。 `index` が `-1` であった場合、末尾のセルを取り除きます。 `index` が `-1` より小さいか、このコレクションにあるセルの数より大きい場合、 {{DOMxRef("DOMException")}} が `IndexSizeError` の値で発生します。
- {{domxref("HTMLTableRowElement.insertCell()", "insertCell(index)")}}
  - : {{DOMxRef("HTMLTableCellElement")}} でこの行の新しいセルを表します。セルはこのセルのコレクションの中で、行の中の `index` の位置の直前に挿入されます。 `index` が `-1` の場合、新しいセルはコレクションの末尾に追加されます。 `index` が `-1` より小さいか、このコレクションにあるセルの数より大きい場合、 {{DOMxRef("DOMException")}} が `IndexSizeError` の値で発生します。

## 非推奨のプロパティ

> **Warning:** これらのプロパティは{{Glossary("deprecated", "非推奨")}}になっており、もう使用するべきではありません。これらは主に古いコードベースを理解しやすくすることを目的に文書化されています。

- {{domxref("HTMLTableRowElement.align")}} {{deprecated_inline}}
  - : 文字列で、 {{htmlattrxref("align", "tr")}} 属性を反映した列挙値です。これは、周囲のコンテキストに対する要素の内容の整列を示す。指定できる値は `"left"`, `"right"`, `"center"` です。
- {{domxref("HTMLTableRowElement.bgColor")}} {{deprecated_inline}}
  - : 文字列で、セルの背景色です。これは、廃止された {{htmlattrxref("bgColor", "tr")}} 属性を反映したものです。
- {{domxref("HTMLTableRowElement.ch")}} {{deprecated_inline}}
  - : 文字列で、 1 つの文字を含みます。この文字は、列の全てのセルを揃えるための文字です。これは {{htmlattrxref("char", "tr")}} を反映し、既定では言語に関連付けられた小数点の値、例えば英語なら `'.'`、フランス語なら `','` となります。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxref("HTMLTableRowElement.chOff")}} {{deprecated_inline}}
  - : 文字列で、 `HTMLTableRowElement.ch` で定義された文字の右側（左書きの場合。右書きの場合は左側）に何文字残さなければならないかを示す整数です。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxref("HTMLTableRowElement.vAlign")}} {{deprecated_inline}}
  - : 文字列で、セルの内容がどのように垂直方向に配置されるかを示す列挙値です。これは {{htmlattrxref("valign", "tr")}} 属性を反映しており、 `"top"`, `"middle"`, `"bottom"`, `"baseline"` のいずれかになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("tr")}}
