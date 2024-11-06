---
title: Text
slug: Web/API/Text
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{ApiRef("DOM")}}

**`Text`** インターフェイスは、 DOM ツリー内でテキストノード ({{domxref("Node", "node")}}) を表します。

{{InheritanceDiagram}}

テキストノードが何であるかを理解するために、以下の文書を考えてみてください。

```html
<html lang="en" class="e">
  <head>
    <title>Aliens?</title>
  </head>
  <body>
    Why yes.
  </body>
</html>
```

この文書には 5 つのテキストノードがあり、以下のような内容になっています。

- `"\n    "`（`<head>` 開始タグの後、改行に続いて 4 つの空白）
- `"Aliens?"`（`title` 要素の内容）
- `"\n  "`（`</head>` 終了タグの後、改行に続いて 2 つの空白）
- `"\n  "`（`<body>` 開始タグの後、改行に続いて 2 つの空白）
- `"\n Why yes.\n \n\n"` （`body` 要素の内容）

これらのテキストノードは、それぞれがこの記事で説明されているプロパティとメソッドを持つオブジェクトです。

## コンストラクター

- {{domxref("Text.Text", "Text()")}}
  - : 引数をテキストコンテンツとして持つ、新しい `Text` ノードを返します。

## インスタンスプロパティ

_親インターフェイスである {{domxref("CharacterData")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("Text.assignedSlot")}} {{ReadOnlyInline}}
  - : ノードが挿入されている {{htmlelement("slot")}} を表す {{domxref("HTMLSlotElement")}} を返します。
- {{domxref("Text.wholeText")}} {{ReadOnlyInline}}
  - : 文字列で、この {{domxref("Node")}} に論理的に隣接しているすべての `Text` ノードのテキストを、文書内で現れる順に結合して返します。

## インスタンスメソッド

_親インターフェイスである {{domxref("CharacterData")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("Text.splitText")}}
  - : 指定したオフセット位置で、ノードを 2 つに分割します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM API](/ja/docs/Web/API/Document_Object_Model)
