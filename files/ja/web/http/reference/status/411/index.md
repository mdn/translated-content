---
title: 411 Length Required
slug: Web/HTTP/Reference/Status/411
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`411 Length Required`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、{{HTTPHeader("Content-Length")}} ヘッダーが定義されていないリクエストをサーバーが受け入れないことを示します。

> [!NOTE]
> チャンクの連続でデータを送信する場合は、`Content-Length` ヘッダーを省略し、各チャンクの先頭に現在のチャンクの長さを 16 進数形式で記載する必要があります。
> 詳細は {{HTTPHeader("Transfer-Encoding")}} を参照してください。

## ステータス

```http
411 Length Required
```

## 例

### チャンク化した POST リクエスト

以下のリクエストはチャンク化して送信されます。これは、[ストリームへの書き込み](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback)などの場合の既定のデータ送信方法です。

```http
POST /translate/de HTTP/1.1
Host: api.example.com
Content-Type: application/json
Transfer-encoding: chunked

2C
{"text": "Hurry up, Ayşe is hungry!"}
0
```

この場合、サーバーは {{HTTPHeader("Content-Length")}} ヘッダーを持つ一回のリクエストを想定しており、411 レスポンスを返します。

```http
HTTP/1.1 411 Length Required
Content-Type: application/json
Content-Length: 110

{
  "message": "Requests must have a content length header.",
  "documentation": "http://api/example.com/docs/errors",
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
