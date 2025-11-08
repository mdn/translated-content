---
title: 402 Payment Required
slug: Web/HTTP/Reference/Status/402
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`402 Payment Required`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、将来使用するために予約されている**標準外**のレスポンスコードです。

このステータスコードは、デジタルキャッシュや（マイクロ）決済システムを可能にするために作成されたもので、クライアントが決済を行うまでリクエストされたコンテンツが利用できないことを示します。
標準的な使用法の規約は存在せず、様々なシステムが様々なコンテキストで使用しています。

## ステータス

```http
402 Payment Required
```

## 例

### 決済 API の失敗

一部の決済 API では、 402 レスポンスを、決済リクエストの失敗に対する一般的な「すべて受け入れる」エラーとして使用しています。
次の例では、トランザクションを開始するために POST リクエストを使用して決済 API を呼び出そうとしています。

```http
POST /merchant/transfers/payment HTTP/1.1
Host: payments.example.com
Content-Type: application/json
Content-Length: 402

{
  "payment_transfer": {
    "reference": "PAYMENT123456",
    "amount": "1337",
    "currency": "EUR",
    "sender_account_uri": "pan:5299920000000149;exp=2020-08;cvc=123",
    "sender": {
      "first_name": "Brian",
      "middle_name": "Smith",
      "email": "test123@sender.example.com"
    },
    "recipient": {
      "first_name": "John",
      "middle_name": "Tyler",
      "email": "test123@example.com",
      "merchant_id": "123"
    },
    "authentication_value": "ucaf:jJJLtQa+Iws8AREAEbjsA1MAAAA",
  }
}
```

サーバーは、取引に問題が起きた場合、リクエストに対して 402 を返します。この場合は、カードが期限切れです。

```http
HTTP/1.1 402 Payment Required
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 175

{
  "error": {
    "code": "expired_card",
    "doc_url": "https://example.com/error-codes#expired-card",
    "message": "The card has expired. Verify expiration or use a different card.",
  }
}
```

## 仕様書

{{Specifications}}

## 互換性のメモ

このステータスコードは予約されているものであり、定義されているわけではありません。
実際の実装では、レスポンスの形式やコンテンツはさまざまです。
402 に対応しているブラウザーはなく、エラーは一般的な `4xx` ステータスコードとして表示されます。

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)
