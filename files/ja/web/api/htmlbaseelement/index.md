---
title: HTMLBaseElement
slug: Web/API/HTMLBaseElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLBaseElement`** インターフェイスは、文書の基底 URI を持ちます。このオブジェクトは {{domxref("HTMLElement")}} インターフェイスで定められているすべてのプロパティとメソッドを継承します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLBaseElement.href")}}
  - : 文字列で、 HTML の [`href`](/ja/docs/Web/HTML/Element/base#href) 属性を反映し、文書内の相対 URL の基底 URL を保持します。
- {{domxref("HTMLBaseElement.target")}}
  - : 文字列で、 HTML の [`target`](/ja/docs/Web/HTML/Element/base#target) 属性を反映し、要素にターゲットとなる参照先が指定されなかった場合の既定のターゲットとなる閲覧コンテキストまたはフレームを保持します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("base") }}
