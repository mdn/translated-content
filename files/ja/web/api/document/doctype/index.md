---
title: "Document: doctype プロパティ"
short-title: doctype
slug: Web/API/Document/doctype
l10n:
  sourceCommit: cf4cccd4696555c12318d0bd8ea9f34992b4b098
---

{{ApiRef("DOM")}}

**`doctype`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、現在の文書に関連付けられた {{glossary("Doctype", "Document Type Declaration (DTD)")}} を表す {{domxref("DocumentType")}} オブジェクトです。

## 値

{{domxref("DocumentType")}} オブジェクトです。

## 例

```js
const doctypeObj = document.doctype;

console.log(`doctypeObj.name: ${doctypeObj.name}`);
console.log(`doctypeObj.internalSubset: ${doctypeObj.internalSubset}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);
```

## メモ

現在の文書に関連付けられている DTD が存在しないは `null` が返されます。

DOM レベル 2 では、文書型宣言の編集に対応していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
