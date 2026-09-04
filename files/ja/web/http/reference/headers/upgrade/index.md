---
title: Upgrade ヘッダー
short-title: Upgrade
slug: Web/HTTP/Reference/Headers/Upgrade
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の `Upgrade` {{Glossary("request header", "リクエスト")}}・{{Glossary("response header", "レスポンスヘッダー")}}は、すでに確立されたクライアントとサーバー間のプロトコルを、異なるプロトコルに（同じ転送プロトコルを通じて）アップグレードするために使用することができます。例えば、クライアントが HTTP 1.1 から HTTP 2.0 へ、または HTTP や HTTPS のコネクションを WebSocket へアップグレードすることができます。

> [!WARNING]
> HTTP/2 は明確にこの仕組み／ヘッダーを使用することを禁止しています。これは HTTP/1.1 専用です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}},
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
Upgrade: <protocol>[/<protocol_version>]
Upgrade: <protocol>[/<protocol_version>], …, <protocolN>[/<protocol_versionN>]
```

## ディレクティブ

- `<protocol>`
  - : プロトコルを推奨度の降順で、カンマ区切りで列挙します。
- `<protocol_version>` {{optional_inline}}
  - : オプションでプロトコルのバージョンを、`/` スラッシュの後に指定することができます。

## 解説

`Upgrade` ヘッダーフィールドは、クライアントがサーバーに対して、優先度の降順に列挙したプロトコルのうちの 1 つ（以上）に切り替えるよう促すために使用することができます。
例えば、クライアントが次のような `GET` リクエストを送信する際に、切り替えるべき推奨プロトコル（この場合は "example/1" および "foo/2"）を列挙することができます。

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> `Upgrade` ヘッダーは、{{HTTPHeader("Connection")}} ヘッダーを `upgrade` に指定して一緒に送る必要があります。

サーバーはどのような理由であろうと、無視することができます。その場合、サーバーは `Upgrade` ヘッダーが送信されていないかのように応答する必要があります（たとえば {{HTTPStatus(200, "200 OK")}}）。
サーバーが接続をアップグレードすることを決めた場合、次のようにする必要があります。

1. {{HTTPStatus(101, "101 Switching Protocols")}} レスポンスステータスを返し、そこに切り替え先のプロトコルを示した `Upgrade` ヘッダーを入れる必要があります。例えば次のようにします。

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. 元のリクエストに*新しいプロトコルを使用して*レスポンスを送ります（サーバーは、元のリクエストを完了できるプロトコルにのみ切り替えることができます）。

サーバーは、 {{HTTPStatus("426")}} `Upgrade Required` レスポンスの一部としてこのヘッダーを送信することもあります。これはサーバーが現在のプロトコルではリクエストを実行しないが、プロトコルが変更されれば実行するかもしれないことを示すものです。クライアントは上記の手順でプロトコルの変更を要求することができます。

より詳細な情報と例は、[プロトコルのアップグレードメカニズム](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)に記載されています。

## 例

### Upgrade ヘッダーで複数のプロトコルを指定

次のリクエストは、複数のプロトコルを推奨順に列挙しています。

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### WebSocket へのアップグレード

これは、HTTP コネクションを WebSocket にアップグレードするために使用する、よくあるヘッダーの組み合わせです。
詳しくは[WebSocket 接続へのアップグレード](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#websocket_接続へのアップグレード)を参照してください。

```http
Connection: Upgrade
Upgrade: websocket
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロトコルのアップグレードメカニズム](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- {{HTTPStatus(101, "101 Switching Protocols")}}
- {{HTTPStatus(426, "426 Upgrade Required")}}
- {{HTTPHeader("Connection")}}
