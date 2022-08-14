---
title: DocumentType.before()
slug: Web/API/DocumentType/before
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - メソッド
  - ノード
  - リファレンス
browser-compat: api.DocumentType.before
---
{{APIRef("DOM")}}

The **`DocumentType.before()`** 一連の {{domxref("Node")}} オブジェクトまたは文字列を、この `DocumentType` の親ノードの子リストの、この `DocumentType` の直前に挿入します。文字列は等価な {{domxref("Text")}} ノードとして挿入されます。

> **Note:** 文書の doctype の前にノードを置くと、一部のブラウザー (Internet Explorer) でレンダリングモードが後方互換 ([quirks](/ja/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)) モードに設定されます。このようなことをするのは好ましくありません。

## 構文

```js
before(param1)
before(param1, param2)
before(param1, param2, /* ... ,*/ paramN)
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

### 条件付きコメントの追加

コメントノードは doctype 宣言の前でも有効ですが、 IE で互換モードになることを考えるとお勧めできません。[条件付きコメント](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#ie_conditional_comments)は IE で有効です。

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.before(document.createComment('<!--[if !IE]> conditional comment <![endif]-->'));

myDoc.childNodes;
// NodeList [<!--[if !IE]> conditional comment <![endif]-->, <!DOCTYPE html>]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DocumentType.after()")}}
