---
title: HTMLProgressElement
slug: Web/API/HTMLProgressElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

**`HTMLProgressElement`** インターフェイスは、（継承によって利用できる {{domxref("HTMLElement")}} オブジェクトのインターフェイス以外に）{{HTMLElement("progress")}} 要素のレイアウトや表現を操作するためのプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLProgressElement.max")}}
  - : `double` 値で、同名のコンテンツ属性を反映します。0 以上の数値に限定されます。既定値は `1.0` です。
- {{domxref("HTMLProgressElement.position")}} {{ReadOnlyInline}}
  - : `double` 値で、現在値 (`value`) を最大値 (`max`) で割った結果を返します。プログレスバーが不確定プログレスバーの場合は `-1` を返します。
- {{domxref("HTMLProgressElement.value")}}
  - : `double` 値で、現在の値を反映します。プログレスバーが不確定プログレスバーの場合は `0` を返します。
- {{domxref("HTMLProgressElement.labels")}} {{ReadOnlyInline}}
  - : この要素のラベルである {{HTMLElement("label")}} 要素のリストを格納した {{domxref("NodeList")}} を返します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("progress")}}
