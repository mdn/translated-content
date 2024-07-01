---
title: CDATASection
slug: Web/API/CDATASection
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("DOM")}}

**`CDATASection`** インターフェイスは CDATA セクションを表します。これにより、XML 内でエスケープされていないテキストの拡張部分を入れることができます。
CDATA セクションの内部では、記号 `<` と `&` は通常のようにエスケープする必要がありません。

XML では、CDATA セクションは次のようになります。

```xml
<![CDATA[ … ]]>
```

実際の使用例を以下に示します。

```html
<foo>
  次の部分は CDATA セクションです: <![CDATA[ < > & ]]>
  ですべての種類のエスケープされていないテキストを記述できます。
</foo>
```

CDATA セクションに許可されていない唯一の文字の並びは、閉じる文字の並びである `]]>` です。

> **メモ:** CDATA セクションは HTML 内で使用すべきではありません。コメントと見なされ表示されません。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスに固有のプロパティは存在せず、親である {{DOMxRef("Text")}} で実装しています。_

## インスタンスメソッド

_このインターフェイスに固有のメソッドは存在せず、親である {{DOMxRef("Text")}} で実装しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createCDATASection()")}}
