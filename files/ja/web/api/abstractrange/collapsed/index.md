---
title: "AbstractRange: collapsed プロパティ"
short-title: collapsed
slug: Web/API/AbstractRange/collapsed
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`collapsed`** は {{domxref("AbstractRange")}} インターフェイスの読み取り専用プロパティで、範囲の開始位置と終了位置が同じであれば `true` を返します。

## 値

論理値で、範囲が折りたたまれている場合に `true` となります。折りたたまれた範囲とは、開始位置と終了位置が同じで、 0 文字の長さの範囲です。

## 例

```js
let isCollapsed = range.collapsed;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
