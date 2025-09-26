---
title: "Document: firstElementChild プロパティ"
short-title: firstElementChild
slug: Web/API/Document/firstElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`Document.firstElementChild`** は読み取り専用プロパティで、この文書の最初の子要素 ({{domxref("Element")}}) を返します。子要素がなければ `null` を返します。

HTML 文書においては、これは普通は唯一の子である、ルートの `<html>` 要素です。

文書内の特定の要素における最初の子要素については、 {{domxref("Element.firstElementChild")}} を参照してください。

## 値

{{domxref("Element")}} オブジェクト、または `null` です。

## 例

```js
document.firstElementChild;
// この文書の唯一の子でである、ルート <html> 要素を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.firstElementChild")}}
