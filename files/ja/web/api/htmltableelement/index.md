---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: 0387e3e9f49863cc1f8bba5164e1697778cba593
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement`** インターフェイスは、（継承元でもある通常の {{DOMxRef("HTMLElement")}} オブジェクトのインターフェイスのほかに） HTML 文書内の表のレイアウトと表現を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{DOMxRef("HTMLElement")}} から継承したプロパティがあります。_

- {{DOMxRef("HTMLTableElement.caption")}}
  - : {{DOMxRef("HTMLTableCaptionElement")}} で、この要素の子要素のうち最初の {{HTMLElement("caption")}} を表します。見つからなければ `null` になります。設定する場合は、そのオブジェクトが `<caption>` ではなかった場合、 {{DOMxRef("DOMException")}} が `HierarchyRequestError` の名前で発生します。正しいオブジェクトが与えられた場合は、この要素の最初の子要素として挿入され、この要素の子要素に `<caption>` があれば、最初のものがツリーから取り除かれます。
- {{DOMxRef("HTMLTableElement.tHead")}}
  - : {{DOMxRef("HTMLTableSectionElement")}} で、この要素の子要素のうち最初の {{HTMLElement("thead")}} を表します。見つからなければ `null` になります。設定する場合は、そのオブジェクトが `<thead>` ではなかった場合、 {{DOMxRef("DOMException")}} が `HierarchyRequestError` の名前で発生します。正しいオブジェクトが与えられた場合は、この要素の {{HTMLElement("caption")}} や {{HTMLElement("colgroup")}} を除いた最初の子要素の前に、または該当する要素がなければ最後の子要素として挿入され、この要素の子要素に `<thead>` があれば、最初のものがツリーから取り除かれます。
- {{DOMxRef("HTMLTableElement.tFoot")}}
  - : {{DOMxRef("HTMLTableSectionElement")}} で、この要素の子要素のうち最初の {{HTMLElement("tfoot")}} を表します。見つからなければ `null` になります。設定する場合は、そのオブジェクトが `<tfoot>` ではなかった場合、 {{DOMxRef("DOMException")}} が `HierarchyRequestError` の名前で発生します。正しいオブジェクトが与えられた場合は、この要素の {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}} を除いた最初の子要素の前に、または該当する要素がなければ最後の子要素として挿入され、この要素の子要素に `<tfoot>` があれば、最初のものがツリーから取り除かれます。
- {{DOMxRef("HTMLTableElement.rows")}} {{ReadOnlyInline}}
  - : 生きた {{DOMxRef("HTMLCollection")}} で、この要素のすべての行を含みます。すなわち、この要素の子であるすべての {{HTMLElement("tr")}} 、またはこの要素の子要素である {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} の何れかの子要素です。 `<thead>` のメンバーの行が最初に、ツリー順に現れ、 `<tbody>` のメンバーがその後に、やはりツリー順に現れます。 `HTMLCollection` は生きており、 `HTMLTableElement` が変化するたびに自動的に更新されます。
- {{DOMxRef("HTMLTableElement.tBodies")}} {{ReadOnlyInline}}
  - : 生きた {{DOMxRef("HTMLCollection")}} で、この要素のすべての {{HTMLElement("tbody")}} を含みます。 `HTMLCollection` は生きており、 `HTMLTableElement` が変化するたびに自動的に更新されます。

### 廃止されたプロパティ

> **警告:** 以下のプロパティは廃止されました。使用は避けてください。

- {{DOMxRef("HTMLTableElement.align")}} {{deprecated_inline}}
  - : 文字列で、 [`align`](/ja/docs/Web/HTML/Element/table#align) 属性を反映した列挙型の値が入ります。これは、周囲のコンテキストに対する要素の内容物の配置を示します。利用可能な値は `"left"`, `"right"`, `"center"` です。
- {{DOMxRef("HTMLTableElement.bgColor")}} {{deprecated_inline}}
  - : 文字列で、セルの背景色が入ります。これは廃止された [`bgColor`](/ja/docs/Web/HTML/Element/table#bgcolor) 属性を反映します。
- {{DOMxRef("HTMLTableElement.border")}} {{deprecated_inline}}
  - : 文字列で、表の境界の幅がピクセル数で入ります。これは廃止された [`border`](/ja/docs/Web/HTML/Element/table#border) 属性を反映します。
- {{DOMxRef("HTMLTableElement.cellPadding")}} {{deprecated_inline}}
  - : 文字列で、セルの内容とセルの境界の間の水平・垂直空間の幅がピクセル数で入ります。これは廃止された [`cellpadding`](/ja/docs/Web/HTML/Element/table#cellpadding) 属性を反映します。
- {{DOMxRef("HTMLTableElement.cellSpacing")}} {{deprecated_inline}}
  - : 文字列で、セル間の水平・垂直の距離がピクセル数で入ります。これは廃止された [`cellspacing`](/ja/docs/Web/HTML/Element/table#cellspacing) 属性を反映します。
- {{DOMxRef("HTMLTableElement.frame")}} {{deprecated_inline}}
  - : 文字列で、表の外部境界の種類が入ります。これは廃止された [`frame`](/ja/docs/Web/HTML/Element/table#frame) 属性を反映し、 `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"`, `"border"` のうちの何れかを取ります。
- {{DOMxRef("HTMLTableElement.rules")}} {{deprecated_inline}}
  - : 文字列で、表の内部の境界の種類が入ります。これは廃止された [`rules`](/ja/docs/Web/HTML/Element/table#rules) 属性を反映し、 `"none"`, `"groups"`, `"rows"`, `"cols"`, `"all"` のうちのいずれかを取ります。
- {{DOMxRef("HTMLTableElement.summary")}} {{deprecated_inline}}
  - : 文字列で、目的の説明や表の構造が入ります。これは廃止された [`summary`](/ja/docs/Web/HTML/Element/table#summary) 属性を反映します。
- {{DOMxRef("HTMLTableElement.width")}} {{deprecated_inline}}
  - : 文字列で、表全体の推奨される幅を表すピクセル数またはパーセント値が入ります。これは廃止された [`width`](/ja/docs/Web/HTML/Element/table#width) 属性を反映します。

## インスタンスメソッド

_親である {{DOMxRef("HTMLElement")}} から継承したプロパティがあります。_

- {{DOMxRef("HTMLTableElement.createTHead()")}}
  - : {{DOMxRef("HTMLTableSectionElement")}} で、この要素の子要素のうち最初の {{HTMLElement("thead")}} を返します。見つからなかった場合は、新しいものを作成し、 {{HTMLElement("caption")}} や {{HTMLElement("colgroup")}} を除く最初の要素の直前、そのような要素がなければ最後の要素として挿入します。
- {{DOMxRef("HTMLTableElement.deleteTHead()")}}
  - : この要素の子要素のうち、最初の {{HTMLElement("thead")}} を取り除きます。
- {{DOMxRef("HTMLTableElement.createTFoot()")}}
  - : {{DOMxRef("HTMLTableSectionElement")}} で、この要素の子要素のうち最初の {{HTMLElement("tfoot")}} を返します。見つからなかった場合は、新しいものを作成し、最後の要素として挿入します。
- {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
  - : この要素の子要素のうち最初の {{HTMLElement("tfoot")}} を取り除きます。
- {{DOMxRef("HTMLTableElement.createTBody()")}}
  - : {{DOMxRef("HTMLTableSectionElement")}} で、この要素の子要素である新しい {{HTMLElement("tbody")}} を返します。これはツリー内で最後の {{HTMLElement("tbody")}} 要素の直後に挿入しますが、そのような要素が存在しない場合は最後の要素として挿入します。
- {{DOMxRef("HTMLTableElement.createCaption()")}}
  - : {{DOMxRef("HTMLElement")}} で、この要素の子要素のうち最初の {{HTMLElement("caption")}} を返します。存在しない場合は、新しく作成してこの {{HTMLElement("table")}} 要素の最初の子としてツリーに挿入します。
- {{DOMxRef("HTMLTableElement.deleteCaption()")}}
  - : この要素の子要素のうち最初の {{HTMLElement("caption")}} を返します。
- {{DOMxRef("HTMLTableElement.insertRow()")}}
  - : {{DOMxRef("HTMLTableRowElement")}} でこの表の新しい行を返します。この行を行の集合の中で、 {{HTMLElement("tr")}} 要素のうち、指定された `index` の位置のものの直前に挿入されます。必要に応じて {{HTMLElement("tbody")}} を生成します。 `index` が `-1` であった場合、新しい行が行の集合に追加されます。 `index` が `-1` よりも小さかったり、行の集合に含まれる行数よりも大きかったりした場合は、 {{DOMxRef("DOMException")}} が `IndexSizeError` の値で発生します。
- {{DOMxRef("HTMLTableElement.deleteRow()")}}
  - : 引数で指定された `index` に対応する行を取り除きます。 `index` の値が `-1` であった場合は、最後の行を取り除きます。 `-1` より小さかったり、行の集合に含まれる行数よりも大きかったりした場合は、 {{DOMxRef("DOMException")}} が `IndexSizeError` の値で発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("table")}}
