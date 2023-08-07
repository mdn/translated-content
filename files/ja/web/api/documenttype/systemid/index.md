---
title: "DocumentType: systemId プロパティ"
slug: Web/API/DocumentType/systemId
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`systemId`** は {{domxref("DocumentType")}} の読み取り専用プロパティで、returns the URL of the associated DTD.

合成された `DocumentType` の場合、このプロパティは {{domxref("DOMImplementation.createDocumentType()")}} の引数で指定された値を反映します。

HTML 文書の場合、ソースコード内にある実際の `DOCTYPE` が何であろうと、ブラウザーは常に `html` に設定します。例えば、SVG 文書では、 `"http://www.w3.org/2000/svg"` のようになります。

## 値

文字列です。

## 例

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "",
  "http://www.w3.org/2000/svg",
);

console.log(docType.publicId); // "http://www.w3.org/2000/svg" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
