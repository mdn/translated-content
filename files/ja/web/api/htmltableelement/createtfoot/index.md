---
title: "HTMLTableElement: createTFoot() メソッド"
short-title: createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`createTFoot()`** は {{domxref("HTMLTableElement")}} オブジェクトのメソッドで、この {{HtmlElement("table")}} に関連付けられた {{HTMLElement("tfoot")}} 要素を返します。表内にフッターが存在しない場合、このメソッドはそれを作成して返します。

> **メモ:** フッターが存在しない場合、 `createTFoot()` は新しいフッターを表に直接挿入します。 {{domxref("Document.createElement()")}} を使用して新しい `<tfoot>` 要素を作成する場合とは異なり、フッターを別途追加する必要はありません。

## 構文

```js-nolint
createTFoot()
```

### 引数

なし。

### 返値

{{domxref("HTMLTableSectionElement")}}

## 例

```js
let myfoot = mytable.createTFoot();
// myfoot === mytable.tFoot は真になります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
