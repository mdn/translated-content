---
title: "Range: startContainer プロパティ"
short-title: startContainer
slug: Web/API/Range/startContainer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.startContainer`** は読み取り専用プロパティで、この `Range` が開始するノード ({{domxref("Node")}}) を返します。ノードの開始位置を変更するには、 {{domxref("Range.setStart()")}} 系メソッドのいずれかを使用してください。

## 値

{{domxref("Node")}} オブジェクト。

## 例

```js
range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
startRangeNode = range.startContainer;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
