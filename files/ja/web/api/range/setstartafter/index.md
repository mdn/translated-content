---
title: "Range: setStartAfter() メソッド"
short-title: setStartAfter()
slug: Web/API/Range/setStartAfter
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.setStartAfter()`** メソッドは {{domxref("Node")}} に対する {{domxref("Range")}} の開始位置を設定します。 {{domxref("Range")}} の開始位置の親 {{domxref("Node")}} は `referenceNode` と同じになります。

## 構文

```js-nolint
setStartAfter(referenceNode)
```

### 引数

- `referenceNode`
  - : その後で {{domxref("Range")}} を始める {{domxref("Node")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setStartAfter(referenceNode);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
