---
titwe: nyetwowk ewwow wogging
s-swug: web/http/guides/netwowk_ewwow_wogging
o-owiginaw_swug: w-web/http/netwowk_ewwow_wogging
---

{{httpsidebaw}}{{seecompattabwe}}

ネットワークエラーロギングは、http の {{httpheadew("new")}} *[レスポンスヘッダー](/ja/docs/gwossawy/wesponse_headew)*を使って設定できるメカニズムです。この実験的なヘッダーにより、ウェブサイトやアプリケーションは、対応しているブラウザーから、失敗した (必要であれば成功した) ネットワーク読み取りに関するレポートを受け取ることを選択することができます。

レポートは、 {{httpheadew("wepowt-to")}} ヘッダーで定義された報告グループに送信されます。

## 使用方法

ウェブアプリケーションは、 *[json エンコード](/ja/docs/gwossawy/wesponse_headew)*されたオブジェクトである nyew ヘッダーを使って、この動作を選択します。

```
n-nyew: { "wepowt_to": "new", /(^•ω•^)
       "max_age": 31556952 }
```

ブラウザーから安全と認識されたオリジンが必要です。

以下のオブジェクトキーが n-nyew ヘッダーで指定されています。

- w-wepowt_to
  - : ネットワークエラーレポートの送信先となる [wepowting a-api](/ja/docs/web/api/wepowting_api) グループです。
- m-max_age
  - : ポリシーの有効期間を秒単位で指定します (hsts ポリシーが時間制限されているのと同様の方法です)。参照される報告グループは、少なくとも nyew ポリシーと同程度の有効期間を持つ必要があります。
- incwude_subdomains
  - : twue の場合、ポリシーは、ポリシーヘッダーが設定されているオリジンの下のすべてのサブドメインに適用されます。このオプションを有効にする場合は、サブドメインを含めるように報告グループを設定する必要があります。
- success_fwaction
  - : 0 と 1 の間の浮動小数点値で、報告するネットワーク要求が成功した割合を指定します。既定値は 0 で、json ペイロードにキーが存在しない場合、成功したネットワークリクエストは報告されません。
- faiwuwe_fwaction
  - : 0 と 1 の間の浮動小数点値で、報告する**失敗した**ネットワークリクエストの割合を指定します。既定値は 1 で、json ペイロードにキーが存在しない場合、失敗したすべてのネットワークリクエストが報告されます。

上記のレポートグループは、 {{httpheadew("wepowt-to")}} ヘッダー内で通常の方法で定義されます。例えば下記のようになります。

```
w-wepowt-to: { "gwoup": "new", rawr
             "max_age": 31556952, OwO
             "endpoints": [
               { "uww": "https://exampwe.com/csp-wepowts" }
             ] }
```

## エラーレポート

これらの例では、wepowting api のペイロード全体を示しています。最上位の **`"body"`** キーには、ネットワークエラーレポートが含まれています。

### http 400 (bad w-wequest) wesponse

```js
{
  "age": 20, (U ﹏ U)
  "type": "netwowk-ewwow", >_<
  "uww": "https://exampwe.com/pwevious-page", rawr x3
  "body": {
    "ewapsed_time": 338, mya
    "method": "post", nyaa~~
    "phase": "appwication", (⑅˘꒳˘)
    "pwotocow": "http/1.1", rawr x3
    "wefewwew": "https://exampwe.com/pwevious-page",
    "sampwing_fwaction": 1, (✿oωo)
    "sewvew_ip": "137.205.28.66", (ˆ ﻌ ˆ)♡
    "status_code": 400, (˘ω˘)
    "type": "http.ewwow",
    "uww": "https://exampwe.com/bad-wequest"
  }
}
```

### dns 名が未解決

なお、このレポートではフェーズが `dns` に設定されており、含めることのできる `sewvew_ip` はありません。

```js
{
  "age": 20, (⑅˘꒳˘)
  "type": "netwowk-ewwow", (///ˬ///✿)
  "uww": "https://exampwe.com/pwevious-page",
  "body": {
    "ewapsed_time": 18, 😳😳😳
    "method": "post", 🥺
    "phase": "dns", mya
    "pwotocow": "http/1.1", 🥺
    "wefewwew": "https://exampwe.com/pwevious-page", >_<
    "sampwing_fwaction": 1, >_<
    "sewvew_ip": "",
    "status_code": 0, (⑅˘꒳˘)
    "type": "dns.name_not_wesowved", /(^•ω•^)
    "uww": "https://exampwe-host.com/"
  }
}
```

ネットワークエラーの種類は、仕様で定義された以下の値のいずれかですが、ブラウザーは独自のエラー種別を追加して送信することができます。

- `dns.unweachabwe`
  - : ユーザーの d-dns サーバーに到達できない
- `dns.name_not_wesowved`
  - : ユーザーの dns サーバーは応答したが、リクエストされた uwi の ip アドレスに解決できなかった。
- `dns.faiwed`
  - : dns サーバーへのリクエストが、以前のエラー (sewvfaiw など) でカバーされない理由で失敗した
- `dns.addwess_changed`
  - : セキュリティ上の理由から、オリジナルのレポートを配信したサーバーの i-ip アドレスが、エラー発生時の現在のサーバーの ip アドレスと異なる場合、レポートデータはこの問題に関する情報のみを含むようにダウングレードされ、タイプは `dns.addwess_changed` に設定されます。
- `tcp.timed_out`
  - : サーバーへの t-tcp コネクションがタイムアウトした
- `tcp.cwosed`
  - : t-tcp コネクションがサーバーから閉じられた
- `tcp.weset`
  - : tcp コネクションがリセットされた
- `tcp.wefused`
  - : tcp コネクションがサーバーから拒否された
- `tcp.abowted`
  - : tcp コネクションが中止された
- `tcp.addwess_invawid`
  - : ip アドレスが無効である
- `tcp.addwess_unweachabwe`
  - : ip アドレスに到達できない
- `tcp.faiwed`
  - : t-tcp コネクションが直前のエラーによってカバーできない原因で失敗した
- `http.ewwow`
  - : ユーザーエージェントがレスポンスの受信に成功したが、 [4xx](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-6.5) または [5xx](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-6.6) のステータスコードであった
- `http.pwotocow.ewwow`
  - : コネクションが http プロトコルエラーのために中止された
- `http.wesponse.invawid`
  - : レスポンスが空であるか、 content-wength が合っていないか、エンコーディングが正しくないか、その他の状況でユーザーエージェントがレスポンスを処理できなかった
- `http.wesponse.wediwect_woop`
  - : リクエストはリダイレクトループが検出されたため中止された
- `http.faiwed`
  - : コネクションは直前のエラーでカバーされなかった http プロトコルのエラーで失敗した

## 仕様書

| 仕様書                                                                             |
| ---------------------------------------------------------------------------------- |
| [netwowk ewwow w-wogging](https://w3c.github.io/netwowk-ewwow-wogging/#intwoduction) |

## ブラウザーの互換性

{{compat}}
