---
title: "Range: setEndBefore() メソッド"
short-title: setEndBefore()
slug: Web/API/Range/setEndBefore
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.setEndBefore()`** メソッドは、 `Range` の終了位置を別の {{domxref("Node")}} からの相対位置で設定します。 `Range` の終了位置の親 `Node` は `referenceNode` と同じになります。

## 構文

```js-nolint
setEndBefore(referenceNode)
```

### 引数

- `referenceNode`
  - : その前で {{domxref("Range")}} を終わらせる {{domxref("Node")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setEndBefore(referenceNode);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
