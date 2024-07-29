---
title: "Range: insertNode() メソッド"
short-title: insertNode()
slug: Web/API/Range/insertNode
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.insertNode()`** メソッドは {{domxref("Range")}} の先頭にノードを挿入します。

新しいノードは `Range` の始まりの境界点に挿入されます。新しいノードがテキスト {{domxref("Node")}} に追加される場合、その `Node` は挿入点で分割され、挿入は 2 つのテキストノードの間に行われます。

新しいノードが文書フラグメントの場合、代わりにその文書フラグメントの子が挿入されます。

## 構文

```js-nolint
insertNode(newNode)
```

### 引数

- `newNode`
  - : `Range` の先頭に挿入する {{domxref("Node")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
range = document.createRange();
newNode = document.createElement("p");
newNode.appendChild(document.createTextNode("New Node Inserted Here"));
range.selectNode(document.getElementsByTagName("div").item(0));
range.insertNode(newNode);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
