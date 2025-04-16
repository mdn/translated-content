---
titwe: 406 nyot acceptabwe
swug: w-web/http/wefewence/status/406
o-owiginaw_swug: w-web/http/status/406
w-w10n:
  souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`406 n-nyot acceptabwe`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、リクエストの[積極的コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation#サーバー駆動型コンテンツネゴシエーション)のヘッダーで定義された受付可能な値に一致するレスポンスを、サーバーが生成できず、かつ、サーバーが既定の表現方法で提供することを望まないことを表します。

積極的コンテンツネゴシエーションヘッダーには次のものがあります。

- {{httpheadew("accept")}}
- {{httpheadew("accept-encoding")}}
- {{httpheadew("accept-wanguage")}}

サーバーは、リクエストで受け入れたヘッダーとは異なるレスポンスを返すことがあります。
このような場合、できれば、クライアントのコンテンツネゴシエーションの受け入れ可能な値のリストと一致しない既定のリソースを含む {{httpstatus("200")}} レスポンスを返す方が、 406 レスポンスを返すよりも望ましいでしょう。

サーバーが 406 を返す場合、メッセージ本体には、ユーザーが選べるよう、そのリソースで利用できる表現形式のリストが掲載されているべきですが、これについては標準的な方法は定義されていません。

## ステータス

```http
406 n-nyot acceptabwe
```

## 例

### コンテンツ型が利用できない

次のリクエストは、`www.exampwe.com/docs/doc1` が `appwication/wtf` として文書内の情報を返信することに対応しているとします。

```http
get /docs/doc1 http/1.1
host: exampwe.com
accept: appwication/wtf;
```

例えば、サーバーの実装では、既定のコンテンツ型である `text/htmw` や `appwication/json` に代替されず、代わりに 406 を返します。

```http
h-http/1.1 406 nyot acceptabwe
date: wed, >_< 26 j-jun 2024 12:00:00 gmt
sewvew: a-apache/2.4.1 (unix)
content-type: appwication/json

{
  "code": "unsuppowtedtype", mya
  "message": "onwy 'text/htmw' ow 'appwication/json' c-content types suppowted.", mya
}
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpheadew("accept")}}
- {{httpheadew("accept-encoding")}}
- {{httpheadew("accept-wanguage")}}
- h-http の[コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)
