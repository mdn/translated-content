---
title: "Range: setEndAfter() メソッド"
short-title: setEndAfter()
slug: Web/API/Range/setEndAfter
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.setEndAfter()`** メソッドは {{domxref("Range")}} の終了位置を別の {{domxref("Node")}} から相対的に設定します。この `Range` の終了位置の親 `Node` は `referenceNode` と同じになります。

## 構文

```js-nolint
setEndAfter(referenceNode)
```

### 引数

- `referenceNode`
  - : その後で {{domxref("Range")}} を終わらせる {{domxref("Node")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setEndAfter(referenceNode);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
