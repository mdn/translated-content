---
title: "Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed"
slug: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
---

{{HTTPSidebar}}

## 理由

```
Reason: Multiple CORS header ‘Access-Control-Allow-Origin’ not allowed
```

## 何が悪いのか

複数の {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーがサーバから送信されました。これは許可されていません。

サーバーへのアクセス権があるのであれば、実装を変更して `Access-Control-Allow-Origin` ヘッダーで{{Glossary("origin", "オリジン")}}を返すようにしてください。ブラウザーは単一のオリジンか null のどちらかの値しか受け付けないので、オリジンのリストを送り返すことはできません。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
- [Enable CORS: I want to add CORS support to my server](https://enable-cors.org/server.html)
