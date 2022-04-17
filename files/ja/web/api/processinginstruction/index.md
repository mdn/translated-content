---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
tags:
  - インターフェイス
  - リファレンス
browser-compat: api.ProcessingInstruction
translation_of: Web/API/ProcessingInstruction
---
{{APIRef("DOM")}}

**`ProcessingInstruction`** インターフェイスは[処理命令](https://www.w3.org/TR/xml/#sec-pi)を表します。すなわち、特定のアプリケーションを対象とした埋め込み {{domxref("Node")}} を表します。しかし、その命令を理解できないほかのアプリケーションは無視することができます。

> **Warning:** `ProcessingInstruction` ノードは XML 文書のみが対応しており、 HTML 文書は対応していません。この中では、処理命令はコメントとみなされ、ツリーでは {{domxref("Comment")}} オブジェクトとして表現されます。

処理命令は [XML 宣言](/ja/docs/Web/XML/XML_introduction#xml_declaration)とは異なることがあります。

> **Note:** ユーザー定義の処理命令は "`xml`" で始めることはできません。 `xml` 接頭辞を持つ処理命令のターゲット名は、 XML 仕様書によって特定の標準的な用途のために予約されているからです（例えば、 `<?xml-stylesheet ?>` などを見てください）。

例えば、次のようなものです。

```html
<?xml version="1.0"?>
```

これは `target` が `xml` の処理命令です。

{{InheritanceDiagram}}

## プロパティ

_このインターフェイスは親インターフェイスである {{domxref("CharacterData")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("ProcessingInstruction.target")}} {{readonlyInline}}
  - : この命令が対象とするアプリケーションを識別する名前です。

## メソッド

_このインターフェイスには固有のメソッドはありませんが、親インターフェイスである {{domxref("CharacterData")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [document.createProcessingInstruction()](/ja/docs/Web/API/Document/createProcessingInstruction)
- [DOM API](/ja/docs/Web/API/Document_Object_Model)
