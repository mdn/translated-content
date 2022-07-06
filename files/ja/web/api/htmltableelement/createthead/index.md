---
title: HTMLTableElement.createTHead()
slug: Web/API/HTMLTableElement/createTHead
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - メソッド
  - NeedsSpecTable
  - リファレンス
browser-compat: api.HTMLTableElement.createTHead
translation_of: Web/API/HTMLTableElement/createTHead
---
{{APIRef("HTML DOM")}}

**`createTHead()`** は {{domxref("HTMLTableElement")}} オブジェクトのメソッドで、この {{HtmlElement("table")}} に関連付けられた {{HTMLElement("thead")}} 要素を返します。表内にヘッダーが存在しない場合、このメソッドはそれを作成して返します。

> **Note:** ヘッダーが存在しない場合、 `createTHead()` は新しいヘッダーを表に直接挿入します。 {{domxref("Document.createElement()")}} を使用して新しい `<thead>` 要素を作成する場合とは異なり、ヘッダーを別途追加する必要はありません。

## 構文

```js
table.createTHead();
```

### 返値

{{domxref("HTMLTableSectionElement")}}

## 例

```js
let myhead = mytable.createTHead();
// myhead == mytable.tHead は真になります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
