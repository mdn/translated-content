---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLLIElement`** インターフェイスは、（継承によって使用できる通常の {{domxref("HTMLElement")}} インターフェイスのものに加えて）リスト要素を操作するための特別なプロパティを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLLIElement.type")}} {{deprecated_inline}}
  - : 文字列で、箇条書き記号の種類を `"disc"`, `"square"`, `"circle"` のいずれかで表します。リストの種別を定義する標準の方法は CSS の {{cssxref("list-style-type")}} プロパティによる方法なので、スクリプトから設定する場合は CSSOM のメソッドを使用してください。
- {{domxref("HTMLLIElement.value")}}
  - : `long` 型で、 {{HTMLElement("ol")}} の内部での*リスト要素*の位置を順序で示します。これは HTML の {{HTMLElement("li")}} 要素の [`value`](/ja/docs/Web/HTML/Element/li#value) 属性を反映しています。 `0` より小さくすることもできます。 {{HTMLElement("li")}} 要素が {{HTMLElement("ol")}} 要素の子でない場合、このプロパティは意味を持ちません。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("li")}}
