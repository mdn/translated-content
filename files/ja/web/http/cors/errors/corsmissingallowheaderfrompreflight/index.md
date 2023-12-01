---
title: "Reason: missing token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
---

{{HTTPSidebar}}

## 理由

```
Reason: missing token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel
```

## 何に失敗したのか

`Access-Control-Allow-Headers` ヘッダーがサーバーから送信され、どのヘッダーが {{Glossary("CORS")}} 要求に対応しているかを知らせます。 `Access-Control-Allow-Headers` の値はコンマ区切りのヘッダー名のリストで、 "`X-Custom-Information`" やその他の標準的かつ基本的ではないヘッダー名 (常に許可されているもの) を記述します。

このエラーは明確に許可されていないヘッダー (すなわち、サーバーから送られる `Access-Control-Allow-Headers` ヘッダーで指定されたリストに含まれていないもの) のプリフライトリクエストを行おうとしたときに発生します。これを修正するには、サーバーが指定されたヘッダーを許可するように更新するか、このヘッダーを使用しないようにする必要があります。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
