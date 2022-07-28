---
title: Representation header (表現ヘッダー)
slug: Glossary/Representation_header
tags:
  - 用語集
  - WebMechanics
---
**表現ヘッダー** (representation header) は {{glossary("HTTP_header", "HTTP ヘッダー")}}のうち、 HTTP メッセージの本文で送られる特定の*表現*を説明するものです。

表現とは、特定のリソースをさまざまな形で表現したものです。
例えば、同じデータが XML や JSON などの特定のメディア種別の形式に変換されたり、特定の記述言語や地理的地域にローカライズされたり、伝送用に圧縮またはその他の方法で符号化されたりする可能性があります。
基本的なリソースはそれぞれの場合で同じですが、その表現は異なります。

クライアントは[コンテンツ交渉](/ja/docs/Web/HTTP/Content_negotiation)の際に（`Accept-*` ヘッダーを用いて）送るべき形式を指定し、表現ヘッダーは実際に受信される*選択された表現*の形式をクライアントに伝えます。

表現ヘッダーは HTTP リクエストおよびレスポンスの両方のメッセージに存在する可能性があります。
`HEAD` リクエストに対するレスポンスとして送られる場合、リソースが実際にリクエストされたときに選択される本文の内容を説明します。

表現ヘッダーには、 {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Location")}} があります。

## 関連情報

- [RFC 7231, section 3: Representations](https://datatracker.ietf.org/doc/html/rfc7231#section-3)
- [すべての HTTP ヘッダーの一覧](/ja/docs/Web/HTTP/Headers)
- {{Glossary("Payload header", "ペイロードヘッダー")}}
- {{glossary("Entity header", "エンティティヘッダー")}}
- {{HTTPHeader("Digest")}}/ {{HTTPHeader("Want-Digest")}}
