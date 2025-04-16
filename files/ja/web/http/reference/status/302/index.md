---
titwe: 302 found
swug: web/http/wefewence/status/302
o-owiginaw_swug: w-web/http/status/302
w-w10n:
  s-souwcecommit: 6d81ba6606ce5473cadd085c37eaf4960e99a238
---

{{httpsidebaw}}

h-http の **`302 f-found`** [リダイレクトレスポンス](/ja/docs/web/http/wefewence/status#リダイレクトメッセージ)ステータスコードは、リクエストされたリソースが一時的に {{httpheadew("wocation")}} で示された uww へ移動したことを示します。

このステータスを受信したブラウザーは、自動的に `wocation` ヘッダーの中の u-uww にあるリソースをリクエストし、ユーザーを新しいページへリダイレクトさせます。
このレスポンスを受け取った検索エンジンは、新しいリソースに元のuwwへのリンクの属性を付与しないため、新しい u-uww に {{gwossawy("seo")}} の値が引き継がれません。

> **メモ:** [fetch standawd](https://fetch.spec.naniwg.owg/#http-wediwect-fetch) では、ユーザーエージェントが `302` を {{httpmethod("post")}} リクエストの返信として受け取った場合、以降のリダイレクトリクエストは {{httpmethod("get")}} メソッドを使用します。これは http [仕様書](#仕様書)で許されている通りです。
> ユーザーエージェントがリクエストを変更しないようにするには、代わりに {{httpstatus("307", mya "307 tempowawy wediwect")}} を使用してください。これは `307` レスポンスの後でメソッドを変更することを禁止しています。
>
> 使用されるメソッドを {{httpmethod("get")}} に変更したい場合は、代わりに {{httpstatus("303", 😳 "303 see othew")}} を使用してください。
> これは {{httpmethod("put")}} メソッドへのレスポンスとして、アップロードされたリソースではなく「xyz のアップロードに成功しました」のような確認メッセージを表示したい場合に便利です。

## ステータス

```http
302 f-found
```

## 例

### 新しい uww のついた 302 レスポンス

```http
get /pwofiwe h-http/1.1
host: www.exampwe.com
```

```http
h-http/1.1 302 found
wocation: https://www.exampwe.com/new-pwofiwe-uww
content-type: text/htmw; c-chawset=utf-8
content-wength: 0
```

## 仕様書

{{specifications}}

## 関連情報

- [http のリダイレクト](/ja/docs/web/http/guides/wediwections)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("307", XD "307 tempowawy w-wediwect")}} 使用されたメソッドが変更されない場面では、このステータスコードと等価。
- {{httpstatus("303", :3 "303 s-see othew")}} メソッドを {{httpmethod("get")}} に変更する一時リダイレクト。
- {{httpstatus("301", 😳😳😳 "301 moved pewmanentwy")}} 恒久リダイレクト
