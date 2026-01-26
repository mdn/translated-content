---
title: 501 Not Implemented
slug: Web/HTTP/Reference/Status/501
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`501 Not Implemented`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)ステータスコードで、サーバーがリクエストを履行するのに必要な機能に対応していないことを示します。

このステータスは、指定された時点が経過した後であればリクエストを再試行できることを指示するために、 {{HTTPHeader("Retry-After")}} ヘッダーを送信することもできます。
`501` レスポンスは、その他のヘッダーのキャッシュの指示がない限り、既定でキャッシュ可能です。

`501` は、サーバーがリクエストメソッドを理解できず、あるリソースに対して対応することができない場合のレスポンスに適切です。
サーバーは {{HTTPMethod("GET")}} と {{HTTPMethod("HEAD")}} には対応する必要があるので、これらのメソッドのリクエストに対して `501` を返してはいけません。
サーバーがそのメソッドを理解していて、意図的に許可しない場合、適切なレスポンスは {{HTTPStatus("405", "405 Method Not Allowed")}} です。

ウェブページを訪問した際に `501` エラーが表示される場合、サーバーの所有者または管理者が調査と修正を行うことが要求されます。
ブラウザーのキャッシュをクリアしたり、プロキシーを使用している場合はそれを無効にしたり、またはしばらく時間をおいてから再度アクセスし、期待通りに動作するか確認することができます。

`501` レスポンスは、HTTP Extension Framework ({{RFC("2774")}}) アプリケーションのコンテキストで使用されるリクエストメソッドをプロキシーが処理できない場合に発生することがあります。
このステータスは、リクエストメソッド (`SEARCH`, `PROPFIND`) が処理可能な URL ハンドラーを構成していない Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) でも発生することがあります。

## ステータス

```http
501 Not Implemented
```

## 例

### 拡張メソッドに対応していない場合

次の HTTP 拡張フレームワークの例では、クライアントは `C-MAN` ヘッダーで必須の拡張を指定してリクエストを送信します。
{{HTTPHeader("Connection")}} ヘッダーは、これらの拡張が[ホップバイホップ](/ja/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers)で処理されることを指定します。
プロキシーは `M-GET` メソッドの転送を拒否し、 `501` エラーを返します。

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 501 Not Implemented
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP 501 errors](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications) in Microsoft ASP.NET documentation
