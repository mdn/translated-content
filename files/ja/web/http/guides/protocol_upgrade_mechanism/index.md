---
title: プロトコルのアップグレードの仕組み
slug: Web/HTTP/Guides/Protocol_upgrade_mechanism
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

[HTTP/1.1 プロトコル](/ja/docs/Web/HTTP)は、 {{HTTPHeader("Upgrade")}} ヘッダーフィールドを使用して、既に確立された接続を別のプロトコルにアップグレードするために使用することができる特別な仕組みを提供します。

この仕組みはオプションであり、プロトコルの変更を主張するために使用することはできません。実装は新しいプロトコルに対応していても、アップグレードを利用しないことを選ぶことができますし、実際には、この仕組みは主に WebSocket 接続の起動に使用されます。

また、 HTTP/2 はこの仕組みを使用することを明確に禁止しています。 HTTP/1.1 に固有の仕様であることにも注意してください。

## HTTP/1.1 接続のアップグレード

{{HTTPHeader("Upgrade")}} ヘッダーフィールドは、クライアントがサーバーに対して、列挙しているプロトコルのいずれかに切り替えるよう、優先順位の高い順に促すために使用します。

`Upgrade` はホップバイホップヘッダーなので、{{HTTPHeader("Connection")}} ヘッダーフィールドにも掲載されている必要があります。ということは、 Upgrade を記載した典型的なリクエストは次のようになります。

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

リクエストされたプロトコルによっては、他にもヘッダーが必要になるかもしれません。例えば、 [WebSocket](/ja/docs/Web/API/WebSocket) へのアップグレードでは、 WebSocket 接続の詳細や、接続を開くための安全性に関するヘッダーを追加することができます。詳しくは [WebSocket 接続へのアップグレード](#websocket_接続へのアップグレード) を参照してください。

サーバーが接続のアップグレードを決定した場合、{{HTTPStatus(101, "101 Switching Protocols")}} レスポンスステータスを、切り替えるプロトコルを指定する Upgrade ヘッダーとともに送り返します。接続をアップグレードしない（できない）場合は、 `Upgrade` ヘッダーを無視して通常のレスポンス（例えば {{HTTPStatus(200, "200 OK")}}）を返します。

ステータスコード `101` を送信した直後に、サーバーは新しいプロトコルを使い始め、必要に応じてプロトコル固有のハンドシェイクを行います。結果的に、アップグレードされたレスポンスが完全に完了すると同時に、接続は双方向のパイプになり、アップグレードを開始したリクエストは新しいプロトコルで完了することができます。

## この仕組みの主な用途

ここでは、{{HTTPHeader("Upgrade")}} ヘッダーの最も一般的な用途を見ていきます。

### WebSocket 接続へのアップグレード

HTTP 接続をアップグレードする最も一般的な用途は WebSocket を使用することで、常に HTTP または HTTPS 接続をアップグレードして実装します。[WebSocket API](/ja/docs/Web/API/WebSocket) や WebSocket を使用するライブラリーを使用して新しい接続を開く場合は、これが行う必要があるほとんどまたはすべてのことです。例えば、WebSocket 接続を開くための操作は単一のメソッドです。

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

{{domxref("WebSocket.WebSocket", "WebSocket()")}} コンストラクターは、最初の HTTP/1.1 接続を作成し、ハンドシェイクとアップグレード処理を行うまでのすべてを行います。

> [!NOTE]
> 安全な WebSocket 接続を開くための `"wss://"` URL スキームを使用することもできます。

WebSocket 接続を最初から作成する必要がある場合は、ハンドシェイク処理を自分で処理する必要があります。最初の HTTP/1.1 セッションを作成した後、以下のように {{HTTPHeader("Upgrade")}} と {{HTTPHeader("Connection")}} ヘッダーを標準リクエストに追加して、アップグレードをリクエストする必要があります。

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket 固有のヘッダー

以下のヘッダーが WebSocket のアップグレード処理に関与します。{{HTTPHeader("Upgrade")}} および {{HTTPHeader("Connection")}} ヘッダー以外は、一般的にオプションか、ブラウザーとサーバーが互いに通信するときに処理されます。

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

サーバーに使用するように依頼するプロトコルレベルの WebSocket 拡張を 1 つ以上指定します。リクエストヘッダーに複数の `Sec-WebSocket-Extension` ヘッダーを使用することは許可されています。掲載されている拡張をすべて一つのヘッダーに記載した場合と同じ結果になります。

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : リクエストする （または対応することに同意する）拡張機能のカンマ区切りのリスト。これらは [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) から選択する必要があります。引数を用いる拡張はセミコロン区切りで使用します。

例えば、このヘッダーは 2 つの独自の拡張機能、`superspeed` および `colormode`（さらに引数 `depth=16` を保有）を示しています。

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

クライアントが WebSocket へのアップグレードをリクエストする資格があることを確認するために必要な情報をサーバーに提供します。このヘッダーは、安全でない (HTTP) クライアントがアップグレードを希望するときに、悪用からある程度保護するために使用することができます。鍵の値は WebSocket の仕様で定義されているアルゴリズムを使って計算されるので、これはセキュリティを提供するものではありません。その代わり、WebSocket 以外のクライアントが不注意で、あるいは悪用されて WebSocket 接続をリクエストされるのを防ぐのに役立ちます。ということは、このキーは「はい、私は本当に WebSocket 接続を開きたいです」ということを確認するものです。

このヘッダーは、使用することを選んだクライアントによって自動的に追加されます。{{domxref("Window/fetch", "fetch()")}} または {{domxref("XMLHttpRequest.setRequestHeader()")}} メソッドを使用して追加することはできません。

```http
Sec-WebSocket-Key: key
```

- `key`
  - : アップグレードをリクエストされたときのキー。サーバーは自分自身で作成したキーをレスポンスに記載し、クライアントはそれを検証した上でアップグレードのレスポンスを返します。

サーバーのレスポンスの {{HTTPHeader("Sec-WebSocket-Accept")}} ヘッダーには、指定した `key` に基づいて計算された値が入ります。

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

`Sec-WebSocket-Protocol` ヘッダーは、使用したい 1 つ以上の WebSocket プロトコルを優先順位順に指定します。サーバーが対応している最初のものが選択され、レスポンスに記載する `Sec-WebSocket-Protocol` ヘッダーで返されます。このヘッダーを複数のヘッダーで使用することができます。結果は、カンマで区切られたサブプロトコル識別子のリストを単一のヘッダーで使用した場合と同じです。

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : カンマで区切られたサブプロトコル名のリスト（優先する順）。サブプロトコルは [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) から選択してもよいし、クライアントとサーバーが共同で理解するカスタム名にすることもできます。

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### リクエストヘッダー

クライアントが使用したい WebSocket プロトコルのバージョンを指定します。これにより、サーバーはそのバージョンがサーバー側で対応しているかどうかを確認できます。

```http
Sec-WebSocket-Version: version
```

- `version`
  - : クライアントがサーバーと通信するときに使用する WebSocket プロトコルのバージョン。この番号は [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) に掲載されている可能な限り最新のバージョンでなければなりません。WebSocket プロトコルの最新の最終バージョンはバージョン 13 です。

##### レスポンスヘッダー

サーバーが指定したバージョンの WebSocket プロトコルを使用して通信できない場合は、エラー（426 Upgrade Required など）で応答します。そのヘッダーには、対応しているプロトコルのバージョンをカンマで区切った `Sec-WebSocket-Version` ヘッダーが記載されます。サーバーがリクエストされたプロトコルのバージョンに対応している場合、 `Sec-WebSocket-Version` ヘッダーはレスポンスに含まれません。

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : サーバーが対応している WebSocket プロトコルのバージョンをカンマ区切りで列挙したもの。

### レスポンスのみのヘッダー

サーバーからのレスポンスにはこれらを含めることができます。

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

サーバーが WebSocket 接続を開始する意思がある場合に、開始ハンドシェイク処理中にサーバーからのレスポンスメッセージに含まれます。レスポンスヘッダーの中に複数現れることはありません。

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : {{HTTPHeader("Sec-WebSocket-Key")}} ヘッダーが指定された場合、このヘッダーの値は、キーの値を取り、文字列 "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" を何かに連結し、その連結した文字列の [SHA-1](https://en.wikipedia.org/wiki/SHA-1) ハッシュを取り、20 バイトの値を得ることによって計算されます。その値を [base64](/ja/docs/Glossary/Base64) エンコードして、このプロパティの値を得ます。

## 仕様書

{{specifications}}

## 関連情報

- [WebSocket API](/ja/docs/Web/API/WebSocket)
- [HTTP](/ja/docs/Web/HTTP)
- 用語集:
  - {{glossary('HTTP')}}
  - {{glossary('HTTP_2', 'HTTP/2')}}
  - {{glossary('QUIC')}}
