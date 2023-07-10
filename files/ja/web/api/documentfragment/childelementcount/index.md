---
title: "DocumentFragment: childElementCount プロパティ"
short-title: childElementCount
slug: Web/API/DocumentFragment/childElementCount
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`Document.childElementCount`** は読み取り専用のプロパティで、`DocumentFragment` の子要素の数を返します。

特定の要素の子要素の数を取得する場合は、 {{domxref("Element.childElementCount")}} を参照してください。

## 値

この文書フラグメントの子の数を表す数値。

## 例

```js
let fragment = new DocumentFragment();
fragment.childElementCount; // 0

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.childElementCount; // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.childElementCount")}}
- {{domxref("Document.childElementCount")}}
