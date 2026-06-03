---
title: Keep-Alive ヘッダー
short-title: Keep-Alive
slug: Web/HTTP/Reference/Headers/Keep-Alive
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Keep-Alive`** は{{Glossary("request header", "リクエストヘッダー")}}および{{Glossary("Response header", "レスポンスヘッダー")}}で、送信者がタイムアウトと最大リクエスト数に関する接続の使用方法のヒントを伝えることができます。

> [!NOTE]
> `Keep-Alive` が効果を持つためには、 {{HTTPHeader("Connection", "Connection: keep-alive")}} ヘッダー設定する必要があります。

HTTP/1.0 では、デフォルトで各リクエスト/レスポンスの操作後に接続が閉じられるため、HTTP/1.0 における持続的接続は明示的に交渉する必要があります。
クライアントやサーバーによっては、持続的接続に関する従来の手法との互換性を保ちたい場合があり、そのためには `Connection: keep-alive` リクエストヘッダーを使用できます。
接続に関する追加引数は、`Keep-Alive` ヘッダーでリクエストできます。

> [!WARNING]
> {{HTTPHeader("Connection")}} や {{HTTPHeader("Keep-Alive")}} などの接続固有のヘッダーフィールドは [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) および [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) では禁止されています。 Chrome と Firefox は HTTP/2 レスポンスでこれらを無視しますが、 Safari は HTTP/2 仕様の要件に準拠しており、これらを含むレスポンスは読み込まれません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("request header", "リクエストヘッダー")}},
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Keep-Alive: <parameters>
```

## ディレクティブ

- `<parameters>`
  - : カンマで区切られた引数のリスト。各引数は識別子と等号 (`=`) で区切られた値で構成されます。以下の識別子が利用可能です。
    - `timeout`
      - : 整数で、ホストがアイドル状態の接続を閉じられる前に開いたままにしておく秒数を指定します。
        ホストがデータを送受信していなければ、接続はアイドル状態です。ホストはアイドル接続を `timeout` 秒以上開いたままにすることができる場合がありますが、少なくとも `timeout` 秒間は接続を維持するよう努めるべきです。
    - `max`
      - : 整数で、この接続を閉じる前に送信できるリクエストの最大数です。
        `0` でない場合、この値はパイプライン化されていない接続では無視されます。次のレスポンスで別のリクエストが送信されるためです。
        HTTP パイプラインでは、これを用いてパイプライン化を制限することができます。

## 例

`Keep-Alive` ヘッダーを含むレスポンスです。

```http
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=200
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(本文)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Connection")}}
- [HTTP/1.x のコネクション管理](/ja/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
