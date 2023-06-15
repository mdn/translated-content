---
title: "DocumentFragment: children プロパティ"
short-title: children
slug: Web/API/DocumentFragment/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`children`** は読み取り専用のプロパティで、生きた {{domxref("HTMLCollection")}}
を返します。これは呼び出された文書フラグメントのすべての子{{domxref("Element", "要素")}}を持ちます。

## 値

この文書フラグメントの子である DOM 要素の、生きた順序通りの集合である {{ domxref("HTMLCollection") }} です。この集合に対して {{domxref("HTMLCollection.item()", "item()")}} メソッドを使用するか、JavaScript の配列スタイル記法を使用すると、集合の個々の子ノードにアクセスすることができます。

この文書フラグメントに子要素がなかった場合は、`children` は `length` が `0` である空のリストを返します。

## 例

```js
let fragment = new DocumentFragment();
fragment.children; // HTMLCollection []

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.children; // HTMLCollection [<p>]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.childNodes")}}
