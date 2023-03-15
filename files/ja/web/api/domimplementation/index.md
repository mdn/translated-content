---
title: DOMImplementation
slug: Web/API/DOMImplementation
---

{{ ApiRef("DOM") }}

**`DOMImplementation`** インターフェイスは特定の文書に依存しないメソッドを提供するオブジェクトを表します。こうしたオブジェクトは{{domxref("Document.implementation")}} プロパティを返します。

## プロパティ

_このインターフェイスは特定のプロパティを持たず、継承もしていません。_

## メソッド

_継承するメソッドはありません。_

- {{domxref("DOMImplementation.createDocument()")}}
  - : {{domxref("XMLDocument")}}を作成して返します。
- {{domxref("DOMImplementation.createDocumentType()")}}
  - : {{domxref("DocumentType")}}を作成して返します。
- {{domxref("DOMImplementation.createHTMLDocument()")}}
  - : HTML {{domxref("Document")}}を作成して返します。
- {{domxref("DOMImplementation.hasFeature()")}}
  - : 所与の機能がサポートされているかどうかを返す{{domxref("Boolean")}}。この関数は信頼できず、互換性の目的のためだけに残されていますが、例外は SVG 関連の問い合わせで、常に `true`を返します。古いブラウザーはこのふるまいは、とても不整合を起こします。

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("api.DOMImplementation")}}

## 関連情報

- [The DOM interfaces index.](/ja/docs/DOM/DOM_Reference '/ja/docs/DOM/DOM_Reference"')
