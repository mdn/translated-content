---
title: "HTMLTableElement: createTHead() メソッド"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`createTHead()`** は {{domxref("HTMLTableElement")}} オブジェクトのメソッドで、この {{HTMLElement("table")}} に関連付けられた {{HTMLElement("thead")}} 要素を返します。表内にヘッダーが存在しない場合、このメソッドはそれを作成して返します。

> **メモ:** ヘッダーが存在しない場合、 `createTHead()` は新しいヘッダーを表に直接挿入します。 {{domxref("Document.createElement()")}} を使用して新しい `<thead>` 要素を作成する場合とは異なり、ヘッダーを別途追加する必要はありません。

## 構文

```js-nolint
createTHead()
```

### 引数

なし。

### 返値

{{domxref("HTMLTableSectionElement")}}

## 例

```js
let myhead = mytable.createTHead();
// myhead === mytable.tHead は真になります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
