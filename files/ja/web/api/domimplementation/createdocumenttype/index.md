---
title: "DOMImplementation: createDocumentType() メソッド"
slug: Web/API/DOMImplementation/createDocumentType
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ ApiRef("DOM")}}

**`DOMImplementation.createDocumentType()`** メソッドは {{domxref("DocumentType")}} オブジェクトを返します。これは文書作成時に {{domxref("DOMImplementation.createDocument")}} で使用したり、{{domxref("Node.insertBefore()")}} や {{domxref("Node.replaceChild()")}} などのメソッドで文書中に置いたりすることができます。

## 構文

```js-nolint
createDocumentType(qualifiedNameStr, publicId, systemId)
```

### 引数

- `qualifiedNameStr`
  - : 修飾名の入った文字列です。例えば `svg:svg` です。
- `publicId`
  - : `PUBLIC` 識別子の入った文字列です。
- `systemId`
  - : `SYSTEM` 識別子の入った文字列です。

### 返値

[`DocumentType`](/ja/docs/Web/API/DocumentType) です。

## 例

```js
const dt = document.implementation.createDocumentType(
  "svg:svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);
const d = document.implementation.createDocument(
  "http://www.w3.org/2000/svg",
  "svg:svg",
  dt,
);
alert(d.doctype.publicId); // -//W3C//DTD SVG 1.1//EN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("DOMImplementation")}} インターフェイス
