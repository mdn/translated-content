---
title: "Document: children プロパティ"
short-title: children
slug: Web/API/Document/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`children`** プロパティは読み取り専用で、呼び出された文書の子要素 ({{domxref("Element", "elements")}}) をすべて含む {{domxref("HTMLCollection")}} を返します。

HTML 文書では、これは通常ルートの `<html>` 要素のみです。

文書内の固有の HTML 要素の子要素については {{domxref("Element.children")}} を参照してください。

## 値

{{ domxref("HTMLCollection") }} は、現在の文書の子要素である DOM 要素の、順序付けられた生きた集合です。コレクションで {{domxref("HTMLCollection.item()", "item()")}} メソッドを使用するか、 JavaScript の配列記法を使って、コレクション内の個々の子ノードにアクセスすることができます。

もし文書内に要素の子要素がない場合、`children` は `length` が `0` の空のリストになります。

## 例

```js
document.children;
// HTMLCollection [<html>]
// 通常は文書の唯一の直接の子要素であるルート <html> 要素のみを格納します。
```

文書内の特定の HTML 要素の子要素については {{domxref("Element.children")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.children")}}
- {{domxref("Node.childNodes")}}
