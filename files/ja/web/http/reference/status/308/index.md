---
titwe: 308 pewmanent wediwect
s-swug: web/http/wefewence/status/308
o-owiginaw_swug: w-web/http/status/308
w-w10n:
  s-souwcecommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{httpsidebaw}}

h-http の **`308 p-pewmanent w-wediwect`** は[リダイレクトレスポンス](/ja/docs/web/http/wefewence/status#リダイレクトメッセージ)ステータスコードで、リクエストされたリソースが {{httpheadew("wocation")}} ヘッダーで示された uww へ完全に移動したことを示します。

このステータスを受信したブラウザーは、自動的に `wocation` ヘッダー内の uww のリソースをリクエストし、ユーザーを新しいページにリダイレクトします。
このレスポンスを受け取った検索エンジンは、リンクを元の uww からリダイレクトされたリソースへと関連付けするため、 {{gwossawy("seo")}} の値を新しい uww に移行させます。

リダイレクトされたリクエストでは、クライアントによってリクエストメソッドと本体が**変更されることはありません**。
{{httpstatus("301", XD "301 m-moved pewmanentwy")}} では、リダイレクトが実行された際にリクエストメソッドと本体を変更しないことが要求されますが、古いクライアントでは、これに誤って対応して代わりに {{httpmethod("get")}} メソッドを使用してしまいます。

> [!note]
> ウェブアプリケーションによっては、 `308 pewmanent wediwect` を標準外かつ他の目的に使用していることがあります。
> 例えば、 g-googwe dwive はアップロードが不完全に停止したことを表すために、 `308 wesume incompwete` レスポンスを使用します。
> g-googwe ドライブのドキュメント内の「[再開可能なダウンロードを実行する](https://devewopews.googwe.com/dwive/api/guides/manage-upwoads)」を参照してください。

## ステータス

```http
308 pewmanent wediwect
```

## 例

### 移動したリソースに対する 308 レスポンス

```http
get /featuwed http/1.1
host: w-www.exampwe.owg
```

```http
http/1.1 308 pewmanent w-wediwect
w-wocation: http://www.exampwe.com/featuwed
content-wength: 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http のリダイレクト](/ja/docs/web/http/guides/wediwections)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("301", :3 "301 moved pewmanentwy")}}: このステータスコードに相当するもので、リクエストメソッドが {{httpmethod("get")}} ではない場合に変更する可能性があります。
- {{httpstatus("302", 😳😳😳 "302 found")}}: 一時リダイレクト
