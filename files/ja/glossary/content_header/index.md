---
title: Content header (コンテンツヘッダー)
slug: Glossary/Content_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

**コンテンツヘッダー**は、HTTP メッセージ本体のコンテンツを説明する [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)のグループであり、本体に指定されたメッセージフレームが除去された後のものです。
コンテンツの長さ、転送エンコード方式、リソースのどの部分がデータに含まれているか（マルチパートメッセージの場合）、メッセージの完全性チェックなど、転送中の具体的なメッセージで伝達される{{Glossary("HTTP Content", "メッセージコンテンツ")}}のプロパティが特に記述されています。
これらは、エンコード方式、メディアタイプ、言語、リソースの他の特性を記述し、基礎となるデータの解釈を可能にする「{{Glossary("Representation header", "表現ヘッダー")}}」とは異なります。

これらのヘッダーは、{{RFC("7231")}} では「ペイロードヘッダー」として定義されていましたが、HTTP/2 および HTTP/3 フレームペイロードに含まれるデータはヘッダーデータ、本体データ、その他の制御情報である可能性があるため、現在は「コンテンツヘッダー」と呼ばれています。
それ以降の HTTP 仕様では、「コンテンツヘッダー」について言及されておらず、関連ヘッダーのリストも拡張されていませんが、セマンティクスは同じままなので、ヘッダーを分類する方法としては依然として有用です。

> [!NOTE]
> コンテンツヘッダーと{{Glossary("Representation header", "表現ヘッダー")}}の間には、いくつかの重複があります。

これらのヘッダーは、HTTP リクエストメッセージとレスポンスメッセージの両方に存在することがあり、以下が含まれます。

- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## 関連情報

- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- 関連用語項目:
  - {{Glossary("Representation header", "表現ヘッダー")}}
  - {{Glossary("HTTP Content", "HTTP コンテンツ")}}
- [RFC 9110, section 6.4.1: Content semantics](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1), specifically [Appendix B.3.: Changes from RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231, section 3.3: Payload Semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
