---
title: Representation header (表現ヘッダー)
slug: Glossary/Representation_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**表現ヘッダー** (representation header) は {{glossary("HTTP_header", "HTTP ヘッダー")}}のうち、メッセージに含まれるデータを解釈する方法を説明するものです。

例えば、あるメッセージのコンテンツは、転送のためにエンコードされていたり、リソース全体が XML、JSON、HTML、Markdown などの特定のメディア種別として書式化されていたり、特定の言語や地域に合わせてローカライズされていたり、特定のアルゴリズムを用いて圧縮されていたりする場合があります。
表現ヘッダーにより、基になるデータを抽出して理解することができます。
それぞれの場合で、基になるリソースは意味的には同じですが、その表現は異なります。

表現はリソースのさまざまな形態である一方、表現そのものも、HTTP メッセージフレーム（例：HTTP/1.1 の {{HTTPHeader("Transfer-Encoding")}} を参照）や、選択された表現から派生した特定のオクテットストリーム（例：{{HTTPHeader("Content-Range")}} を参照）など、さまざまな形式で伝送されることが可能です。

クライアントは[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)の際に（`Accept-*` ヘッダーを用いて）送るべき形式を指定し、表現ヘッダーは実際に受信される選択された表現の形式をクライアントに伝えます。

表現ヘッダーは HTTP リクエストおよびレスポンスの両方のメッセージに存在する可能性があります。
`HEAD` リクエストへのレスポンスとして送信される場合は、そのリソースが `GET` リクエストでリクエストされた場合に_選択されるはずの本体コンテンツの表現を説明するものです。

表現ヘッダーには次のようなものがあります。

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- [条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)で使用されるバリデーター、例えば以下のものです。
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

表現ヘッダーは、{{Glossary("Content header", "コンテンツヘッダー")}}と相互に排他的ではありません。

## 関連情報

- 関連用語:
  - {{Glossary("Content header", "コンテンツヘッダー")}}
- [RFC 9110, section 3.2: Representations](https://httpwg.org/specs/rfc9110.html#representations)
- [すべての HTTP ヘッダーの一覧](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
