---
title: "Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'"
slug: Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

## 理由

```plain
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## エラーの原因

{{Glossary("CORS")}} リクエストが認証情報を使用してサーバーの許可を要求されていますが、サーバーの {{HTTPHeader("Access-Control-Allow-Credentials")}} ヘッダーの値が `true` に設定されておらず、利用できるようになっていません。

この問題をクライアント側で解決するには、コードを修正して認証情報を使用せずにリクエストするようにしてください。

- [フェッチ API](/ja/docs/Web/API/Fetch_API) を使用している場合は、 {{domxref("Request.credentials")}} が `"omit"` であることを確認してください。
- リクエストが {{domxref("XMLHttpRequest")}} を用いて発行されている場合は、 {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} に `true` を設定しないよう確認してください。
- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)を使用している場合は、 {{domxref("EventSource.withCredentials")}} が `false` (既定値) であることを確認してください。

サーバーの構成を変更してこのエラーを除去するには、サーバーの構成で `Access-Control-Allow-Credentials` ヘッダーの値に `true` を設定するよう調整してください。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
