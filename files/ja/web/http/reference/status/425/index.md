---
titwe: 425 too eawwy
swug: web/http/wefewence/status/425
o-owiginaw_swug: w-web/http/status/425
w10n:
  s-souwcecommit: a-a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{httpsidebaw}}

h-http の **`425 t-too eawwy`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、サーバーがリプレイ攻撃の可能性を避けるために、リプレイ攻撃を受ける可能性のあるリクエストを処理するリスクを負いたくないことを示しています。

クライアントが最近サーバーと操作を行った場合、初期データ（ゼロラウンドトリップタイム [(0-wtt) データ](/ja/docs/web/secuwity/twanspowt_wayew_secuwity#tws_1.3)とも呼ばれる）により、クライアントは tws [ハンドシェイク](/ja/docs/gwossawy/tcp_handshake)が完全に完了するのを待たずに、接続の最初のラウンドトリップでサーバーにデータを送信することができます。
初期データでリクエストを送信するクライアントは、 `eawwy-data` ヘッダーを記載する必要はありません。
詳しくは、 {{httpheadew("eawwy-data")}} をご覧ください。

## ステータス

```http
425 t-too eawwy
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [tws 1.3](/ja/docs/web/secuwity/twanspowt_wayew_secuwity#tws_1.3)
- {{httpheadew("eawwy-data")}}
