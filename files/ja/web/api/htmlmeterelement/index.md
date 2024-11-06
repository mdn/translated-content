---
title: HTMLMeterElement
slug: Web/API/HTMLMeterElement
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{APIRef("HTML DOM")}}

HTML の {{HTMLElement("meter")}} 要素は **`HTMLMeterElement`** インターフェイスを公開します。これは（継承によって利用できる {{domxref("HTMLElement")}} オブジェクトのインターフェイス以外に）{{HTMLElement("meter")}} 要素のレイアウトや表現を操作するためのプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLMeterElement.high")}}
  - : `double` で、[`high`](/ja/docs/Web/HTML/Element/meter#high) 属性を反映し、上の境界値を表します。
- {{domxref("HTMLMeterElement.low")}}
  - : `double` で、[`low`](/ja/docs/Web/HTML/Element/meter#low) 属性を反映し、下の境界値を表します。
- {{domxref("HTMLMeterElement.max")}}
  - : `double` で、[`max`](/ja/docs/Web/HTML/Element/meter#max) 属性を反映し、最大値を表します。
- {{domxref("HTMLMeterElement.min")}}
  - : `double` で、[`min`](/ja/docs/Web/HTML/Element/meter#min) 属性を反映し、最小値を表します。
- {{domxref("HTMLMeterElement.optimum")}}
  - : `double` で、[`optimum`](/ja/docs/Web/HTML/Element/meter#optimum) 属性を反映し、最適な値を表します。
- {{domxref("HTMLMeterElement.value")}}
  - : `double` で、[`value`](/ja/docs/Web/HTML/Element/meter#value) 属性を反映し、現在の値を表します。
- {{domxref("HTMLMeterElement.labels")}} {{ReadOnlyInline}}
  - : {{domxref("NodeList")}} で、この要素に関連付けられた {{HTMLElement("label")}} 要素群を表します。

## インスタンスメソッド

_このインターフェイスは固有のメソッドを実装していませんが、親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("meter")}}
