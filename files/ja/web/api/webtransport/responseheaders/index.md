---
title: "WebTransport: responseHeaders プロパティ"
short-title: responseHeaders
slug: Web/API/WebTransport/responseHeaders
l10n:
  sourceCommit: 98b1752bbde3987c1c445b038aa4a463dccff6b8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`responseHeaders`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、セッションを設定するリクエストに対するサーバーのレスポンスに含まれる HTTP ヘッダーを返します。

## 値

{{domxref("Headers")}} オブジェクトです。セッションがまだ確立されていない場合は `null` です。

返されるオブジェクトは変更できません。{{domxref("Headers.set()", "set()")}} や {{domxref("Headers.append()", "append()")}} など、オブジェクトを変更するメソッドを呼び出すと {{jsxref("TypeError")}} が発生します。

## 解説

セッションは[拡張 `CONNECT` リクエスト](/ja/docs/Web/HTTP/Reference/Methods/CONNECT#拡張_connect)を使用して設定されます。
クライアントは [`headers`](/ja/docs/Web/API/WebTransport/WebTransport#headers) コンストラクターオプションを使用して、このリクエストに独自のヘッダーを追加できます。
サーバーはレスポンスにヘッダーを含めて、セッション識別子など、アプリケーション固有の情報をクライアントに返すことができます。

この値は {{domxref("WebTransport.ready", "ready")}} プロミスが履行される前に設定されます。

返されるヘッダーには、サーバーが選択したアプリケーションプロトコルを示す `WT-Protocol` は含まれません。
選択されたプロトコルを取得するには、代わりに {{domxref("WebTransport.protocol")}} を使用してください。

## 例

### レスポンスヘッダーを読み取る

この例では、セッションの設定時に独自のヘッダーを送信し、サーバーがレスポンスで返すヘッダーを読み取る方法を示します。

```js-nolint
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  const transport = new WebTransport(url, {
    // 独自のリクエストヘッダー
    headers: { Authorization: "Bearer abc123" },
  });

  // セッション確立までは responseHeaders は null
  console.log(transport.responseHeaders); // null

  await transport.ready;

  // すべてのレスポンスヘッダーをログに出力
  for (const [name, value] of transport.responseHeaders) {
    console.log(`${name}: ${value}`);
  }

  // 特定のヘッダーを読み取る
  const sessionId = transport.responseHeaders.get("X-Session-Id");
  console.log(`セッション ID: ${sessionId}`);

  return transport;
}

initTransport(url);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WebTransport()` コンストラクターの `headers` オプション](/ja/docs/Web/API/WebTransport/WebTransport#headers)
- {{domxref("WebTransport.protocol")}}
