---
title: HTMLMapElement
slug: Web/API/HTMLMapElement
---

{{ APIRef("HTML DOM") }}

**`HTMLMapElement`** インターフェイスは、map 要素のレイアウトと表示を操作するための特別なプロパティとメソッド (継承によっても利用可能な通常のオブジェクト {{domxref("HTMLElement")}} インターフェイスを超えるもの) を提供します。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_親の {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLMapElement.name")}}
  - : Is a {{domxref("DOMString")}} representing the {{HTMLElement("map")}} element for referencing it other context. If the `id` attribute is set, this must have the same value; and it cannot be `null` or empty.
- {{domxref("HTMLMapElement.areas")}} {{readonlyInline}}
  - : Is a live {{domxref("HTMLCollection")}} representing the {{HTMLElement("area")}} elements associated to this {{HTMLElement("map")}}.

## メソッド

_特定のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承します。_

## 仕様書

{{Specifications}}

## ブラウザの互換性

{{Compat("api.HTMLMapElement")}}

## ブラウザーの互換性

- HTML element implementing this interface: {{ HTMLElement("map") }}.
