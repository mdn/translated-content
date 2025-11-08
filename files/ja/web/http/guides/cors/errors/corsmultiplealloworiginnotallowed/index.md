---
title: "Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed"
slug: Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

## 理由

```plain
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## エラーの原因

複数の {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーがサーバーから送信されました。これは許可されていません。

サーバーへのアクセス権があるのであれば、実装を変更して `Access-Control-Allow-Origin` ヘッダーでオリジンを返すようにしてください。ブラウザーは単一のオリジンか null のどちらかの値しか受け付けないので、オリジンのリストを送り返すことはできません。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/Guides/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/Guides/CORS)
- [CORS の有効化: CORS 対応をサーバーに追加したい](https://enable-cors.org/server.html)（英語）
