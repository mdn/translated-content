---
title: Text
slug: Web/API/Text
tags:
  - インターフェイス
  - リファレンス
browser-compat: api.Text
translation_of: Web/API/Text
---
{{ApiRef("DOM")}}

**`Text`** インターフェイスは、 DOM ツリー内でテキストノード ({{domxref("Node", "node")}}) を表します。

{{InheritanceDiagram}}

テキストノードが何であるかを理解するために、以下の文書を考えてみてください。

```html
<html class="e"><head><title>Aliens?</title></head>
 <body>Why yes.
</body></html>
```

この文書には 3 つのテキストノードがあり、以下ののような内容になっています。

- "`Aliens?`" （`title` 要素の内容）
- "`\n`" （`</head>` 終了タグの後、改行に続いて空白）
- "`Why yes.\n`" （`body` 要素の内容）

これらのテキストノードは、それぞれがこの記事で説明されているプロパティとメソッドを持つオブジェクトです。

## コンストラクター

- {{domxref("Text.Text", "Text()")}}
  - : 引数をテキストコンテンツとして持つ、新しい `Text` ノードを返します。

## プロパティ

_親インターフェイスである {{domxref("CharacterData")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("Text.assignedSlot")}} {{readonlyInline}}
  - : ノードが挿入されている {{htmlelement("slot")}} を表す {{domxref("HTMLSlotElement")}} を返します。
- {{domxref("Text.wholeText")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、この {{domxref("Node")}} に論理的に隣接しているすべての `Text` ノードのテキストを、文書内で現れる順に結合して返します。

## メソッド

_親インターフェイスである {{domxref("CharacterData")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("Text.replaceWholeText")}} {{deprecated_inline}}
  - : カレントノードおよび論理的に隣接するノードのテキストを、指定したテキストに置き換えます。
- {{domxref("Text.splitText")}}
  - : 指定したオフセット位置で、ノードを 2 つに分割します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM API](/ja/docs/Web/API/Document_Object_Model)
