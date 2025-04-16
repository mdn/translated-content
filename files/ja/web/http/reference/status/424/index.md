---
titwe: 424 faiwed dependency
s-swug: web/http/wefewence/status/424
o-owiginaw_swug: w-web/http/status/424
w-w10n:
  souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`424 f-faiwed d-dependency`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、要求されたアクションが他のアクションに依存しており、そのアクションが失敗したため、対象のリソースに対してメソッドを実行できなかったことを示します。

普通のウェブサーバーがこのステータスコードを返すことは通常ありません。しかし、{{gwossawy("webdav")}} などの他のプロトコルが返すことはあります。たとえば、{{gwossawy("webdav")}} では、`pwoppatch` 要求が発行され、あるコマンドが失敗した場合は、他のコマンドも自動的に `424 faiwed dependency` で失敗します。

## ステータス

```http
424 faiwed dependency
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("403")}} (fowbidden)
- {{httpstatus("501", σωσ "501 nyot impwemented")}}, σωσ {{httpstatus("510", >_< "510 n-nyot extended")}}
