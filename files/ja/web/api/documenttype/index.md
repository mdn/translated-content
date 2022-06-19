---
title: DocumentType
slug: Web/API/DocumentType
page-type: web-api-interface
tags:
  - API
  - DOM
  - DocumentType
  - インターフェイス
browser-compat: api.DocumentType
translation_of: Web/API/DocumentType
---
{{APIRef("DOM")}}

**`DocumentType`** インターフェイスは、 doctype を包含する {{domxref("Node")}} を表します。

{{InheritanceDiagram}}

## プロパティ

_親インターフェイスである {{domxref("Node")}} からプロパティを継承しています。_

- {{domxref("DocumentType.internalSubset")}} {{readonlyInline}} {{deprecated_inline}}
  - : 内部サブセットの文字列、またはサブセットが存在しない場合は `null` になります。例: `"<!ELEMENT foo (bar)>"`
- {{domxref("DocumentType.name")}} {{readonlyInline}}
  - : 文字列で、 `<!DOCTYPE HTML>` に対して `"html"` のようになります。
- {{domxref("DocumentType.notations")}} {{readonlyInline}} {{deprecated_inline}}
  - : DTD で宣言された記法の {{domxref("NamedNodeMap")}} です。
- {{domxref("DocumentType.publicId")}} {{readonlyInline}}
  - : `"-//W3C//DTD HTML 4.01//EN"` のような文字列です。 HTML5 では空文字列です。
- {{domxref("DocumentType.systemId")}} {{readonlyInline}}
  - : `"http://www.w3.org/TR/html4/strict.dtd"` のような文字列です。 HTML5 では空文字列です。

## メソッド

_親インターフェイスである {{domxref("Node")}} からメソッドを継承します。_

- {{domxref("DocumentType.after()")}}
  - : この `DocumentType` の親の子リストに、 `DocumentType` オブジェクトの直後に {{domxref("Node")}} または文字列オブジェクトのセットを挿入します。
- {{domxref("DocumentType.before()")}}
  - : この `DocumentType` の親の子リストに、 `DocumentType` オブジェクトの直前に {{domxref("Node")}} または文字列オブジェクトのセットを挿入します。
- {{domxref("DocumentType.remove()")}}
  - : オブジェクトをその親の子リストから削除します。
- {{domxref("DocumentType.replaceWith()")}}
  - : 文書型を与えられたノードの集合に置き換えます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/Web/API/Document_Object_Model)
