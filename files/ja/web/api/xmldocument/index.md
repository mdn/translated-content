---
title: XMLDocument
slug: Web/API/XMLDocument
---

{{APIRef("DOM")}}

**XMLDocument** インターフェイスは XML ドキュメントを示します。汎用的な {{DOMxRef("Document")}} を継承し、特定のメソッドやプロパティを追加しません: それでも２つのタイプのドキュメントでは、いくつかのアルゴリズムの動作がことなります。

{{InheritanceDiagram}}

## プロパティ

_また、 {{DOMxRef("Document")}} からプロパティを継承します_

- {{DOMxRef("XMLDocument.async")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : {{DOMxRef("XMLDocument.load()")}} と併用して、非同期リクエストを示します。

## メソッド

_また、 {{DOMxRef("Document")}} からメソッドを継承します_

- {{DOMxRef("XMLDocument.load()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : XML ドキュメントをロードします。

## 仕様

| 仕様                                                                         | ステータス                       | 備考       |
| ---------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName("DOM WHATWG", "#xmldocument", "XMLDocument")}} | {{Spec2("DOM WHATWG")}} | 変更なし。 |
| {{SpecName("DOM4", "#xmldocument", "XMLDocument")}}         | {{Spec2("DOM4")}}         | 初回定義。 |

## ブラウザー実装状況

{{Compat("api.XMLDocument")}}

## 関連項目

- [The DOM interfaces index.](/ja/docs/DOM/DOM_Reference)
