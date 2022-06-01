---
title: XMLHttpRequest.responseURL
slug: Web/API/XMLHttpRequest/responseURL
tags:
  - AJAX
  - プロパティ
  - 読み取り専用
  - リファレンス
  - URL
  - XMLHttpRequest
  - responseURL
browser-compat: api.XMLHttpRequest.responseURL
translation_of: Web/API/XMLHttpRequest/responseURL
---
{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.responseURL`** プロパティは読み取り専用で、レスポンスのシリアライズされた URL を返します。 URL が `null` の場合は、空文字を返します。 URL に存在する URL フラグメントはすべて取り除かれます。 `responseURL` の値は、任意のリダイレクト後に得られる最後の URL になります。

## 例

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/test', true);
xhr.onload = function () {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
