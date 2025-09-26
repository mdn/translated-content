---
title: "WebSocket: WebSocket() コンストラクター"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: c7c79d1b1b5a537308b59537e27ec20f8c48f22c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

**`WebSocket()`** コンストラクターは、新しい {{domxref("WebSocket")}} オブジェクトを返し、指定された WebSocket URL への接続を直ちに確立しようとします。

## 構文

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### 引数

- `url`
  - : 接続対象とする WebSocket サーバーの URL です。
    URL のスキームには、`ws`、`wss`、`http`、`https` のいずれかを使用する必要があります。 [URLフラグメント](/ja/docs/Web/URI/Reference/Fragment)を含めることはできません。
    相対 URL が指定された場合、それは呼び出し元のスクリプトのベース URL に対する相対 URL となります。

- `protocols` {{optional_inline}}
  - : クライアントが使用したい[サブプロトコル](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#サブプロトコル)を表す単一の文字列または文字列の配列を、設定の優先順に指定します。
    省略した場合は、既定では空の配列、すなわち `[]` が使用されます。

    単一のサーバーで複数の WebSocket サブプロトコルを実装し、指定した値に応じて異なる種類の操作を処理することができます。
    ただし、 1 つの接続につき選択できるサブプロトコルは 1 つだけであることに注意してください。

    指定できる値は、 {{httpheader("Sec-WebSocket-Protocol")}} HTTP ヘッダーで指定されている値です。これらは、[IANA WebSocket サブプロトコル名レジストリー](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name)から選択された `soap`、`wamp`、`ship` などの値、またはクライアントとサーバーが共に理解できるカスタムにすることができます。

    > [!NOTE]
    > サブプロトコルがサーバーと交渉されるまで、接続は確立されません。
    > 選択されたプロトコルは、 {{domxref("WebSocket.protocol")}} から読み取ることができます。接続が確立できない場合は、空文字列となります。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 次のような場合に発生します。
    - [`url`](#url) の解釈に失敗した場合
    - [`url`](#url) のスキームが `ws` または `wss` 以外であった場合
    - [`url`](#url) に[フラグメント](/ja/docs/Web/URI#フラグメント)があった場合
    - [`protocols`](#protocols) のいずれかの値が複数回現れている、または WebSocket プロトコル仕様で定義された [`Sec-WebSocket-Protocol`](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol) フィールドの値を構成する要素の要件に一致しない場合。

## 例

下記の例では、 `WebSocket` への接続方法を示しています。

次のコードは、 `wss` スキーマを使用するURLを使用してソケットに接続する方法を示しています。

```js
const wssWebSocket = new WebSocket('wss://websocket.example.org');
console.log(wssWebSocket.url); // 'wss://websocket.example.org'
... // ソケットで何かを行う
wssWebSocket.close();
```

HTTPS URL に接続するためのコードはほぼ同じです。
ブラウザーの基盤では、この接続は "WSS" 接続として解決されるため、 {{domxref("WebSocket.url")}} には "wss:" というスキーマが存在します。

```js
const httpsWebSocket = new WebSocket('https://websocket.example.org');
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'
... // ソケットで何かを行う
httpsWebSocket.close();
```

相対 URL の解決も可能です。
絶対 URL は、呼び出されるコンテキストのベース URL に依存します。

```js
relativeWebSocket = new WebSocket('/local/url');
... // ソケットで何かを行う
relativeWebSocket.close();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) （WebSocket プロトコル仕様書）
