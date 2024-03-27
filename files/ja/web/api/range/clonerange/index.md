---
title: "Range: cloneRange() メソッド"
short-title: cloneRange()
slug: Web/API/Range/cloneRange
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

**`Range.cloneRange()`** メソッドは、複製された {{domxref("Range")}} と同じ境界点を持つ {{domxref("Range")}} オブジェクトを返します。

返されるクローンは参照ではなく値でコピーされるので、どちらの {{domxref("Range")}} を変更しても、もう一方に影響はありません。

## 構文

```js-nolint
cloneRange()
```

### 引数

なし。

### 返値

{{domxref("Range")}} オブジェクトです。

## 例

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
clone = range.cloneRange();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
