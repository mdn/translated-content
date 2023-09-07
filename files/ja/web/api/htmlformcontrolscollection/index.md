---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

**`HTMLFormControlsCollection`** インターフェイスは、HTML のフォームコントロール要素の集合を表すインターフェイスです。{{domxref("HTMLFormElement")}} インターフェイスの {{domxref("HTMLFormElement.elements", "elements")}} プロパティから返されます。

{{domxref("HTMLCollection")}} から継承されるプロパティとメソッドの他に、追加メソッドが一つ提供されます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには親である {{domxref("HTMLCollection")}} から継承したプロパティがあります。_

## インスタンスメソッド

_このインターフェイスには親である {{domxref("HTMLCollection")}} から継承したメソッドがあります。_

- {{domxref("HTMLFormControlsCollection.namedItem()")}}
  - : 集合内の {{domxref("RadioNodeList")}} または {{domxref("Element")}} の `name` または `id` が指定した名前と一致するノード、または一致するノードがない場合は `null` を返します。このバージョンの `namedItem()` は {{domxref("HTMLCollection")}} から継承されたものを隠していることに注意してください。そのメソッドと同様、`collection["value"]` のように文字列で JavaScript の配列の括弧構文を使用すると、 `collection.namedItem("value")` と同等になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCollection")}}, {{domxref("RadioNodeList")}}, {{domxref("HTMLOptionsCollection")}}
