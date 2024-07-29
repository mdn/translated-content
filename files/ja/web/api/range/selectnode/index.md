---
title: "Range: selectNode() メソッド"
short-title: selectNode()
slug: Web/API/Range/selectNode
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

The **`Range.selectNode()`** メソッドは {{domxref("Range")}} に {{domxref("Node")}} とその内容を格納するように設定します。 {{domxref("Range")}} の始めと終わりの親 {{domxref("Node")}} は _referenceNode_ の親と同じになります。

## 構文

```js-nolint
selectNode(referenceNode)
```

### 引数

- `referenceNode`
  - : {{domxref("Range")}} の中にある選択する {{domxref("Node")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
let range = document.createRange();
let referenceNode = document.getElementsByTagName("div").item(0);

range.selectNode(referenceNode);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
