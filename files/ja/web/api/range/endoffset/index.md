---
title: "Range: endOffset プロパティ"
short-title: endOffset
slug: Web/API/Range/endOffset
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.endOffset`** は読み取り専用プロパティで、 {{domxref("Range.endContainer")}} の {{domxref("Range")}} が終了する場所を表す数値を返します。

もし `endContainer` が {{domxref("Text")}}, {{domxref("Comment")}}, {{domxref("CDATASection")}} 型のノード ({{domxref("Node")}}) であれば、オフセットとは `endContainer` の先頭から {{domxref("Range")}} の境界までの文字数です。その他の {{domxref("Node")}} 型の場合、 `endOffset` は `endContainer` の開始点から {{domxref("Range")}} の境界点までの子ノードの数となります。このプロパティは読み取り専用です。 {{domxref("Range")}} の `endOffset` を変更するには、 {{domxref("Range.setEnd")}} 系メソッドのいずれかを使用してください。

## 値

数値です。

## 例

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
endRangeOffset = range.endOffset;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
