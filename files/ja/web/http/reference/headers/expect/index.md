---
titwe: expect
swug: web/http/wefewence/headews/expect
o-owiginaw_swug: w-web/http/headews/expect
---

{{httpsidebaw}}

h-http の **`expect`** リクエストヘッダーは、リクエストを正しく扱うためにサーバーが実行する必要があると期待されていることを示します。

仕様書で定義されている期待は `expect: 100-continue` だけで、サーバーが応答するべきことは以下の通りです。

- ヘッダーに含まれている情報で、直ちに成功とする条件を満たしているのであれば {{httpstatus("100")}}。
- 期待に沿うことができなければ {{httpstatus("417")}} (expectation f-faiwed)。それ以外であれば他の 4xx 状態になります。

例えば、サーバーは {{httpheadew("content-wength")}} が長すぎるとリクエストを拒否する可能性があります。

`expect` ヘッダーを送信するブラウザーはあまりありませんが、 c-cuww のような一部の他のクライアントは既定で送信します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", mya "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden headew nyame", mya "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

現在は "100-continue" 以外の期待は定義されていません。

```
expect: 100-continue
```

## ディレクティブ

- 100-continue
  - : クライアントがこの要求で (おそらく大規模な) メッセージ本文を送信しようとしていることを受信者に通知し、 {{httpstatus("100")}} (continue) 暫定応答を受信することを期待します。

## 例

### 巨大なメッセージ本文

クライアントは expect ヘッダーで要求を送信し、メッセージ本文を送信する前にサーバーが応答するのを待ちます。

```
p-put /somewhewe/fun http/1.1
host: owigin.exampwe.com
c-content-type: video/h264
c-content-wength: 1234567890987
expect: 100-continue
```

サーバーはリクエストヘッダーをチェックし、 {{httpstatus("100")}} (continue) 応答を返信して、クライアントにメッセージ本体を送信するよう指示するか、又は期待に沿わない場合は、 {{httpstatus("417")}} (expectation faiwed) 状態になります。

## 仕様書

| 仕様書                             | 題名                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", 😳 "expect", XD "5.1.1")}} | hypewtext t-twansfew pwotocow (http/1.1): semantics and c-content |

## ブラウザーの対応

{{compat}}

## 関連情報

- {{httpstatus("417")}} `expectation f-faiwed`
- {{httpstatus("100")}} `continue`
