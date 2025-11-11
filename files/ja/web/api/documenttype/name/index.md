---
title: "DocumentType: name プロパティ"
slug: Web/API/DocumentType/name
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`name`** は {{domxref("DocumentType")}} の読み取り専用プロパティで、文書の型を返します。

合成された `DocumentType` の場合、このプロパティは {{domxref("DOMImplementation.createDocumentType()")}} の引数で指定された値を反映します。

HTML 文書の場合、ソースコード内の実際の `DOCTYPE` が何であろうと、ブラウザーは常に `html` に設定します。

## 値

文字列です。

## 例

```js
const docType = document.implementation.createDocumentType("html", "", "");

console.log(docType.name); // `html` と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
