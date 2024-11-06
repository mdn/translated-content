---
title: "Range: compareNode() メソッド"
short-title: compareNode()
slug: Web/API/Range/compareNode
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_Header}}

**`Range.compareNode()`** は {{DOMxRef("Node")}} の位置を示す定数を返します。

取りうる値は以下の通りです。

- `NODE_BEFORE` (`0`)
  - : Node はこの Range より前に始まる
- `NODE_AFTER` (`1`)
  - : Node はこの Range より後に終わる
- `NODE_BEFORE_AND_AFTER` (`2`)
  - : Node はこの Range より前に始まり、後に終わる
- `NODE_INSIDE` (`3`)
  - : Node はこの Range より後に始まり、前に終わる。すなわち、ノードは完全にこの Range に選択されている。

> [!WARNING]
> このメソッドは [Gecko 1.9](/ja/docs/Mozilla/Firefox/Releases/3) から[削除され](/ja/docs/Mozilla/Firefox/Releases/3/Site_compatibility)、唯一実装していた Firefox の将来のバージョンでは存在しません。使用可能な限り早く {{DOMxRef("Range.compareBoundaryPoints()")}} に切り替えるべきです。

以下の関数が置き換えの関数として使用できます。

```js
function rangeCompareNode(range, node) {
  const nodeRange = node.ownerDocument.createRange();
  try {
    nodeRange.selectNode(node);
  } catch (e) {
    nodeRange.selectNodeContents(node);
  }
  const nodeIsBefore =
    range.compareBoundaryPoints(Range.START_TO_START, nodeRange) === 1;
  const nodeIsAfter =
    range.compareBoundaryPoints(Range.END_TO_END, nodeRange) === -1;

  if (nodeIsBefore && !nodeIsAfter) return 0;
  if (!nodeIsBefore && nodeIsAfter) return 1;
  if (nodeIsBefore && nodeIsAfter) return 2;

  return 3;
}
```

## 構文

```js-nolint
compareNode(referenceNode)
```

### 引数

- `referenceNode`
  - : この `Range` と比較する {{DOMxRef("Node")}} です。

### 返値

{{DOMxRef("Node")}} の位置を示す定数。

## 例

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.compareNode(document.getElementsByTagName("p").item(0));
```

## メモ

このメソッドは廃止されました。W3C DOM {{DOMxRef("Range.compareBoundaryPoints()")}} メソッドを使用しましょう。

## 仕様書

このメソッドは標準ではないため、どの仕様にも属しません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
