---
title: "HTMLTableElement: tFoot プロパティ"
short-title: tFoot
slug: Web/API/HTMLTableElement/tFoot
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.tFoot`** プロパティは、 {{HTMLElement("table")}} にある {{HTMLElement("tfoot")}} 要素を表します。そのような要素がない場合は、この値は `null` になります。

## 値

{{HTMLElement("tfoot")}} 要素または `null` です。

## 例

```js
if (table.tFoot === my_foot) {
  // …
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを実装しているインターフェイス: {{domxref("HTMLTableElement")}}
