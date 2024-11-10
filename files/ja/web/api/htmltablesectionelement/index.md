---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLTableSectionElement`** インターフェイスは、（継承元でもある通常の {{domxref("HTMLElement")}} オブジェクトのインターフェイスのほかに） HTML の表におけるヘッダー、フッター、本体などのセクションのレイアウトと表現を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLTableSectionElement.align")}} {{deprecated_inline}}
  - : 文字列で、 [`align`](/ja/docs/Web/HTML/Element/tr#align) 属性を反映した列挙型の値が入ります。これは、周囲のコンテキストに対する要素の内容物の配置を示します。利用可能な値は `"left"`, `"right"`, `"center"` です。
- {{domxref("HTMLTableSectionElement.rows")}} {{readonlyInline}}
  - : セクション内の行を含む生きた {{domxref("HTMLCollection")}} を返します。この `HTMLCollection` は生きており、行が追加または削除された際には自動的に更新されます。
- {{domxref("HTMLTableSectionElement.ch")}} {{deprecated_inline}}
  - : 単一の文字が入った文字列です。この文字は、列のすべてのセルを揃えるための文字です。これは [`char`](/ja/docs/Web/HTML/Element/tr#char) を反映したもので、既定値は言語に関連した小数点以下の値、例えば英語なら `'.'`、フランス語なら `','` になります。このプロパティは任意であり、あまり対応されていませんでした。
- {{domxref("HTMLTableSectionElement.chOff")}} {{deprecated_inline}}
  - : 文字列で、 `HTMLTableRowElement.ch` で定義された文字の右側（左書きの場合。右書きの場合は左側）に何文字残さなければならないかを示す整数です。このプロパティは任意であり、あまり対応されていませんでした。
- {{domxref("HTMLTableSectionElement.vAlign")}} {{deprecated_inline}}
  - : 文字列で、セルの内容物が垂直方向に配置される方法を示す列挙値を表します。これは [`valign`](/ja/docs/Web/HTML/Element/tr#valign) 属性を反映し、 `"top"`, `"middle"`, `"bottom"`, `"baseline"` の何れかの値を取ります。

## メソッド

_親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

- {{domxref("HTMLTableSectionElement.deleteRow()")}}
  - : 引数で与えられた `index` に対応する行を、そのセクションから削除します。もし `index` の値が `-1` であれば、最後の行が削除されます。もし `-1` よりも小さいか、コレクション内の行数よりも大きい場合は、 {{DOMxRef("DOMException")}} が `IndexSizeError` の値で発生します。
- {{domxref("HTMLTableSectionElement.insertRow()")}}
  - : セクションの新しい行を表す {{DOMxRef("HTMLTableRowElement")}} を返します。これは、指定された `index` の位置にある {{HTMLElement("tr")}} 要素の直前の行コレクションに挿入されます。 `index` が `-1` である場合、新しい行がコレクションに追加されます。もし `index` が `-1` よりも小さいか、コレクション内の行数よりも大きい場合は、値 `IndexSizeError` を持つ {{DOMxRef("DOMException")}} が発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}
