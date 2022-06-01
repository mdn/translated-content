---
title: XMLHttpRequest.withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
tags:
  - AJAX
  - API
  - プロパティ
  - リファレンス
  - セキュリティ
  - XHR
  - XMLHttpRequest
  - 資格情報
  - 資格情報付き
browser-compat: api.XMLHttpRequest.withCredentials
translation_of: Web/API/XMLHttpRequest/withCredentials
---
{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.withCredentials`** プロパティは論理値で、サイト間の `Access-Control` リクエストが Cookie、認証ヘッダー、 TLS クライアント証明書などの資格情報を使用して行うべきかどうかを示します。 `withCredentials` を設定しても、同じサイトへのリクエストには影響しません。

さらに、このフラグは、レスポンスにおいて Cookie を無視すること示すためにも使われます。既定値は `false` です。異なるドメインからの `XMLHttpRequest` は、リクエストを行う前に `withCredentials` を `true` に設定しない限り、自身のドメインの Cookie 値を設定することができません。 `withCredentials` を true に設定することで得られるサードパーティの Cookie は、依然として same-origin ポリシーを尊重するので、リクエストスクリプトが [document.cookie](/ja/docs/Web/API/Document/cookie) やレスポンスヘッダーからアクセスすることはできません。

> **Note:** これは同じサイトへのリクエストには影響しません。

> **Note:** 異なるドメインからの `XMLHttpRequest` レスポンスは、リクエストを行う前に `withCredentials` を `true` に設定しない限り、 `Access-Control-` ヘッダーの値にかかわらず、自ドメインの Cookie 値を設定*できません*。

## 例

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
