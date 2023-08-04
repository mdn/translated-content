---
title: "HTMLTableElement: createTBody() メソッド"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`createTBody()`** は {{domxref("HTMLTableElement")}} オブジェクトのメソッドで、この {{HtmlElement("table")}} に関連付けられた新しい {{HTMLElement("tbody")}} 要素を返します。

> **メモ:** {{domxref("HTMLTableElement.createTHead()")}} や {{domxref("HTMLTableElement.createTFoot()")}} とは異なり、 `createTBody()` は既に 1 つ以上の本体があった場合でも、必ず新しい `<tbody>` 要素を生成します。その場合、新しいものは既存のものの後に挿入されます。

## 構文

```js-nolint
createTBody()
```

### 引数

なし。

### 返値

{{domxref("HTMLTableSectionElement")}}

## 例

```js
let mybody = mytable.createTBody();
// mybody === mytable.tBodies.item(mytable.tBodies.length - 1) は真になります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
