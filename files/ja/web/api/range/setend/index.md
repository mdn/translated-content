---
title: "Range: setEnd() メソッド"
short-title: setEnd()
slug: Web/API/Range/setEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.setEnd()`** メソッドは {{ domxref("Range") }} の終了位置を指定されたノードの指定されたオフセットに設定します。 終点を始点より上（文書内の高い位置）に設定すると、始点と終点の両方が指定した終点位置に設定された、折りたたまれた範囲になります。

## 構文

```js-nolint
setEnd(endNode, endOffset)
```

### 引数

- `endNode`
  - : 中で {{ domxref("Range") }} が終わる {{ domxref("Node") }} です。
- `endOffset`
  - : 0 以上の整数で、 `endNode` の始点から `Range` の終点のオフセットを表します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidNodeTypeError` {{domxref("DOMException")}}
  - : `endNode` で指定されたノードは doctype ノードです。範囲の終点は doctype ノード内に配置することはできません。
- `IndexSizeError` {{domxref("DOMException")}}
  - : `endOffset` で指定された値は、ノードの長さ以上であるか、 0 未満です。

## 使用上の注意

`endNode` が {{domxref("Text")}}、{{domxref("Comment")}}、{{domxref("CDataSection")}} のいずれかの型の {{domxref("Node")}} である場合、 `endOffset` は `endNode` の開始位置からの文字数です。他の型の {{domxref("Node")}} である場合、 `endOffset` は `endNode` の始点からの子ノードの数を指定します。

## 例

```js
const range = document.createRange();
const endNode = document.getElementsByTagName("p").item(3);
const endOffset = endNode.childNodes.length;
range.setEnd(endNode, endOffset);
```

> [!NOTE]
> `setEnd()` は {{domxref("Range.setStart", "setStart()")}} と組み合わせて使用するのが一般的です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
