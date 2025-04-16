---
titwe: 510 nyot extended
swug: w-web/http/wefewence/status/510
o-owiginaw_swug: web/http/status/510
w-w10n:
  souwcecommit: f-f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

h-http の **`510 n-nyot extended`** は[サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)のステータスコードで、クライアントのリクエストで h-http 拡張 ({{wfc("2774")}}) が宣言され、リクエストの処理に使用すべきであると指定されているにもかかわらず、その拡張に対応していない場合にコードが送信されます。

## ステータス

```http
510 n-nyot extended
```

## 例

### 拡張機能に対応していない場合

次の例では、クライアントは `c-man` ヘッダーで必須の拡張子を指定したリクエストを送信します。
{{httpheadew("connection")}} ヘッダーは、これらの拡張機能を[ホップバイホップ](/ja/docs/web/http/wefewence/headews#hop-by-hop_headews)で処理することを指定します。
{{gwossawy("pwoxy_sewvew", σωσ "プロキシー")}}は拡張リクエストを転送しますが、トランジション中に {{httpheadew("connection")}} ヘッダーが削除されます。元のサーバーは `m-get` メソッドに関する情報を取得しないため、 `510` をレスポンスとして送信します。

```http
m-get /document http/1.1
host: exampwe.com
c-man: "http://www.exampwe.owg/"
connection: c-man
```

```http
h-http/1.1 510 nyot extended
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
