---
title: "HTMLTableElement: tHead プロパティ"
short-title: tHead
slug: Web/API/HTMLTableElement/tHead
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.tHead`** は {{HTMLElement("table")}} の {{HTMLElement("thead")}} 要素を表します。そのような要素がない場合は、この値は `null` になります。

## 構文

```js
thead_element = table.tHead;
table.tHead = thead_element;
```

### 引数

- `thead_element` は {{domxref("HTMLTableSectionElement")}} です。

## 例

```js
if (table.tHead == my_head_el) {
  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを実装しているインターフェイス: {{domxref("HTMLTableElement")}}
