---
title: XMLHttpRequest.statusText
slug: Web/API/XMLHttpRequest/statusText
tags:
  - AJAX
  - API
  - プロパティ
  - 読み取り専用
  - リファレンス
  - XMLHttpRequest
  - XMLHttpRequest Status
browser-compat: api.XMLHttpRequest.statusText
translation_of: Web/API/XMLHttpRequest/statusText
---
{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.statusText`** は読み取り専用のプロパティで、 [`DOMString`](/ja/docs/Web/API/DOMString) で HTTP サーバーから返されるステータスメッセージを示します。 [`XMLHTTPRequest.status`](/ja/docs/Web/API/XMLHTTPRequest/status) が数値のステータスコードを示すのとは異なり、このプロパティはレスポンスステータスの*テキスト*を、 "OK" や "Not Found" のように示します。リクエストの [`readyState`](/ja/docs/Web/API/XMLHttpRequest/readyState) が `UNSENT` または `OPENED` の状態であった場合、 `statusText` の値は空文字列になります。

サーバーが明示的にステータスのテキストを指定しなかった場合、 `statusText` は既定値 "OK" と見なされます。

> **Note:** HTTP/2 コネクションのレスポンスでは、常に空文字列になります。これは HTTP/2 がステータステキストに対応していないからです。

## 例

```js
var xhr = new XMLHttpRequest();
console.log('0 UNSENT', xhr.statusText);

xhr.open('GET', '/server', true);
console.log('1 OPENED', xhr.statusText);

xhr.onprogress = function () {
  console.log('3 LOADING', xhr.statusText);
};

xhr.onload = function () {
  console.log('4 DONE', xhr.statusText);
};

xhr.send(null);

/**
 * 以下のように出力されます。
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP レスポンスコード](/ja/docs/Web/HTTP/Response_codes)の一覧
- [HTTP](/ja/docs/Web/HTTP)
- [WHATWG Fetch Living Standard](https://fetch.spec.whatwg.org/#concept-response-status-message)
