---
title: XMLHttpRequest.abort()
slug: Web/API/XMLHttpRequest/abort
tags:
  - AJAX
  - API
  - XHR の中止
  - XHR のキャンセル
  - HTTP
  - HttpRequest
  - メソッド
  - リファレンス
  - XHR の停止
  - XHR
  - XMLHttpRequest
  - abort
  - キャンセル
  - 停止
browser-compat: api.XMLHttpRequest.abort
translation_of: Web/API/XMLHttpRequest/abort
---
{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.abort()`** メソッドは、すでに送信されたリクエストを中止します。リクエストが中止されたら、 {{domxref("XMLHttpRequest.readyState", "readyState")}} が {{domxref("XMLHttpRequest.UNSENT")}} (0) に変化し、リクエストの {{domxref("XMLHttpRequest.status", "status")}} コードが 0 に設定されます。

## 構文

```js
XMLHttpRequest.abort()
```

### 引数

なし。

### 返値

`undefined`

## 例

この例では、 MDN のホームページからコンテンツを読み込み始め、ある条件が発生したときに、 `abort()` を呼び出すことで転送を中止します。

```js
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

if (OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW_OR_ELSE) {
  xhr.abort();
}
```

## 仕様書

{{Compat}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
