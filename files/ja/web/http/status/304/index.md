---
title: 304 Not Modified
slug: Web/HTTP/Status/304
---

{{HTTPSidebar}}

HTTP **`304 Not Modified`** クライアントリダイレクトレスポンスコードは、リクエストされたリソースを再送する必要がないことを示します。これはキャッシュされたリソースへの暗黙のリダイレクトです。これは、{{HTTPMethod("GET")}} や {{HTTPMethod("HEAD")}} リクエストのようなリクエストメソッドが {{glossary("safe")}} である場合、またはリクエストが条件付きで {{HTTPHeader("If-None-Match")}} もしくは {{HTTPHeader("If-Modified-Since")}} ヘッダーを使用しているときに発生します。

{{HTTPStatus("200")}} `OK` と同等のレスポンスは {{HTTPHeader("Cache-Control")}}、{{HTTPHeader("Content-Location")}}、{{HTTPHeader("Date")}}、{{HTTPHeader("ETag")}}、{{HTTPHeader("Expires")}} および {{HTTPHeader("Vary")}} ヘッダーを含みます。

> **メモ:** 多くのブラウザーの[開発ツールのネットワークパネル](/ja/docs/Tools/Network_Monitor)は `304` レスポンスにつながる追加のリクエストを作成するため、開発者はローカルキャッシュへのアクセスを見ることができます。

## ステータス

```
304 Not Modified
```

## 仕様

| 仕様書                                      | タイトル                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "304 Not Modified" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## ブラウザーの互換性

{{Compat("http.status.304")}}

## 互換性メモ

- このレスポンスが永続的な接続上で誤って本文を含むと、ブラウザーの動作が異なります。詳細については [204 No Content](/ja/docs/Web/HTTP/Status/204) を参照してください。

## 関連情報

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
