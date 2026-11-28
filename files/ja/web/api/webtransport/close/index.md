---
title: "WebTransport: close() メソッド"
short-title: close()
slug: Web/API/WebTransport/close
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`close()`** は {{domxref("WebTransport")}} インターフェイスのメソッドで、進行中の WebTransport セッションを閉じます。

## 構文

```js-nolint
close(info)
```

### 引数

- `info` {{optional_inline}}
  - : 次のプロパティを含むオブジェクトです。
    - `closeCode`
      - : エラーコードを表す数値です。
    - `reason`
      - : `WebTransport` を閉じる理由を表す文字列です。

### 返値

`undefined`.

### 例外

- {{domxref("WebTransportError")}}
  - : WebTransport の接続処理中に `close()` が呼び出された場合に発生します。

## 例

```js
const url = "https://example.com:4999/wt";
// トランスポート接続を初期化
const transport = new WebTransport(url);

// …

transport.close({
  closeCode: 17,
  reason: "CloseButtonPressed",
});
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
