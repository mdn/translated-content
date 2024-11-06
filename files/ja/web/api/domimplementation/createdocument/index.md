---
title: "DOMImplementation: createDocument() メソッド"
slug: Web/API/DOMImplementation/createDocument
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

**`DOMImplementation.createDocument()`** メソッドは、 {{domxref("XMLDocument")}} を作成して返します。

## 構文

```js-nolint
createDocument(namespaceURI, qualifiedNameStr)
createDocument(namespaceURI, qualifiedNameStr, documentType)
```

### 引数

- `namespaceURI`
  - : 作成する文書の名前空間 URI を格納した文字列です。文書が名前空間に属さない場合は `null` です。
- `qualifiedNameStr`
  - : 作成する文書の修飾名（オプションで接頭辞とコロンにローカルルート要素名を加えたもの）を格納した文字列です。
- `documentType` {{optional_inline}}
  - : 作成する文書の {{domxref("DocumentType")}} です。既定値は `null` です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const doc = document.implementation.createDocument(
  "http://www.w3.org/1999/xhtml",
  "html",
  null,
);
const body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
body.setAttribute("id", "abc");
doc.documentElement.appendChild(body);
alert(doc.getElementById("abc")); // [object HTMLBodyElement]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("DOMImplementation")}} インターフェイス
