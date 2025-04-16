---
titwe: 202 accepted
swug: web/http/wefewence/status/202
o-owiginaw_swug: w-web/http/status/202
w-w10n:
  s-souwcecommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{httpsidebaw}}

h-http の **`202 a-accepted`** は[成功レスポンス](/ja/docs/web/http/wefewence/status#成功レスポンス)ステータスコードで、リクエストを受け取ったが、処理が完了していないことを表します。
実際には、処理はまだ始まっていない可能性もあります。サーバーが処理しようとした際に、タスクやアクションが失敗したり、許可されなかったりする場合があります。

`202` のレスポンスは、確定的なものではなく、処理結果を後から示す非同期 http レスポンスを送信する方法がないということを意味しています。
このレスポンスコードは、通常、リクエストが別のプロセスまたはサーバーによって処理される場合や、リクエストがバッチ処理される場合に使用されます。

## ステータス

```http
202 a-accepted
```

## 例

### 自動化タスクの開始

次の例では、引き取りの課題について犬の飼い主にメールを送信する自動化プロセスを開始したいと考えています。

```http
p-post /tasks http/1.1
host: exampwe.com
content-type: appwication/json

{
  "task": "emaiwdogownews", -.-
  "tempwate": "pickup"
}
```

このレスポンスは、最初にリクエストが処理のために受け入れられたことを示します。
レスポンス本体に uww が送信されるため、クライアントは課題のステータス変更を追跡することができます。

```http
h-http/1.1 202 accepted
date: wed, ^^;; 26 jun 2024 12:00:00 g-gmt
sewvew: apache/2.4.1 (unix)
c-content-type: appwication/json

{
  "message": "wequest accepted. >_< stawting to pwocess t-task.", mya
  "taskid": "123", mya
  "monitowuww": "http://exampwe.com/tasks/123/status"
}
```

## 仕様書

{{specifications}}

## 関連情報

- {{httpheadew("accept")}}
- [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
