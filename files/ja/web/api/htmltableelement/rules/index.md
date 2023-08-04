---
title: "HTMLTableElement: rules プロパティ"
short-title: rules
slug: Web/API/HTMLTableElement/rules
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

**`HTMLTableElement.rules`** プロパティは、表の中でセルのどの境界を描画するかを示します。

## 値

以下のいずれかです。

- `none`
  - : 境界なし
- `groups`
  - : グループ間の線のみ
- `rows`
  - : 行間の線
- `cols`
  - : 列間の線
- `all`
  - : すべてのセルの間の線

## 例

```js
// テーブルの内部の境界をすべてオンにする
const t = document.getElementById("TableID");
t.rules = "all";
```

## 仕様書

- W3C DOM 2 HTML Specification

## ブラウザーの互換性

{{Compat}}
