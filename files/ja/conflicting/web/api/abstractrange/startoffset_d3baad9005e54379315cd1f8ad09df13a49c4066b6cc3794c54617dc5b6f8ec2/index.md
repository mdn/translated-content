---
title: "Range: startOffset プロパティ"
short-title: startOffset
slug: conflicting/Web/API/AbstractRange/startOffset_d3baad9005e54379315cd1f8ad09df13a49c4066b6cc3794c54617dc5b6f8ec2
page-type: web-api-instance-property
browser-compat: api.AbstractRange.startOffset
original_slug: Web/API/Range/startOffset
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.startOffset`** は読み取り専用プロパティで、 `startContainer` の `Range` の開始位置を表す数値を返します。

`startContainer` の {{domxref("Node")}} が {{domxref("Text")}}、{{domxref("Comment")}}、{{domxref("CDATASection")}} 型であった場合、そのオフセットは `startContainer` の先頭から {{domxref("Range")}} の境界点までの文字数です。他の {{domxref("Node")}} 型の場合、 `startOffset` は `startContainer` の開始点と {{domxref("Range")}} の境界点の間の子ノードの数です。

{{domxref("Range")}} の `startOffset` を変更するには、 {{domxref("Range.setStart")}} メソッドを使用してください。

## 値

数値です。

## 例

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
const startRangeOffset = range.startOffset;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
