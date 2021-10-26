---
title: Forbidden header name (禁止ヘッダー名)
slug: Glossary/Forbidden_header_name
tags:
  - Fetch
  - 用語集
  - HTTP
  - ヘッダー
  - forbidden
translation_of: Glossary/Forbidden_header_name
---
**禁止ヘッダー名**はプログラムから変更することができない [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)の名前、特に、 HTTP **リクエスト**ヘッダーの名前です (反対に、{{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}もあります)。

このようなヘッダーを変更することは禁止されています。なぜなら、ユーザーエージェントがヘッダーを完全に制御できるからです。\``Sec-`\` で始まる名前は、{{domxref("XMLHttpRequest")}} のような、開発者にヘッダーの制御を許可する [Fetch](/ja/docs/Web/API/Fetch_API) を使った {{glossary("API")}} から安全に新しいヘッダーを作成するために予約されています。

禁止ヘッダー名は `Proxy-` や `Sec-` で始まるもの、または以下の名前の 1 つです。

- `Accept-Charset`
- `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`
- `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Feature-Policy`
- `Host`
- `Keep-Alive`
- `Origin`
- `Proxy-`
- `Sec-`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`

> **Note:** `User-Agent` ヘッダーは[仕様としては](https://fetch.spec.whatwg.org/#terminology-headers)禁止ではなくなりました (Firefox 43 で実装された forbidden header name list を参照)。 Fetch の [Headers](/ja/docs/Web/API/Headers) オブジェクトや、XHR の [setRequestHeader()](/ja/docs/Web/API/XMLHttpRequest#setRequestHeader%28%29) などでこのヘッダーを設定することが可能です。ただし、 Chrome は Fetch リクエストからこのヘッダーを暗黙的に削除します ([Chromium バグ 571722](https://bugs.chromium.org/p/chromium/issues/detail?id=571722) を参照)。

## 関連情報

{{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}} (用語集)
