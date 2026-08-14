---
title: Sec-WebSocket-Protocol ヘッダー
short-title: Sec-WebSocket-Protocol
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Sec-WebSocket-Protocol`** {{glossary("request header", "リクエスト")}}・{{glossary("response header", "レスポンスヘッダー")}}は、[WebSocket](/ja/docs/Web/API/WebSockets_API) の接続確立[ハンドシェイク](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#websocket_ハンドシェイク)において、通信に使用する[サブプロトコル](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#サブプロトコル)を交渉するために使用されます。
このプロトコルは、SOAP や WAMP のような広く認知されているプロトコルであることも可能であり、クライアントとサーバー間で共通の理解がある独自のプロトコルであることも可能です。

リクエストにおいて、ヘッダーには、ウェブアプリケーションが使用したい WebSocket サブプロトコルが、優先順位の高い順に 1 つ以上指定されます。
これらは、複数のヘッダーにプロトコル値として追加することも、単一のヘッダーにカンマ区切りの値として追加することもできます。

レスポンスでは、サーバーが選択したサブプロトコルが指定されます。
これは、リクエストヘッダーで指定されたリストの中から、サーバーが対応している最初のサブプロトコルでなければなりません。

リクエストヘッダーは、アプリケーションが `WebSocket()` の [`protocols`](/ja/docs/Web/API/WebSocket/WebSocket#protocols) 引数で指定した値を用いて、ブラウザーによって自動的に追加・設定されます。
サーバーによって選択されたサブプロトコルは、{{domxref("WebSocket.protocol")}} を通じてウェブアプリケーションから利用可能です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}, {{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい (<code>Sec-</code> 接頭辞)</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-WebSocket-Protocol: <sub-protocols>
```

## ディレクティブ

- `<sub-protocols>`
  - : 優先順位の高い順に、サブプロトコル名をカンマ区切りで列挙したものです。
    サブプロトコルは、[IANA WebSocket サブプロトコル名レジストリー](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) から選択することも、クライアントとサーバーの間で共通に理解されている独自の名前とすることもあります。

    レスポンスヘッダーとしては、これはサーバーが選択した単一のサブプロトコルです。

## 例

### WebSocket 接続確立ハンドシェイク

このサブプロトコルは、WebSocket のオリジナル仕様における[ハンドシェイクリクエスト](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#websocket_ハンドシェイク)で定義されていません。
下記のリクエストは、クライアントが `soap` を推奨するが、`wamp` にも対応していることを示しています。

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

次のようプロトコルを指定しても、同様の効果が得られます。

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

サーバーからのレスポンスには `Sec-WebSocket-Protocol` ヘッダーが含まれており、クライアントの環境設定から、サーバーが対応している最初のサブプロトコルが選択されます。
下記に `soap` として表示されます。

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: soap
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [WebSocket ハンドシェイク](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#websocket_ハンドシェイク)と[サブプロトコル](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#サブプロトコル)（WebSocket サーバーを書く）
