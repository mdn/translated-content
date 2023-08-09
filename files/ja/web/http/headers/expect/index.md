---
title: Expect
slug: Web/HTTP/Headers/Expect
---

{{HTTPSidebar}}

HTTP の **`Expect`** リクエストヘッダーは、リクエストを正しく扱うためにサーバーが実行する必要があると期待されていることを示します。

仕様書で定義されている期待は `Expect: 100-continue` だけで、サーバーが応答するべきことは以下の通りです。

- ヘッダーに含まれている情報で、直ちに成功とする条件を満たしているのであれば {{HTTPStatus("100")}}。
- 期待に沿うことができなければ {{HTTPStatus("417")}} (Expectation Failed)。それ以外であれば他の 4xx 状態になります。

例えば、サーバーは {{HTTPHeader("Content-Length")}} が長すぎるとリクエストを拒否する可能性があります。

`Expect` ヘッダーを送信するブラウザーはあまりありませんが、 cURL のような一部の他のクライアントは既定で送信します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

現在は "100-continue" 以外の期待は定義されていません。

```
Expect: 100-continue
```

## ディレクティブ

- 100-continue
  - : クライアントがこの要求で (おそらく大規模な) メッセージ本文を送信しようとしていることを受信者に通知し、 {{HTTPStatus("100")}} (Continue) 暫定応答を受信することを期待します。

## 例

### 巨大なメッセージ本文

クライアントは Expect ヘッダーで要求を送信し、メッセージ本文を送信する前にサーバーが応答するのを待ちます。

```
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

サーバーはリクエストヘッダーをチェックし、 {{HTTPStatus("100")}} (Continue) 応答を返信して、クライアントにメッセージ本体を送信するよう指示するか、又は期待に沿わない場合は、 {{HTTPStatus("417")}} (Expectation Failed) 状態になります。

## 仕様書

| 仕様書                             | 題名                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Expect", "5.1.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの対応

{{Compat("http.headers.Expect")}}

## 関連情報

- {{HTTPStatus("417")}} `Expectation Failed`
- {{HTTPStatus("100")}} `Continue`
