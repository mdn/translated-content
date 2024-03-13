---
title: Upgrade
slug: Web/HTTP/Headers/Upgrade
---

{{HTTPSidebar}}

HTTP 1.1 (専用) の `Upgrade` ヘッダーは、すでに確立されたクライアントとサーバー間のプロトコルを、異なるプロトコルに（同じ転送プロトコルを通じて）アップグレードするために使用することができます。例えば、クライアントが HTTP 1.1 から HTTP 2.0 へ、または HTTP や HTTPS のコネクションを WebSocket へアップグレードすることができます。

> **警告:** HTTP/2 は明確にこの仕組み／ヘッダーを使用することを禁止しています。これは HTTP/1.1 専用です。

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
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 概要

`Upgrade` ヘッダーフィールドは、クライアントがサーバーに対して、優先度の降順に列挙したプロトコルのうちの 1 つ（以上）に切り替えるよう促すために使用することができます。

例えば、クライアントが下記のような `GET` リクエストを送信する際に、切り替えるべき推奨プロトコル（この場合は "example/1" および "foo/2"）を列挙することができます。

```
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> **メモ:** `Connection: upgrade` は `Upgrade` を送る際に設定する必要があります。

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

より詳細な情報と例は、[プロトコルのアップグレードメカニズム](/ja/docs/Web/HTTP/Protocol_upgrade_mechanism)に記載されています。

## 構文

```
Connection: upgrade
Upgrade: protocol_name[/protocol_version]
```

メモ:

- {{HTTPHeader("Connection")}} ヘッダーで種別を `upgrade` に指定することが、 `Upgrade` ヘッダーを送信する上で*常に*必要です（前述の通り）。
- プロトコルはカンマ区切りで、優先度順に列挙してください。プロトコルのバージョンは省略可能です。例を挙げます。

```
Connection: upgrade
Upgrade: a_protocol/1, example ,another_protocol/2.2
```

## ディレクティブ

- カンマ区切りのプロトコル名のリスト（それぞれに省略可能でプロトコルバージョン）
  - : プロトコル名に省略可能で（"/" で区切って）バージョンをつけたものを 1 つ以上。プロトコルは優先度の降順で列挙します。

## 例

```
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

```
Connection: Upgrade
Upgrade: websocket
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロトコルのアップグレードメカニズム](/ja/docs/Web/HTTP/Protocol_upgrade_mechanism)
- {{HTTPStatus("101")}} `Switching Protocol`
- {{HTTPStatus("426")}} `Upgrade Required`
- {{HTTPHeader("Connection")}}
