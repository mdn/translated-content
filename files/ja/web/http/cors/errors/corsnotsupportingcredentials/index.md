---
title: "Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'"
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

## 理由

```plain
Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## エラーの原因

{{Glossary("CORS")}} リクエストが認証フラグ付きで試みられましたが、サーバーが {{HTTPHeader("Access-Control-Allow-Origin")}} の値としてワイルドカード (`"*"`) を使用して構成されており、認証情報を利用することが許可されていません。

この問題をクライアント側で修正するには、 CORS リクエストを発行する際に認証フラグの値を確実に `false` にするだけです。

- [フェッチ API](/ja/docs/Web/API/Fetch_API) を使用している場合は、{{domxref("Request.credentials")}} が `"omit"` であることを確認してください。
- リクエストが {{domxref("XMLHttpRequest")}} を用いて発行されている場合は、 {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} に `true` を設定しないよう確認してください。
- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events) を使用している場合は、 {{domxref("EventSource.withCredentials")}} が `false` (既定値) であることを確認してください。

サーバーの動作を調整する必要がある場合は、 `Access-Control-Allow-Origin` の画像を変更して、クライアントが読み込まれたオリジンへのアクセスを許可する必要があるでしょう。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
