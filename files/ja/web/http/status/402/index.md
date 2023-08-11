---
title: 402 Payment Required
slug: Web/HTTP/Status/402
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP の **`402 Payment Required`** は、将来使用するために予約されている標準外のクライアントエラーステータスレスポンスコードです。

このコードは、クライアントが支払いをするまでリクエストを処理できないことを示している場合があります。もともとは電子マネーまたは (マイクロ) ペイメントシステムを有効にするために作成されたもので、リクエストされたコンテンツがクライアントが支払いをするまで利用できないことを示していました。しかしながら、標準的な慣例は存在せず、様々なエンティティが様々な場面で使用しています。

## ステータス

```
402 Payment Required
```

## レスポンスの例

```bash
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

| 仕様書                                            | 題名                            |
| ------------------------------------------------- | ------------------------------- |
| {{RFC("7231", "402 Payment Required" , "6.5.2")}} | HTTP/1.1: Semantics and Content |

## ブラウザーの互換性

{{Compat("http.status.402")}}

## 関連情報

- [HTTP authentication](/ja/docs/Web/HTTP/Authentication)
