---
title: CORS
slug: Glossary/CORS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**CORS** (オリジン間リソース共有、 Cross-Origin Resource Sharing) は、 {{Glossary("HTTP_header", "HTTP ヘッダー")}}の転送で構成されるシステムであり、ブラウザーがオリジンをまたいだリクエストのレスポンスに、フロントエンドの JavaScript コードがアクセスすることをブロックするかどうかを決めるものです。

[同一オリジンセキュリティポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)は、デフォルトでリソースへのオリジン間のアクセスを禁止しています。しかし、 CORS はウェブサーバーに、リソースへのオリジンをまたいだアクセスを許可することができるようにします。

### CORS ヘッダー

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : レスポンスを共有してよいかどうかを示します。
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : 資格情報フラグが true の場合、リクエストに対するレスポンスを公開してよいかどうかを示します。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : プリフライトリクエストへのレスポンスで使用され、実際のリクエストを行う際に使用してよい HTTP ヘッダーを示します。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : プリフライトリクエストへのレスポンスで、リソースにアクセスするときに使用してよいメソッドを指定します。
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : レスポンスの一部としてどのヘッダーを公開してよいかを、ヘッダー名を列挙することで示します。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : プリフライトリクエストの結果をキャッシュできる時間を示します。
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : プリフライトリクエストを発行する際に、実際のリクエストを行う際に使用される HTTP ヘッダーをサーバーに知らせるために使用します。
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : プリフライトリクエストを発行する際に、実際のリクエストを行う際に使用される [HTTP メソッド](/ja/docs/Web/HTTP/Reference/Methods)をサーバーに知らせるために使用します。
- {{HTTPHeader("Origin")}}
  - : どのオリジンからアクセスしているかを示します。
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : クロスオリジン制限のため通常はゼロとして報告される、[リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing) の機能を通じて取得された属性の値を、閲覧をすることができるオリジンを指定します。

## 関連情報

- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [クロスオリジンリソース共有](https://ja.wikipedia.org/wiki/クロスオリジンリソース共有) - ウィキペディア
- [Fetch 仕様書](https://fetch.spec.whatwg.org/)<sup>（英語）</sup>
