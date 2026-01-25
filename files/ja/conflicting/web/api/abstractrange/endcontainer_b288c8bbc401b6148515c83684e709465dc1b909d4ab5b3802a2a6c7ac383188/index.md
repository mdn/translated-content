---
title: "Range: endContainer プロパティ"
short-title: endContainer
slug: conflicting/Web/API/AbstractRange/endContainer_b288c8bbc401b6148515c83684e709465dc1b909d4ab5b3802a2a6c7ac383188
page-type: web-api-instance-property
browser-compat: api.AbstractRange.endContainer
original_slug: Web/API/Range/endContainer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.endContainer`** は読み取り専用プロパティで、 {{domxref("Range")}} の終了位置にあるノード ({{domxref("Node")}}) を返します。ノードの終了位置を変更するために {{domxref("Range.setEnd()")}} または同様のメソッドを利用します。

## 値

{{domxref("Node")}} オブジェクト。

## 例

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
endRangeNode = range.endContainer;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
