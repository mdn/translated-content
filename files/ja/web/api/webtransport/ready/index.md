---
title: "WebTransport: ready プロパティ"
short-title: ready
slug: Web/API/WebTransport/ready
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`ready`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、トランスポートが使用可能になったときに解決するプロミスを返します。

このプロミスは `WebTransport` オブジェクトの作成時に作成され、接続が確立すると解決します。このプロミスにアクセスしたり、その履行を待ったりしても、何らかの動作が引き起こされるわけではありません。イベントを監視するのと同様に、トランスポートが使用可能になったときに処理を実行できるようにするだけです。

## 値

`undefined` で履行される {{jsxref("Promise")}} です。

## 例

```js-nolint
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // トランスポート接続を初期化
  const transport = new WebTransport(url);

  // ready が履行されると接続を使用できる
  await transport.ready;

  // …
}

// …

async function closeTransport(transport) {
  // 接続が閉じられたことに応答
  try {
    await transport.closed;
    console.log(`HTTP/3 による ${url} への接続は正常に終了しました。`);
  } catch (error) {
    console.error(`HTTP/3 による ${url} への接続は ${error} が原因で終了しました。`);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)<sup>(英語)</sup>
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "ストリーム API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)<sup>(英語)</sup>
