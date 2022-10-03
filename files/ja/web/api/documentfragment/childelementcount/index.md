---
title: DocumentFragment.childElementCount
slug: Web/API/DocumentFragment/childElementCount
---

{{ APIRef("DOM") }}

**`Document.childElementCount`** は読み取り専用のプロパティで、 `DocumentFragment` の子要素の数を返します。

特定の要素の子要素の数を取得する場合は、 {{domxref("Element.childElementCount")}} を参照してください。

## 構文

```js
fragment.childElementCount;
```

## 例

```js
let fragment = new DocumentFragment()
fragment.childElementCount; // 0

let paragraph = document.createElement('p')
fragment.appendChild(paragraph)

fragment.childElementCount; // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.childElementCount")}}
- {{domxref("Document.childElementCount")}}
