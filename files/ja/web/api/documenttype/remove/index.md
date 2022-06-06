---
title: DocumentType.remove()
slug: Web/API/DocumentType/remove
page-type: web-api-instance-method
tags:
  - API
  - DocumentType
  - DOM
  - メソッド
browser-compat: api.DocumentType.remove
translation_of: Web/API/DocumentType/remove
---
{{APIRef("DOM")}}

**`DocumentType.remove()`** は文書の文書型宣言 (`doctype`) を削除します。

> **Note:** 文書の文書型宣言を削除すると、レンダリングモードが後方互換 ([quirks](/ja/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)) モードに設定されます。
> これはやめてください。意図的に後方互換モードを想定してデザインしても、何の役にも立ちません。
> 古いインターネットエクスプローラーのブラウザーで問題を回避する必要がある場合は、[条件付きコメント](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#ie_conditional_comments)などの回避策を検討してください。

## 構文

```js
remove()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### `remove()` の使用

```js
document.doctype; // "<!DOCTYPE html>'
document.doctype.remove();
document.doctype; // null
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.doctype")}}
