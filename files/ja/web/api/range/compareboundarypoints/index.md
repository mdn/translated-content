---
title: "Range: compareBoundaryPoints() メソッド"
short-title: compareBoundaryPoints()
slug: Web/API/Range/compareBoundaryPoints
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.compareBoundaryPoints()`** メソッドは、 {{domxref("Range")}} の境界点を別の範囲のものと比較します。

## 構文

```js-nolint
compareBoundaryPoints(how, sourceRange)
```

### 引数

- `how`

  - : 定数で、比較メソッドを説明します。

    - `Range.END_TO_END` は _sourceRange_ の終わりの境界点と `Range` の終わりの境界点を比較します。
    - `Range.END_TO_START` は _sourceRange_ の終わりの境界点と `Range` の始まりの境界点を比較します。
    - `Range.START_TO_END` は _sourceRange_ の始まりの境界点と `Range` の終わりの境界点を比較します。
    - `Range.START_TO_START` は _sourceRange_ の始まりの境界点と `Range` の始まりの境界点を比較します。

- `sourceRange`
  - : 範囲との境界点を比較するための {{domxref("Range")}} です。

### 返値

`-1`, `0`, `1` のいずれかの数値で、 {{domxref("Range")}} の対応する境界点が _sourceRange_ の対応する境界点より前か、等しいか、後かを示します。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : `how` 引数の値が無効な場合に発生します。

## 例

```js
const range = document.createRange();
range.selectNode(document.querySelector("div"));
const sourceRange = document.createRange();
sourceRange.selectNode(document.getElementsByTagName("div")[1]);
const compare = range.compareBoundaryPoints(Range.START_TO_END, sourceRange);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
