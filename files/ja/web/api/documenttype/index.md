---
title: DocumentType
slug: Web/API/DocumentType
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("DOM")}}

**`DocumentType`** インターフェイスは、 doctype を包含する {{domxref("Node")}} を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("Node")}} からプロパティを継承しています。_

- {{domxref("DocumentType.name")}} {{ReadOnlyInline}}
  - : 文書の型です。HTML 文書では常に `"html"` ですが、XML 文書では様々です。
- {{domxref("DocumentType.publicId")}} {{ReadOnlyInline}}
  - : 文字列で、文書型の識別子です。HTML では常に空文字列 (`""`) ですが、例えば SVG 文書では `"-//W3C//DTD SVG 1.1//EN"` です。
- {{domxref("DocumentType.systemId")}} {{ReadOnlyInline}}
  - : 文字列で、DTD に関連付けられた URL が入ります。HTML では常に空文字列 (`""`) ですが、例えば SVG 文書では `"http://www.w3.org/2000/svg"` です。

## インスタンスメソッド

_親インターフェイスである {{domxref("Node")}} からメソッドを継承しています。_

- {{domxref("DocumentType.after()")}}
  - : 一連の {{domxref("Node")}} オブジェクトまたは文字列を、この `DocumentType` の親の子リストの中、この `DocumentType` オブジェクトの直後に挿入します。
- {{domxref("DocumentType.before()")}}
  - : 一連の {{domxref("Node")}} オブジェクトまたは文字列を、この `DocumentType` の親の子リストの中、この `DocumentType` オブジェクトの直前に挿入します。
- {{domxref("DocumentType.remove()")}}
  - : オブジェクトをその親の子リストから削除します。
- {{domxref("DocumentType.replaceWith()")}}
  - : 文書型を指定されたノードの集合に置き換えます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/Web/API/Document_Object_Model)
- {{domxref("DOMImplementation.createDocumentType()")}}: 新しい `DocumentType` ノードの作成
