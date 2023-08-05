---
title: HTMLUListElement
slug: Web/API/HTMLUListElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLUListElement`** インターフェイスは、（通常の {{domxref("HTMLElement")}} インターフェイスから継承されるもの以外に）順序なしリスト ({{HTMLElement("ul")}}) 要素を操作するための特別なプロパティを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLUListElement.type")}} {{deprecated_inline}}
  - : 文字列値で、[`type`](/ja/docs/Web/HTML/Element/ul#type)を反映し、使用するマーカーの種類を定義します。値はブラウザーに依存し、標準化されたことはありません。
- {{domxref("HTMLUListElement.compact")}} {{deprecated_inline}}
  - : 論理値で、リスト項目間の空間を縮小することを示します。このプロパティは [`compact`](/ja/docs/Web/HTML/Element/ul#compact) 属性のみを反映し、現代のページでその動作に使用されている CSS の {{cssxref("line-height")}} プロパティは考慮しません。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("ul") }}
