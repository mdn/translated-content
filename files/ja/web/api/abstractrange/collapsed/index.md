---
title: "AbstractRange: collapsed プロパティ"
short-title: collapsed
slug: Web/API/AbstractRange/collapsed
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

**`collapsed`** は {{domxref("AbstractRange")}} インターフェイスの読み取り専用プロパティで、範囲の開始位置と終了位置が同じであれば `true` を返します。

折りたたまれた範囲は空（コンテンツを含まない）であり、DOM ツリー内の単一の場所を指定します。範囲を折りたたむには、{{domxref("Range.collapse()")}} メソッドを参照してください。

## 値

論理値で、範囲が折りたたまれている場合に `true` となります。折りたたまれた範囲とは、開始位置と終了位置が同じで、 0 文字の長さの範囲です。

## 例

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const isCollapsed = range.collapsed;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
