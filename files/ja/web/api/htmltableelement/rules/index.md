---
title: "HTMLTableElement: rules プロパティ"
short-title: rules
slug: Web/API/HTMLTableElement/rules
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
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

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
