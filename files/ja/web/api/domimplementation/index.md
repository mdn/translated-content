---
title: DOMImplementation
slug: Web/API/DOMImplementation
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ ApiRef("DOM") }}

**`DOMImplementation`** インターフェイスは、特定の文書に依存しないメソッドを提供するオブジェクトを表します。こうしたオブジェクトは {{domxref("Document.implementation")}} プロパティで返されます。

## プロパティ

_このインターフェイスは特定のプロパティを持たず、継承もしていません。_

## メソッド

_継承しているメソッドはありません。_

- {{domxref("DOMImplementation.createDocument()")}}
  - : {{domxref("XMLDocument")}} を作成して返します。
- {{domxref("DOMImplementation.createDocumentType()")}}
  - : {{domxref("DocumentType")}} を作成して返します。
- {{domxref("DOMImplementation.createHTMLDocument()")}}
  - : HTML {{domxref("Document")}} を作成して返します。
- {{domxref("DOMImplementation.hasFeature()")}} {{Deprecated_Inline}}
  - : 指定された機能に対応しているかどうかを示す論理値を返します。この関数は信頼性が低く、互換性のためだけに用意されています。SVG 関連のクエリーを除けば、常に `true` を返します。古いブラウザーはその動作にまったく一貫性がありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/Web/API/Document_Object_Model)
