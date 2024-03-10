---
title: "Range: setStartBefore() メソッド"
short-title: setStartBefore()
slug: Web/API/Range/setStartBefore
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.setStartBefore()`** メソッドは {{domxref("Range")}} の開始位置を別の {{domxref("Node")}} からの相対位置で設定します。 {{domxref("Range")}} の開始位置の親 {{domxref("Node")}} は `referenceNode` と同じになります。

## 構文

```js-nolint
setStartBefore(referenceNode)
```

### 引数

- `referenceNode`
  - : その前で {{domxref("Range")}} を始める {{domxref("Node")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setStartBefore(referenceNode);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
