---
title: 425 Too Early
slug: Web/HTTP/Reference/Status/425
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`425 Too Early`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、サーバーがリプレイ攻撃の可能性を避けるために、リプレイ攻撃を受ける可能性のあるリクエストを処理するリスクを負いたくないことを示しています。

クライアントが最近サーバーと操作を行った場合、初期データ（ゼロラウンドトリップタイム [(0-RTT) データ](/ja/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)とも呼ばれる）により、クライアントは TLS [ハンドシェイク](/ja/docs/Glossary/TCP_handshake)が完全に完了するのを待たずに、接続の最初のラウンドトリップでサーバーにデータを送信することができます。
初期データでリクエストを送信するクライアントは、 `Early-Data` ヘッダーを記載する必要はありません。
詳しくは、 {{HTTPHeader("Early-Data")}} をご覧ください。

## ステータス

```http
425 Too Early
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [TLS 1.3](/ja/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- {{HTTPHeader("Early-Data")}}
