---
title: Payload body (ペイロード本文)
slug: Glossary/Payload_body
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

HTTP メッセージでは、**ペイロード本文**または**ペイロード**とは、メッセージ本文で転送されるリソース表現から[転送エンコーディング](/ja/docs/Web/HTTP/Reference/Headers/Transfer-Encoding)を取り除いたものを指していました。転送エンコーディングがなければ、_ペイロード本文_ と _メッセージ本文_ は同じです。表現データが HTTP ヘッダーで転送されることもありますが、そのようなデータは「ペイロード」とはみなされません。

{{RFC("9110")}} 以降、「ペイロード」という語は「コンテンツ」に置き換えられました。[**HTTP コンテンツ**](/ja/docs/Glossary/HTTP_Content)を参照してください。

## 関連情報

- {{Glossary("Content header")}}
- [RFC 9110, section 6.4: Content](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4)（[RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) のペイロードの意味を置き換え）
  - [Changes from RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
