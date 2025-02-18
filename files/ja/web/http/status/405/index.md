---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

HTTP の **`405 Method Not Allowed`** [クライアントエラーレスポンス](/ja/docs/Web/HTTP/Status#クライアントエラーレスポンス)ステータスコードは、リクエストメソッドをサーバー側で認識しているが、対象のリソースでは対応していないことを示します。
サーバーは、対象のリソースで現在対応しているメソッドの一覧を含む {{HTTPHeader("Allow")}} ヘッダーフィールドを、 405 レスポンスの中で生成しなければなりません。

ファイルやディレクトリ－に正しくないサーバー側権限を設定すると、リクエストが成功するはずであるにもかかわらず、 405 レスポンスが発生する可能性があります。

## ステータス

```http
405 Method Not Allowed
```

## 例

### TRACE メソッドが許可されない場合

サーバーの所有者は、セキュリティ上の懸念から、 `TRACE` メソッドの使用を許可しないことが多いです。
次の例は、サーバーが `TRACE` の使用を許可していない典型的なレスポンスを示しています。

```http
TRACE / HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 405 Method Not Allowed
Content-Length: 0
Date: Fri, 28 Jun 2024 14:30:31 GMT
Server: ECLF (nyd/D179)
Allow: GET, POST, HEAD
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- {{HTTPHeader("Allow")}}
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.405)
- [How to Fix 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [HTTP 405 のトラブルシューティング](https://learn.microsoft.com/ja-jp/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
