---
title: Document.doctype
slug: Web/API/Document/doctype
---

{{ApiRef("DOM")}}

現在の文書に関連付けられた文書型宣言 (Document Type Declaration) (DTD) を返します。返されるオブジェクトは、 {{domxref("DocumentType")}} インターフェイスを持ちます。 `DocumentType` を生成するには {{domxref("DOMImplementation.createDocumentType()")}} を使用してください。

## 構文

```
doctype = document.doctype;
```

- `doctype` : 読み取り専用のプロパティです。

## 例

```js
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: " +
    doctypeObj.name +
    "\n" +
    "doctypeObj.internalSubset: " +
    doctypeObj.internalSubset +
    "\n" +
    "doctypeObj.publicId: " +
    doctypeObj.publicId +
    "\n" +
    "doctypeObj.systemId: " +
    doctypeObj.systemId,
);
```

## メモ

現在の文書に関連付けられている DTD が存在しないは `null` が返されます。

DOM レベル 2 では、文書型宣言の編集に対応していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
