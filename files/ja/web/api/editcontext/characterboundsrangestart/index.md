---
title: "EditContext: characterBoundsRangeStart プロパティ"
slug: Web/API/EditContext/characterBoundsRangeStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの読み取り専用プロパティ **`characterBoundsRangeStart`** は、編集可能なテキストコンテンツ内での、配列 {{domxref("EditContext.characterBounds()", "characterBounds")}} の最初の要素に対応する文字の位置を表します。

例えば、`EditContent` に格納されている文字列が `abc` であり、`characterBoundRangeStart` が `1` であるとき、配列 `characterBounds` の最初の要素には文字 `b` の領域が格納されています。

## 値

{{jsxref("Number")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
