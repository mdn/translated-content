---
title: "Reason: CORS request external redirect not allowed"
slug: Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed
---

{{HTTPSidebar}}

## 理由

```
Reason: CORS request external redirect not allowed
```

## 何が悪いのか

{{Glossary("CORS")}} リクエストに対して、サーバーが元のリクエストとは異なるオリジンの URL へのリダイレクトを返答しましたが、これは CORS リクエストでは許可されていません。

例えば、 `https://service.tld/fetchdata` のページがリクエストされ、 HTTP レスポンスが "301 Moved Permanently" 又は "307 Temporary Redirect" 又は "308 Permanent Redirect" で、 `Location` が `https://anotherservice.net/getdata` であった場合、この理由で CORS リクエストが失敗します。

問題を修正するには、リダイレクトによって報告された新しい URL を使用するようにコードを更新し、リダイレクトを回避します。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
