---
title: "DocumentType: publicId プロパティ"
slug: Web/API/DocumentType/publicId
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`publicId`** は {{domxref("DocumentType")}} の読み取り専用プロパティで、文書の正式な識別子を返します。

合成された `DocumentType` の場合、このプロパティは {{domxref("DOMImplementation.createDocumentType()")}} の引数で指定された値を反映します。

HTML 文書の場合、ソースコード内にある実際の `DOCTYPE` が何であろうと、ブラウザーは常に `html` に設定します。例えば、SVG 文書では、 `"-//W3C//DTD SVG 1.1//EN"` のようになります。

## 値

文字列です。

## 例

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/2000/svg",
);

console.log(docType.publicId); // "-//W3C//DTD SVG 1.1//EN" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
