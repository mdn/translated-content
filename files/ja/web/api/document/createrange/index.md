---
title: "Document: createRange() メソッド"
short-title: createRange()
slug: Web/API/Document/createRange
l10n:
  sourceCommit: 73016bea54a98f70dc2aaad0724d0d421ef9839c
---

{{APIRef("DOM")}}

**`Document.createRange()`** メソッドは、新しい {{domxref("Range")}} オブジェクトを返します。

## 構文

```js-nolint
createRange()
```

### 引数

なし。

### 返値

生成された {{domxref("Range")}} オブジェクトです。

## 例

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## メモ

`Range` を生成したあと、大部分のメソッドを使用するには境界を設定する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
