---
title: Expect ヘッダー
short-title: Expect
slug: Web/HTTP/Reference/Headers/Expect
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

HTTP の **`Expect`** {{Glossary("Request header", "リクエストヘッダー")}}は、リクエスト全体を完全に処理するために、サーバーに必要となる要件があることを示しています。

リクエストに `Expect: 100-continue` ヘッダーが含まれている場合、サーバーは {{HTTPStatus("100", "100 Continue")}} レスポンスを送信し、リクエストコンテンツの残りの部分を受け入れる準備ができている、あるいは受け入れる能力があることを示します。
クライアントがエラーが発生する可能性が高いと予想している場合、例えば、前回認証情報の有効性を確認せずに状態を変更する操作を送信する場合などには、`100` レスポンスを待つことが役立つことがあります。

サーバーが要件に応えられない場合は {{HTTPStatus("417", "417 Expectation Failed")}} レスポンスが返され、それ以外にもその他のステータス（例：クライアントエラーの場合は [4XX](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス) ステータス、あるいは追加の処理を必要とせずにリクエストが正常に解決された場合は [2XX](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス) ステータスなど、他のステータスが返されます。

`Expect` ヘッダーを送信するブラウザーはあまりありませんが、一部のクライアント（コマンドラインツール）はデフォルトで送信します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Expect: 100-continue
```

## ディレクティブ

定義されている要件は一つしかありません。

- `100-continue`
  - : クライアントがこの要求で（おそらく大規模な）メッセージ本体を送信しようとしていることを受信者に通知し、{{HTTPStatus("100", "100 Continue")}} 暫定レスポンスを受信することを期待します。

## 例

### 巨大なメッセージ本文

クライアントは `Expect` ヘッダー付きでリクエストを送信し、メッセージ本文を送信する前にサーバーが応答するのを待ちます。

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

サーバーはヘッダーを調べ、レスポンスを生成します。このレスポンス内の {{HTTPStatus("100", "100 Continue")}} により、クライアントに対してメッセージ本文を送信するよう指示します。

```http
HTTP/1.1 100 Continue
```

クライアントは、実際のデータを送信することでリクエストを完了します。

```http
[PUT リクエストのコンテンツとしての動画データ]
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus("417", "417 Expectation Failed")}}
- {{HTTPStatus("100", "100 Continue")}}
