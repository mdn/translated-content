---
title: CORS
slug: Glossary/CORS
---

{{GlossarySidebar}}

**CORS** (オリジン間リソース共有、 Cross-Origin Resource Sharing) は、 {{Glossary("Header", "HTTP ヘッダー")}}の転送で構成されるシステムであり、ブラウザーがオリジンをまたいだリクエストのレスポンスに、フロントエンドの JavaScript コードがアクセスすることをブロックするかどうかを決めるものです。

[同一オリジンセキュリティポリシー](/ja/docs/Web/Security/Same-origin_policy)は、既定でリソースへのオリジン間のアクセスを禁止しています。しかし、 CORS はウェブサーバーに、リソースへのオリジンをまたいだアクセスを許可すると言うことができるようにします。

## 理解を深める

### 一般知識

- MDN 上の [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/CORS)
- Wikipedia 上の [Cross-origin_resource_sharing](https://ja.wikipedia.org/wiki/Cross-origin_resource_sharing) （英語）

### CORS のヘッダー

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : レスポンスを共有してよいかどうかを示します。
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : 認証情報フラグが true の場合、リクエストに対するレスポンスを公開してよいかどうかを示します。
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
  - : プリフライトリクエストを発行する際に、実際のリクエストを行う際に使用される [HTTP メソッド](/ja/docs/Web/HTTP/Methods)をサーバーに知らせるために使用します。
- {{HTTPHeader("Origin")}}
  - : どのオリジンからアクセスしているかを示します。

### 技術リファレンス

- [Fetch specification](https://fetch.spec.whatwg.org)
