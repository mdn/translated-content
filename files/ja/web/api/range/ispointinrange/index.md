---
title: "Range: isPointInRange() メソッド"
short-title: isPointInRange()
slug: Web/API/Range/isPointInRange
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.isPointInRange()`** メソッドは、指定されたこの点が {{domxref("Range")}} 内にあるかどうかを示す論理値を返します。このメソッドは `ReferenceNode` 内の `offset` にある点（カーソル位置）がこの範囲内にある場合に `true` を返します。

## 構文

```js-nolint
isPointInRange(referenceNode, offset)
```

### 引数

- `referenceNode`
  - : {{domxref("Range")}} と比較する {{domxref("Node")}} です。
- `offset`
  - : {{domxref("Range")}} と比較するこの点の {{domxref("Node")}} 内のオフセットです。

### 返値

論理値です。

## 例

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
bool = range.isPointInRange(document.getElementsByTagName("p").item(0), 1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
