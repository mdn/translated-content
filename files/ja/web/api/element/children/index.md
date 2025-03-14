---
title: "Element: children プロパティ"
short-title: children
slug: Web/API/Element/children
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`children`** は読み取り専用のプロパティで、生きた {{domxref("HTMLCollection")}} で呼び出された要素の子{{domxref("Element", "要素", "", 1)}}をすべて返します。

`Element.children` は要素のノードしか含みません。すべての子ノード、例えばテキストやコメントノードなどを取得するには、 {{domxref("Node.childNodes")}} を使用してください。

## 値

生きた {{ domxref("HTMLCollection") }} で、 `node` の子の DOM 要素の順序付きコレクションを返します。コレクションの {{domxref("HTMLCollection.item()", "item()")}} メソッドか、 JavaScript の配列スタイルの記法を使って、コレクション内の個々の子ノードにアクセスすることができます。

ノードが子要素を持たない場合、 `children` は要素を含まず、`length` は `0` です。

## 例

```js
const myElement = document.getElementById("foo");
for (const child of myElement.children) {
  console.log(child.tagName);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.childNodes")}}
