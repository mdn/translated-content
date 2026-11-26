---
title: "WebTransport: supportsReliableOnly 静的プロパティ"
short-title: supportsReliableOnly
slug: Web/API/WebTransport/supportsReliableOnly_static
l10n:
  sourceCommit: f91fc65d574ad719b1a23e975c4b8e904e1fc4da
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`supportsReliableOnly`** は {{domxref("WebTransport")}} インターフェイスの静的な読み取り専用プロパティで、ブラウザーが HTTP/2 などの信頼性のあるトランスポートのみを介した {{domxref("WebTransport")}} セッションに対応しているかどうかを示す論理値を返します。そのようなセッションでは、QUIC 上の HTTP/3 を必要とする信頼性のないデータグラムを送信できません。

## 値

値は論理値です。ブラウザーが信頼性のあるトランスポートのみを使用する `WebTransport` セッションに対応している場合は `true`、それ以外の場合は `false` です。

## 例

### 基本的な使い方

```js
const url = "https://example.com:4999/webtransport";

async function connect() {
  // 静的プロパティを読み取る前に、WebTransport が利用可能か確認
  if (typeof WebTransport === "undefined") {
    console.log("このブラウザーは WebTransport に対応していません。");
    return;
  }

  // 信頼性のあるトランスポートのみへの対応がなければ、セッションには HTTP/3 が必要
  // UDP をブロックするネットワークでは接続に失敗
  if (!WebTransport.supportsReliableOnly) {
    console.log(
      "このブラウザーでは信頼性のあるトランスポートのみを使用するセッションに切り替えられません。",
    );
  }

  const transport = new WebTransport(url);

  try {
    await transport.ready;
    console.log("接続しました");
  } catch (error) {
    console.error("接続に失敗しました:", error);
  }
}

connect();
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
