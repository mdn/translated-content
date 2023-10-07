---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---

{{HTTPSidebar}}

## 理由

```
Reason: CORS request not HTTP
```

## 何が悪いのか

{{Glossary("CORS")}} リクエストは URL スキームが HTTPS の場合のみ利用できますが、リクエストで指定された URL が異なる種類のものです。これは、ローカルファイルを指定する URL が、 `file:///` の URL を使用している場合によく起こります。

この問題を修正するには、単純に CORS に関するリクエストを発行する際に HTTPS の URL を使用するようにしてください。

### Firefox 68 におけるローカルファイルセキュリティ

Firefox 67 以前ではユーザが `file:///` URI を用いてページを開いたとき、ページのオリジンはその開かれたページのあるディレクトリとして定義されていました。同じディレクトリやそのサブディレクトリにあるリソースは、CORS 同一オリジンルールを適用する際には同一オリジンとみなされていました。

Firefox 68 以降では [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) の対策として、 `file:///` URI を用いて開かれたページのオリジンは、それだけのものとして定義されます。つまり、同じディレクトリやそのサブディレクトリにあるリソースは、CORS 同一オリジンルールを満たさなくなりました。この新たな振る舞いは、`privacy.file_unique_origin` 設定を用いてデフォルトで有効になっています。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
- [URL とは](/ja/docs/Learn/Common_questions/What_is_a_URL)
