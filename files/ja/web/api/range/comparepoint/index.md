---
title: "Range: comparePoint() メソッド"
short-title: comparePoint()
slug: Web/API/Range/comparePoint
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.comparePoint()`** メソッドは、 `-1`、`0`、`1` を返します。それぞれ、 `referenceNode` が {{domxref("Range")}} の前か、同じか、後かを返します。

参照ノードが {{domxref("Text")}}、{{domxref("Comment")}}、{{domxref("CDATASection")}}型の {{domxref("Node")}} の場合、 offset は参照ノードの先頭からの文字数です。他の {{domxref("Node")}} 型の場合、 offset は参照ノードの先頭からの子ノードの数です。

## 構文

```js-nolint
comparePoint(referenceNode, offset)
```

### 引数

- `referenceNode`
  - : {{domxref("Range")}} と比較する {{domxref("Node")}} です。
- `offset`
  - : 0 以上の整数で、 _referenceNode_ 内のオフセットを表します。

### 返値

Returns `-1`, `0`, or `1`.

## 例

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.comparePoint(document.getElementsByTagName("p").item(0), 1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
