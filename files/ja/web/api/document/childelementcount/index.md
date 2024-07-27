---
title: "Document: childElementCount プロパティ"
short-title: childElementCount
slug: Web/API/Document/childElementCount
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`Document.childElementCount`** は読み取り専用のプロパティで、文書の子要素の数を返します。

特定の要素の子要素の数を取得する場合は、{{domxref("Element.childElementCount")}} を参照してください。

## 値

数値です。

## 例

```js
document.children;
// HTMLCollection で、ふつうは <html> 要素をこの文書の唯一の子として含んでいる

document.childElementCount;
// 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.childElementCount")}}
- {{domxref("DocumentFragment.childElementCount")}}
