---
title: 510 Not Extended
slug: Web/HTTP/Reference/Status/510
original_slug: Web/HTTP/Status/510
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

HTTP の **`510 Not Extended`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)のステータスコードで、クライアントのリクエストで HTTP 拡張 ({{RFC("2774")}}) が宣言され、リクエストの処理に使用すべきであると指定されているにもかかわらず、その拡張に対応していない場合にコードが送信されます。

## ステータス

```http
510 Not Extended
```

## 例

### 拡張機能に対応していない場合

次の例では、クライアントは `C-MAN` ヘッダーで必須の拡張子を指定したリクエストを送信します。
{{HTTPHeader("Connection")}} ヘッダーは、これらの拡張機能を[ホップバイホップ](/ja/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers)で処理することを指定します。
{{Glossary("Proxy_server", "プロキシー")}}は拡張リクエストを転送しますが、トランジション中に {{HTTPHeader("Connection")}} ヘッダーが削除されます。元のサーバーは `M-GET` メソッドに関する情報を取得しないため、 `510` をレスポンスとして送信します。

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 510 Not Extended
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
