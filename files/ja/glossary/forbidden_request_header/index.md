---
title: Forbidden request header (禁止リクエストヘッダー)
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{GlossarySidebar}}

**禁止リクエストヘッダー**は、リクエストにおいてプログラム的に設定したり変更したりすることができない [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)の名前と値の組み合わせです。レスポンスで変更することが禁止されているヘッダーについては、{{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}を参照してください。

このようなヘッダーを変更することは禁止されています。なぜなら、ユーザーエージェントがヘッダーを完全に制御できるからです。
例えば、 {{HTTPHeader("Date")}} ヘッダーは禁止リクエストヘッダーであるため、このコードではメッセージの `Date` フィールドを設定することはできません。

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

`Sec-` で始まる名前は、 {{domxref("Window/fetch", "fetch()")}} などのヘッダーを開発者が制御できる {{glossary("API")}} から、新しいヘッダーを作成するために予約されています。
禁止ヘッダーは次のいずれかです。

- `Accept-Charset`
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Cookie")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("DNT")}}
- {{HTTPHeader("Expect")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Permissions-Policy")}}
- `Proxy-` で始まるヘッダー
- `Sec-` で始まるヘッダー
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}
- `X-HTTP-Method`、ただし禁止メソッド名 ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}}) を含む場合のみ
- `X-HTTP-Method-Override`、ただし禁止メソッド名を含む場合のみ
- `X-Method-Override`、ただし禁止メソッド名を含む場合のみ

> [!NOTE]
> {{HTTPHeader("User-Agent")}} ヘッダーは禁止でしたが、そうではなくなりました。しかし、 Chrome はいまだに Fetch リクエストからこのヘッダーを削除します。（[Chromium bug 571722](https://crbug.com/571722) を参照）。

> [!NOTE]
> {{HTTPHeader("Referer")}} ヘッダーは、[仕様書](https://fetch.spec.whatwg.org/#forbidden-request-header)では禁止ヘッダーとしてリストアップされていますが、ユーザーエージェントがヘッダーを完全に制御できるわけではなく、ヘッダーはプログラムによって変更することができます。例えば、 [`fetch()`](/ja/docs/Web/API/Window/fetch) を使用する場合、 {{HTTPHeader("Referer")}} ヘッダーは、 [`referrer` オプション](/ja/docs/Web/API/RequestInit#referrer)を介してプログラムによって変更することができます。

## 関連情報

- 用語集の用語:
  - {{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}
