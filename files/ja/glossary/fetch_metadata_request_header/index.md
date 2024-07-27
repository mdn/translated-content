---
title: Fetch metadata request header (フェッチメタデータリクエストヘッダー)
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{GlossarySidebar}}

**フェッチメタデータリクエストヘッダー**は {{Glossary("Request header", "HTTP リクエストヘッダー")}}のうち、リクエストの発信元のコンテキストに関する追加情報を提供するものです。これによりサーバは、リクエストがどこから来たのか、リソースをどのように使用するのかに基づいて、リクエストを許可すべきかどうかを決定することができます。

この情報があれば、サーバーは{{Glossary("resource isolation policy", "リソース分離ポリシー")}}を実装し、外部サイトが共有を意図され、適切に使用することができるリソースだけをリクエストできるようにすることができます。この手法は {{Glossary("CSRF")}}、Cross-site Script Inclusion ('XSSI')、タイミング攻撃、オリジン間情報リークなどの一般的なサイトを跨ぐウェブ脆弱性を軽減するのに役立ちます。

これらのヘッダー名には `Sec-` の接頭辞が付いており、{{Glossary("Forbidden header name", "禁止ヘッダー名")}}であるため、 JavaScript からヘッダーを変更することはできません。

フェッチメタデータリクエストヘッダーには以下のようなものがあります。

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

以下のリクエストヘッダーは同じ仕様書に書かれていないので、厳密には「フェッチメタデータリクエストヘッダー」ではありませんが、同様にリソースがどのように使用されるかのコンテキストに関する情報を提供します。
サーバはキャッシュの動作や返す情報を変更するためにこれらを使用するかもしれません。

- {{HTTPHeader("Sec-Purpose")}} {{Experimental_Inline}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## 関連情報

- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [全 HTTP ヘッダーの一覧](/ja/docs/Web/HTTP/Headers)
- [全 HTTP ヘッダーの一覧 > フェッチメタデータリクエストヘッダー](/ja/docs/Web/HTTP/Headers#フェッチメタデータリクエストヘッダー)
- 関連用語:

  - {{Glossary("Representation header", "表現ヘッダー")}}
  - {{Glossary("HTTP_header","HTTP ヘッダー")}}
  - {{Glossary("Response header", "レスポンスヘッダー")}}
  - {{Glossary("Request header", "リクエストヘッダー")}}
