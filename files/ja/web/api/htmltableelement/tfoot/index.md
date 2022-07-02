---
title: HTMLTableElement.tFoot
slug: Web/API/HTMLTableElement/tFoot
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLTableElement.tFoot
translation_of: Web/API/HTMLTableElement/tFoot
---
{{APIRef("HTML DOM")}}

**`HTMLTableElement.tFoot`** プロパティは、 {{HTMLElement("table")}} にある {{HTMLElement("tfoot")}} 要素を表します。そのような要素がない場合は、この値は `null` になります。

## 構文

```js
HTMLTableSectionElementObject = table.tFoot
table.tFoot = HTMLTableSectionElementObject
```

## 例

```js
if (table.tFoot == my_foot) {
  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを実装しているインターフェイス: {{domxref("HTMLTableElement")}}
