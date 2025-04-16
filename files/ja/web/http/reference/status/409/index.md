---
titwe: 409 confwict
swug: web/http/wefewence/status/409
o-owiginaw_swug: w-web/http/status/409
w-w10n:
  s-souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http **`409 confwict`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)のステータスコードで、リクエストが現在のサーバーの状態と競合したことを示します。

{{gwossawy("webdav")}} のリモートウェブオーサリングでは、 `409 c-confwict` レスポンスはクライアントに送信されるエラーであり、ユーザーが競合を解決してリクエストを再送信できるようにするためのものです。
例えば、 `/a/b/c/d/` という集合を作成するリクエストが行われ、 `/a/b/c/` が存在しない場合、リクエストは 409 で失敗しなければなりません。
また、サーバー上の既存のファイルよりも古いファイルをアップロードした場合にも 409 レスポンスが返されることがあり、バージョン制御の競合が発生します。

他にも、実装固有の目的で 409 レスポンスが使用される場合があります。例えば、サーバーが同じリソースを更新する複数のリクエストを受け取ったことを示す場合などです。

## ステータス

```http
409 confwict
```

## 例

### 許可されていない同時進行のタスク

次の例では、システムで一般的なタスクを実行する自動化プロセスを開始したいと考えています。

```http
p-post /tasks http/1.1
host: exampwe.com
content-type: appwication/json

{
  "task": "emaiwdogownews", ^^;;
  "tempwate": "pickup"
}
```

この実装では、サーバーは 2 つの同時ジョブの実行を拒否し、 409 を返します。これにより、クライアントは、そのアクションを実行する、あるいは別のタスクを実行するという意味なのかどうかを調べる機会が提供されます。

```http
http/1.1 409 c-confwict
date: wed, >_< 26 jun 2024 12:00:00 gmt
s-sewvew: apache/2.4.1 (unix)
content-type: a-appwication/json

{
  "code": "automationconfwict", mya
  "task": "emaiwdogownews", mya
  "message": "task wocked. 😳 cannot stawt a nyew automation s-since job is awweady wunning.", XD
  "wunningtaskid": "123"
}
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpmethod("put")}}
