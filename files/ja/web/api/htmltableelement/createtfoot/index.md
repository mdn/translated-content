---
title: HTMLTableElement.createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - メソッド
  - NeedsSpecTable
  - リファレンス
browser-compat: api.HTMLTableElement.createTFoot
translation_of: Web/API/HTMLTableElement/createTFoot
---
{{APIRef("HTML DOM")}}

**`createTFoot()`** は {{domxref("HTMLTableElement")}} オブジェクトのメソッドで、この {{HtmlElement("table")}} に関連付けられた {{HTMLElement("tfoot")}} 要素を返します。表内にフッターが存在しない場合、このメソッドはそれを作成して返します。

> **Note:** フッターが存在しない場合、 `createTFoot()` は新しいフッターを表に直接挿入します。 {{domxref("Document.createElement()")}} を使用して新しい `<tfoot>` 要素を作成する場合とは異なり、フッターを別途追加する必要はありません。

## 構文

```js
table.createTFoot();
```

### 返値

{{domxref("HTMLTableSectionElement")}}

## 例

```js
let myfoot = mytable.createTFoot();
// myfoot == mytable.tFoot は真になります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
