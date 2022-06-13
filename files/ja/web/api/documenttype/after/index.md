---
title: DocumentType.after()
slug: Web/API/DocumentType/after
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - メソッド
  - ノード
  - リファレンス
browser-compat: api.DocumentType.after
translation_of: Web/API/DocumentType/after
---
{{APIRef("DOM")}}

**`DocumentType.after()`** は、一連の {{domxref("Node")}} オブジェクトまたは文字列を、この `DocumentType` の親ノードの子リストの、この `DocumentType` の直後に挿入します。文字列は等価な {{domxref("Text")}} ノードとして挿入されます。

## 構文

```js
after(param1)
after(param1, param2)
after(param1, param2, /* ... ,*/ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 挿入する一連の {{domxref("Node")}} オブジェクト、または文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : ノードが階層内の指定の位置の挿入できなかった場合に発生します。

## 例

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.after(document.createElement('html'));

myDoc.childNodes;
// NodeList [<!DOCTYPE html>, <html>]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DocumentType.before()")}}
