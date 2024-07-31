---
title: HTMLMapElement
slug: Web/API/HTMLMapElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

**`HTMLMapElement`** インターフェイスは、（継承によって利用できる、通常のオブジェクトである {{domxref("HTMLElement")}} インターフェイスのもの以外に）map 要素のレイアウトと表示を操作するための特別なプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLMapElement.name")}}
  - : 他のコンテキストを参照するための {{HTMLElement("map")}} 要素を表します。`id` 属性が設定された場合、これは同じ値である必要があります。`null` や空文字列にすることはできません。
- {{domxref("HTMLMapElement.areas")}} {{ReadOnlyInline}}
  - : 生きた {{domxref("HTMLCollection")}} で、この {{HTMLElement("map")}} に関連付けられた {{HTMLElement("area")}} 要素を表します。

## メソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("map") }}
