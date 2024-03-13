---
title: "DocumentFragment: lastElementChild プロパティ"
short-title: lastElementChild
slug: Web/API/DocumentFragment/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`DocumentFragment.firstElementChild`** は読み取り専用プロパティで、この文書フラグメントの最後の子{{domxref("Element", "要素")}}を返します。子要素がなければ `null` を返します。

## 値

このオブジェクトの最後の子要素である {{domxref("Element")}} です。存在しなければ `null` です。

## 例

```js
let fragment = new DocumentFragment();
fragment.lastElementChild; // null

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.lastElementChild; // <p>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.lastElementChild")}}
