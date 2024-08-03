---
title: "Document: lastElementChild プロパティ"
short-title: lastElementChild
slug: Web/API/Document/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`Document.lastElementChild`** は読み取り専用プロパティで、この文書の最後の子要素 ({{domxref("Element")}})、または子要素がない場合は `null` を返します。

HTML 文書では、これは通常唯一の子要素であるルート `<html>` 要素です。

文書内の固有の要素の最後の子要素については {{domxref("Element.lastElementChild")}} を参照してください。

## 値

ルート `<html>` 要素です。

## 例

```js
document.lastElementChild;
// 文書のただ一つの子であるルート <html> 要素を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.lastElementChild")}}
