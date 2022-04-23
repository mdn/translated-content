---
title: HTMLTableElement.tHead
slug: Web/API/HTMLTableElement/tHead
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLTableElement.tHead
translation_of: Web/API/HTMLTableElement/tHead
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
